import PropTypes from "prop-types";



export const Statistics = ({ title, stats }) => {
  return <div>
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      
      {stats.map(({ label, percentage, id }) => {
         
        return <ul className="stat-list" key={id}>
          <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
    
        </ul>
      })}
      
    </section>
  </div>
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  label:PropTypes.string,
  percentage:PropTypes.number,
  id:PropTypes.number,
}