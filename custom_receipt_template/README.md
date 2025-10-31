# POS Receipt Table Format

This module formats POS receipts in a clean table format with:
- Product name prefixed by barcode
- Unit price, quantity/weight, tax percentage, and total amount columns
- Removes VAT, email, website, and cashier from header
- Clean table layout for better readability

## Installation

1. Copy the module to your Odoo addons directory
2. Update the addons list
3. Install the module from the Apps menu

## Features

- **Table Format**: Receipts are displayed in a clean table format instead of the default list format
- **Barcode Display**: Product barcodes are shown above product names
- **Tax Percentage**: Shows tax percentage for each line item
- **Clean Header**: Removes unnecessary information like VAT, email, website, and cashier
- **Responsive Design**: Table layout works well on different receipt sizes

## Technical Details

- Extends the `point_of_sale.OrderReceipt` template
- Patches the `PosOrderline.getDisplayData()` method to include barcode and tax percentage
- Uses proper Odoo POS inheritance patterns
- Follows Odoo 18 coding standards

## Files Modified

- `static/src/xml/order_receipt.xml` - Main receipt template
- `static/src/xml/receipt_header.xml` - Header template modifications
- `static/src/js/pos_order_line.js` - JavaScript patches for data extension
- `__manifest__.py` - Module configuration

## Troubleshooting

If the module is not working:

1. Check that the module is properly installed
2. Verify that the POS session is restarted after installation
3. Check browser console for JavaScript errors
4. Ensure all dependencies are met

## Support

For issues or questions, please check the module files and ensure they follow Odoo 18 standards.