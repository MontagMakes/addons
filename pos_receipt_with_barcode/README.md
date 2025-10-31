# POS Receipt with Product Barcode

## Description
This module adds product barcode display to POS receipts, showing the barcode behind the product name in both browser display and printed versions.

## Installation
1. Place this module in the `/addon-pos/` directory
2. Update the app list in Odoo
3. Install the module from the Apps menu

## Features
- Displays product barcode behind the product name on receipts
- Works for both browser display and printed receipts
- Maintains all other receipt information
- Only shows barcode if the product has one defined

## Technical Details
- Overrides the `point_of_sale.Orderline` template to add barcode display
- Extends the `getDisplayData` method to include barcode information
- Uses XML inheritance to modify the orderline display
- No database changes required

## Compatibility
- Odoo 18.0
- Point of Sale module
