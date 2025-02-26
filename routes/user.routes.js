import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "user route" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "user details" });
});

userRouter.post("/", (req, res) => {
  res.send({ title: "user create" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "user update" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "user delete" });
});

export default userRouter;