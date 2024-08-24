import CryptoJS from 'crypto-js';

const iv = CryptoJS.lib.WordArray.random(16);
const salt = CryptoJS.lib.WordArray.random(64);

export const encryptData = (data) => {
  const secretKeyHex = process.env.REACT_APP_SE_KEY;
  const secretKey = CryptoJS.enc.Hex.parse(secretKeyHex).toString();

  const stringifiedData = Array.isArray(data) ? JSON.stringify(data) : data;

  const cipher = CryptoJS.AES.encrypt(stringifiedData, secretKey, salt, {
    iv: iv,
    mode: CryptoJS.mode.OFB,
    padding: CryptoJS.pad.Pkcs7,
  });

  const cipherText = cipher.toString();
  const Salt = salt.toString(CryptoJS.enc.Base64);
  const Iv = iv.toString(CryptoJS.enc.Base64);
  const encryptedData = `${Salt}.${Iv}.${cipherText}`;

  return encryptedData;
};

export const decryptData = (encryptedData) => {
  const secretKeyHex = process.env.REACT_APP_SE_KEY;
  const [salt, iv, cipherText] = encryptedData.split('.');
  const secretKey = CryptoJS.enc.Hex.parse(secretKeyHex).toString();

  const saltDecoded = CryptoJS.enc.Base64.parse(salt);
  const ivDecoded = CryptoJS.enc.Base64.parse(iv);

  const decrypted = CryptoJS.AES.decrypt(cipherText, secretKey, saltDecoded, {
    iv: ivDecoded,
    mode: CryptoJS.mode.OFB,
    padding: CryptoJS.pad.Pkcs7,
  });

  let decryptedData = decrypted.toString(CryptoJS.enc.Utf8);

  try {
    decryptedData = JSON.parse(decryptedData);
  } catch (e) {
    console.error(e);
  }

  return decryptedData;
};

export const PassEncrypt = (Password) => {
  const cipher = CryptoJS.AES.encrypt(
    Password,
    CryptoJS.enc.Utf8.parse(process.env.REACT_APP_ENCRYPT_KEY),
    {
      iv: CryptoJS.enc.Utf8.parse(process.env.REACT_APP_ENCRYPT_IV),
      mode: CryptoJS.mode.CFB,
      padding: CryptoJS.pad.NoPadding,
    }
  );
  const result = cipher.ciphertext.toString(CryptoJS.enc.Base64);
  return result;
};

export const PassDecrypt = (EncryptedPassword) => {
  const decipher = CryptoJS.AES.decrypt(
    EncryptedPassword,
    CryptoJS.enc.Utf8.parse(process.env.REACT_APP_ENCRYPT_KEY),
    {
      iv: CryptoJS.enc.Utf8.parse(process.env.REACT_APP_ENCRYPT_IV),
      mode: CryptoJS.mode.CFB,
      padding: CryptoJS.pad.NoPadding,
    }
  );
  const result = CryptoJS.enc.Utf8.stringify(decipher);
  return result;
};
export const queryEncrypt = (Password) => {
  const cipher = CryptoJS.AES.encrypt(
    Password,
    CryptoJS.enc.Utf8.parse(process.env.REACT_APP_ENCRYPT_QUERY),
    {
      iv: CryptoJS.enc.Utf8.parse(process.env.REACT_APP_ENCRYPT_IV),
      mode: CryptoJS.mode.CFB,
      padding: CryptoJS.pad.NoPadding,
    }
  );
  const result = cipher.ciphertext.toString(CryptoJS.enc.Base64);
  return result;
};

export const queryDecrypt = (EncryptedPassword) => {
  const decipher = CryptoJS.AES.decrypt(
    EncryptedPassword,
    CryptoJS.enc.Utf8.parse(process.env.REACT_APP_ENCRYPT_QUERY),
    {
      iv: CryptoJS.enc.Utf8.parse(process.env.REACT_APP_ENCRYPT_IV),
      mode: CryptoJS.mode.CFB,
      padding: CryptoJS.pad.NoPadding,
    }
  );
  const result = CryptoJS.enc.Utf8.stringify(decipher);
  return result;
};

export function paddedEncryptQuery(query) {
  const encryptLv1 = queryEncrypt(query);
  const date = new Date().getMilliseconds().toString();
  const encryptLv2 = queryEncrypt(date);
  const padding = encryptLv1 + process.env.REACT_APP_PADDING_VALUE + encryptLv2;
  const encryptLv3 = queryEncrypt(padding);

  return encryptLv3;
}
export function decryptPaddedQuery(query) {
  const encryptLv1 = queryDecrypt(query);
  const parts = encryptLv1.split(process.env.REACT_APP_PADDING_VALUE);
  const desiredPart = parts[0];
  const result = queryDecrypt(desiredPart);

  return result;
}
