export const delistAddedToRangeCols = [
  // {
  //   field: 'uniqueId',
  //   header: 'Unique ID',
  //   width: '100px',
  // },
  {
    field: "eventName",
    header: "Event Name",
    width: "150px",
  },
  {
    field: "dueDate",
    header: "Due Date",
    width: "150px",
  },
  {
    field: "status",
    header: "Status",
    width: "100px",
  },
  {
    field: "resetType",
    header: "Reset Type",
    width: "150px",
  },
  {
    field: "targetDate",
    header: "Launch Date",
    width: "150px",
  },
  {
    field: "group",
    header: "Group",
    width: "100px",
  },
  {
    field: "category",
    header: "Category",
    width: "150px",
  },
  {
    field: "department",
    header: "Department",
    width: "150px",
  },
  {
    field: "eventId",
    header: "Event ID",
    width: "150px",
  },
  {
    field: "clearancePriceCheck",
    header: "Clearance Price required",
    width: "100px",
  },
  {
    field: "orderStopDateCheck",
    header: "Order Stop Date check Required",
    width: "100px",
  },
  {
    field: "stopOrder",
    header: "Stop Order (Stock Rundown)",
    width: "100px",
  },
  {
    field: "buyer",
    header: "Buyer",
    width: "250px",
  },
  // {
  //   field: "buyerAssistant",
  //   header: "Buying Assistant",
  //   width: "250px",
  // },
  {
    field: "buyingAssistant",
    header: "Buying Assistant",
    width: "250px",
  },
  {
    field: "ownBrandManager",
    header: "Own Brand Manager",
    width: "250px",
  },
  {
    field: "seniorBuyingManager",
    header: "Senior Buying Manager",
    width: "250px",
  },
  {
    field: "merchandiser",
    header: "Merchandiser",
    width: "250px",
  },
  {
    field: "rangeResetManager",
    header: "Range Reset Manager",
    width: "250px",
  },
  {
    field: "categoryDirector",
    header: "Category Director",
    width: "250px",
  },
  {
    field: "supplyChainSplst",
    header: "Supply Chain Splst",
    width: "200px",
  },
];

export const yesOrNo = [
  {
    name: "Y",
    text: "Yes",
  },
  {
    name: "N",
    text: "No",
  },
];

export const supplierCodeOptions = [
  {
    label: "12345",
    text: "12345",
  },
  {
    label: "Supplier",
    text: "Supplier",
  },
  {
    label: "Code",
    text: "Code",
  },
];

export const delistToRangeData = [
  {
    eventName: "Household & Pet Food",
    dueDate: "05-Nov-22",
    status: "Not started",
    resetType: "Full Range Reset",
    targetDate: "3-Jan-22",
    group: "Frozen",
    category: "Frozen Food",
    department: "Frozen Fish",
    eventId: "10001",
    clearancePriceCheck: "Y",
    orderStopDateCheck: "Y",
    stopOrder: "Y",
    buyer: "helen.barker@morrisonsplc.co.uk",
    buyingAssistant: "paul.allman@morrisonsplc.co.uk",
    ownBrandManager: "naomi.anderson@morrisonsplc.co.uk",
    seniorBuyingManager: "sophie.olding@morrisonsplc.co.uk",
    merchandiser: "helen.barker@morrisonsplc.co.uk",
    rangeResetManager: "naomi.anderson@morrisonsplc.co.uk",
    categoryDirector: "sophie.olding@morrisonsplc.co.uk",
    supplyChainSplst: "Cristine Black",
  },
];

export const delistExistingProductsCols = [
  {
    field: "productId",
    header: "Product ID",
    width: "150px",
  },
  {
    field: "storeCode",
    header: "Store Numbers",
    width: "150px",
  },
  {
    field: "supplier",
    header: "Supplier",
    width: "150px",
  },
  {
    field: "supplierSiteNumber",
    header: "Supplier Site Number",
    width: "150px",
  },
  {
    field: "local",
    header: "Local",
    width: "80px",
  },
  {
    field: "pin",
    header: "Pin",
    width: "150px",
  },
  {
    field: "buyingMinIngredients",
    header: "Buying MIN / Ingredients",
    width: "150px",
  },
];

export const actionTypes = [
  { label: "Delist MIN", value: "Delist MIN" },
  { label: "MIN Extension", value: "MIN Extension" },
  { label: "MIN Restriction", value: "MIN Restriction" },
  { label: "Space Extension", value: "Space Extension" },
  { label: "Space Restriction", value: "Space Restriction" },
  { label: "New MIN", value: "New MIN" },
  { label: "New PIN", value: "New PIN" },
  { label: "Delist PIN", value: "Delist PIN" },
  { label: "New Ingredient MIN", value: "New Ingredient MIN" },
  { label: "Delist Ingredient MIN", value: "Delist Ingredient MIN" },
  { label: "Supplier Change", value: "Supplier Change" },
];
// export const actionTypes = [
//   { label: "Delist Product (MIN)", value: "Delist Product (MIN)" },
//   {
//     label: "Product Distribution Increase (MIN)",
//     value: "Product Distribution Increase (MIN)",
//   },
//   {
//     label: "Product Distribution Decrease (MIN)",
//     value: "Product Distribution Decrease (MIN)",
//   },
//   {
//     label: "Product Shelf Space Increase",
//     value: "Product Shelf Space Increase",
//   },
//   {
//     label: "Product Shelf Space Decrease",
//     value: "Product Shelf Space Decrease",
//   },
//   { label: "New Product (MIN)", value: "New Product (MIN)" },
//   { label: "New Outercase Code (PIN)", value: "New Outercase Code (PIN)" },
//   {
//     label: "Delist Outercase Code (PIN)",
//     value: "Delist Outercase Code (PIN)",
//   },
//   { label: "New Ingredient (MIN)", value: "New Ingredient (MIN)" },
//   { label: "Delist Ingredient (MIN)", value: "Delist Ingredient (MIN)" },
//   { label: "Supplier Change", value: "Supplier Change" },
// ];

