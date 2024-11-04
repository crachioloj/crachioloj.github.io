import resumeFile from "../assets/resume-file.md?raw";
import ReactMarkdown from "react-markdown";

const Resume = () => {
	return (
		<>
			<ReactMarkdown children={resumeFile}></ReactMarkdown>
		</>
	);
};

export default Resume;
