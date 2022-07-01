import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconText({ href, text, icon, iconStyle, classes, style }) {
    return <a href={href || ""} style={style || {}} className={`text-white mr-3 ${classes || ""} `}>
        {icon && <FontAwesomeIcon icon={icon} style={{ fontSize: 13, color: "#B5B8B9", marginRight: 7, ...iconStyle }} />}
        {text || ""}
    </a>
}