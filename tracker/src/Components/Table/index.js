import Table from 'react-bootstrap/Table';

function row(key,value) {
       
}
function CoinsList(props) {
  const coinsArray = Array.from(props.Coins);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
          {
            Array.from(props.Coins).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))
        }
      </tbody>
    </Table>
  );
}

export default CoinsList;