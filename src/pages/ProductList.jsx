import React, { useState, useEffect } from 'react'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import StockTypeService from '../services/testService'
// import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function Ürünler() {

	// const dispatch = useDispatch()
	// acitonlara ulaştık

	const [stockType, setStockType] = useState(null)
	useEffect(() => {
		let stockTypeService = new StockTypeService()
		stockTypeService.getStockTypes().then(res => {
			setStockType(res.data)
		})
	}, []);

	const handlerAddToCart = (product) => {
		// dispatch(addToCart(product));
		toast.success(`${product.name} sepete eklendi`)
	}

	if (stockType === null) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<Table celled>
				 <Table.Header>
					<Table.Row>
						<Table.HeaderCell>Id</Table.HeaderCell>
						<Table.HeaderCell>StockType</Table.HeaderCell>
						<Table.HeaderCell></Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					
					{
						stockType.data.map(stockType2 =>(
							<Table.Row key={stockType2.id}>
                                <Table.Cell>{stockType2.id}</Table.Cell>
								<Table.Cell>{stockType2.name}</Table.Cell>
								<Table.Cell><Button color='red' basic fluid onClick={()=>handlerAddToCart(stockType2)}>Sepete Ekle</Button></Table.Cell>
                            </Table.Row>
						))
					}

				</Table.Body>
			</Table>
			
		</div>
	)
}
