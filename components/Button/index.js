export default function Button(props) {
    const { text, classes, href, className } = props;
    return <button  {...props} href={href || ""} className={`primaryBtn ${classes || ""} ${className}`}>
        {text}
    </button>
}