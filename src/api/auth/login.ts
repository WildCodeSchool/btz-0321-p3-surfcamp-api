import prisma from "../../../prisma/prismaClient";
import AuthHandlers from "./interfaces";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const login: AuthHandlers["login"] = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(404).json({
        message: "unknown user",
      });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({
        message: "wrong password",
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
        role: user.role,
      },
      process.env.TOKEN_SECRET as string,
      {
        expiresIn: "3600s",
      }
    );

    const { password: removedPassword, ...userWithoutPassword } = user;
    res.cookie("token", token, {
      expires: new Date(Date.now() + "3600s"),
      secure: false, // set to true if your using https
      httpOnly: true,
    });
    res.set({
      "Access-Control-Allow-Credentials": true,
    });
    res.status(200).json({
      token: token,
      user: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

export default login;
