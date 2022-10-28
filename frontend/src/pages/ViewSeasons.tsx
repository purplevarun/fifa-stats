import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import PageLayout from "../components/PageLayout";

const ViewSeasons = () => {
	const [seasons, setSeasons] = useState<number | null>(null);
	useEffect(() => {
		const fetchSeasons = async () => {
			const url = process.env.REACT_APP_API_URL + "/get-max-season";
			const response = await axios.get(url);
			setSeasons(response.data.maxSeason);
		};
		fetchSeasons();
	}, []);
	const navigate = useNavigate();
	if (seasons) {
		const dummy = Array.from(Array(seasons), (_, i) => i + 1);
		return (
			<PageLayout>
				{dummy.map((item) => {
					return (
						<button
							style={{ width: "200px", padding: "10px" }}
							key={item}
							onClick={() => navigate("/view/seasons/" + item)}
						>
							{item}
						</button>
					);
				})}
			</PageLayout>
		);
	} else {
		return <Error type="loading" />;
	}
};
export default ViewSeasons;