export const supplierCodes = [
  {
    label: "1001149 - RB UK",
    value: "1001149",
  },
  {
    label: "1002009 - PROFOOT",
    value: "1002009",
  },
  {
    label: "1001100 - G R LANE",
    value: "1001100",
  },
  {
    label: "1002662 - SEVENSEA",
    value: "1002662",
  },
];

export const salesChannels = [
  {
    label: "Online",
    value: "online",
  },
  {
    label: "Retail",
    value: "retail",
  },
  {
    label: "Wholesale",
    value: "wholesale",
  },
];
//Product List

export const productListCols = [
  {
    field: "actionType",
    header: "Action/ Type",
    width: "100px",
  },
  {
    field: "lineStatus",
    header: "Status",
    width: "200px",
  },
  {
    field: "min",
    header: "MIN Number",
    width: "100px",
  },
  {
    field: "pin",
    header: "PIN",
    width: "100px",
  },
  {
    field: "ingredientMin",
    header: "No. of Unique Ingredient MIN",
    width: "100px",
  },
  {
    field: "legacyItemNumbers",
    header: "Legacy Code",
    width: "200px",
  },
  {
    field: "man",
    header: "MAN Number",
    width: "100px",
  },
  {
    field: "description",
    header: "Product Description",
    width: "200px",
  },

  // {
  //   field: 'noOfUniqueIngredientMin',
  //   header: 'No. of Unique Ingredient MIN',
  //   width: '100px',
  // },
  {
    field: "replaceMin",
    header: "Replace MIN/ PIN",
    width: "100px",
  },
  {
    field: "replaceMinDescription",
    header: "Description (Product description of the replacing MIN)",
    width: "200px",
  },
  {
    field: "unitretailInc",
    header: "Unit Retail (Inc VAT)",
    width: "100px",
  },
  {
    field: "unitretailEx",
    header: "Unit Retail (Ex VAT)",
    width: "100px",
  },
  {
    field: "unitcost",
    header: "Unit Cost",
    width: "200px",
  },
  {
    field: "casecost",
    header: "Case Cost",
    width: "200px",
  },
  {
    field: "packquantity",
    header: "Case Size",
    width: "200px",
  },
  {
    field: "supplierId",
    header: "Supplier Name",
    width: "200px",
  },
  {
    field: "supplierSiteNameCode",
    header: "Supplier Site Name & Code",
    width: "200px",
  },
  {
    field: "local",
    header: "Local",
    width: "200px",
  },
  {
    field: "perStorepPerWeek",
    header: "Per Store Per Week",
    width: "200px",
  },
  {
    field: "onlineCFC",
    header: "Online (CFC)",
    width: "200px",
  },
  {
    field: "onlineStorePick",
    header: "Online Store Pick",
    width: "200px",
  },
  {
    field: "wholesale",
    header: "Wholesale",
    width: "200px",
  },
  {
    field: "currentnoofrangedstores",
    header: "Current No. of Ranged Stores",
    width: "200px",
  },
  {
    field: "newnoofrangestores",
    header: "New No. of Range Stores",
    width: "200px",
  },
  // {
  //   field: "numberOfRangeStores",
  //   header: "New Number of Range Stores",
  //   width: "150px",
  // },

  {
    field: "currentVersusNewStores",
    header: "Current Versus New Stores",
    width: "200px",
  },
  {
    field: "storesRangedCurrentVsProposed",
    header: "% stores ranged (current vs proposed)",
    width: "200px",
  },
  {
    field: "currentShelfFill",
    header: "Current Shelf Fill (Units)",
    width: "200px",
  },
  {
    field: "newShelfFill",
    header: "New Shelf Fill (Units)",
    width: "200px",
  },
  {
    field: "currentshelffill_vs_newfill",
    header: "Current Shelf Fill Vs New Fill",
    width: "200px",
  },
  {
    field: "currentshelffill_vs_newfill_percant",
    header: "Current Shelf Fill Vs New Fill %",
    width: "200px",
  },
  {
    field: "ownBrand",
    header: "Own Brand",
    width: "200px",
  },
  {
    field: "includeInClearancePricing",
    header: "Include In Clearance Pricing",
    width: "200px",
  },
  {
    field: "includeInStoreWastage",
    header: "Include In Store Wastage",
    width: "200px",
  },
  {
    field: "clearDepotBy",
    header: "Clear Depot By",
    width: "200px",
  },

  {
    field: "supplierCommitment",
    header: "Supplier Commitment Including Fixed Buys/Seasonal",
    width: "200px",
  },

  {
    field: "finalStopOrderDate",
    header: "Final Stop Order Date",
    width: "200px",
  },
  {
    field: "systemSuggestedStopOrderDate",
    header: "System Suggested Stop Order date",
    width: "200px",
  },
  {
    field: "lastPoDate",
    header: "Last PO Date",
    width: "200px",
  },
  {
    field: "depotShelfLifeMinimum",
    header: "Depot Shelf Life (Minimum guaranteed for self life delivery)",
    width: "200px",
  },
  {
    field: "productShelfLifeInstore",
    header: "Product Shelf Life (Instore self life)",
    width: "200px",
  },
  {
    field: "shelfLifeatManufacture",
    header: "Shelf Life at Manufacture",
    width: "200px",
  },

  {
    field: "totalstock",
    header: "Total Stock",
    width: "200px",
  },
  {
    field: "storeStockUnit",
    header: "Store Stock Unit",
    width: "200px",
  },
  {
    field: "depotStockUnit",
    header: "Depot Stock Unit",
    width: "200px",
  },
  {
    field: "openPos",
    header: "Open POs",
    width: "200px",
  },
  {
    field: "forward_forecast_to_launch",
    header: "Forward Forecast to Launch",
    width: "200px",
  },
  {
    field: "averageWeeklyVolume",
    header: "Average Weekly Volume (units)",
    width: "200px",
  },
  {
    field: "weeksCoveronTotalStockonHandtoResetDate",
    header: "Weeks Cover on Total Stock on Hand to Reset Date",
    width: "200px",
  },
  {
    field: "forcastedWeeksCovertoResetDate",
    header: "Forcasted Weeks Cover to Reset Date",
    width: "200px",
  },
  {
    field: "excessstock",
    header: "Excess stock",
    width: "200px",
  },
  {
    field: "safewaybrandedequivalent",
    header: "Safeway Branded Equivalent",
    width: "200px",
  },
  {
    field: "effectiveDateFrom",
    header: "Effective Date (From)",
    width: "200px",
  },
  {
    field: "effectiveDateTo",
    header: "Effective Date (To)",
    width: "200px",
  },
  {
    field: "existingSupplier",
    header: "Existing Supplier",
    width: "150px",
  },
  {
    field: "existingSupplierSite",
    header: "Existing Supplier Site",
    width: "150px",
  },
  {
    field: "newSupplier",
    header: "New Supplier",
    width: "150px",
  },
  {
    field: "newSupplierSite",
    header: "New Supplier Site",
    width: "150px",
  },
  {
    field: "noOfRecipeMin",
    header: "No. of Recipe MIN",
    width: "200px",
  },
  {
    field: "depotClearbyReservedQtyRetail",
    header: "Depot Clear by, Reserved Qty (Retail)",
    width: "200px",
  },
  {
    field: "depotClearbyReservedQtyWholesale",
    header: "Depot Clear by, Reserved Qty (Wholesale)",
    width: "200px",
  },
  {
    field: "depotClearbyReservedQtyOnline",
    header: "Depot Clear by, Reserved Qty (Online)",
    width: "200px",
  },
  {
    field: "depotClearbyReservedQtyTotal",
    header: "Depot Clear by, Reserved Qty (Total)",
    width: "200px",
  },

  {
    field: "comments",
    header: "Comments",
    width: "200px",
  },
  // {
  //   field: "barcode",
  //   header: "Barcode",
  //   width: "200px",
  // },

  // {
  //   field: "excessstock",
  //   header: "Excess stock",
  //   width: "200px",
  // },

  // {
  //   field: "storeCode",
  //   header: "Store Number",
  //   width: "150px",
  // },
];

