# -*- coding: utf-8 -*-
{
    "name": "Custom POS Receipt",
    "version": "18.0.1.0.0",
    "category": "Point of Sale",
    "summary": "Custom POS Receipt",
    "description": """
        This module formats POS receipts in a clean table format with:
        - Client name
    """,
    "author": "Custom Development",
    "depends": ["point_of_sale"],
    "data": [],
    "assets": {
        "point_of_sale._assets_pos": [
            "custom_receipt_template/static/src/xml/custom_pos_receipt.xml",
            "custom_receipt_template/static/src/xml/custom_pos_receipt_header.xml",
            "custom_receipt_template/static/src/js/custom_pos_data.js",
            "custom_receipt_template/static/src/js/custom_order_line_data.js",
        ],
    },
    "installable": True,
    "auto_install": False,
    "application": False,
}
