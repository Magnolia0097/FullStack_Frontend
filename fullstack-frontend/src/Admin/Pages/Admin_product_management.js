import React from 'react'
import AdminSidebar from './AdminSidebar'
import '../AdminCss/Admin.css';
import Admin_product_list from './product_list';

export default function AdminPage() {




    return (       
        <div className='row'>
            <div className='col-md-4 test11'>
                <AdminSidebar/>
            </div>

            <div className='col'>
                <Admin_product_list/>
            </div>    
        </div>
    )
}