export const massActions = [
  {
    value: "Delete",
    label: "Delete",
  },
  {
    value: "Derange",
    label: "Derange",
  },
  {
    value: "Delist",
    label: "Delist",
  },
  {
    value: "Draft",
    label: "Draft",
  },
  {
    value: "Confirmed",
    label: "Confirmed",
  },
  {
    value: "Cancel",
    label: "Cancel",
  },
  {
    value: "Clear Depot By: Week-1",
    label: "Clear Depot By: Week-1",
  },
  {
    value: "Clear Depot By: Week-2",
    label: "Clear Depot By: Week-2",
  },
  {
    value: "Clear Depot By: Week-3",
    label: "Clear Depot By: Week-3",
  },
  {
    value: "Clear Depot By: Week-4",
    label: "Clear Depot By: Week-4",
  },
  {
    value: "Clear Depot By: Week-5",
    label: "Clear Depot By: Week-5",
  },
  {
    value: "Clear Depot By: Week-6",
    label: "Clear Depot By: Week-6",
  },
  {
    value: "Clear Depot By: Week-7",
    label: "Clear Depot By: Week-7",
  },
  {
    value: "Clear Depot By: Week-8",
    label: "Clear Depot By: Week-8",
  },
  {
    value: "EXCLUDE FROM",
    label: "EXCLUDE FROM",
  },
  {
    value: "MARKDOWN PRICING",
    label: "MARKDOWN PRICING",
  },
  {
    value: "INCLUDE IN",
    label: "INCLUDE IN",
  },
];

export const placeholderCols = [
  {
    field: "min",
    header: "MIN",
    width: "100px",
  },
  {
    field: "description",
    header: "Description",
    width: "200px",
  },
  {
    field: "ownBrand",
    header: "Own Brand",
    width: "100px",
  },
  {
    field: "barcode",
    header: "Bar Code",
    width: "200px",
  },
  {
    field: "existingSupplier",
    header: "Supplier Code",
    width: "240px",
  },
  {
    field: "existingSupplierSite",
    header: "Supplier Site Code",
    width: "240px",
  },
  {
    field: "packquantity",
    header: "Case Pack",
    width: "200px",
  },
  {
    field: "newnoofrangestores",
    header: "New No.of Range Stores",
    width: "150px",
  },
  {
    field: "local",
    header: "Local",
    width: "100px",
  },

  {
    field: "onlineCFC",
    header: "Online (CFC)",
    width: "100px",
  },

  {
    field: "onlineStorePick",
    header: "Online Store Pick",
    width: "150px",
  },
  {
    field: "wholesale",
    header: "Wholesale",
    width: "150px",
  },
  {
    field: "comments",
    header: "Comments",
    width: "150px",
  },
];

export const replacementAssociationCols = [
  // {
  //   field: "min",
  //   header: "Delist MIN/PIN",
  //   width: "150px",
  // },
  {
    field: "delist_min_pin",
    header: "Delist MIN/PIN",
    width: "150px",
  },
  {
    field: "replaceMin",
    header: "Replace MIN/PIN",
    width: "200px",
  },
  {
    field: "effectiveDateFrom",
    header: "Effective Date(From)",
    width: "200px",
  },
  {
    field: "effectiveDateTo",
    header: "Effective Date(To)",
    width: "200px",
  },
  {
    field: "comments",
    header: "Comments",
    width: "200px",
  },
];

export const lineStatusOptions = [
  {
    value: "Request For Stock Count",
    label: "Request For Stock Count",
  },
  {
    value: "Draft",
    label: "Draft",
  },
];

