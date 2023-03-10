import { React, useState, useEffect } from 'react'
import { Button, Table } from 'semantic-ui-react'
import StockService from '../services/stockService';
import { toast } from 'react-toastify';

export default function StockList() {

	const [stocks, setStocks] = useState(null);
	let stockService = new StockService()

	useEffect(() => {
		let res = stockService.getActiveStocks()
		res.then(function (data) {
			setStocks(data.data.data)
		})
	}, []);

	if (stocks === null) {
		return <div>Loading...</div>;
	}

	const handleClick = (id) => {
		var res = stockService.deleteStock(id)
		res.then(function (data) {
			if (data.status === 200) {
				toast.success("Silme Işlemi Başarılı")
				return
			}
			toast.error("Silme Işlemi Başarılı Olamadı")
		})

	}

	return (
		<div>
			<Table scroll="true" celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Id</Table.HeaderCell>
						<Table.HeaderCell >Code</Table.HeaderCell>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell >Photo</Table.HeaderCell>
						<Table.HeaderCell >VatTypeId</Table.HeaderCell>
						<Table.HeaderCell >StockTypeId</Table.HeaderCell>
						<Table.HeaderCell >CategoryId</Table.HeaderCell>
						<Table.HeaderCell>SPECode 1</Table.HeaderCell>
						<Table.HeaderCell>SPECode 2</Table.HeaderCell>
						<Table.HeaderCell>SPECode 3</Table.HeaderCell>
						<Table.HeaderCell>SPECode 4</Table.HeaderCell>
						<Table.HeaderCell>SPECode 5</Table.HeaderCell>
						<Table.HeaderCell>Sil</Table.HeaderCell>
					</Table.Row>

				</Table.Header>

				<Table.Body>

					{
						stocks.map(stock => (
							<Table.Row key={stock.id}>
								<Table.Cell>{stock.id}</Table.Cell>
								<Table.Cell>{stock.code}</Table.Cell>
		 						<Table.Cell>{stock.name}</Table.Cell>
								<Table.Cell>{stock.photo}</Table.Cell>
		 						<Table.Cell>{stock.vatTypeId}</Table.Cell>
								<Table.Cell>{stock.stockTypeId}</Table.Cell>
		 						<Table.Cell>{stock.categoryId}</Table.Cell>

		 						<Table.Cell>{stock.speCode1}</Table.Cell>
		 						<Table.Cell>{stock.speCode2}</Table.Cell>
		 						<Table.Cell>{stock.speCode3}</Table.Cell>
		 						<Table.Cell>{stock.speCode4}</Table.Cell>
		 						<Table.Cell>{stock.speCode5}</Table.Cell>
		 						<Table.Cell><Button fluid size='tiny' onClick={() => handleClick(stock.id)} basic color='red' >X</Button></Table.Cell>
							</Table.Row>
						))
					}	

				</Table.Body>
			</Table>
		</div>
	)
}
