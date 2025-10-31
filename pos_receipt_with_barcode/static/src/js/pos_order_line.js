/** @odoo-module **/

import { PosOrderline } from "@point_of_sale/app/models/pos_order_line";

// Override the getDisplayData method to include barcode
PosOrderline.prototype.getDisplayData = function() {
    const originalData = this._super ? this._super(...arguments) : {};
    
    return {
        ...originalData,
        productBarcode: this.product_id.barcode || "",
    };
};
