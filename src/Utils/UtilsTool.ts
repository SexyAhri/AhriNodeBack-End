// 生成随机字符串
import express from "express";
export function generateRandomString(length: number): string {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// 格式化日期时间
export function formatDate(
  date: Date,
  format: string = "YYYY-MM-DD HH:mm:ss"
): string {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hour = padZero(date.getHours());
  const minute = padZero(date.getMinutes());
  const second = padZero(date.getSeconds());
  return format
    .replace("YYYY", year.toString())
    .replace("MM", month.toString())
    .replace("DD", day.toString())
    .replace("HH", hour.toString())
    .replace("mm", minute.toString())
    .replace("ss", second.toString());
}

// 在数字前面补零
function padZero(num: number): string {
  return num < 10 ? "0" + num : num.toString();
}

// 获取客户端 IP 地址
export function getClientIp(req: express.Request): string {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  if (typeof ip === "string") {
    return ip.split(",")[0];
  } else {
    return "";
  }
}

// 比较两个对象是否相等
export function isEqual(a: any, b: any): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}
