import crypto from "crypto";

const generateResetToken = () => {
  const resetToken = crypto.randomBytes(20).toString("hex");
  const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour from now

  return {
    resetToken,
    resetTokenExpiresAt,
  };
};

export default generateResetToken;
