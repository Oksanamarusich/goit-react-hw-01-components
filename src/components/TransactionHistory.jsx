import PropTypes from "prop-types";
import {TableTransactionHistory,Thead,Th,Tbody,Td} from "./TransactionHistory.styled"


export const TransactionHistory = ({ items }) => {
  return <TableTransactionHistory>
    <Thead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </tr>
    </Thead>

    <Tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <Td>{type}</Td>
          <Td>{amount}</Td>
          <Td>{currency}</Td>
        </tr>
      )
      )}
    
    </Tbody>
  </TableTransactionHistory>
};

TransactionHistory.propsTypes = {
  items: PropTypes.array,
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};