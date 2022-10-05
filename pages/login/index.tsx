import { apiFetch } from "../../utils/fetch";
import { useState, useCallback, useEffect } from "react";

export default function LoginPage(): JSX.Element {
  const [data, dataSet] = useState<any>(null)

  const fetchMyAPI = useCallback(async () => {
    let response = await apiFetch('hello');
    dataSet(response)
  }, []);

  useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI])

  return (<div>
    <h1>Hi!</h1>
    {process.env.NEXT_PUBLIC_API_URL}
    {JSON.stringify(data)}
  </div>);
}