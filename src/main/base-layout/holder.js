import React ,{ useState, useEffect } from 'react'
import '../../assets/css/holder.css'

import PurchaseOrder from '../module/Purchase/Purchase-Order/PurchaseOrder'


function Holder() {

    return (
        <div className="holder h-100 p-5">
          <PurchaseOrder />
        </div>
    )
}

export default Holder