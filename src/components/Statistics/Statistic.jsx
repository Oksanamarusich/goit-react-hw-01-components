import PropTypes from "prop-types";
import {StatisticContainer, TitleStatistic, StatList, StatItem} from "./Statistic.styled"


export const Statistics = ({ title, stats }) => {
  return <StatisticContainer>
   {title && <TitleStatistic>{title}</TitleStatistic>}
    <StatList>
      {stats.map(({ label, percentage, id, index }) => (
        <StatItem key={id} index = {index}>
          <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </StatItem>
      )
        
      )}
    </StatList>
  </StatisticContainer>
  
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  label:PropTypes.string,
  percentage:PropTypes.number,
  id:PropTypes.number,
}