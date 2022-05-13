export default async function http<T>(request: RequestInfo): Promise<T> {
  try {
    const response = await fetch(request);
    return await response.json();
  } catch (error: any) {
    throw new Error(error.statusText);
  }
}