export const supplierCode_Supplier = {
  StatusCode: "200",
  StatusMessage: "Success",
  SupplierInfo: [
    {
      stepSupplierId: "S1359705",
      ebsSupplierId: "2000185",
      ebsSupplierNumber: "2022910",
      supplierName: "THE NASDAQ STOCK MARKET",
      supplierType: "VENDOR",
      supplierStatus: "Active",
      dealCustAccNo: "",
      SiteInfo: [
        {
          stepSiteId: "T1361172",
          stepSupplierId: "S1359705",
          ebsSiteId: "1526000",
          ebsSupplierId: "2000185",
          siteName: "pizza",
          mainframeSupplierNo: "8712",
          tsSiteId: "2022910",
          rmsSupplier: "Y",
          primaryPaySite: "Y",
          siteStatus: "Active",
          siteOperatingUnit: "82",
        },
        {
          stepSiteId: "T1361173",
          stepSupplierId: "S1359706",
          ebsSiteId: "1526000",
          ebsSupplierId: "2000186",
          siteName: "pizza",
          mainframeSupplierNo: "8712",
          tsSiteId: "2022910",
          rmsSupplier: "Y",
          primaryPaySite: "Y",
          siteStatus: "Active",
          siteOperatingUnit: "82",
        },
      ],
    },
  ],
};

export const supplierSearchSiteCode_Site = {
  StatusCode: "200",
  StatusMessage: "Success",
  SiteInfo: [
    {
      stepSiteId: "T963891",
      stepSupplierId: "S107926",
      ebsSiteId: "20005",
      ebsSupplierId: "2917",
      siteName: "ASHBY",
      mainframeSupplierNo: "",
      tsSiteId: "1002917",
      toleranceName: "11000",
      SupplierInfo: {
        stepSupplierId: "S107926",
        ebsSupplierNumber: "1002917",
        supplierName: "PLADIS",
        supplierType: "",
        supplierStatus: "Active",
        dealCustAccNo: "",
      },
    },
    {
      stepSiteId: "T963890",
      stepSupplierId: "S107927",
      ebsSiteId: "20006",
      ebsSupplierId: "2916",
      siteName: "ASHBY",
      mainframeSupplierNo: "",
      tsSiteId: "1002917",
      toleranceName: "11000",
      SupplierInfo: {
        stepSupplierId: "S107926",
        ebsSupplierNumber: "1002917",
        supplierName: "PLADIS",
        supplierType: "",
        supplierStatus: "Active",
        dealCustAccNo: "",
      },
    },
  ],
};
export const ingredientTableCols = [
  {
    field: "ingredientMin",
    header: "Ingredient MIN",
    width: "100px",
  },
  {
    field: "ingredientDescription",
    header: "Description",
    width: "200px",
  },
];
export const pinTableCols = [
  {
    field: "packNumber",
    header: "Pin Number",
    width: "100px",
  },
  {
    field: "packQuantity",
    header: "Case Size",
    width: "100px",
  },
];
export const pinTableDummyData = [
  {
    packNumber: "100003047",
    packQuantity: 12,
  },
  {
    packNumber: "100003048",
    packQuantity: 24,
  },
  {
    packNumber: "100005000",
    packQuantity: 36,
  },
];

export const ingredientList = [
  {
    itemNumber: "111043100",
    productName: "ALTOS DE IBERIA BONELESS JAMON SERRANO (2X5KG)",
    productType: "RECIPE",
    counterTicketProductTitle: "Altos De Iberia Boneless Jamon Serrano (2X5KG)",
  },
  {
    itemNumber: "111043140",
    productName: "ALTOS DE IBERIA BONELESS JAMON SERRANO (3X5KG)",
    productType: "RECIPE",
    counterTicketProductTitle: "Altos De Iberia Boneless Jamon Serrano (3X5KG)",
  },
];
// export const rangedStoresTableCols = [
//   {
//     field: "storeNo",
//     header: "Store No.",
//     width: "80px",
//   },
//   {
//     field: "storeName",
//     header: "Store Name",
//     width: "120px",
//   },
//   {
//     field: "currentShelfFill",
//     header: "Current Shelf Fill",
//     width: "80px",
//   },
//   {
//     field: "storeStockUnit",
//     header: "Store Stock Unit",
//     width: "80px",
//   },
//   {
//     field: "LRFToLaunchDate",
//     header: "LRF To Launch Date",
//     width: "80px",
//   },
//   {
//     field: "excessStock",
//     header: "Excess Stock",
//     width: "80px",
//   },
// ];
export const rangedStoresTableData = [
  {
    storeNo: "1",
    storeName: "Chingford",
    currentShelfFill: "25",
    storeStockUnit: "15",
    LRFToLaunchDate: "5",
    excessStock: "2",
  },
  {
    storeNo: "2",
    storeName: "Bradford",
    currentShelfFill: "24",
    storeStockUnit: "16",
    LRFToLaunchDate: "11",
    excessStock: null,
  },
  {
    storeNo: "3",
    storeName: "Keighley",
    currentShelfFill: "23",
    storeStockUnit: "13",
    LRFToLaunchDate: "10",
    excessStock: "5",
  },
];

export const clearancePricingOptions = [
  {
    label: "Include In All Price Actions",
    value: "Include In All Price Actions",
  },
];

// export const depotStockUnitTableCols = [
//   {
//     field: "depot",
//     header: "Depot",
//     width: "80px",
//   },
//   {
//     field: "aggregatedStoreStockUnit",
//     header: "Aggregated Store Stock Unit",
//     width: "80px",
//   },
//   {
//     field: "depotStockUnit",
//     header: "Depot Stock Unit",
//     width: "80px",
//   },
//   {
//     field: "openPos",
//     header: "Open Purchase Orders",
//     width: "80px",
//   },
//   {
//     field: "totalPurchaseOrdersForecast",
//     header: "PO Forcast",
//     width: "80px",
//   },
//   {
//     field: "total3MonthsPOHistory",
//     header: "PO History 3 Months",
//     width: "80px",
//   },
//   {
//     field: "salesForcastToTargetDate",
//     header: "Sales Forcast To Target Date",
//     width: "80px",
//   },
//   {
//     field: "systemAdvisedStopOrderDate",
//     header: "System Advised Stop Order Date",
//     width: "80px",
//   },
//   {
//     field: "depotClearDate",
//     header: "Depot Clear Date",
//     width: "80px",
//   },
//   {
//     field: "reserveQuantityRetail",
//     header: "Reserve Quantity (Retail)",
//     width: "80px",
//   },
//   {
//     field: "reserveQuantityWholesale",
//     header: "Reserve Quantity (Wholesale)",
//     width: "80px",
//   },
//   {
//     field: "reserveQuantityOnline",
//     header: "Reserve Quantity (Online)",
//     width: "80px",
//   },
//   {
//     field: "reserveQuantityTotal",
//     header: "Reserve Quantity (Total)",
//     width: "80px",
//   },
//   {
//     field: "lastPoDate",
//     header: "Last PO Date",
//     width: "80px",
//   },
//   {
//     field: "weeksCoveronTotalStockonHandtoResetDate",
//     header: "Weeks Cover",
//     width: "80px",
//   },
//   {
//     field: "forcastedWeeksCovertoResetDate",
//     header: "Forcasted Weeks Cover",
//     width: "80px",
//   },
// ];

