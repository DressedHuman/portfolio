interface Props {
    email: string;
};

const EmailMe = ({ email }: Props) => {
    return (
        <a
            href={`mailto: ${email}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="border-2 border-orange-700 hover:scale-105 duration-300 px-3 py-1 rounded-md"
        >
            Email Me
        </a>
    );
};

export default EmailMe;