import React, {Component} from 'react';
import {Link} from 'react-keeper';
import {Table, InputNumber, Button} from 'antd';
import {inject, observer} from 'mobx-react';

@inject(['rootStore'])
@observer
class Shoppingcart extends Component {
    constructor(props) {
        super(props);
        this.cartStore = this.props.rootStore.cartStore;
    }

    updateBookCount = (bookID, num) => {
        let newbook = {
            bookCount: num,
        };
        this.cartStore.updateBook(bookID, newbook);
    };

    deleteBook = (bookID) => {
        this.cartStore.deleteBook(bookID);
    };

    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'bookName',
                key: 'name',
                render: (text, record) => <Link to={"/book/" + record.bookID + "/" + record.bookName}>{text}</Link>
            }, {
                title: 'Writer',
                dataIndex: 'bookWriter',
                key: 'writer',
            }, {
                title: 'Class',
                dataIndex: 'bookClass',
                key: 'class',
            }, {
                title: 'Date',
                dataIndex: 'bookDate',
                key: 'date',
            }, {
                title: 'Price',
                dataIndex: 'bookPrice',
                key: 'price',
            }, {
                title: 'Count',
                dataIndex: 'bookCount',
                key: 'count',
                render: (text, record) => (
                    <span>
                        <InputNumber min={1} max={record.bookStock} defaultValue={record.bookCount}
                                     onChange={(value) => {
                                         this.updateBookCount(record.bookID, value);
                                     }}/>
                    </span>
                ),
            }, {
                title: 'Delete',
                key: 'delete',
                render: (text, record) => (
                    <span><Button onClick={()=>{this.deleteBook(record.bookID)}} icon="minus-circle"/></span>
                ),
            }];

        return <Table columns={columns} dataSource={this.cartStore.data.toJS()}
                      loading={this.cartStore.loading} />;
    }
}

export default Shoppingcart;