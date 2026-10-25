import type { Resident } from "./types.js";
import { kiambu } from "./data.js";
type ReadResult =
| { ok: true; resident: Resident }
| { ok: false; error: string };
const form = document.querySelector<HTMLFormElement>("#register-form");
const statusLine = document.querySelector<HTMLParagraphElement>("#form-status");
const wardSelect = document.querySelector<HTMLSelectElement>("#ward");
if (!form || !statusLine || !wardSelect) {
throw new Error("register.html needs #register-form, #form-status and #ward");
}
for (const ward of kiambu.wards) {
const option = document.createElement("option");
option.value = ward.name;
option.textContent = ward.name;
wardSelect.append(option);
}
const KENYAN_MOBILE = /^(?:\+254|0)[17]\d{8}$/;
function text(data: FormData, field: string): string {
const value = data.get(field);
return typeof value === "string" ? value.trim() : "";
}
function readResident(data: FormData): ReadResult {
const fullName = text(data, "fullName");
const phone = text(data, "phone").replace(/\s/g, "");
const ward = text(data, "ward");
const consentGiven = data.get("consent") === "yes";
if (fullName.length < 3) {
return { ok: false, error: "Please enter your full name." };
}
if (!KENYAN_MOBILE.test(phone)) {
return { ok: false, error: "Enter a Kenyan mobile number, e.g. 0712 345 678." };
}
if (!kiambu.wards.some((w) => w.name === ward)) {
return { ok: false, error: "Choose your ward from the list." };
}
if (!consentGiven) {
return { ok: false, error: "We need your consent before we can register you." };
}
return {
ok: true,
resident: { fullName, phone, county: kiambu.name, ward, consentGiven },
};
}
form.addEventListener("submit", (event) => {
event.preventDefault();
const result = readResident(new FormData(form));
if (!result.ok) {
statusLine.textContent = result.error;
return;
}
const { fullName, ward } = result.resident;
statusLine.textContent = `Karibu, ${fullName}. You are registered in ${ward} ward.`;
form.reset();
});