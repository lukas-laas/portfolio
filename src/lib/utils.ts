export async function sendSms(to: string, message: string) {
  const username = process.env.ELKS_NAME as string;
  const password = process.env.ELKS_PASSWORD as string;
  const auth = Buffer.from(username + ":" + password).toString("base64");

  let data = new URLSearchParams({
    from: "Jobs",
    to: to,
    message: message,
  }).toString();

  try {
    const response = await fetch("https://api.46elks.com/a1/sms", {
      method: "post",
      body: data,
      headers: { Authorization: "Basic " + auth },
    });

    const json = await response.json();
    console.log(json);
    return { success: true, data: json };
  } catch (error) {
    console.log(error);
    return { success: false, };
  }
}