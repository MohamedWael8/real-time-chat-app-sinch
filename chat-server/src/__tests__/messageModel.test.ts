import Message from "../models/Message";

describe("Message Model", () => {
  it("should create a valid message", async () => {
    const message = new Message({ username: "John", content: "Hello!" });
    await expect(message.validate()).resolves.toBeUndefined();
  });

  it("should fail if username is missing", async () => {
    const message = new Message({ content: "Hello!" });
    await expect(message.validate()).rejects.toThrow();
  });

  it("should fail if content is missing", async () => {
    const message = new Message({ username: "John" });
    await expect(message.validate()).rejects.toThrow();
  });
});
