import '../styles/loader.css';

interface props {
    classes?: string;
};

function Loader({ classes }: props) {
    return (
        <>
            <span className={"loader "+classes} style={{borderBottomColor: "transparent"}}></span>
        </>
    );
}

export default Loader;