export const depotStockTableData = [
  {
    depot: "76",
    aggregatedStoreStockUnit: "126",
    depotStockUnit: "95",
    openPos: "0",
    totalPurchaseOrdersForecast: "0",
    total3MonthsPOHistory: "0",
    salesForcastToTargetDate: "NA",
    systemAdvisedStopOrderDate: "NA",
    depotClearDate: "02/07/2022",
    reserveQuantityRetail: "0",
    reserveQuantityWholesale: "100",
    reserveQuantityOnline: "50",
    reserveQuantityTotal: "150",
    lastPoDate: "NA",
    weeksCover: "No forcast sales",
    forcastedWeeksCover: "No forcast sales",
  },
];

export const depotStockButtons = [
  "East England",
  "East Midlands",
  "Great London",
  "North East",
  "North West",
  "Scotland",
  "South East",
  "South West",
  "West Midlands",
  "Yorkshire",
];
export const recipeTableCols = [
  {
    field: "itemNumber",
    header: "Recipe MIN",
    width: "100px",
  },
  {
    field: "productName",
    header: "Description",
    width: "200px",
  },
];
export const rangedStoresTableCols = [
  {
    field: "locationId",
    header: "Store No.",
    width: "80px",
  },
  {
    field: "locationName",
    header: "Store Name",
    width: "120px",
  },
  {
    field: "currentShelfFill",
    header: "Current Shelf Fill",
    width: "80px",
  },
  {
    field: "quantity",
    header: "Store Stock Unit",
    width: "80px",
  },
  {
    field: "lrfQuantity",
    header: "LRF To Launch Date",
    width: "100px",
  },
  {
    field: "excessStock",
    header: "Excess Stock",
    width: "80px",
  },
];
export const storeViewDummyRes = {
  storeView: [
    {
      locationId: "96",
      locationName: "Port Talbot - Baglan",
      quantity: "0.0",
      currentShelfFill: "240",
      lrfQuantity: "1.2578799020474882",
      excessStock: "1.2578799020474882",
    },
    {
      locationId: "73",
      locationName: "Tamworth",
      quantity: "0.0",
      currentShelfFill: "240",
      lrfQuantity: "10726.0",
      excessStock: "10726.0",
    },
    {
      locationId: "214",
      locationName: "Penrith",
      quantity: "0.0",
      currentShelfFill: "132",
      lrfQuantity: "0.0",
      excessStock: "0.0",
    },
    {
      locationId: "576",
      locationName: "Croydon",
      quantity: "0.0",
      currentShelfFill: "240",
      lrfQuantity: "0.0",
      excessStock: "0.0",
    },
  ],
};

export const depotStockUnitTableCols = [
  {
    field: "locationId",
    header: "Depot",
    width: "80px",
  },
  {
    field: "aggDptQty",
    header: "Aggregated Store Stock Unit",
    width: "80px",
  },
  {
    field: "qty",
    header: "Depot Stock Unit",
    width: "80px",
  },
  {
    field: "openPOqty",
    header: "Open Purchase Orders",
    width: "80px",
  },
  {
    field: "forecastPOqty",
    header: "PO Forcast",
    width: "80px",
  },
  {
    field: "historyPOqty",
    header: "PO History 3 Months",
    width: "80px",
  },
  {
    field: "salesForecastQuantity",
    header: "Sales Forcast To Target Date",
    width: "80px",
  },
  {
    field: "sysSODate",
    header: "System Advised Stop Order Date",
    width: "80px",
  },
  {
    field: "depotClearDate",
    header: "Depot Clear Date",
    width: "80px",
  },
  {
    field: "retailReserveQuantity",
    header: "Reserve Quantity (Retail)",
    width: "80px",
  },
  {
    field: "wholesaleReserveQuantity",
    header: "Reserve Quantity (Wholesale)",
    width: "80px",
  },
  {
    field: "onlineReserveQuantity",
    header: "Reserve Quantity (Online)",
    width: "80px",
  },
  {
    field: "totalReserverQuantity",
    header: "Reserve Quantity (Total)",
    width: "80px",
  },
  {
    field: "lastPODate",
    header: "Last PO Date",
    width: "80px",
  },
  {
    field: "weeksCover",
    header: "Weeks Cover",
    width: "80px",
  },
  {
    field: "forecastWeeksCover",
    header: "Forcasted Weeks Cover",
    width: "80px",
  },
];

