/** @odoo-module */

// Correct PosOrder model import path for Odoo 18 POS
import { PosOrder } from "@point_of_sale/app/models/pos_order";
import { patch } from "@web/core/utils/patch";
// import { parseUTCString } from "@point_of_sale/utils";
// import { formatDate, formatDateTime, serializeDateTime, parseUTCString } from "@web/core/l10n/dates";

patch(PosOrder.prototype, {
    // We are now patching the correct function: export_for_printing
    export_for_printing(baseUrl, headerData) {
        // 1. Call the original function to get the base receipt data object.
        const receipt = super.export_for_printing(...arguments);

        // 2. --- Handle the Receipt Number ---
        // Build a clean receipt number from pos_reference by stripping the leading "Order " prefix
        const cleanRef = (this.pos_reference || "").replace(/^Order\s+/i, "");
        receipt.invoice_number = cleanRef;

        // // 3. Custom date format: Sat, 11-Oct-2025   8:39 PM
        // const dt = parseUTCString(this.date_order);
        // const weekday = dt.toLocaleString(undefined, { weekday: "short" });
        // const day = dt.toLocaleString(undefined, { day: "2-digit" });
        // const month = dt.toLocaleString(undefined, { month: "short" });
        // const year = dt.toLocaleString(undefined, { year: "numeric" });
        // const time = dt.toLocaleString(undefined, { hour: "numeric", minute: "2-digit", hour12: true });
        // receipt.invoice_date = `${weekday}, ${day}-${month}-${year}   ${time}`;

        // 4. Ensure exported name is clean and based on pos_reference
        //    Core also uses pos_reference in export_for_printing; we reinforce it here.
        receipt.name = cleanRef;

        // 5. Return the modified receipt object with our new custom fields.
        return receipt;
    }
});