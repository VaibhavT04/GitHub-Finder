import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import PropTypes from "prop-types";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return <div className="card mb-2 rounded-md bg-base-200 hover:bg-base-300">
    <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
            <a href={html_url}>
                <FaLink className="inline mr-3"/>
                {name}
            </a>
        </h3>
        <p className="mb-4">{description}</p>
        <div>
            <div className="mx-2 badge badge-info badge-lg">
                <FaEye className="mr-1"/>
                {watchers_count}
            </div>
            <div className="mx-2 badge badge-success badge-lg">
                <FaStar className="mr-1"/>
                {stargazers_count}
            </div>
            <div className="mx-2 badge badge-error badge-lg">
                <FaInfo className="mr-1"/>
                {open_issues}
            </div>
            <div className="mx-2 badge badge-warning badge-lg">
                <FaUtensils className="mr-1"/>
                {forks}
            </div>
        </div>
    </div>
  </div>;
}









RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