export const depotViewResDummy = {
  depotView: [
    {
      locationId: "781",
      aggDptQty: "0.0",
      qty: "8046.0",
      openPOqty: "1260.0",
      forecastPOqty: "90720.0",
      historyPOqty: "64638.0",
      salesForecastQuantity: "100000.0",
      sysSODate: "2022-10-20",
      depotClearDate: "2023-01-07",
      retailReserveQuantity: "0.0",
      onlineReserveQuantity: "0.0",
      wholesaleReserveQuantity: "0.0",
      totalReserverQuantity: "0.0",
      lastPODate: "2023-01-05",
      weeksCover: null,
      forecastWeeksCover: null,
    },
    {
      locationId: "991",
      aggDptQty: "0.0",
      qty: "3582.0",
      openPOqty: "630.0",
      forecastPOqty: "95760.0",
      historyPOqty: "28206.0",
      salesForecastQuantity: "100000.0",
      sysSODate: "2022-10-20",
      depotClearDate: "2023-01-07",
      retailReserveQuantity: "0.0",
      onlineReserveQuantity: "0.0",
      wholesaleReserveQuantity: "0.0",
      totalReserverQuantity: "0.0",
      lastPODate: "2023-01-04",
      weeksCover: null,
      forecastWeeksCover: null,
    },
  ],
};

export const regionsButtonsDummy = {
  regions: [
    {
      regionName: "Greater London",
      locations: [
        {
          locationId: "1",
          locationName: "Chingford",
        },
        {
          locationId: "92",
          locationName: "Enfield",
        },
        {
          locationId: "113",
          locationName: "Erith",
        },
        {
          locationId: "191",
          locationName: "Canning Town",
        },
        {
          locationId: "205",
          locationName: "Ealing",
        },
        {
          locationId: "309",
          locationName: "Stratford",
        },
        {
          locationId: "318",
          locationName: "Sutton",
        },
        {
          locationId: "316",
          locationName: "Sidcup",
        },
        {
          locationId: "313",
          locationName: "Wood Green",
        },
        {
          locationId: "311",
          locationName: "Thamesmead",
        },
        {
          locationId: "299",
          locationName: "Hatch End",
        },
        {
          locationId: "296",
          locationName: "Becontree Heath",
        },
        {
          locationId: "306",
          locationName: "Peckham",
        },
        {
          locationId: "307",
          locationName: "Queensbury",
        },
        {
          locationId: "304",
          locationName: "Holloway",
        },
        {
          locationId: "305",
          locationName: "Palmers Green",
        },
        {
          locationId: "302",
          locationName: "Acton",
        },
        {
          locationId: "373",
          locationName: "Colindale",
        },
        {
          locationId: "388",
          locationName: "Borehamwood",
        },
        {
          locationId: "527",
          locationName: "Mitcham",
        },
        {
          locationId: "447",
          locationName: "Welling",
        },
        {
          locationId: "410",
          locationName: "Stamford Hill",
        },
        {
          locationId: "549",
          locationName: "Harrow",
        },
        {
          locationId: "576",
          locationName: "Croydon",
        },
      ],
    },
    {
      regionName: "Gibraltar",
      locations: [
        {
          locationId: "452",
          locationName: "Gibraltar",
        },
      ],
    },
  ],
};

