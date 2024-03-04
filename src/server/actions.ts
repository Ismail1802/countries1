"use server";

export async function getCountries() {
  const response = await fetch(
    "http://ec2-13-42-59-239.eu-west-2.compute.amazonaws.com:8080/api"
  );
  const data = await response.json();
  const countries = data.splice(0, 20);
  return countries;
}
