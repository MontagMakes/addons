# -*- coding: utf-8 -*-
{
    'name': 'POS Receipt with Product Barcode',
    'version': '18.0.1.0.0',
    'category': 'Point of Sale',
    'summary': 'Add product barcode display to POS receipts',
    'description': """
        This module adds product barcode display to POS receipts,
        showing the barcode behind the product name in both browser
        display and printed versions.
    """,
    'author': 'Custom Development',
    'depends': ['point_of_sale'],
    'data': [],
    'assets': {
        'point_of_sale.assets': [
            'pos_no_phone_receipt/static/src/xml/receipt_header.xml',
            'pos_no_phone_receipt/static/src/xml/orderline.xml',
            'pos_no_phone_receipt/static/src/js/pos_order_line.js',
        ],
    },
    'installable': True,
    'auto_install': False,
    'application': False,
}
