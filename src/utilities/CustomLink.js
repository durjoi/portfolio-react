import {
    useMatch,
    useResolvedPath} from "react-router";
import { Link } from "react-router-dom";


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "#fff" : "rgba(156, 163, 175)" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/* {match && " (active)"} */}
      </div>
    );
  }

export default CustomLink;