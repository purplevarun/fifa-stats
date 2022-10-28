import Button from "./Button";
import HorizontalLayout from "./HorizontalLayout";

type Props = {
	name: string;
	photo: string;
	handleClick?: () => void;
};
const NamePhotoButton = ({ name, photo, handleClick }: Props) => {
	return (
		<HorizontalLayout>
			<h2>{name}</h2>
			<img
				src={photo}
				alt="player"
				width={200}
				style={{
					marginTop: "20px",
				}}
			/>
			{handleClick && (
				<Button text="submit" size="small" handleClick={handleClick} />
			)}
		</HorizontalLayout>
	);
};
export default NamePhotoButton;
