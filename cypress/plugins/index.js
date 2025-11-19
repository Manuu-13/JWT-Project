// const crypto = require("crypto");

// module.exports = (on, config) => {
//   on("task", {
//     generatePKCECodes() {
//       const code_verifier = crypto.randomBytes(64).toString("hex");
//       const hash = crypto.createHash("sha256").update(code_verifier).digest();
//       const code_challenge = hash.toString("base64")
//         .replace(/\+/g, "-")
//         .replace(/\//g, "_")
//         .replace(/=/g, "");

//       return { code_verifier, code_challenge };
//     }
//   });
// };