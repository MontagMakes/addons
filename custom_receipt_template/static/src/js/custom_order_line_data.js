/** @odoo-module */

import { PosOrderline } from "@point_of_sale/app/models/pos_order_line";
import { getTaxesAfterFiscalPosition } from "@point_of_sale/app/models/utils/tax_utils";
import { patch } from "@web/core/utils/patch";

// Compute percent taxes and map to existing allowed key taxGroupLabels
patch(PosOrderline.prototype, {
    getDisplayData() {
        const data = super.getDisplayData(...arguments);

        try {
            const taxes =
                getTaxesAfterFiscalPosition(
                    this.product_id.taxes_id,
                    this.order_id.fiscal_position_id,
                    this.models
                ) || [];

            const percent = taxes
                .filter((t) => t.amount_type === "percent" && typeof t.amount === "number")
                .reduce((sum, t) => sum + t.amount, 0);

            if (percent) {
                const pctLabel = `${percent.toFixed(2)}%`;
                data.taxGroupLabels = data.taxGroupLabels
                    ? `${data.taxGroupLabels} ${pctLabel}`
                    : pctLabel;
            }
        } catch (e) {
            // ignore; leave taxGroupLabels as-is
        }

        return data;
    },
});