export const productCompoServiceDummpy = {
  items: [
    {
      itemNumber: "102407696",
      revision: 3,
      status: "Delisted",
      launchDate: "2021-06-02",
      sourceSystem: "MorrisonsRecipe",
      lastPCSStatus: "Active",
      barcode: "6712",
      supplierId: "0000",
      itemDetails: {
        productLabelAttributes: {
          productName: "COLEY FILLET",
          productType: "RECIPE",
          counterTicketProductTitle: "Fresh British Coley Fillet",
          glpScaleLabelTitle: "BRITISH\nCOLEY\nFILLET\n",
          sourceSystemVersion: 14,
          servingDescriptor: "Per 100g",
          barcodeType: "VPLU",
          departmentDesign: 36,
          departmentDesignText: "Fish",
          isGLPProduct: false,
          isScaleProduct: true,
          glpTemplate: 12,
          glpTemplateText: "Fish Weighed",
          scaleTemplate: 0,
          scaleTemplateText: "Standard",
          weighedNonWeighedInd: 0,
          weighedNonWeighedIndText: "Weighed",
          fixedWeight: "",
          pricePerBasis: 1,
          pricePerBasisText: "per kg",
          legalName: "Coley fillet.",
          latinName: "Pollachius virens.",
          meatQuantity: "",
          originStatement:
            "Caught in North East Atlantic; Sub Area IV, VII by trawls, gillnets and similar nets, hooks & lines.",
          productWarnings: "May contain bones.\nPreviously frozen.",
          ingredients: "",
          allergyAdvice: "",
          glpLabelAllergyAdvice:
            "<b>ALLERGY ADVICE:</b>\nContains <b>Fish</b>.\n<b>May contain other allergens.</b> Prepared in an open kitchen so we cannot guarantee suitability for people with allergies.",
          scaleLabelAllergyAdvice:
            "<b>ALLERGY ADVICE:</b>\nContains <b>Fish</b>. If butter is included, also contains <b>Milk</b>.\n<b>May contain other allergens.</b> Prepared in an open kitchen so we cannot guarantee suitability for people with allergies.",
          counterTicketAllergyAdvice: "ALLERGY ADVICE:  Contains Fish.",
          energy: "Per 100g: 348kJ/82kcal.",
          howToCook: "",
          dateCodeFormat: 1,
          dateCodeFormatText: "Use by",
          storageInstructions: 1,
          storageInstructionsText: "Keep refrigerated.",
          logo1Text: "",
          logo2Text: "",
          logo3Text: "",
          logo4Text: "",
          logo5Text: "",
          logo6Text: "",
          logo7Text: "",
          logo8Text: "",
          logo9Text: "",
          logo10Text: "",
          uda: {
            merchandiseHierarchy: "Counter Seafood",
            counterTicketShelfLifeDays: "2",
            additionalDesignLogoText: "Preparing it in store everyday",
            recipeHierarchy: "Fish",
            glpShelfLifeDays: "2",
            barcodeStructure: "2",
            additionalDesignLogo: 48.0,
            isWholesale: 0.0,
          },
          createdDate: "2021-07-12 09:04:05",
          lastUpdatedDate: "2021-08-11 13:57:59",
        },
        productNutrition: [
          {
            nutrient: "Energy (kcal)",
            valuePer100G: 82.2,
            valuePerServing: 82.0,
            fopValue: "",
            fopPercent: "<1",
            rag: "R",
            isFopNutriennt: true,
            createdDate: "2021-07-12 09:04:05",
            lastUpdatedDate: "2021-08-11 13:57:59",
          },
          {
            nutrient: "Energy (kJ)",
            valuePer100G: 348.1,
            valuePerServing: 348.0,
            fopValue: "",
            fopPercent: "<1",
            rag: "R",
            isFopNutriennt: true,
            createdDate: "2021-07-12 09:04:05",
            lastUpdatedDate: "2021-08-11 13:57:59",
          },
          {
            nutrient: "Fat (g)",
            valuePer100G: 1.0,
            valuePerServing: 1.0,
            fopValue: "1",
            fopPercent: "1",
            rag: "G",
            isFopNutriennt: true,
            createdDate: "2021-07-12 09:04:05",
            lastUpdatedDate: "2021-08-11 13:57:59",
          },
          {
            nutrient: "Saturates (g)",
            valuePer100G: 0.1,
            valuePerServing: 0.1,
            fopValue: "<0.1",
            fopPercent: "<1",
            rag: "G",
            isFopNutriennt: true,
            createdDate: "2021-07-12 09:04:05",
            lastUpdatedDate: "2021-08-11 13:57:59",
          },
          {
            nutrient: "Carbohydrates (g)",
            valuePer100G: 0.0,
            valuePerServing: 0.0,
            fopValue: "0",
            fopPercent: "<1",
            rag: "N",
            isFopNutriennt: false,
            createdDate: "2021-07-12 09:04:05",
            lastUpdatedDate: "2021-08-11 13:57:59",
          },
          {
            nutrient: "Sugars (g)",
            valuePer100G: 0.0,
            valuePerServing: 0.0,
            fopValue: "<0.5",
            fopPercent: "<1",
            rag: "G",
            isFopNutriennt: true,
            createdDate: "2021-07-12 09:04:05",
            lastUpdatedDate: "2021-08-11 13:57:59",
          },
          {
            nutrient: "Fibre (g)",
            valuePer100G: 0.0,
            valuePerServing: 0.0,
            fopValue: "0",
            fopPercent: "<1",
            rag: "N",
            isFopNutriennt: false,
            createdDate: "2021-07-12 09:04:05",
            lastUpdatedDate: "2021-08-11 13:57:59",
          },
          {
            nutrient: "Protein (g)",
            valuePer100G: 18.3,
            valuePerServing: 18.3,
            fopValue: "18.3",
            fopPercent: "37",
            rag: "N",
            isFopNutriennt: false,
            createdDate: "2021-07-12 09:04:05",
            lastUpdatedDate: "2021-08-11 13:57:59",
          },
          {
            nutrient: "Salt (g)",
            valuePer100G: 0.215,
            valuePerServing: 0.215,
            fopValue: "0.22",
            fopPercent: "4",
            rag: "G",
            isFopNutriennt: true,
            createdDate: "2021-07-12 09:04:05",
            lastUpdatedDate: "2021-08-11 13:57:59",
          },
          {
            nutrient: "Sodium (g)",
            valuePer100G: 0.086,
            valuePerServing: 0.086,
            fopValue: "0.22",
            fopPercent: "4",
            rag: "G",
            isFopNutriennt: false,
            createdDate: "2021-07-12 09:04:05",
            lastUpdatedDate: "2021-08-11 13:57:59",
          },
        ],
        productRecipeIngredients: [
          {
            cookingLoss: 0.0,
            recipeYieldPercentage: 100.0,
            ingredientMin: "102390468",
            ingredientDescription:
              "Coley Fillets (Pollachius virens) 250g -600g",
            ingredientYieldPercentage: 97.0,
            quantity: 1.0,
            uom: "kg",
            createdDate: "2021-07-12 09:04:05",
            lastUpdatedDate: "2021-08-11 13:57:59",
          },
        ],
      },
    },
    {
      itemNumber: "102407696",
      revision: 4,
      status: "Active",
      launchDate: "2021-06-02",
      sourceSystem: "MorrisonsRecipe",
      lastPCSStatus: "Default",
      barcode: "6712",
      supplierId: "0000",
      itemDetails: {
        productLabelAttributes: {
          productName: "COLEY FILLET",
          productType: "RECIPE",
          counterTicketProductTitle: "Fresh British Coley Fillet",
          glpScaleLabelTitle: "BRITISH\nCOLEY\nFILLET\n",
          sourceSystemVersion: 18,
          servingDescriptor: "Per 100g",
          barcodeType: "VPLU",
          departmentDesign: 36,
          departmentDesignText: "Fish",
          isGLPProduct: false,
          isScaleProduct: true,
          glpTemplate: 12,
          glpTemplateText: "Fish Weighed",
          scaleTemplate: 0,
          scaleTemplateText: "Standard",
          weighedNonWeighedInd: 0,
          weighedNonWeighedIndText: "Weighed",
          fixedWeight: "",
          pricePerBasis: 1,
          pricePerBasisText: "per kg",
          legalName: "Coley fillet.",
          latinName: "Pollachius virens.",
          meatQuantity: "",
          originStatement:
            "Caught in North East Atlantic; Sub Area IV, VII by trawls, gillnets and similar nets, hooks & lines.",
          productWarnings: "May contain bones.\nPreviously frozen.",
          ingredients: "",
          allergyAdvice: "",
          glpLabelAllergyAdvice:
            "<b>ALLERGY ADVICE:</b>\nContains <b>Fish</b>.\n<b>May contain other allergens.</b> Prepared in an open kitchen so we cannot guarantee suitability for people with allergies.",
          scaleLabelAllergyAdvice:
            "<b>ALLERGY ADVICE:</b>\nContains <b>Fish</b>. If butter is included, also contains <b>milk</b>.\n<b>May contain other allergens.</b> Prepared in an open kitchen so we cannot guarantee suitability for people with allergies.",
          counterTicketAllergyAdvice: "ALLERGY ADVICE:  Contains Fish.",
          energy: "Per 100g: 348kJ/82kcal.",
          howToCook: "",
          dateCodeFormat: 1,
          dateCodeFormatText: "Use by",
          storageInstructions: 1,
          storageInstructionsText: "Keep refrigerated.",
          logo1Text: "",
          logo2Text: "",
          logo3Text: "",
          logo4Text: "",
          logo5Text: "",
          logo6Text: "",
          logo7Text: "",
          logo8Text: "",
          logo9Text: "",
          logo10Text: "",
          uda: {
            merchandiseHierarchy: "Counter Seafood",
            counterTicketShelfLifeDays: "2",
            additionalDesignLogoText: "Preparing it in store everyday",
            recipeHierarchy: "Fish",
            glpShelfLifeDays: "2",
            barcodeStructure: "2",
            additionalDesignLogo: 48.0,
            isWholesale: 0.0,
          },
          createdDate: "2021-08-11 13:57:59",
          lastUpdatedDate: "2021-08-11 13:58:04.066767",
        },
        productNutrition: [
          {
            nutrient: "Energy (kcal)",
            valuePer100G: 82.2,
            valuePerServing: 82.0,
            fopValue: "",
            fopPercent: "<1",
            rag: "R",
            isFopNutriennt: true,
            createdDate: "2021-08-11 13:58:04",
            lastUpdatedDate: "2021-08-11 13:58:04.066767",
          },
          {
            nutrient: "Energy (kJ)",
            valuePer100G: 348.1,
            valuePerServing: 348.0,
            fopValue: "",
            fopPercent: "<1",
            rag: "R",
            isFopNutriennt: true,
            createdDate: "2021-08-11 13:58:04",
            lastUpdatedDate: "2021-08-11 13:58:04.066767",
          },
          {
            nutrient: "Fat (g)",
            valuePer100G: 1.0,
            valuePerServing: 1.0,
            fopValue: "1",
            fopPercent: "1",
            rag: "G",
            isFopNutriennt: true,
            createdDate: "2021-08-11 13:58:04",
            lastUpdatedDate: "2021-08-11 13:58:04.066767",
          },
          {
            nutrient: "Saturates (g)",
            valuePer100G: 0.1,
            valuePerServing: 0.1,
            fopValue: "<0.1",
            fopPercent: "<1",
            rag: "G",
            isFopNutriennt: true,
            createdDate: "2021-08-11 13:58:04",
            lastUpdatedDate: "2021-08-11 13:58:04.066767",
          },
          {
            nutrient: "Carbohydrates (g)",
            valuePer100G: 0.0,
            valuePerServing: 0.0,
            fopValue: "0",
            fopPercent: "<1",
            rag: "N",
            isFopNutriennt: false,
            createdDate: "2021-08-11 13:58:04",
            lastUpdatedDate: "2021-08-11 13:58:04.066767",
          },
          {
            nutrient: "Sugars (g)",
            valuePer100G: 0.0,
            valuePerServing: 0.0,
            fopValue: "<0.5",
            fopPercent: "<1",
            rag: "G",
            isFopNutriennt: true,
            createdDate: "2021-08-11 13:58:04",
            lastUpdatedDate: "2021-08-11 13:58:04.066767",
          },
          {
            nutrient: "Fibre (g)",
            valuePer100G: 0.0,
            valuePerServing: 0.0,
            fopValue: "0",
            fopPercent: "<1",
            rag: "N",
            isFopNutriennt: false,
            createdDate: "2021-08-11 13:58:04",
            lastUpdatedDate: "2021-08-11 13:58:04.066767",
          },
          {
            nutrient: "Protein (g)",
            valuePer100G: 18.3,
            valuePerServing: 18.3,
            fopValue: "18.3",
            fopPercent: "37",
            rag: "N",
            isFopNutriennt: false,
            createdDate: "2021-08-11 13:58:04",
            lastUpdatedDate: "2021-08-11 13:58:04.066767",
          },
          {
            nutrient: "Salt (g)",
            valuePer100G: 0.215,
            valuePerServing: 0.215,
            fopValue: "0.22",
            fopPercent: "4",
            rag: "G",
            isFopNutriennt: true,
            createdDate: "2021-08-11 13:58:04",
            lastUpdatedDate: "2021-08-11 13:58:04.066767",
          },
          {
            nutrient: "Sodium (g)",
            valuePer100G: 0.086,
            valuePerServing: 0.086,
            fopValue: "0.22",
            fopPercent: "4",
            rag: "G",
            isFopNutriennt: false,
            createdDate: "2021-08-11 13:58:04",
            lastUpdatedDate: "2021-08-11 13:58:04.066767",
          },
        ],
        productRecipeIngredients: [
          {
            cookingLoss: 0.0,
            recipeYieldPercentage: 100.0,
            ingredientMin: "102390468",
            ingredientDescription:
              "Coley Fillets (Pollachius virens) 250g -600g",
            ingredientYieldPercentage: 97.0,
            quantity: 1.0,
            uom: "kg",
            createdDate: "2021-08-11 13:57:59",
            lastUpdatedDate: "2021-08-11 13:58:04.066767",
          },
        ],
      },
    },
  ],
  metadata: {
    limit: 100,
    offset: 1,
    count: 2,
    total: 2,
  },
};
export const ingredientMinDummy = {
  // check for ingredientDetails
  ItemDetails: [
    {
      itemNumber: "112056236",
      productName: "ROAST BEEF & HORSERADISH SANDWICH",
      productType: "RECIPE",
      counterTicketProductTitle: "Roast Beef & Horseradish Sandwich",
      ingredientDetails: [
        {
          ingredientMin: "105462076",
          ingredientDescription: "Hot Horseradish Sauce",
        },
      ],
    },
  ],
};
export const recipeMinDummy = {
  ItemDetails: [
    {
      itemNumber: "112056236",
      productName: "ROAST BEEF & HORSERADISH SANDWICH",
      productType: "RECIPE",
      counterTicketProductTitle: "Roast Beef & Horseradish Sandwich",
    },
  ],
};
