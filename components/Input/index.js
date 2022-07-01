export default function Input(props) {
    const { classes } = props;
    return <input  {...props} className={`primaryInput ${classes || ""} ${props.className || ""}`}/>
}