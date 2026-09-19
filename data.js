// ---- Flat intent-tagged QA items (for the offline chat engine) ----
const QA_OPPORTUNITY = [
  {
    action: "view",
    object: "weighted opportunity value",
    scope: "module",
    question: "What is Weighted Opportunity Value?",
    answer: "It's the sum of opportunity values weighted by win-probability, shown as a KPI on **My Dashboard**. It gives a probability-adjusted view of pipeline value rather than a raw total.",
    tags: ["weighted value","dashboard kpi","win probability","kpi definition"]
  },
  {
    action: "define",
    object: "stale opportunity",
    scope: "module",
    question: "What is a Stale Opportunity?",
    answer: "An opportunity that has crossed the configurable **Stale Threshold** — a number of days of inactivity set in **Settings → Opportunities Form → Stale Threshold**. The count of stale opportunities is shown as a KPI on **My Dashboard**.",
    tags: ["stale opportunity","stale threshold","inactivity","what is stale"]
  },
  {
    action: "view",
    object: "pipeline dashboard",
    scope: "module",
    question: "Where can I see a quick summary of pipeline health?",
    answer: "**My Dashboard** is the personal, KPI-driven landing page showing totals, value, staleness, funnel shape, tasks, and upcoming due dates.",
    tags: ["pipeline summary","dashboard overview","my dashboard"]
  },
  {
    action: "view",
    object: "overdue opportunity",
    scope: "module",
    question: "Where do I see opportunities that are overdue or coming due soon?",
    answer: "Check **My Dashboard's Due This Week** KPI card and **Upcoming Opportunity Due Date** list, or filter the Opportunities list by **Due Date**.",
    tags: ["due date","overdue opportunities","upcoming due date","due this week"]
  },
  {
    action: "view",
    object: "top opportunities",
    scope: "module",
    question: "Where do I see the top opportunities by value?",
    answer: "**My Dashboard's Top 10 Opportunities** widget, ranked by value, with its own **+ Create Opportunity** shortcut.",
    tags: ["top opportunities","highest value","highest value list"]
  },
  {
    action: "create",
    object: "opportunity",
    scope: "module",
    question: "How do I create a new opportunity?",
    answer: "1. Go to **Opportunities Management → Opportunities**.\n2. Click **+ Create** in the toolbar.\n3. **Details:** enter **Opportunity Name*** (required) and pick a **Market Type** (Highway, Residential, Infrastructure, Interiors, …).\n4. **Status & Value:** **Stage*** defaults to \"Lead\" and is locked. **Status*** is required — its options come from whatever Statuses are configured for that Stage.\n5. **Contact:** optionally set **Customer Groups**, **Site Representative**, **Corporate Lead**, **Executive Lead** (searchable people-pickers, auto-suggested from Account Assignment).\n6. Click **Submit**.\n\n⚠ In this environment, Submit can fail with \"Status is required\" because the **Lead** stage has zero Statuses configured under Settings → Stages & Statuses Configuration. An admin must add at least one Status to Lead before new opportunities can be created.",
    tags: ["create opportunity","add lead","new pursuit","new lead form"]
  },
  {
    action: "configure",
    object: "opportunity table columns",
    scope: "module",
    question: "What columns can I add to the Opportunities table?",
    answer: "Via **Manage Columns**: Opportunity ID/Name, Description, Created By, Project Types, Business Development, Business Unit, Opportunity Type, Milestone Template, Market/Sub Market Type, Stage, Status, TIC, Opportunity Value, Go %, Get %, Win Probability (%), AI Probability, Weighted Value (+AI), Probability (Manual/AI), Proposals, Tenders, Required Compliances, Created/Due/Follow Up Date, Opportunity Age, Stage Threshold Notification, Last Interaction, Inactivity (Days), Inactive Threshold Notification, Customer (+POC, Tier), Owner (+POC), EPC/Engineer (+POC), Contracting Entity (+POC), Project Locations, Competitors, Site Representative, Corporate Lead, Executive Lead, Assign To, Actions.",
    tags: ["manage columns","fields","data model","manage columns fields"]
  },
  {
    action: "view",
    object: "opportunities list view mode",
    scope: "module",
    question: "What view modes does the Opportunities list support?",
    answer: "Three: **Table View** (default, spreadsheet-style grid), **Grid View** (card-based layout), and **Kanban View** (a board with one column per Stage: Lead, Proposal, Closed). Each Kanban column header shows the opportunity count for that stage plus its Opportunity Value and Forecasted Value totals.",
    tags: ["table view","grid view","kanban view","table grid kanban"]
  },
  {
    action: "define",
    object: "opportunity required fields",
    scope: "module",
    question: "What is required to create an Opportunity, and can I choose the starting Stage?",
    answer: "Only **Opportunity Name*** and **Status*** are marked required on the Create Opportunity dialog. **Stage*** is also required but is pre-set to **Lead** and locked — every new Opportunity starts in Lead and you cannot choose a different starting stage.",
    tags: ["required fields","starting stage","lead stage","starting stage lead"]
  },
  {
    action: "edit",
    object: "opportunity",
    scope: "module",
    question: "How do I edit or delete an existing Opportunity?",
    answer: "Open the row's **Actions** menu on the Opportunities list and choose **Edit** (opens the record in an editable form) or **Delete** — the same row-action pattern (History / Edit / Delete / Notes) used on Customers, Owners, and Competitors.",
    tags: ["edit opportunity","delete opportunity"]
  },
  {
    action: "edit",
    object: "opportunity field",
    scope: "module",
    question: "Where do I set the Opportunity's Description, Owner, or Opportunity Value if they aren't on the Create dialog?",
    answer: "Fields like **Description, Project Types, Business Development, Business Unit, Opportunity Type, Milestone Template, Sub Market Type, TIC, Opportunity Value, Owner, Owner POC, Customer, Tier, EPC/Engineer, Contracting Entity, Project Locations, Competitors, Assign To**, and others exist on the full Opportunity record (visible in **Manage Columns** and the Pipeline Report) but aren't present on the initial Create dialog — they're editable from the Opportunity's detail/edit view once the record exists.",
    tags: ["opportunity fields","edit opportunity value","owner field","opportunity value owner description"]
  },
  {
    action: "define",
    object: "sub-opportunity",
    scope: "module",
    question: "Can an Opportunity have sub-opportunities?",
    answer: "Yes. The full Opportunity record includes a **Parent / Child / Standalone** relationship flag with Child Count and Active Child Count, so Opportunities can be organized hierarchically — e.g. a master pursuit with several sub-opportunities. The ID format for child opportunities is configured separately under **Settings → ID Settings → Child ID Settings**.",
    tags: ["parent opportunity","child opportunity","sub-opportunity","parent child opportunity"]
  },
  {
    action: "configure",
    object: "opportunity table columns",
    scope: "module",
    question: "How do I change the column order, or remove a single column, in the Opportunities table?",
    answer: "Open **Manage Columns → Column Arrangement**: drag a column using its handle to reorder it, or click the close (×) icon next to a column to remove it. Click **Apply** when done, or **Reset to Default** to restore the default set entirely.",
    tags: ["reorder columns","remove column","column arrangement"]
  },
  {
    action: "configure",
    object: "saved view",
    scope: "module",
    question: "How do I save my current view (filters, columns, and layout) for next time?",
    answer: "Click the **save** icon in the Opportunities toolbar — it saves the current filter, column, and layout configuration together.",
    tags: ["save view","save filters and columns","save filters and layout"]
  },
  {
    action: "define",
    object: "go percent get percent",
    scope: "module",
    question: "What's the difference between Go % and Get %?",
    answer: "Both appear as separate percentage fields/columns on Opportunities and in the Forecast Report (e.g. Go% Weighted Value vs. Get% Weighted Value), used alongside Win Probability and AI Probability as distinct probability/likelihood measures feeding weighted-value calculations. The exact business meaning of each beyond that isn't further defined in the product.",
    tags: ["go percent","get percent","probability metrics"]
  },
  {
    action: "define",
    object: "win probability field",
    scope: "module",
    question: "What is the difference between Win Probability (%), AI Probability, and Probability (Manual/AI)?",
    answer: "**Win Probability (%)** and **AI Probability** are tracked as separate columns on an Opportunity, and **Probability (Manual/AI)** is a toggle/flag indicating which probability source is in effect. Correspondingly, **Weighted Value** and **AI Weighted Value** are separate weighted-value calculations — one based on manual probability entry, one AI-derived.",
    tags: ["win probability","ai probability","weighted value"]
  },
  {
    action: "define",
    object: "opportunity age",
    scope: "module",
    question: "What does \"Opportunity Age\" mean?",
    answer: "A tracked field (in days) representing how long the Opportunity has existed, shown in **Manage Columns** and the Pipeline Report as \"Opportunity Age (In Days)\".",
    tags: ["opportunity age","days open","days open field"]
  },
  {
    action: "define",
    object: "inactivity field",
    scope: "module",
    question: "What is \"Inactivity (In Days)\" vs. \"Last Interaction\"?",
    answer: "**Last Interaction** records the date of the most recent activity on the Opportunity; **Inactivity (In Days)** is the number of days elapsed since that last interaction. Both are available as columns, and Inactivity feeds the Stale Threshold logic. A related field, **Days in Current Stage** (seen in the Opportunity Aging Report and Pipeline Report), tracks how long the Opportunity has sat in its current Stage, used to gauge pipeline velocity.",
    tags: ["inactivity","last interaction","days in stage","last interaction field"]
  },
  {
    action: "define",
    object: "stage threshold",
    scope: "module",
    question: "What is a \"Stage Threshold\" and how is it different from \"Stale Threshold\"?",
    answer: "**Stage Threshold (In Days)** is configured per Stage in **Settings → Stages & Statuses Configuration** and drives the \"Stage Threshold Notification\" column (flagging opportunities that have lingered too long in a specific stage). **Stale Threshold** is a single, module-wide setting in **Settings → Opportunities Form** based on overall inactivity, feeding the dashboard's Stale Opportunities KPI. They apply at different scopes — per-stage vs. whole-opportunity.",
    tags: ["stage threshold","stale threshold difference","stale threshold comparison"]
  },
  {
    action: "define",
    object: "responsibility chain role",
    scope: "module",
    question: "What's the difference between Site Representative, Corporate Lead, and Executive Lead?",
    answer: "All three are searchable people-picker roles assignable to any system user/contact, used both on **Create Opportunity** and in **Account Assignment**. They represent three levels of the responsibility chain for a customer account — an on-the-ground Site Representative, a Corporate Lead, and an Executive Lead — pre-populated from the Account Assignment registry when a matching Customer/Market Type combination exists.",
    tags: ["site representative","corporate lead","executive lead","site representative corporate lead executive lead"]
  },
  {
    action: "define",
    object: "market type field",
    scope: "module",
    question: "What is Market Type vs. Sub Market Type?",
    answer: "**Market Type** is the top-level segment an Opportunity or Account Assignment belongs to (e.g. Highway, Residential, Infrastructure, Interiors). **Sub Market Type** is a more granular classification nested under it, tracked as a separate field/column throughout the module.",
    tags: ["market type","sub market type"]
  },
  {
    action: "view",
    object: "manage columns button",
    scope: "module",
    question: "Why don't I see a Manage Columns button on the Opportunities list?",
    answer: "You're likely in **Grid View** or **Kanban View** — **Manage Columns** only appears in **Table View**.",
    tags: ["manage columns missing","grid view","kanban view","missing manage columns"]
  },
  {
    action: "view",
    object: "opportunities list",
    scope: "module",
    question: "Why is the Opportunities list showing \"No Data Available\", with no row actions?",
    answer: "There are no Opportunity records created yet in this environment — which currently requires the Lead-stage Status configuration fix to resolve (see **Why can't I select a Status when creating an opportunity?**). Once records exist, an **Actions** column exposes per-row actions, following the same pattern seen on Customers, Owners, and Competitors (History, Edit, Delete, Notes).",
    tags: ["no data available","no opportunities","empty list"]
  },
  {
    action: "define",
    object: "filters vs manage columns",
    scope: "module",
    question: "What's the difference between Filters and Manage Columns?",
    answer: "**Filters** controls which rows/records are shown, based on field criteria (e.g. only opportunities above a certain value). **Manage Columns** controls which fields/columns are visible and in what order, without changing which records show.",
    tags: ["filters vs columns","row filtering","column visibility","row filtering vs column visibility"]
  },
  {
    action: "view",
    object: "customer interaction history",
    scope: "module",
    question: "How do I see a customer's interaction history?",
    answer: "1. Go to **Opportunities Management → Customers Interactions**.\n2. Click a row's **Customer Name** to open its contact list.\n3. Click a specific **Contact** card to open the interaction workspace.\n4. Use the sub-tabs (Call Logs, Mails, Events, Meetings, Task, Comments, Notes, See History) to view or log that interaction type.",
    tags: ["customer history","contact log","crm","crm contact log"]
  },
  {
    action: "define",
    object: "customer notes button",
    scope: "module",
    question: "What is the \"Notes\" button on the Customer Interactions list for?",
    answer: "Each customer row on the top-level list has its own **Notes** cell/button that opens a \"Customer Form Chat\" side panel — a running notes/chat log tied to that customer as a whole, not to an individual contact.",
    tags: ["customer notes","customer form chat"]
  },
  {
    action: "track",
    object: "call log",
    scope: "module",
    question: "How do I log a call with a customer contact?",
    answer: "Open the contact's interaction workspace, go to the **Call Logs** sub-tab, and click its **+ Create** button to add a new entry (Call Type, Date, Time, Summary, Tag, Attachments).",
    tags: ["call log","log a call","log customer call"]
  },
  {
    action: "create",
    object: "customer contact note",
    scope: "module",
    question: "How do I write a note on a customer contact?",
    answer: "Open the contact's interaction workspace, go to the **Notes** sub-tab, type in the rich note editor (you can also attach a file), and save.",
    tags: ["write note","note editor"]
  },
  {
    action: "define",
    object: "calendar consent error",
    scope: "module",
    question: "Why am I seeing a \"Consent Not Granted\" message on the Events, Meetings, Task, or Comments tabs?",
    answer: "These tabs integrate with your connected calendar (Google/Outlook) and require **Calendar consent** before they'll function. Go to **My Profile → Settings → Calendar consent** and grant consent, then return to the tab.",
    tags: ["consent not granted","calendar consent"]
  },
  {
    action: "view",
    object: "contact audit trail",
    scope: "module",
    question: "Where can I see a full audit trail for a customer contact?",
    answer: "Open the contact's interaction workspace and go to the **See History** sub-tab — it shows an audit/activity history for that contact (\"No history available\" when empty).",
    tags: ["audit trail","see history","contact history"]
  },
  {
    action: "view",
    object: "customer contact info",
    scope: "module",
    question: "Where do I find a customer's phone number and email?",
    answer: "Drill into **Customers Interactions → [Customer Name] → [Contact]** — the Contact card view shows Contact ID, Primary Phone, and Primary Email. The **Contacts Directory** also stores Primary/Secondary Email and Phone Number fields.",
    tags: ["customer phone","customer email","contact info","phone email"]
  },
  {
    action: "view",
    object: "executive summary kpis",
    scope: "module",
    question: "What KPIs are on the Executive Summary dashboard?",
    answer: "**Total Opportunity Value, Weighted Forecasted Value, Weighted Forecast This Quarter, Overall Win Rate (%),** and **Average Deal Size**, along with a Scenario Forecast Comparison chart, Opportunity by Stage Value, a Top Customers Performance table, and a Team Performance Leadership table.",
    tags: ["executive summary","analytics kpis","analytics dashboard"]
  },
  {
    action: "view",
    object: "pipeline by business unit",
    scope: "module",
    question: "What is the Pipeline by BU tab for?",
    answer: "It breaks the pipeline down by Business Unit: summary stats (Total Opportunities, Top BU by Volume, Highest Win Rate), several charts (Opportunity Count by BU, Opportunity Value by BU, Pipeline Forecast by BU, Opportunities by BU and Region, Opportunity Stage Mix), and a **BU Performance Matrix** table (Business Unit, Lead, Proposal, Closed, Total, Win Rate).",
    tags: ["pipeline by bu","business unit analytics","bu analytics tab"]
  },
  {
    action: "filter",
    object: "analytics dashboard",
    scope: "module",
    question: "How do I share or filter an analytics dashboard?",
    answer: "Every Analytics sub-tab has a **Filters** button to narrow the data and a **share** icon to share the dashboard.",
    tags: ["share dashboard","filter analytics"]
  },
  {
    action: "track",
    object: "permit and insurance expiry",
    scope: "module",
    question: "Where do I track permit and insurance expirations?",
    answer: "The **Permit & Insurance Expiry Tracker** table, found on both the **Market & Operations** and **Executive Summary** analytics tabs.",
    tags: ["permit expiry","insurance expiry","compliance tracker"]
  },
  {
    action: "view",
    object: "proposal cycle time",
    scope: "module",
    question: "Where do I see which stage an opportunity's proposal cycle time falls into?",
    answer: "The **Proposal Cycle Time Distribution** chart on the **Market & Operations** analytics tab.",
    tags: ["proposal cycle time","cycle time distribution"]
  },
  {
    action: "export",
    object: "report",
    scope: "module",
    question: "How do I run a report?",
    answer: "1. Go to **Opportunities Management → Reports**.\n2. Click the report name (e.g. Forecast Report).\n3. Use Filters / Sort By to narrow data, then Export — or for Huddle Report / Pipeline Gantt View, set parameters and click Generate.\n4. Use the back arrow next to the report title to return to the list.",
    tags: ["reports","export","forecast","run a report"]
  },
  {
    action: "configure",
    object: "report columns",
    scope: "module",
    question: "How do I customize which columns show in a report?",
    answer: "Reports share the same toolbar pattern as the main Opportunities list: use **Manage Columns** to add/remove/reorder columns, the same way you would on the Opportunities table.",
    tags: ["report columns","manage columns reports"]
  },
  {
    action: "define",
    object: "aging report vs pipeline report",
    scope: "module",
    question: "What's the difference between the Opportunity Aging Report and the Pipeline Report?",
    answer: "The **Opportunity Aging Report** is narrowly focused on staleness/velocity metrics — Days In Current Stage, Days Since Last Activity, Stale Flag, Aging Status. The **Pipeline Report** is the most complete field set in the whole module, covering nearly every field on an Opportunity record (identifiers, financials, dates, contacts, hierarchy) rather than just aging-related metrics.",
    tags: ["aging report vs pipeline report","report comparison"]
  },
  {
    action: "export",
    object: "huddle report",
    scope: "module",
    question: "How do I generate the Huddle Report?",
    answer: "1. Go to **Reports → Huddle Report**.\n2. Select a **BD Representative** and a **Date Range**.\n3. Optionally use **Save Filters** / **Clear Filters**.\n4. Click **Generate** to produce a downloadable report.",
    tags: ["huddle report","bd representative","generate huddle report"]
  },
  {
    action: "view",
    object: "pipeline gantt view",
    scope: "module",
    question: "What is the Pipeline Gantt View for?",
    answer: "A Gantt-chart timeline of opportunities, with a granularity toggle (**Daily / Weekly / Monthly / Quarterly / Yearly**), a date-range picker, Filters, and download/save icons.",
    tags: ["pipeline gantt view","gantt timeline","gantt timeline report"]
  },
  {
    action: "view",
    object: "customer win rate",
    scope: "module",
    question: "Where do I find win rate by customer?",
    answer: "**Reports → Customer Win Rate Report**, or the **Top Customers Performance** table on the **Executive Summary** analytics tab.",
    tags: ["customer win rate","win rate report"]
  },
  {
    action: "assign",
    object: "account assignment",
    scope: "module",
    question: "How do I assign a customer account to a responsibility chain?",
    answer: "1. Go to **Opportunities Management → Account Assignment**.\n2. Click **+ Add**.\n3. Search and select the **Customer Name**.\n4. Choose **Market Type**, **Sub Market Type**, **Tier**.\n5. Pick **Site Representative**, **Corporate Lead**, **Executive Lead**.\n6. Click **Submit**.",
    tags: ["account assignment","site representative","corporate lead","responsibility chain"]
  },
  {
    action: "define",
    object: "site representative auto-fill",
    scope: "module",
    question: "Why does Create Opportunity automatically fill in the Site Representative field?",
    answer: "Because a matching **Account Assignment** record exists for that Customer/Market Type combination — the assignment registry pre-populates the Site Representative, Corporate Lead, and Executive Lead pickers when it finds a match.",
    tags: ["auto-fill site representative","account assignment match"]
  },
  {
    action: "define",
    object: "account assignment vs contacts directory",
    scope: "module",
    question: "What's the difference between Account Assignment and the Contacts Directory?",
    answer: "**Account Assignment** maps a Customer account to internal responsible personnel (Site Representative, Corporate Lead, Executive Lead) by market segment/location — it's about internal ownership of the relationship. The **Contacts Directory** is the external people directory — the actual contacts at Customer and Owner organizations.",
    tags: ["account assignment vs contacts directory","module comparison"]
  },
  {
    action: "create",
    object: "task",
    scope: "module",
    question: "How do I create a task linked to an Opportunity?",
    answer: "1. Open the **Task** shortcut icon in the module's tab bar.\n2. Click **+ Add Task**.\n3. Fill in **Name*** and **Date*** (required), and optionally Description and Time.\n4. Search for and link the required **Opportunity***.\n5. Click **Create** (or Cancel to discard).",
    tags: ["create task","link task to opportunity"]
  },
  {
    action: "view",
    object: "module calendar",
    scope: "module",
    question: "How do I see all module-related events on a calendar?",
    answer: "Open the **Calendar** shortcut icon — it shows a full month-view calendar of module-related events (opportunity due dates, meetings, follow-ups), with a mini date-picker, a My Calendars panel, and a daily Events list for the selected day.",
    tags: ["calendar shortcut","module events"]
  },
  {
    action: "define",
    object: "contacts directory vs customer interactions",
    scope: "module",
    question: "What's the difference between the Contacts Directory and Customers Interactions?",
    answer: "**Contacts Directory** is the master people directory — every Customer contact and Owner contact in one place, organized into Contacts (all), Customer Contacts, and Owner Contacts sub-tabs. **Customers Interactions** is where you drill into a specific customer and log/view interactions (calls, mail, meetings, notes) with their contacts. The Directory is the contact list; Customers Interactions is the activity log built on top of it.",
    tags: ["contacts directory vs customers interactions","module comparison"]
  },
  {
    action: "view",
    object: "contact fields",
    scope: "module",
    question: "What information is stored per contact in the Contacts Directory?",
    answer: "Customer/Owner (type), Customer/Owner Name, Contact ID, Salutation, First/Middle/Last Name, Suffix, Job Title, Primary Email, Secondary Email, Primary Phone Number, Work Phone Number, Primary Address (Line 1/2, Country, State, City, Zip), Secondary Address (same fields), Services Provided, and Personal Website. Use the Contacts (all), Customer Contacts, or Owner Contacts sub-tabs to narrow the list.",
    tags: ["contact fields","contacts directory fields"]
  },
  {
    action: "create",
    object: "customer",
    scope: "module",
    question: "How do I create a new customer?",
    answer: "1. Open the **Customers** shortcut and click **Create Customer**.\n2. Step 1 — **Basic Details**: enter Customer Name* (required), plus Short Name, Alias Name, Phone Number, Email, Fax Number, Url, Group, and Primary/Mailing/Billing Address (use \"Same as Primary address\" as a shortcut).\n3. Step 2 — **Locations & Tax Codes**.\n4. Step 3 — **Preview**, then submit.",
    tags: ["create customer","new customer wizard"]
  },
  {
    action: "define",
    object: "poc ocr",
    scope: "module",
    question: "What is POC OCR?",
    answer: "An option on the **Create Customer** split button that lets you scan a business card or document to auto-populate a contact's details, rather than typing them manually.",
    tags: ["poc ocr","scan business card"]
  },
  {
    action: "edit",
    object: "customer record",
    scope: "module",
    question: "How do I edit, delete, or view the history of a customer record?",
    answer: "Open the customer card's three-dot menu — it offers **Edit** (opens the record in an editable form), **Delete**, and **History** (audit/change history).",
    tags: ["edit customer","delete customer","customer history","delete customer history"]
  },
  {
    action: "edit",
    object: "duplicate customer",
    scope: "module",
    question: "How do I merge two duplicate customer records?",
    answer: "Click **Merge Duplicates** in the Customers toolbar.",
    tags: ["merge duplicates","duplicate customer"]
  },
  {
    action: "edit",
    object: "customer",
    scope: "module",
    question: "How do I turn a Customer into an Owner, or group customers together?",
    answer: "Use **Convert Customers to Owners** to migrate a customer record, or **Add Groups** to group customers — both are buttons in the Customers toolbar.",
    tags: ["convert customer to owner","add groups","convert to owner add groups"]
  },
  {
    action: "define",
    object: "customer vs owner",
    scope: "module",
    question: "What's the difference between a Customer and an Owner?",
    answer: "A **Customer** is a customer account/company that can be linked to Opportunities. An **Owner** is the project Owner organization — the client entity that owns/commissions a project. The two lists can overlap (a Customer can become an Owner via Convert Customers to Owners), but they're tracked as separate master lists.",
    tags: ["customer vs owner","terminology"]
  },
  {
    action: "create",
    object: "owner",
    scope: "module",
    question: "How do I create a new Owner from Opportunity Management?",
    answer: "Open the **Owners** shortcut and click **Create Owner**. Editing/deleting an Owner uses the same three-dot menu pattern as Customers and Competitors; the Owners screen also has its own Settings shortcut alongside Create Owner, Search, Export, and Filters.",
    tags: ["create owner shortcut","owners sidebar"]
  },
  {
    action: "create",
    object: "competitor",
    scope: "module",
    question: "How do I add a competitor?",
    answer: "1. Open the **Competitors** shortcut and click **Create Competitor**.\n2. Enter **Competitor Name*** (required).\n3. Select **Competitor Type*** (required — Direct, Indirect, or Replacement Competitor).\n4. Optionally add a Description.\n5. Click **Submit** (or Cancel to discard).",
    tags: ["add competitor","create competitor"]
  },
  {
    action: "view",
    object: "competitor field",
    scope: "module",
    question: "Where do competitors show up once created?",
    answer: "They populate the searchable **Competitors** field/column on Opportunities, letting you track which competing firms are pursuing the same job.",
    tags: ["competitors field","track competing firms"]
  },
  {
    action: "define",
    object: "status dropdown error",
    scope: "module",
    question: "Why can't I select a Status when creating an opportunity?",
    answer: "The **Status** dropdown is populated from whatever Statuses are configured for the current Stage under **Settings → Stages & Statuses Configuration**. If the **Lead** stage has no Statuses added, the dropdown is empty and the Create Opportunity dialog cannot be submitted.\n\n**Fix:** An admin should go to Settings → Stages & Statuses Configuration → Lead stage, and add at least one Status (e.g. \"New\", \"Contacted\", \"Qualified\").",
    tags: ["status missing","lead stage","stages and statuses","status missing troubleshoot"]
  },
  {
    action: "create",
    object: "status",
    scope: "module",
    question: "How do I add a new Status to a Stage?",
    answer: "1. Go to **Settings → Stages & Statuses Configuration**.\n2. Select the Stage you want to edit.\n3. Add the new status name under that Stage's Allowed Statuses.\n4. For the **Closed** stage specifically, also classify the status as **Success** or **Failure** (e.g. Won = Success; Lost, Cancelled, No Bid = Failure).",
    tags: ["add status","stage status configuration","add status to stage"]
  },
  {
    action: "configure",
    object: "pipeline stage",
    scope: "module",
    question: "How do I add a whole new Stage, or reorder existing stages, in the pipeline?",
    answer: "Go to **Settings → Stages & Statuses Configuration** and use **Add Stages** to add one, or **Reorder Stages** to change the pipeline order.",
    tags: ["add stage","reorder stages","add stage reorder stages"]
  },
  {
    action: "configure",
    object: "stale threshold",
    scope: "module",
    question: "Where do I set the Stale Threshold?",
    answer: "**Settings → Opportunities Form → Stale Threshold** — set the number of Days of inactivity after which an opportunity is flagged \"stale.\" This feeds the dashboard's Stale Opportunities KPI.",
    tags: ["stale threshold setting","opportunities form","opportunities form setting"]
  },
  {
    action: "create",
    object: "custom field",
    scope: "module",
    question: "How do I add a custom field to the Create Opportunity form?",
    answer: "Go to **Settings → Opportunities Form → Configurable Fields** and add the custom field there. **Standard Fields** in the same section covers the built-in fields.",
    tags: ["configurable fields","custom field opportunity form","configurable fields opportunity form"]
  },
  {
    action: "configure",
    object: "opportunity id format",
    scope: "module",
    question: "Where do I configure the Opportunity ID format?",
    answer: "**Settings → ID Settings.** Choose an ID Separator (`/`, `-`, or None) and compose the ID from Business Unit, Year, and Serial No./ID components. **Child ID Settings** configures the format for child opportunities separately.",
    tags: ["id settings","opportunity id format"]
  },
  {
    action: "configure",
    object: "expense tracking",
    scope: "module",
    question: "Where do I manage expense tracking for a pursuit?",
    answer: "**Settings → Expense**, which has two sub-tabs: **Form** (Table Standard Fields — S.No, Expense Type, Item Name, Quantity, Unit Price, Amount, Comments — plus Configurable Fields) and **Approval Workflow**.",
    tags: ["expense settings","expense form"]
  },
  {
    action: "configure",
    object: "business development catalog",
    scope: "module",
    question: "Where are the Business Development and Project Types catalogs maintained?",
    answer: "**Settings → Business Development** maintains a list of BD codes/representatives (Serial Number, VP Business Unit, Description, Actions). **Settings → Project Types** maintains the project/work-type catalog (category such as FIELD or SHOP, material, and status flags).",
    tags: ["business development catalog","project types catalog"]
  },
  {
    action: "define",
    object: "customer relation settings",
    scope: "module",
    question: "What does Customer Relation configure?",
    answer: "**Settings → Customer Relation** sets a **Look Back Window (In Days)** and an **SLA (In Hours)** used for customer-relationship/response tracking.",
    tags: ["customer relation settings","sla","look back window sla"]
  },
  {
    action: "configure",
    object: "opportunity type list",
    scope: "module",
    question: "Where do I manage the Opportunity Type list or create Milestone Templates?",
    answer: "**Settings → Opportunity Type** is a simple maintained list (Serial Number, Opportunity Type, Actions). **Settings → Milestone Templates** has Milestone Templates and Master Milestones sub-tabs with a Create button.",
    tags: ["opportunity type list","milestone templates"]
  },
  {
    action: "configure",
    object: "competitor form",
    scope: "module",
    question: "How do I customize the Competitor creation form?",
    answer: "**Settings → Competitor Form** lets you customize the Competitor create form's standard and configurable fields.",
    tags: ["competitor form settings","customize competitor fields"]
  },
  {
    action: "configure",
    object: "user group permissions",
    scope: "module",
    question: "How do I manage who can access Opportunity Management and what they can do?",
    answer: "Go to **Settings → Users and Permissions**. Manage existing User Groups (e.g. Opportunity Manager, Opportunity Estimator) via a three-dot menu offering Permissions and Users management, or click **Add User Group** to create a new group and configure its Permissions and Users.",
    tags: ["opportunity permissions","user groups"]
  },
  {
    action: "define",
    object: "module naming",
    scope: "module",
    question: "Why is the module sometimes called \"Leads Management\" and sometimes \"Opportunities Management\"?",
    answer: "This is a per-context terminology setting. When the module is opened from **Home** with no project selected, it's labeled **Opportunities Management** with an **Opportunities** tab. When opened while a construction Project is in context, it's labeled **Leads Management** with a **Leads** tab and a project badge next to the Arena logo. The screens, fields, and functionality are identical either way.",
    tags: ["leads vs opportunities","module naming"]
  },
  {
    action: "define",
    object: "module scope",
    scope: "module",
    question: "Is Opportunity Management tied to a specific construction project?",
    answer: "No. The module is company-wide, not tied to a single project. It covers a personal dashboard, the Opportunity list/board, a customer-interaction CRM log, analytics, reports, and account assignment across the whole business.",
    tags: ["company-wide module","project scope"]
  },
  {
    action: "define",
    object: "opportunities vs leads terminology",
    scope: "module",
    question: "Opportunities vs. Leads — is there a difference?",
    answer: "No functional difference. \"Opportunity\" and \"Lead\" are two labels for the same module and the same records, chosen based on context: **Opportunities** when the module is reached from Home with no project selected, **Leads** when reached with a construction Project in context. Screens, fields, and functionality are identical.",
    tags: ["opportunities vs leads","terminology"]
  },
  {
    action: "define",
    object: "customer vs contact",
    scope: "module",
    question: "What's the difference between a Customer and a Contact?",
    answer: "A **Customer** is the company/account record. A **Contact** is an individual person associated with that Customer (or an Owner), tracked in the Contacts Directory and drilled into from Customers Interactions. A single Customer can have multiple Contacts.",
    tags: ["customer vs contact","terminology"]
  },
  {
    action: "define",
    object: "create opportunity blocked",
    scope: "module",
    question: "Why can't I submit the Create Opportunity form even after filling in the Contact section fields?",
    answer: "The Contact section fields (Customer Groups, Site Representative, Corporate Lead, Executive Lead) are optional. The blocker is almost always the required **Status** field being empty because of the Lead-stage configuration gap — check that first (see **Why can't I select a Status when creating an opportunity?**).",
    tags: ["create opportunity blocked","contact fields optional"]
  },
  {
    action: "view",
    object: "empty catalog list",
    scope: "module",
    question: "Why are the Opportunity Type list and Milestone Templates empty?",
    answer: "No entries have been added yet — **Settings → Opportunity Type** and **Settings → Milestone Templates** (Milestone Templates and Master Milestones sub-tabs) are empty by default until an administrator adds entries, using **Create** for Milestone Templates.",
    tags: ["empty opportunity type list","empty milestone templates","opportunity type milestone templates empty"]
  }
];

const QA_EQUIPMENT = [
  {
    action: "create",
    object: "equipment",
    scope: "module",
    question: "How do I add a new piece of equipment?",
    answer: "1. Go to **Home → Asset Management**, ensure **Asset Master → Company Owned Asset** is selected.\n2. Click **+ Asset**.\n3. In the **Add Asset** modal, fill **Asset Name***, **Asset ID***, **Asset Description***, **Replacement Value***, **Current Location*** (all required).\n4. Optionally fill Manufacturer, Model, Model Year, and attach an image/files.\n5. Click **Submit** — the asset appears with status **Ready to Rent**.",
    tags: ["add asset","create equipment","new equipment","add asset form"]
  },
  {
    action: "view",
    object: "equipment history",
    scope: "module",
    question: "How do I check an equipment item's full history?",
    answer: "Click the **history** icon on the item's row in Asset Master. This opens the **Equipment Log**: every request, check-in, check-out, shipment, and shop-in event, with who performed it and when.",
    tags: ["equipment history","audit log","see history","equipment log"]
  },
  {
    action: "delete",
    object: "equipment",
    scope: "module",
    question: "How do I delete or retire an equipment item?",
    answer: "Click the red **delete** icon on the item's row. This is only enabled if the equipment is **not currently checked out** or in use elsewhere — check it in via the Load Out Request flow first if needed.",
    tags: ["delete equipment","retire asset","retire equipment"]
  },
  {
    action: "define",
    object: "company owned vs 3rd party asset",
    scope: "module",
    question: "What's the difference between Company Owned Asset and 3rd Party Asset?",
    answer: "Company Owned Asset tracks equipment the company itself owns. 3rd Party Asset tracks equipment/accessories that belong to (or are leased from) an outside party, and is used together with the 3rd Party LOR / Lease Agreement workflow.",
    tags: ["company owned asset","3rd party asset","asset ownership type"]
  },
  {
    action: "define",
    object: "asset vs accessory",
    scope: "module",
    question: "What's the difference between an Asset and an Accessory in Asset Master?",
    answer: "Assets are the equipment items themselves (tracked on **Company Owned Asset**); Accessories are attachments/consumables linked to equipment, tracked on **Company Owned Accessory**. The Accessory sub-tab shows a **Related Assets** column linking accessories back to the equipment they belong to.",
    tags: ["asset vs accessory","equipment terminology"]
  },
  {
    action: "create",
    object: "accessory",
    scope: "module",
    question: "How do I add a new accessory?",
    answer: "On the **Company Owned Accessory** sub-tab, click **+ Accessory** (the same button becomes + Accessory here instead of + Asset) and fill in the equivalent accessory details, then Submit.",
    tags: ["add accessory","company owned accessory"]
  },
  {
    action: "edit",
    object: "equipment record",
    scope: "module",
    question: "How do I edit an equipment record?",
    answer: "1. Locate the row in Asset Master (use Search or Filters if needed).\n2. Click the **edit** (pencil) icon on that row.\n3. Update the fields in the pre-filled form and click **Submit**.",
    tags: ["edit equipment","update asset"]
  },
  {
    action: "delete",
    object: "equipment",
    scope: "module",
    question: "Why can't I delete a piece of equipment?",
    answer: "The delete icon is disabled while the equipment is currently checked out or in use elsewhere. You must wait until it's checked in / shopped in before it can be deleted.",
    tags: ["cannot delete equipment","delete disabled","delete disabled troubleshoot"]
  },
  {
    action: "view",
    object: "maintenance records",
    scope: "module",
    question: "How do I see maintenance records for a specific asset?",
    answer: "Click the **Maintenance Records** icon on that equipment's row — it's only shown for assets that have scheduled maintenance. You can also check the **Maintenance Records** column in the grid.",
    tags: ["maintenance records icon","asset maintenance history"]
  },
  {
    action: "edit",
    object: "equipment location",
    scope: "module",
    question: "How do I change an equipment's current location?",
    answer: "Click the **edit** (pencil) icon on the equipment's row to open the Add/Edit Asset form, then update the **Current Location** field (a dropdown of Inventory Locations) and Submit.",
    tags: ["change equipment location","current location","current location field"]
  },
  {
    action: "create",
    object: "inventory location",
    scope: "module",
    question: "How do I add a new inventory location?",
    answer: "1. Click **Inventory Locations** in Asset Master.\n2. Click **Add Location**.\n3. Fill in the location name and physical address/location.",
    tags: ["inventory location","add location"]
  },
  {
    action: "define",
    object: "equipment status chip",
    scope: "module",
    question: "What do the different equipment status chips mean (Ready to Rent, On Rent - Project, Pending Shipment, etc.)?",
    answer: "These are live counts shown as colored chips above the Asset Master grid, each representing how many items are currently in that state: **Ready to Rent** (available, the default status for new equipment), **On Rent – Project** (checked out to an internal job), **Pending Shipment** (checked out, awaiting shipment), **On Rent – Customer** (leased to a 3rd party), and **Checked In** (returned). Clicking a chip filters the grid to that status.",
    tags: ["status chips","ready to rent","on rent","ready to rent on rent"]
  },
  {
    action: "filter",
    object: "equipment list",
    scope: "module",
    question: "How do I export or filter the equipment list?",
    answer: "Click **Export** to extract the inventory list to Excel. Click **Filters** to open the filter panel — filter by Status, Location, Loadout Request, Checkout By, Check By, or Received By; click Submit to apply, click the Save icon to persist the filter for reuse, or Clear to remove an active filter.",
    tags: ["export equipment list","filter equipment"]
  },
  {
    action: "configure",
    object: "asset master view",
    scope: "module",
    question: "How do I switch between grid and table view, or add a custom column, in Asset Master?",
    answer: "Use the view-mode toggle (grid/card icon and table icon) near the top of the screen to switch between Grid View and Table View. To add a custom column, click **Add Custom Column** and choose a type: Text, Single Select, Multi-select, or Date.",
    tags: ["custom column","grid view table view","custom column grid table view"]
  },
  {
    action: "define",
    object: "return date fields",
    scope: "module",
    question: "What's the difference between Planned Return Date, Actual Return Date, and Overdue Days?",
    answer: "**Planned Return Date** is the date the equipment was expected back (set at request/checkout time); **Actual Return Date** is the date it was actually checked in. **Overdue Days** shows how many days an item is overdue against its Planned Return Date when no Actual Return Date has been logged yet.",
    tags: ["planned return date","actual return date","overdue days","planned actual return overdue days"]
  },
  {
    action: "create",
    object: "maintenance package",
    scope: "module",
    question: "How do I set up a recurring maintenance schedule?",
    answer: "1. Go to **Asset Setup**, click **Create Maintenance Package**.\n2. Enter Package Name and Description; Submit.\n3. **List Equipment**: Add Equipment to select items.\n4. **Identify Forms**: Add Form, tick required forms, Submit.\n5. **Prepare Schedule**: choose Recurrence Type, Start/End dates, Time.\n6. **Assign Crew**: select responsible individuals/crew, Save.",
    tags: ["maintenance package","schedule maintenance","recurring","recurring maintenance schedule"]
  },
  {
    action: "define",
    object: "maintenance package wizard steps",
    scope: "module",
    question: "What are the four steps of the Create Maintenance Package wizard?",
    answer: "**List Equipment** (pick equipment/accessories), **Identify Forms** (attach maintenance forms), **Prepare Schedule** (set recurrence, dates, time), and **Assign Crew** (assign users/crews responsible).",
    tags: ["maintenance package steps","wizard steps","create maintenance package"]
  },
  {
    action: "define",
    object: "maintenance recurrence type",
    scope: "module",
    question: "What's the difference between a Daily/Weekly recurrence and a Check Out/Check In recurrence?",
    answer: "Daily and Weekly recurrence trigger the maintenance form on a calendar cadence (a specific date/time). Check Out and Check In recurrence instead trigger the form automatically as part of the equipment's checkout or check-in step in the Load Out Request flow, rather than on a fixed schedule.",
    tags: ["recurrence type","check out recurrence","check in recurrence","check out check in recurrence"]
  },
  {
    action: "assign",
    object: "maintenance schedule crew",
    scope: "module",
    question: "How do I assign a maintenance schedule to specific people?",
    answer: "In the **Assign Crew** step of the Create Maintenance Package wizard, select individual users or whole Crews responsible for that maintenance — the schedule then appears on each assignee's personal calendar and becomes fillable at the scheduled time.",
    tags: ["assign crew","maintenance schedule assignment"]
  },
  {
    action: "define",
    object: "maintenance logs vs asset setup",
    scope: "module",
    question: "What is \"Equipment Setup - Maintenance Logs\" and how is it different from Asset Setup?",
    answer: "It's a closely related admin screen that follows the identical 4-step pattern (List Items / Identify Forms / Prepare Schedule / Assign Crew) but additionally has a parallel **Utilization** tab, letting you schedule utilization logs the same way maintenance logs are scheduled.",
    tags: ["maintenance logs","utilization setup"]
  },
  {
    action: "track",
    object: "scheduled maintenance activity",
    scope: "module",
    question: "How do I log a scheduled maintenance activity?",
    answer: "1. Go to **Field Inspections → Maintenance**, switch to **Calendar**.\n2. Pick the due date — forms show color-coded (Blue = ready).\n3. Open the form, fill required fields, Submit — turns Green once complete.\n4. If a check fails, raise an **issue** directly from that field — it's logged to **Asset Issues** automatically.",
    tags: ["scheduled maintenance","field inspection","field inspection log"]
  },
  {
    action: "create",
    object: "equipment photo",
    scope: "module",
    question: "How do I upload equipment photos?",
    answer: "1. Go to **Field Inspections → Equipment Photos**.\n2. Select the equipment/accessory from the left list.\n3. Click **Add**, then Upload File to select one or more images.\n4. Optionally annotate using the markup tools, then **Save**.",
    tags: ["equipment photos","upload image","upload equipment photo"]
  },
  {
    action: "define",
    object: "maintenance vs utilization tab",
    scope: "module",
    question: "What's the difference between the Maintenance and Utilization tabs in Field Inspections?",
    answer: "Both work the same way (calendar-driven scheduled entries plus ad-hoc list entries), but **Maintenance** logs maintenance/inspection activity while **Utilization** logs ad-hoc utilization entries — they mirror each other in structure.",
    tags: ["maintenance vs utilization tab","field inspections tabs"]
  },
  {
    action: "create",
    object: "ad-hoc inspection",
    scope: "module",
    question: "How do I log an ad-hoc (unplanned) inspection?",
    answer: "1. Go to **Field Inspections → Maintenance** (or Utilization) and switch to the list/ad-hoc tab.\n2. Select the relevant form category on the left.\n3. Click **Create Form**, complete the fields, and Submit — it appears as a new card with Download, Share, Print, and Chat available.",
    tags: ["ad-hoc inspection","create form"]
  },
  {
    action: "edit",
    object: "maintenance form",
    scope: "module",
    question: "How do I edit a maintenance form after it's been submitted?",
    answer: "Click the card for that submitted form to re-open it for review/editing — each card also offers Download, Share, Print, and a Chat panel for collaborative notes.",
    tags: ["edit submitted form","reopen maintenance form","reopen submitted form"]
  },
  {
    action: "edit",
    object: "equipment photo",
    scope: "module",
    question: "How do I view, annotate, or delete an equipment photo?",
    answer: "Click \"Click to View\" on a photo to open a viewer with next/previous arrows. Use the built-in annotation tools below the image to mark it up, then click **Save** to persist the markup. Use the kebab (⋮) menu in the viewer to **Delete** the photo.",
    tags: ["view photo","annotate photo","delete photo","annotate delete photo"]
  },
  {
    action: "define",
    object: "trigger point",
    scope: "module",
    question: "What is a trigger point on a maintenance form?",
    answer: "A trigger point is a checkbox configured per field in the form builder (**Setup Trigger Points**) that lets end-users raise an issue or note directly from that field if the checkpoint fails during an inspection. A triggered issue is logged automatically under **Asset Issues**.",
    tags: ["trigger point","setup trigger points"]
  },
  {
    action: "define",
    object: "scheduled vs ad-hoc inspection",
    scope: "module",
    question: "What's the difference between a scheduled maintenance form and an ad-hoc inspection?",
    answer: "A scheduled form is generated automatically by a maintenance package's Prepare Schedule settings (Daily/Weekly/Check Out/Check In) and shows up on the Equipment Maintenance Calendar at the right time. An ad-hoc inspection is created manually at any time via Create Form on the list tab, without being tied to a pre-set schedule.",
    tags: ["scheduled vs ad-hoc inspection","inspection type comparison"]
  },
  {
    action: "edit",
    object: "equipment issue",
    scope: "module",
    question: "How do I resolve an equipment issue?",
    answer: "1. Go to **Asset Issues**, locate the issue via Search/Filters.\n2. Review details, add notes in **Chat** if collaborating.\n3. Once fixed, click **Rectify** — status becomes Rectified and the linked form re-opens for completion.\n4. Optionally click **Create Work Order** if formal remediation tracking is needed.",
    tags: ["resolve issue","rectify","equipment issue","resolve rectify issue"]
  },
  {
    action: "define",
    object: "asset issue vs ncr",
    scope: "module",
    question: "What's the difference between an Asset Issue and a Non-Conformance Report?",
    answer: "Asset Issues are typically raised automatically from a failed trigger-point check during a maintenance form, inspection, or an LOR check-out/check-in stage. NCRs are created manually (via + Add on the Non Conformance Report tab) to formally track a non-conformance event. Both use the same card/table view, Rectify workflow, Chat, Assign To/Due Date, and Create Work Order pattern, but they are separate, independently tracked records.",
    tags: ["asset issue vs ncr","issue comparison"]
  },
  {
    action: "create",
    object: "work order",
    scope: "module",
    question: "How do I create a Work Order from an equipment issue?",
    answer: "Click **Create Work Order** on the issue (or NCR) — this spins up a Work Order directly from it to track remediation labor/cost.",
    tags: ["create work order from issue"]
  },
  {
    action: "delete",
    object: "asset issue",
    scope: "module",
    question: "How do I delete, export, or change the view for issues and NCRs?",
    answer: "Use the kebab (⋮) menu on a card for Delete; click Export to download all records to Excel; and use the table view toggle (top-right) to switch away from the default card view.",
    tags: ["delete issue","export issues","table view toggle","export issues table view toggle"]
  },
  {
    action: "view",
    object: "issue header counters",
    scope: "module",
    question: "What do the header counters mean on Asset Issues / NCR?",
    answer: "They show totals for the tab: total issues (or NCRs), how many have been raised, and how many have been rectified.",
    tags: ["header counters","issue totals"]
  },
  {
    action: "create",
    object: "non conformance report",
    scope: "module",
    question: "How do I raise and close a Non-Conformance Report?",
    answer: "1. Go to **Non Conformance Report**, click **+ Add**.\n2. Fill in NCR details and submit.\n3. Assign an owner (**Assign To**) and **Due Date**.\n4. Use Chat to document remediation steps.\n5. Once corrected, click **Rectify** to close it out.",
    tags: ["ncr","non conformance report","raise and close ncr"]
  },
  {
    action: "define",
    object: "rectify action",
    scope: "module",
    question: "What does \"Rectify\" do on an Issue vs. on an NCR?",
    answer: "In both cases, **Rectify** marks the record as Rectified. On an Asset Issue, it additionally re-enables the associated maintenance form for completion/re-submission. On an NCR it simply closes the report out as resolved.",
    tags: ["rectify behavior","issue vs ncr rectify"]
  },
  {
    action: "define",
    object: "rectify behavior",
    scope: "module",
    question: "What's the difference between Asset Issues' Rectify and an NCR's Rectify?",
    answer: "Functionally similar — both set status to Rectified. On an Asset Issue, Rectify additionally re-enables the linked maintenance form so it can be completed/resubmitted; an NCR's Rectify simply closes the report, with no equivalent form-reopening behavior described.",
    tags: ["asset issue rectify vs ncr rectify"]
  },
  {
    action: "create",
    object: "load out request",
    scope: "module",
    question: "How do I raise an internal Load Out Request?",
    answer: "1. Go to **Load Out Request** (Internal Job view), click **Add**.\n2. Fill Equipment/Accessory, Quantity, UOM, Requested By, Required Date, Planned Return Date, Supervisor, Job ID/Name.\n3. Submit → status **REQUESTED**. Wait for **Approve**.\n4. Warehouse staff perform **Check Out** (Assign ID, Checkout Date, Signature) per item.\n5. Perform **Ship** to send to the job site.\n6. On return, perform **Check In** per item.\n7. Perform **Shop In** to return to inventory — LOR reaches **CLOSED**.",
    tags: ["load out request","lor","checkout equipment","internal job lor"]
  },
  {
    action: "create",
    object: "3rd party load out request",
    scope: "module",
    question: "How do I raise a 3rd-party lease Load Out Request?",
    answer: "1. Go to **Load Out Request**, 3rd Party view, click **Add**.\n2. Fill the Request form (no Job Name/Location needed) and get it **Approved**.\n3. **Check Out** the equipment.\n4. Complete the **Lease Agreement**, click **Email Agreement for Approval**.\n5. Once the 3rd party approves (optionally e-signs via Adobe Sign), proceed to **Ship**.\n6. On return, **Check In**, then **Shop In** to close the LOR.",
    tags: ["3rd party lor","lease agreement","lease equipment"]
  },
  {
    action: "define",
    object: "lor status",
    scope: "module",
    question: "What does 'PARTIAL CHECK OUT' status mean?",
    answer: "It means only *some* of the requested items on that Load Out Request have been checked out so far — a single LOR can be fulfilled across multiple check-out submissions. The status becomes **CHECKED OUT** once every item on the request has been checked out.",
    tags: ["lor status","partial check out"]
  },
  {
    action: "define",
    object: "lor internal vs 3rd party",
    scope: "module",
    question: "What's different between LOR Internal Job and 3rd Party LOR?",
    answer: "The 3rd Party LOR's Request form omits **Job Name/Job Location** (there's no internal job involved), and it inserts an extra **Lease Agreement** stage after Check Out and before Ship, where both parties sign a legal document before proceeding to Ship. All other stages (Ship, Check In, Shop In, Preview) are identical between the two flows.",
    tags: ["lor internal vs 3rd party","lor flow comparison"]
  },
  {
    action: "define",
    object: "lor request form fields",
    scope: "module",
    question: "What fields are on the LOR Request form?",
    answer: "**Equipment or Accessory required, Quantity, UOM, Requested By, Required Date, Planned Return Date, Supervisor, Job ID/Job Name** (the Job ID/Job Name field is omitted on 3rd Party LOR requests).",
    tags: ["lor request fields","load out request fields"]
  },
  {
    action: "approve",
    object: "load out request",
    scope: "module",
    question: "How do I approve or reject a Load Out Request?",
    answer: "Once a request is submitted (status REQUESTED), the warehouse manager/approver sees **Approve** and **Reject** buttons on it. Clicking Approve sets the status to APPROVED and removes the buttons. Clicking Reject turns the button red and sets status to Rejected; the requester can then revise using the approver's comments and resubmit.",
    tags: ["approve lor","reject lor"]
  },
  {
    action: "define",
    object: "check out issue status",
    scope: "module",
    question: "What is \"Check Out Issue\" status, and what are my options if a maintenance check fails during checkout?",
    answer: "It occurs when a Scheduled Equipment Maintenance form tied to the Check Out stage fails a check. A confirmation dialog offers **Proceed With Issue** (continues the checkout, setting status to Check Out Issue, with the item marked \"ID – Has Issue\") or **Change Equipment** (swap in a different item instead).",
    tags: ["check out issue","proceed with issue","change equipment","proceed with issue change equipment"]
  },
  {
    action: "create",
    object: "delivery request",
    scope: "module",
    question: "Can I request transport/delivery for shipping equipment?",
    answer: "Yes — a **Delivery Request** can be created directly from the Ship page (or the Check-in page) if transport is needed. This automatically creates a Requisition (REQ) and kicks off the RFQ process.",
    tags: ["delivery request","requisition","rfq","requisition rfq"]
  },
  {
    action: "define",
    object: "hold equipment prompt",
    scope: "module",
    question: "What does \"Hold the Equipment/Accessory or Not\" mean during Check In?",
    answer: "It's a prompt shown when a maintenance form tied to the Check In stage finds an issue. Answering **No** proceeds with the check-in anyway, setting status to CHECK IN ISSUE (logged to Asset Issues). Answering **Yes** blocks the check-in until the issue is fixed.",
    tags: ["hold equipment","check in issue"]
  },
  {
    action: "define",
    object: "lor status",
    scope: "module",
    question: "What's the difference between PARTIAL CLOSED and CLOSED?",
    answer: "**CLOSED** means every item on the LOR has completed Shop In. **PARTIAL CLOSED** means only some items have been shopped in so far.",
    tags: ["partial closed vs closed"]
  },
  {
    action: "view",
    object: "lor status list",
    scope: "module",
    question: "What is the full list of possible LOR statuses, and where can I see all of an LOR's forms in one place?",
    answer: "**Requested, Approved, Rejected, Check Out, Partial Check Out, Check Out With Issue, Ship In, Partial Ship In, Check In, Partial Check-In, Check In With Issue, Shop In, Partial Closed, Closed.** The **Preview** tab on an LOR shows the full collected set of forms (Request, Check Out, Ship, Check In, Shop In) in one place.",
    tags: ["lor status list","lor preview"]
  },
  {
    action: "view",
    object: "load out request history",
    scope: "module",
    question: "How do I view the full history of a Load Out Request?",
    answer: "Click the kebab (⋮) menu on the LOR card and select **See History** — this opens the full Equipment Log of requests, check-ins, check-outs, shipments, and shop-ins, including who performed each and when.",
    tags: ["lor history","see history"]
  },
  {
    action: "delete",
    object: "load out request",
    scope: "module",
    question: "How do I delete a Load Out Request?",
    answer: "Click the kebab (⋮) menu on the LOR card and select **Delete**. This is only available while no equipment included in the LOR has yet been checked out — once any item has been checked out, the option disappears.",
    tags: ["delete lor"]
  },
  {
    action: "assign",
    object: "load out request",
    scope: "module",
    question: "How do I assign an LOR to another user?",
    answer: "Use the **Assign to** field on the LOR to assign it to one or more users, granting them either View or Edit permission.",
    tags: ["assign lor","view edit permission"]
  },
  {
    action: "view",
    object: "lor actions",
    scope: "module",
    question: "What per-LOR actions are available (download, share, mail, documents)?",
    answer: "Each LOR has action icons for: **Download** (PDF of the current stage's form) and **Print**; **Share** (send to other system users via System Default, Outlook, or Gmail); **Documents** (store/download all related files, and bundle all equipment's docs into one document); and **Mail** (compose email via Gmail or Outlook depending on Global Settings → Mail Settings).",
    tags: ["lor download","lor share","lor mail","download share mail documents"]
  },
  {
    action: "define",
    object: "roster field",
    scope: "module",
    question: "What is the Roster field on an LOR stage for?",
    answer: "**Roster** lets you select the acting user's name/designation at that stage. It becomes active only once an Assign ID has been chosen.",
    tags: ["roster field lor","lor stage roster"]
  },
  {
    action: "view",
    object: "lor card",
    scope: "module",
    question: "What information shows on an LOR card, and can I view LORs as a Kanban board?",
    answer: "Each card shows the selected Equipment/Accessory, Required-by Date, Created By, Workflow Level, and current Status/ID. A view toggle in the top-right of the Load Out Request tab switches between Grid View and Kanban View for both LOR Internal Job and 3rd Party LOR.",
    tags: ["lor card info","lor kanban view"]
  },
  {
    action: "configure",
    object: "lor approval workflow",
    scope: "module",
    question: "Where do I configure the approval chain for Load Out Requests?",
    answer: "Go to **LOR - Workflows**, a separate configuration screen for defining the approval chain(s) used by LOR / 3rd Party LOR requests.",
    tags: ["lor workflows","approval chain"]
  },
  {
    action: "create",
    object: "lor approval level",
    scope: "module",
    question: "How do I add a new approval level to an LOR workflow?",
    answer: "1. Go to **LOR - Workflows**.\n2. Click **Create Level**.\n3. In the pop-up, choose the level type: \"All must approve\" or \"Anyone can approve\".\n4. Pick the approvers for that level.",
    tags: ["lor approval level","create level"]
  },
  {
    action: "define",
    object: "approval level type",
    scope: "module",
    question: "What's the difference between \"All must approve\" and \"Anyone can approve\"?",
    answer: "**\"All must approve\"** requires every approver assigned to that level to approve before the LOR advances. **\"Anyone can approve\"** lets a single approver at that level clear it for everyone.",
    tags: ["all must approve","anyone can approve","all must approve anyone can approve"]
  },
  {
    action: "edit",
    object: "lor approval workflow",
    scope: "module",
    question: "What happens if I edit an existing LOR approval workflow?",
    answer: "You'll see a warning that changes affect all forms/documents already linked to that workflow — editing a live workflow is not isolated to future requests only.",
    tags: ["edit lor workflow warning","edit workflow warning"]
  },
  {
    action: "view",
    object: "lor workflow diagram",
    scope: "module",
    question: "How can I visualize the structure of an LOR approval workflow?",
    answer: "Click the tree/graph view icon in the top right of the LOR - Workflows screen to see a visual diagram of the workflow structure.",
    tags: ["lor workflow diagram","tree graph view"]
  },
  {
    action: "define",
    object: "check in vs shop in",
    scope: "module",
    question: "What's the difference between Check In and Shop In?",
    answer: "**Check In** records that equipment/accessories have returned from the field (tick returning items, add name/signature). **Shop In** is the subsequent, final step confirming the equipment has been physically placed back into its inventory location — only after Shop In does the LOR reach CLOSED.",
    tags: ["check in vs shop in","lor stage comparison"]
  },
  {
    action: "define",
    object: "lor rejected status",
    scope: "module",
    question: "Why is my Load Out Request showing \"Rejected\"?",
    answer: "The approver clicked **Reject** on your request (instead of Approve). Check the approver's comments, revise the request accordingly, and resubmit.",
    tags: ["lor rejected","troubleshoot rejected lor"]
  },
  {
    action: "define",
    object: "check out issue status",
    scope: "module",
    question: "Why do I see \"Check Out Issue\" instead of a normal checked-out status?",
    answer: "A Scheduled Equipment Maintenance form tied to the Check Out stage found a failed check, and the checkout user chose **Proceed With Issue** in the resulting confirmation dialog rather than Change Equipment.",
    tags: ["check out issue troubleshoot","troubleshoot check out issue"]
  },
  {
    action: "define",
    object: "check in blocked",
    scope: "module",
    question: "Why is my Check In blocked?",
    answer: "A maintenance form tied to the Check In stage found an issue, and when prompted \"Hold the Equipment/Accessory or Not\", the answer given was **Yes** — this blocks check-in until the issue is fixed. Answering No would instead let check-in proceed with status CHECK IN ISSUE.",
    tags: ["check in blocked troubleshoot","troubleshoot check in blocked"]
  },
  {
    action: "define",
    object: "maintenance form gating",
    scope: "module",
    question: "Why do I need to fill in a maintenance form before I can check out or check in equipment?",
    answer: "Because the equipment's maintenance package has a Recurrence Type of Check Out or Check In, meaning its scheduled form is triggered automatically at that step of the LOR flow rather than on a calendar date, and must be completed as part of that step.",
    tags: ["maintenance form required","check out check in gating"]
  },
  {
    action: "define",
    object: "partial status",
    scope: "module",
    question: "Why does my LOR still say PARTIAL CHECK OUT / PARTIAL SHIP IN / PARTIAL CHECK IN?",
    answer: "Because not all items on that LOR have completed that stage yet. These \"Partial\" statuses apply whenever some but not all of the requested items have been checked out, shipped, or checked in — the status upgrades to the full (non-partial) version once every item completes that stage.",
    tags: ["partial status troubleshoot","partial check out ship check in troubleshoot"]
  },
  {
    action: "define",
    object: "approve reject buttons missing",
    scope: "module",
    question: "Why is the Reject/Approve buttons missing from my Load Out Request?",
    answer: "Once an LOR has been Approved, the Approve/Reject buttons disappear — they are only shown while the request is in REQUESTED status awaiting a decision.",
    tags: ["approve reject missing","lor approved troubleshoot"]
  },
  {
    action: "define",
    object: "3rd party lor job name field",
    scope: "module",
    question: "Why doesn't my 3rd Party LOR request form have a Job Name field?",
    answer: "Because 3rd Party LOR is for leasing equipment out to (or in from) an external party, not for an internal job — the Request form omits Job Name/Job Location for this flow, unlike LOR Internal Job.",
    tags: ["3rd party lor no job name","missing job name troubleshoot"]
  },
  {
    action: "track",
    object: "maintenance form issue routing",
    scope: "module",
    question: "I raised an issue from a maintenance form — where did it go?",
    answer: "It's automatically logged under the **Asset Issues** tab, where it can be reviewed, assigned, and eventually marked Rectified.",
    tags: ["issue routed to asset issues"]
  },
  {
    action: "edit",
    object: "lease agreement workflow",
    scope: "module",
    question: "Why can't I edit an approved Lease Agreement's workflow without a warning?",
    answer: "Editing an existing LOR approval workflow level shows a warning because changes affect all forms/documents already linked to that workflow — not just future ones.",
    tags: ["lease agreement workflow warning","edit workflow warning"]
  },
  {
    action: "create",
    object: "maintenance form template",
    scope: "module",
    question: "How do I build or edit maintenance/inspection form templates, and how do I create a new one?",
    answer: "1. In **Global Data → Maintenance Builder** (also called Equipment Maintenance Forms), click **Create Form**.\n2. Click **Add Section** to structure the form (use the trash icon to delete a section).\n3. Click **Add Field** and choose a field type: Attachment, Check box, Date, Label, Multi select, Paragraph, Roster, Scribble, Single select, Table, Text box, Time, Signature.\n4. Use **Setup Trigger Points** to tick which fields should let end-users raise an issue if that checkpoint fails.\n5. Click **Preview** to see the form as end-users will see it, including company branding.\n6. Click **Save Changes**.",
    tags: ["maintenance builder","create form template","maintenance form builder"]
  },
  {
    action: "define",
    object: "form field types",
    scope: "module",
    question: "What field types are available in the maintenance form builder?",
    answer: "**Attachment, Check box, Date, Label, Multi select, Paragraph, Roster, Scribble** (signature/print name), **Single select, Table** (configurable rows/columns), **Text box** (default), **Time, Signature**.",
    tags: ["form field types","maintenance builder field types"]
  },
  {
    action: "define",
    object: "adobe sign integration",
    scope: "module",
    question: "What is the Adobe Acrobat Sign integration used for?",
    answer: "It lets a 3rd-party signer affix a legal e-signature to a 3rd-Party LOR Lease Agreement as part of approving it, instead of just clicking Approve/Reject.",
    tags: ["adobe sign purpose","e-signature purpose"]
  },
  {
    action: "define",
    object: "adobe sign lor usage",
    scope: "module",
    question: "Once Adobe Sign is set up, how does it get used in the LOR flow?",
    answer: "In the 3rd Party LOR flow, once equipment is checked out, the Lease Agreement emailed to the 3rd party can be digitally signed via the Adobe Sign integration as part of their approval.",
    tags: ["adobe sign lor usage","lease agreement e-sign"]
  },
  {
    action: "define",
    object: "equipment management vs asset management",
    scope: "module",
    question: "Is \"Equipment Management\" a different module from \"Asset Management\"?",
    answer: "No — they're the same module. \"Asset Management\" is the name on the Home hub tile, \"Equipment Master\" appears in the module's own breadcrumb, and \"Equipment Management\" is the name used in the underlying documentation. The UI itself mostly uses \"Asset\" in labels (Asset Master, Asset Setup, Asset Issues, + Asset).",
    tags: ["equipment management vs asset management","module naming"]
  }
];

const QA_GLOBALDATA = [
  {
    action: "edit",
    object: "company profile",
    scope: "global",
    question: "How do I update the company profile?",
    answer: "1. Global Data → **Company** tile → **Company Details** tab.\n2. Click **Upload Company Logo** to set the brand logo used across generated documents.\n3. Fill in/update the required fields (Company Name, ID, Address, City, State, Zip, Contact Person details, Company Email/Phone, optionally PAN/GST).\n4. To configure SSO, click **Add SSO Provider** under SSO Clients and complete the provider's setup.\n5. Click **Submit** to save.",
    tags: ["company profile","company logo","company details","company logo details"]
  },
  {
    action: "create",
    object: "business unit",
    scope: "global",
    question: "How do I add a business unit?",
    answer: "1. Global Data → **Business Units** → **Add**.\n2. Enter a Code and Description.\n3. Submit.",
    tags: ["business unit","add business unit"]
  },
  {
    action: "create",
    object: "owner",
    scope: "global",
    question: "How do I create a new Owner record?",
    answer: "1. Global Data → **Owners** tile → **Create Owner** (split button) → **Create Owner**.\n2. **Step 1 – Basic Details:** enter Owner Name* (required), Short Name, Alias Name, Phone Number*, Email*, Fax Number, Url; expand and fill Primary Address, optionally check **Same as Primary address** for Mailing/Billing Address.\n3. **Step 2 – Locations & Tax Codes:** click **Link Locations** to associate company Locations (with a Default flag), and **Add** under Tax Codes to attach Tax Group/Tax Class/Tax Code combinations.\n4. **Step 3 – Preview:** review all entered data.\n5. Click **Submit** to create the Owner.\n\nTo bulk-create Owners, use **Export**, which also exposes Download/Upload Excel options with a template.",
    tags: ["create owner","register owner","new owner"]
  },
  {
    action: "configure",
    object: "owner hierarchy levels",
    scope: "global",
    question: "How do I configure Owner hierarchy levels?",
    answer: "1. Owners tile → **Settings** (gear icon, top right).\n2. In \"Owner Settings,\" choose Level 1, Level 2, or Level 3 depending on how granular owner categorization should be company-wide.",
    tags: ["owner settings","owner hierarchy","owner levels"]
  },
  {
    action: "create",
    object: "delivery location",
    scope: "global",
    question: "How do I add a new company delivery location?",
    answer: "1. Global Data → **Locations** tile → **Create**.\n2. In the \"Add Location\" dialog, fill Location Name*, Address*, Zip Code, City, State.\n3. Under **Tax Codes***, click **Add** to attach one or more Tax Group/Tax Class/Tax Code entries.\n4. Click **Submit**.\n\nBulk location setup is also possible via Excel import from this screen's Export/Upload options.",
    tags: ["add location","delivery location","create location"]
  },
  {
    action: "configure",
    object: "tax group and tax code",
    scope: "global",
    question: "How do I set up tax groups and tax codes?",
    answer: "1. Global Data → **Tax Configuration** → **Add Tax Group** → enter the Group name → **Submit**.\n2. Select the new group in the left panel, then click **Add Tax Code** → enter Tax Code* and Tax Percentage* → **Submit**.\n3. Repeat for each code belonging to that group (e.g. CGST, SGST, ITC, Freight).\n4. Use **Upload Excel** / **Download Excel** to bulk manage tax codes.",
    tags: ["tax configuration","tax group","tax code","gst","gst setup"]
  },
  {
    action: "create",
    object: "vendor",
    scope: "global",
    question: "How do I add a new vendor?",
    answer: "1. Global Data → **Vendors** tile → **Register Vendor**.\n2. Upload a profile picture (optional), fill Vendor ID*, Company Name*, First Name*, Last Name*.\n3. Click **Add** in the contact table to add one or more contact persons with their details.\n4. Fill Username*, Phone Number* (with country code + extension), Email*.\n5. Choose a **Select Sign Label** (e.g. Initials) and fill Initials* — used as the digital signature label on approved documents; optionally toggle **Enable Security Key Authentication**.\n6. Optionally fill Vendor Title, Address, Licence Number.\n7. Click **Submit**.",
    tags: ["register vendor","add vendor","new vendor"]
  },
  {
    action: "configure",
    object: "vendor rate card",
    scope: "global",
    question: "How do I set up a vendor's rate card?",
    answer: "1. Open the vendor's card from the **Vendors** tile.\n2. Go to the **Rate Card** tab, choose **Materials** or **Equipment**.\n3. Click **Upload Logs**, download the Excel template, fill in Daily/Weekly/Monthly rates per item, then upload the completed file — or edit the **Rate** field inline per row.",
    tags: ["rate card","vendor rates","upload logs","vendor rates upload logs"]
  },
  {
    action: "configure",
    object: "vendor rating form",
    scope: "global",
    question: "How do I configure the vendor rating form?",
    answer: "1. Vendors tile → **Ratings Form** tab.\n2. Click **Add field** to add a new custom rating criterion (e.g. \"Safety\").\n3. Set its weight/value, toggle **Required** and/or **Show on card** as needed, choose its type via **Choose Type** (e.g. Rating).\n4. Click **Save Changes**.",
    tags: ["vendor rating","ratings form","vendor evaluation"]
  },
  {
    action: "create",
    object: "subcontractor",
    scope: "global",
    question: "How do I register a subcontractor?",
    answer: "1. Global Data → **Sub Contractors** tile → **Register Sub Contractor**.\n2. Complete the registration form (name, contact, ID) and submit.\n3. Use **Add Groups** to organize subcontractors into categories, similar to Vendor categories.",
    tags: ["subcontractor","register sub contractor"]
  },
  {
    action: "track",
    object: "vendor certification",
    scope: "global",
    question: "How do I track vendor/subcontractor certifications like ISO or safety licenses?",
    answer: "1. Go to **Global Data → Settings → Sub Contractor Settings** to define which certification fields (e.g. ISO 9001, CIDB) subcontractors must upload.\n2. Or, for company-wide compliance items, use **Global Data → Compliance Hub → Compliance Directory → Create** to define the requirement (Name, Category, Renewal Frequency, Evidence Type), then track status under **My Company Compliance**.",
    tags: ["subcontractor compliance","iso certification","safety license","iso certification safety license"]
  },
  {
    action: "create",
    object: "work order type",
    scope: "global",
    question: "How do I create a Work Order Type?",
    answer: "1. Global Data → **Work Order Management** → **Settings** gear → **Work Order Types**.\n2. Click **Work Order Type**, enter a Name* and Description, click **Submit**.",
    tags: ["work order type","create work order type","work order type setup"]
  },
  {
    action: "create",
    object: "work order contract template",
    scope: "global",
    question: "How do I create a Work Order Contract template?",
    answer: "1. Work Order Management → **Create**.\n2. Enter Name*, Description, and select a **Work Order Type*** (Service/Equipment/Material).\n3. Submit, then open the new record to configure its Profile fields, add Items via **Create Items**, and configure Expense forms under the **Expense** tab.",
    tags: ["work order contract","create work order"]
  },
  {
    action: "configure",
    object: "construction type",
    scope: "global",
    question: "How do I configure which construction categories are available when creating a project?",
    answer: "1. Global Data → **Construction Types** tile.\n2. Click **Create** to add a new type, or **Copy** an existing type to clone its full setup into a new one.\n3. Optionally mark one type as **Set as Default**.",
    tags: ["construction types","project category","construction category"]
  },
  {
    action: "define",
    object: "construction types vs construction type tab",
    scope: "global",
    question: "What's the difference between \"Construction Types\" and the \"Construction Type\" tab?",
    answer: "**Construction Types** (a tile) is the simple master list of category names (Infrastructure, Residential, etc.) used when creating a project. The **Construction Type** tab (next to \"Company\" on the Global Data home page) is a 10-step configuration pipeline where you build out the full work-breakdown library — Global Work Areas, Activities/Work Packages, Sequence Templates, Naming Framework, Data Migration, and more — for whichever Construction Type is selected in its dropdown.",
    tags: ["construction types vs construction type","wbs pipeline","wbs pipeline comparison"]
  },
  {
    action: "export",
    object: "data migration",
    scope: "global",
    question: "How do I bulk-load historical data instead of entering it manually?",
    answer: "1. Global Data → **Construction Type** tab → **Step 7 (Data Migration)**.\n2. For each section (Master Data, Global Work Packages, Locations Type Work Packages, Global Sequence Model, etc.), click the **Template** link to download the correctly-formatted Excel file.\n3. Fill it in and drag it into the upload zone. Existing data is preserved — new rows are appended.",
    tags: ["data migration","bulk upload","excel import","bulk upload excel import"]
  },
  {
    action: "create",
    object: "user account",
    scope: "global",
    question: "How do I register a new user or employee?",
    answer: "1. Global Data → **Users & Permissions** → **User Accounts** → **Active Users** tab.\n2. Click **Register User** and fill in the required details (name, contact, email, password/signature).\n3. Click **Submit**. Use **Notify User** to email them their login/setup instructions.",
    tags: ["register user","add employee","new user account","register user employee"]
  },
  {
    action: "create",
    object: "user account",
    scope: "global",
    question: "How do I bulk-import users instead of adding them one by one?",
    answer: "1. Users & Permissions → **Active Users** tab.\n2. Click **Download Sample Excel**, fill in one row per user (use correct country codes for phone numbers).\n3. Click **Upload Excel** and select the completed file — Arena creates the accounts and emails each new user automatically.",
    tags: ["bulk import users","upload excel users","onboard users","bulk import users upload excel"]
  },
  {
    action: "configure",
    object: "user group permissions",
    scope: "global",
    question: "How do I set up permissions for a group of users?",
    answer: "1. Global Data → **Users & Permissions** → **Global Permission** tab.\n2. Click **Add User Group**, name it, then click its **Permissions** button and select the allowed modules/actions.\n3. Click its **Users** button to add members — they inherit the group's permissions.\n4. Optionally use **Fetch Templates** to start from one of Arena's standard permission templates (e.g. Super Admin).",
    tags: ["permission group","user group","global permission"]
  },
  {
    action: "define",
    object: "active vs inactive users",
    scope: "global",
    question: "What's the difference between Active Users and Inactive Users?",
    answer: "**Active Users** can currently log in. Deleting a user from Active Users doesn't erase them — it moves them to **Inactive Users**, where they're retained and can later be re-Activated (which resends a registration/password-reset email).",
    tags: ["active users","inactive users","deactivate user"]
  },
  {
    action: "create",
    object: "non-system roster worker",
    scope: "global",
    question: "How do I add a non-system (temporary) worker to the global roster?",
    answer: "1. Users & Permissions → **Global Rosters** → **Non System User** → **Add Non System Roster**.\n2. Fill in worker details (name, designation, skills, experience, group number, etc.) → Submit.\n3. Use **Export All Users** to download the full roster, or **Add Role** to assign a role to selected rosters.",
    tags: ["non system user","temporary worker","global roster","temporary worker global roster"]
  },
  {
    action: "create",
    object: "crew",
    scope: "global",
    question: "How do I create a crew?",
    answer: "1. Global Data → **Crews** tile → **Create**.\n2. Enter the Crew Name.\n3. Select a **Supervisor** and a **Foreman** from the dropdown (these people must already exist in Global Rosters).\n4. Select **Rosters** — check the individual roster members (system and non-system) who belong to this crew.\n5. Click **Submit**.",
    tags: ["create crew","crew setup","supervisor foreman","crew setup supervisor foreman"]
  },
  {
    action: "create",
    object: "unit of measure",
    scope: "global",
    question: "How do I add a new unit of measure (UOM) and group it?",
    answer: "1. Global Data → **UOM, Phasecode & GL Codes** tile → **UOMs** tab.\n2. Click **Add UOM**, type the unit name (e.g. \"Tonne\"), and save.\n3. To make it convertible with other units, go to **UOM Groups**, add it to (or create) a group, and enter the conversion factor(s).\n4. The new factors then appear read-only under **UOM Conversions**.",
    tags: ["uom","unit of measure","uom conversion","uom group conversion"]
  },
  {
    action: "create",
    object: "phase code",
    scope: "global",
    question: "How do I add a Phase Code?",
    answer: "1. Phase Codes tab → **Add**.\n2. Enter the Phase Code, its Description, choose its Phase Code Type (Direct/Indirect/Non-Productive/Change Order), and select which Cost Types apply (Material/Labor/Equipment/Subcontractors/Other Expenses).\n3. Save. Bulk create/update is also available via Excel Upload, which supports a **Create Mode** and an **Update Mode**.",
    tags: ["phase code","add phase code","cost type","cost type classification"]
  },
  {
    action: "configure",
    object: "currency",
    scope: "global",
    question: "How do I change the company's currency?",
    answer: "1. Global Data → **Settings** → **Currency** (left nav).\n2. Choose the desired currency from the dropdown.\n3. Click **Save Changes**.",
    tags: ["currency","change currency","settings"]
  },
  {
    action: "configure",
    object: "date format",
    scope: "global",
    question: "How do I change the global date format?",
    answer: "1. Settings → **Global Date Format**.\n2. Select **MM-DD-YYYY** or **DD-MM-YYYY**.\n3. Click **Save Changes**.",
    tags: ["date format","global date format"]
  },
  {
    action: "configure",
    object: "mail routing",
    scope: "global",
    question: "How do I route a module's emails through Outlook instead of Gmail?",
    answer: "1. Settings → **Mail Settings**.\n2. Find the module row (e.g. Work Order) and click the **Outlook** radio button in that row.\n3. The change saves immediately per row (ensure Outlook has been connected first via Marketplace).",
    tags: ["mail settings","outlook","gmail routing","outlook gmail settings"]
  },
  {
    action: "define",
    object: "awp toggle",
    scope: "global",
    question: "What is AWP and how do I enable it?",
    answer: "AWP stands for **Advanced Work Packaging**. Per Arena's reference documentation it is controlled by a single toggle under **Global Data → Settings → Enable AWP** — turning it on/off shows or hides the AWP menu for all users. This toggle was not visible in the Settings navigation during review, so it may be feature-gated for your plan; contact your Arena account admin if you don't see it.",
    tags: ["awp","advanced work packaging"]
  },
  {
    action: "configure",
    object: "naming framework",
    scope: "global",
    question: "How do I rename terminology used throughout the app (e.g. call \"Work Package\" something else)?",
    answer: "There are two Naming Framework screens:\n\n1. **Global Data → Construction Type tab → Step 5 (Naming Framework)** — renames Activity/Work-Package/Location-hierarchy terms, scoped per Construction Type.\n2. **Global Data → Settings → Naming Framework** — renames Procurement/Inventory/Roster/Cost terms company-wide.\n\nIn either, edit the **Custom Name** (and optionally **Short Name**) column next to the term you want to relabel, then save.",
    tags: ["naming framework","rename terminology","custom labels","rename terminology custom labels"]
  },
  {
    action: "create",
    object: "rfi template",
    scope: "global",
    question: "How do I create a new RFI template?",
    answer: "1. Global Data → **Forms** → **Construction Forms** tab → click **RFI**.\n2. Click **Create Template**.\n3. Build the form layout (sections/fields) as needed and save.\n4. The new template becomes available for selection whenever an RFI is raised on a project.",
    tags: ["rfi template","create template","construction forms"]
  },
  {
    action: "create",
    object: "document folder template",
    scope: "global",
    question: "How do I create a reusable folder structure for project documents?",
    answer: "1. Global Data → **Document Management** → **Create Template**, name it (e.g. \"FEL-1\").\n2. Select the template, then click **New Folder** repeatedly to build out the folder hierarchy (e.g. Civil, Mechanical, Structural).\n3. Apply this template when setting up a new project's document space.",
    tags: ["document template","folder structure","document management","document management structure"]
  },
  {
    action: "create",
    object: "quick app",
    scope: "global",
    question: "How do I create a Quick App?",
    answer: "1. Global Data → **Quickapps** → **Quick Apps** tab → **Create**.\n2. Name the app and design its data-capture fields.\n3. Save — the Quick App becomes available from the mobile/field app or relevant project screen.",
    tags: ["quick app","create quickapp","custom form"]
  },
  {
    action: "create",
    object: "standard table",
    scope: "global",
    question: "How do I create a Standard Table?",
    answer: "1. Quickapps → **Standard Tables** tab → **Add**.\n2. Define the table's name and columns.\n3. Save — the table can then be reused/referenced across projects.",
    tags: ["standard table","reference table"]
  },
  {
    action: "configure",
    object: "notification rule",
    scope: "global",
    question: "How do I set up notification rules (e.g. email alerts for low inventory)?",
    answer: "1. Global Data → **Notifications** → **Event Groups**.\n2. Click **Notifications** on the relevant group (e.g. Inventory Management).\n3. Expand the module section, find the specific event (e.g. \"Minimum Stock Reached\"), and toggle **Mail**, **Web**, and/or **Mobile** on.",
    tags: ["notification rules","event groups","alerts","event groups alerts"]
  },
  {
    action: "create",
    object: "notification group",
    scope: "global",
    question: "How do I create a custom notification group?",
    answer: "1. Notifications → **Event Groups** → **Add Event Groups**.\n2. Name the group, then use its **Notifications** button to select which events feed into it and on which channels.\n3. Use its **Users** button to add the people who should receive these notifications.",
    tags: ["custom notification group","add event group","custom event group"]
  },
  {
    action: "configure",
    object: "outlook integration",
    scope: "global",
    question: "How do I connect Arena to Microsoft Outlook for email?",
    answer: "1. Global Data → **Marketplace** → **Microsoft Outlook**.\n2. Click **Sign in with Microsoft** and grant organization-wide consent (must use a company-domain email, not personal).\n3. Then go to **Settings → Mail Settings** and switch the relevant modules (e.g. Work Order) to **Outlook**.",
    tags: ["connect outlook","marketplace","microsoft integration","connect marketplace"]
  },
  {
    action: "configure",
    object: "staged tables sync",
    scope: "global",
    question: "How do I sync external users into Arena via Staged Tables?",
    answer: "1. Connect the source system first (Global Data → **Marketplace** → e.g. Trimble Viewpoint → enter credentials → **Test Connection and Save** → map Table/Schema per module → **Save Configuration**).\n2. Global Data → **Staged Tables** → select the system tab (e.g. View Point) → select **Users** in the left nav.\n3. Click **Map Attributes** and map each external column to the matching Arena field.\n4. Optionally set **Auto Sync Criteria** for a recurring schedule, or click **Bulk Create Arena Records** to promote all currently staged rows immediately.",
    tags: ["staged tables","sync external data","map attributes","map attributes external data"]
  },
  {
    action: "create",
    object: "customer approval level",
    scope: "global",
    question: "How do I add an approval level for customer records?",
    answer: "1. Global Data → **Customer** tile → **Approval Workflow** tab → **Create Level**.\n2. Name/describe the level, assign Approvers, and choose the Workflow Type.\n3. Save — subsequent opportunity/customer approvals will route through this chain in order.",
    tags: ["customer approval workflow","create level","approval workflow"]
  },
  {
    action: "create",
    object: "cost type",
    scope: "global",
    question: "How do I add a custom cost category (like \"Freight Charges\")?",
    answer: "1. Global Data → **Cost** → **Cost Type** tab → **Add Type**.\n2. Enter the name (e.g. \"Freight Charges\") and a description, then submit.",
    tags: ["cost type","add cost category","freight charges"]
  },
  {
    action: "create",
    object: "cost breakdown structure template",
    scope: "global",
    question: "How do I set up a Cost Breakdown Structure (CBS) template?",
    answer: "1. Global Data → **Cost** → **Cost Breakdown Structure** tab → **Templates** → **Add Template**.\n2. Name it and build its structure using the available Phase Codes (managed under the Phase Codes side-list on the same screen, or under UOM/Phasecode & GL Codes).\n3. Optionally mark it as the company's Default CBS template.",
    tags: ["cost breakdown structure","cbs template"]
  },
  {
    action: "create",
    object: "bid line item",
    scope: "global",
    question: "How do I add a bid line item?",
    answer: "1. Global Data → **Bid Templates** → **Add Item**.\n2. Enter the Item Description and choose its UOM Group and UOM.\n3. Submit. For bulk loading, use **Download Sample Excel**, fill it in, then **Upload Excel**.",
    tags: ["bid template","add item","estimate line item"]
  },
  {
    action: "define",
    object: "compliance requirement",
    scope: "global",
    question: "How do I define a new compliance requirement?",
    answer: "1. Global Data → **Compliance Hub** → **Compliance Directory** → **Create**.\n2. Fill Compliance Name*, Description, Category/Type*, Renewal Frequency and Period (if periodic renewal applies), Evidence Type*, and upload the Required Evidence template/sample.\n3. Submit — this requirement is now tracked (and can show as Missing/Expiring/Expired) under **My Company Compliance**.",
    tags: ["compliance directory","compliance requirement"]
  },
  {
    action: "create",
    object: "measurement template",
    scope: "global",
    question: "How do I build a quantity take-off formula for progress tracking?",
    answer: "1. Global Data → **Measurement Templates** → **Add Template**.\n2. Enter a Template ID* and Template Name* (e.g. \"LBD\").\n3. Under **Parameters**, add each variable the formula needs (e.g. L, B, D, Nos), clicking + after each.\n4. Enter the **Formula** referencing the parameters (e.g. `(L)*(B)*(D)*(Nos)`).\n5. Click **Submit**.\n6. Later, link this template to a Work Package via the Construction Type pipeline's Step 10 (Work Package Measurement Template Linking).",
    tags: ["measurement template","quantity takeoff","formula","quantity takeoff formula"]
  }
];

// ---- Additional flat intent-tagged QA items (new modules, offline chat engine) ----
const QA_ACCOUNTBASICS = [
  {
    action: "create",
    object: "support ticket",
    scope: "global",
    section: "Support",
    question: "How do I raise a support ticket?",
    answer: "Click the **Support** icon (headset icon, top-right of the navigation bar next to Notifications and Downloads) to open the Support panel, then describe what you were trying to do and submit it. If you don't see the Support icon, or need a faster response, email **support@inncircles.com** directly with your company name and a description of the issue.",
    tags: ["support ticket","raise a ticket","contact support","help desk","report an issue","get help"]
  },
  {
    action: "view",
    object: "home page",
    scope: "global",
    question: "What shows up on the Arena Home page after I log in?",
    answer: "Arena's Home page is the first page a user sees after logging in (users with only \"Projects\" permission are taken to the Projects page instead). It shows a weather report in the top-left (once location access is allowed), a horizontal tab of all projects with progress percentages, and tiles for Time Management, Equipment Management, and Inventory Management based on your permissions.",
    tags: ["home page","landing page","first screen","dashboard","what is home","post-login screen"]
  },
  {
    action: "navigate",
    object: "project desk",
    scope: "project",
    question: "How do I get to a specific project's detail view from Home?",
    answer: "On the Home page, click on any project's progress card in the horizontal project tab. This navigates you to that project's Project Desk page for a more refined view of project insights.",
    tags: ["project desk","project navigation","progress card","project insights","click through"]
  },
  {
    action: "view",
    object: "module access",
    scope: "global",
    question: "Why can't I see Time Management or Equipment Management on my Home page?",
    answer: "Access to each Home page module (Time Management, Equipment Management, Inventory Management, Projects) depends on your assigned permissions. Contact your project or system administrator if a module you need is missing.",
    tags: ["missing module","permissions","access denied","module visibility","administrator contact"]
  },
  {
    action: "create",
    object: "user account",
    scope: "system",
    question: "How do I register a new user in Arena?",
    answer: "Go to the Company section of Global Data, open the Users and Permissions tab, and click \"Register User.\" Fill in the required fields (name, email, contact number with country code, etc.), set a signature method, and click \"Submit\" to create the user card.",
    tags: ["register user","add user","create account","new user","user registration form"]
  },
  {
    action: "define",
    object: "signature",
    scope: "system",
    question: "How is a user's signature set up during registration?",
    answer: "The registration form includes a Signature field with three input methods: \"Initials,\" \"Sign\" (opens a scribble/drawing pad), or \"Upload\" (upload a signature image file from another source).",
    tags: ["signature setup","e-signature","scribble pad","upload signature","initials","registration form"]
  },
  {
    action: "reset",
    object: "password",
    scope: "system",
    question: "How does a new user set their password for the first time?",
    answer: "After a user is registered, click \"Notify User\" (or the system auto-sends on submit) to email the user a welcome registration link. The user follows that email link to set their own password.",
    tags: ["set password","first login","welcome email","registration email","notify user","password setup"]
  },
  {
    action: "reset",
    object: "password",
    scope: "system",
    question: "How do I resend a password-reset email to an existing user?",
    answer: "In Users & Permissions - Active Users, use the \"Notify User\" option on that user's row/card. This sends the user a registration email they can use to reset their password.",
    tags: ["resend password email","notify user","password reset","forgot password workaround","admin reset"]
  },
  {
    action: "create",
    object: "user account",
    scope: "system",
    question: "Can I register many users at once instead of one at a time?",
    answer: "Yes. In Users & Permissions - Active Users, click \"Download Sample\" to get the Excel template, fill it in, then use \"Upload Excel\" to bulk-create users. All users created this way receive welcome registration emails automatically.",
    tags: ["bulk register","upload excel","import users","sample excel","mass user creation"]
  },
  {
    action: "edit",
    object: "user account",
    scope: "system",
    question: "How do I edit or delete a registered user?",
    answer: "On the user's card or table row in Users & Permissions - Active Users, use the kebab (3-dot) menu or the Action column's edit/delete icons. Deleting a user moves their account to Inactive Users rather than permanently removing it.",
    tags: ["edit user","delete user","deactivate user","kebab menu","inactive users"]
  },
  {
    action: "search",
    object: "user account",
    scope: "system",
    question: "How do I find a specific user in the registered users list?",
    answer: "Use the Search bar next to the \"Register User\" button in Users & Permissions - Active Users. You can search by first name, last name, employee ID, contact number, or email.",
    tags: ["search user","find user","user lookup","search profiles"]
  },
  {
    action: "export",
    object: "user list",
    scope: "system",
    question: "How do I download a list of all registered users?",
    answer: "In Users & Permissions - Active Users, click \"Export\" or \"Download Excel\" to download the details of all registered users.",
    tags: ["export users","download users","user list export","download excel"]
  },
  {
    action: "view",
    object: "user status",
    scope: "system",
    question: "What's the difference between Active Users and Inactive Users?",
    answer: "Active Users are accounts that are created and currently able to log in to Arena. Inactive Users are accounts that have been deleted/deactivated from the Active list; they no longer have log-in access.",
    tags: ["active users","inactive users","user status","deactivated account","disabled login"]
  },
  {
    action: "create",
    object: "user group",
    scope: "project",
    question: "How do I create a permission/user group for a project?",
    answer: "Go to the project's Permissions screen and click the \"User Group\" button. Enter a name for the group in the pop-up and confirm to create it as a new role card.",
    tags: ["user group","permission group","role creation","add role","project permissions"]
  },
  {
    action: "link",
    object: "user group",
    scope: "project",
    question: "How do I copy a user group's permissions to other projects?",
    answer: "On the Permissions screen, click \"Copy User Groups to Projects.\" A pop-up lets you select which projects should receive a copy of that user group's setup.",
    tags: ["copy permissions","duplicate user group","copy to projects","clone role"]
  },
  {
    action: "configure",
    object: "permission",
    scope: "project",
    question: "What permission levels can I assign to a role in Arena?",
    answer: "For each module, a role can be granted: Assign To (only the assigned user can view/create/edit/delete), View, Create, Edit, Delete, Download, Print, and Admin (master permission covering all of the above). Toggle \"Roll Back\" on the role card first, then set these per-module rights.",
    tags: ["permission levels","view create edit delete","admin rights","roll back toggle","access rights"]
  },
  {
    action: "assign",
    object: "user",
    scope: "project",
    question: "How do I assign users to a permission/role group?",
    answer: "On the role's card in the Permissions screen, click the \"Users\" button, which opens a list where you select which users belong to that role/permission group.",
    tags: ["assign users","add users to role","users button","role membership"]
  },
  {
    action: "configure",
    object: "notification",
    scope: "project",
    question: "How do I set up which notifications users receive for a project?",
    answer: "Go to the project's Notifications screen, select the \"Events\" tab, and toggle the Email, Web, and/or Mobile icon on each event to control how that notification is delivered. Click the message icon to customize the notification's wording.",
    tags: ["configure notifications","event notifications","email web mobile alerts","notification settings"]
  },
  {
    action: "create",
    object: "notification event group",
    scope: "project",
    question: "How do I create a new notification event group?",
    answer: "In Notifications > Event Groups, click \"Add Event Group\" and enter a name in the pop-up. Alternatively, click \"Get Standard Event Groups\" to auto-create Arena's default event groups.",
    tags: ["event group","add event group","standard event groups","notification grouping"]
  },
  {
    action: "configure",
    object: "notification",
    scope: "global",
    question: "What's the difference between project Notifications and Global Notifications?",
    answer: "Project-level Notifications (under a project's settings) configure alerts specific to that project. Global Notifications (under Global Data) configure notifications at the company-wide level; project-level notifications do not appear in the Global Notifications screen.",
    tags: ["global notifications","project notifications","notification scope","company-wide alerts"]
  },
  {
    action: "configure",
    object: "company details",
    scope: "system",
    question: "Where do I set up my company's name, logo, and address in Arena?",
    answer: "Go to Global Data > Company (Company Details). Enter the company's name, logo, address, and contact information, then click \"Submit.\" This information auto-populates forms and other places across the application. Edit it later by returning to the same Company tab.",
    tags: ["company details","company setup","company logo","company address","company profile"]
  },
  {
    action: "configure",
    object: "global data",
    scope: "system",
    question: "What is the Global Data section used for?",
    answer: "Global Data is the setup space for construction-specific data — work areas, work packages, activity sequences, and BYO (Build Your Own) project forms — organized per Construction Type. Select a Construction Type from the dropdown first; all projects using that construction type will see the data entered here.",
    tags: ["global data","construction type","setup space","work areas","work packages","activity sequences"]
  },
  {
    action: "configure",
    object: "construction type data",
    scope: "system",
    question: "What order should I set up data in Global Data?",
    answer: "After selecting a Construction Type, follow: Step 1 Global Work Areas, Step 2 Global Work Packages, Step 3 Activity Sequence Templates.",
    tags: ["global data setup order","work areas","work packages","activity sequence templates","setup steps"]
  }
];

const QA_CALENDAR = [
  {
    action: "configure",
    object: "microsoft calendar integration",
    scope: "global",
    question: "How do I connect Arena to Outlook Calendar as an admin?",
    answer: "Go to Global Data → Marketplace, click \"Sign in with Microsoft\" to grant Outlook consent. After signing in with Microsoft credentials, on the Permissions Requested page check the box to consent on behalf of the organization — this lets all users access the integration without individually consenting.",
    tags: ["microsoft calendar integration","connect outlook","admin consent","marketplace","sign in with microsoft"]
  },
  {
    action: "configure",
    object: "calendar consent",
    scope: "module",
    question: "How do I revoke or change the Microsoft account connected to Arena Calendar?",
    answer: "In Global Data → Marketplace (Microsoft integration), click \"Revoke Consent\", then sign in again with a different Microsoft account to grant new consent.",
    tags: ["revoke consent","change microsoft account","disconnect calendar","reconnect outlook"]
  },
  {
    action: "configure",
    object: "user calendar consent",
    scope: "module",
    question: "How do I personally connect my Outlook calendar to Arena?",
    answer: "Go to My Profile → Settings → Calendar Consent, then click \"Sign in with Microsoft\" and add your Microsoft account.",
    tags: ["user calendar consent","my profile settings","personal outlook connect","calendar consent"]
  },
  {
    action: "create",
    object: "calendar event",
    scope: "module",
    question: "How do I create an event in Arena Calendar?",
    answer: "In Arena Calendar, click \"Create Event\" and choose a Category (multi-select, Group, or Primary Calendar). Only categories selected in \"Configure Categories\" are available in the Category options.",
    tags: ["create event","calendar event","add event","configure categories"]
  },
  {
    action: "edit",
    object: "calendar event",
    scope: "module",
    question: "How do I edit or delete a calendar event?",
    answer: "Open the event in Arena Calendar; events can be edited or deleted directly from there.",
    tags: ["edit event","delete event","calendar event","remove event"]
  },
  {
    action: "link",
    object: "calendar event",
    scope: "module",
    question: "Can I link a calendar event to a specific module?",
    answer: "Yes. Events created in Arena Calendar can be mapped to Modules, and once mapped, events can be further selected/filtered based on the module.",
    tags: ["link event to module","map event","module event filter","event mapping"]
  },
  {
    action: "view",
    object: "synced outlook event",
    scope: "module",
    question: "Do Outlook calendar events show up in Arena?",
    answer: "Yes. Events created in your Outlook calendar are also synced to the Arena calendar automatically.",
    tags: ["outlook sync","synced events","calendar sync","outlook events in arena"]
  },
  {
    action: "import",
    object: "outlook group",
    scope: "module",
    question: "How are imported Outlook groups shown in the Calendar?",
    answer: "Groups imported and mapped via Arena Communications → Import Groups are also displayed in Arena Calendar.",
    tags: ["import groups calendar","outlook groups calendar","group mapping","communications import"]
  },
  {
    action: "configure",
    object: "calendar management permission",
    scope: "global",
    question: "What permission is needed for a user to access Admin Calendar Consent?",
    answer: "If a user hasn't granted consent individually, they can still use the admin consent granted in Global Data → Marketplace, but only if Admin Permission is enabled at Global Data → Users & Permissions → User Group → Permissions → General → Calendar Management.",
    tags: ["calendar management permission","admin permission","user group permissions","calendar access control"]
  }
];

const QA_COMMUNICATION = [
  {
    action: "configure",
    object: "outlook consent",
    scope: "global",
    question: "How do I enable Outlook integration for Arena Communications?",
    answer: "An admin must grant Outlook consent in Global Data → Marketplace, and admin permissions for the communication module must be given to the user. Alternatively, an individual user can grant their own consent without admin consent via My Profile → Settings → Outlook Management Consent.",
    tags: ["outlook consent","enable communications","marketplace integration","admin consent","user consent"]
  },
  {
    action: "submit",
    object: "email",
    scope: "module",
    question: "How do I send an email in Arena Communications?",
    answer: "Go to Home → Communications and click \"Compose mail\" at the top to send a new message.",
    tags: ["compose mail","send email","arena communications","new mail"]
  },
  {
    action: "filter",
    object: "email",
    scope: "module",
    question: "How do I filter emails by module in Arena Communications?",
    answer: "Use the ribbon at the top of Communications, which lists all modules, to filter mail by which module it's mapped to.",
    tags: ["filter mail by module","communications ribbon","module filter","mail filter"]
  },
  {
    action: "view",
    object: "inbox",
    scope: "module",
    question: "What are the mail folders available in Arena Communications?",
    answer: "Arena Communications has Inbox (received mail), Sent (mail you sent), Drafts (saved drafts), Saved (starred mail), and Trash (deleted mail).",
    tags: ["inbox","sent","drafts","saved","trash","mail folders"]
  },
  {
    action: "import",
    object: "outlook group",
    scope: "module",
    question: "How do I import Outlook groups into Arena Communications?",
    answer: "Use the \"Import Groups\" feature in Communications. It opens a pop-up showing your Outlook groups alongside a Module dropdown, so you can map each imported group to a module.",
    tags: ["import groups","outlook groups","import groups feature","map group to module"]
  },
  {
    action: "link",
    object: "email",
    scope: "module",
    question: "Can I link an email to a specific module record?",
    answer: "Yes. Mails composed in Arena Communications can be mapped directly to different modules such as Opportunity, Proposal, and Bid Management.",
    tags: ["map email to module","link email","email mapping","module mail linking"]
  }
];

const QA_CONSTRUCTIONFORMS = [
  {
    action: "configure",
    object: "construction form template (global)",
    scope: "module",
    question: "Where do I configure the standard fields, sections and field types for RFIs, Submittals, Change Orders and Meeting Minutes?",
    answer: "Go to Global Data → Forms (Construction Forms setup), select the form type, then configure Standard Fields (locked, but toggle \"Required\") and Configurable Fields (Add Section/Add Field, with types Attachment, Checkbox, Date, Label, Multi select, Paragraph, Roster, Scribble, Single select, Table, Text box, Time, Signature). Set Trigger Points to let end-users raise issues/notes per field, preview the form, and toggle \"Approval Work Toggle\" (all except Meeting Minutes) and \"Connected Services Toggle\" (cross-link to other forms/tree elements). This is a Global Data (not project-level) configuration; the actual per-project approval workflow is separately configured in Project Setup → Forms → Approval Workflow.",
    tags: ["construction forms template","form fields setup","global data forms","form field types"]
  },
  {
    action: "create",
    object: "RFI (project-level)",
    scope: "project",
    question: "How do I raise an RFI (Request For Information) inside a project?",
    answer: "Open the project, go to Field Works → Progress → RFIs, click \"Create\", fill in the RFI form set up by the admin, and click \"Save As Draft\" or \"Submit for Approval\". A unique ID is auto-generated; approvers see Approve/Reject on their level.",
    tags: ["RFI","request for information","create RFI project"]
  },
  {
    action: "create",
    object: "Submittal (project-level)",
    scope: "project",
    question: "How do I create a Submittal inside a project?",
    answer: "Open the project, go to Field Works → Progress → Submittals, click \"Create\", complete the form, then \"Save As Draft\" or \"Submit for Approval\". Each log gets an auto-generated ID and shows Approve/Reject to configured approvers.",
    tags: ["submittal","create submittal project","submittal log"]
  },
  {
    action: "create",
    object: "Change Order (project-level)",
    scope: "project",
    question: "How do I create a Change Order inside a project?",
    answer: "Open the project, go to Field Works → Progress → Change Orders, click \"Create\", fill the form, then \"Save As Draft\" or \"Submit for Approval\". Use \"Assign To\" and \"Due Date\" to route it, and the Chat/Follow Up Actions/History/Download/Share/Print/Compose Mail actions to manage it.",
    tags: ["change order","create change order project","change order log"]
  },
  {
    action: "create",
    object: "Meeting Minutes (project-level)",
    scope: "project",
    question: "How do I log meeting minutes inside a project?",
    answer: "Open the project, go to Field Works → Progress → Meeting Minutes → Forms, click \"Create\", fill in details, then \"Save As Draft\" or \"Submit\". Track follow-ups in the \"Actions\" tab, where each action item has a status, assignees, and due date.",
    tags: ["meeting minutes project","create meeting minutes","meeting action items"]
  }
];

const QA_COSTMANAGEMENT = [
  {
    action: "create",
    object: "cost estimate",
    scope: "project",
    question: "How do I create a cost estimate?",
    answer: "Go to Project Setup → Cost Estimate → Create, select an Estimate Category, then click \"Create Estimate\".",
    tags: ["create cost estimate","estimate category","cost estimate creation"]
  },
  {
    action: "edit",
    object: "cost estimate line items (material/labor/etc.)",
    scope: "project",
    question: "How do I add material, labor, or equipment costs to an estimate?",
    answer: "Go to Project Setup → Cost Estimate → Cost Estimates, select the Material (or Labor/Equipment/Sub-Contractor/Other Expenses) tab. Use \"Add Custom Columns\" for extra fields, \"Get Materials from Global Data\" (choose \"Keep existing and update with new materials\" or \"Replace all with Global Data\"), or \"Add Material\" to create a new line item manually. Totals calculate automatically and display read-only at top right. The table layout/calculation settings come from the \"Settings\" button, linking to Productivity Settings.",
    tags: ["cost estimate line items","add material","get materials from global data","labor cost estimate"]
  },
  {
    action: "view",
    object: "cost estimate summary",
    scope: "project",
    question: "Where do I see the total documented project cost?",
    answer: "Go to Project Setup → Cost Estimate → Estimate Summary — a view-only page showing all costs documented across materials, labor, equipment, sub-contractor and other expenses.",
    tags: ["cost summary","view total cost","estimate summary"]
  },
  {
    action: "configure",
    object: "cost estimate workflow",
    scope: "project",
    question: "How do I set up an approval process for timesheets or quantity tracksheets tied to cost estimates?",
    answer: "Go to Project Setup → Cost Estimate → Workflow, select the feature to configure, click \"Create Level\", choose \"All must approve\" or \"Anyone can approve\", and select the approvers for that level.",
    tags: ["cost estimate workflow","timesheet approval workflow","quantity tracksheet approval"]
  }
];

const QA_COSTTRACKING = [
  {
    action: "create",
    object: "cost estimate",
    scope: "project",
    question: "How do I create a new cost estimate?",
    answer: "Go to Project Setup → Cost Estimate, select the Estimate Category, and click \"Create Estimate\".",
    tags: ["new cost estimate","add estimate","create estimate","cost-estimate"]
  },
  {
    action: "track",
    object: "material cost",
    scope: "project",
    question: "How do I record estimated material costs?",
    answer: "In Cost Estimate, select the Material tab, then use the table's actions: \"Add Material\" to add a new material line from scratch, \"Get Materials from Global Data\" to pull materials from Global Data, or \"Add Custom Columns\" to add a new column. The total material cost is calculated automatically and shown top right.",
    tags: ["material cost","add material","cost estimate material","get materials from global data"]
  },
  {
    action: "define",
    object: "get materials from global data",
    scope: "project",
    question: "What does \"Get Materials from Global Data\" do in Cost Estimate?",
    answer: "Clicking \"Get Materials from Global Data\" on the Material tab offers two options: \"Keep existing and update with new materials\" (merges) or \"Replace all with Global Data\" (erases existing rows and replaces them with Global Data's materials).",
    tags: ["get materials","replace materials","global data materials","merge materials"]
  },
  {
    action: "configure",
    object: "productivity settings",
    scope: "project",
    question: "How do I change how cost estimates are calculated?",
    answer: "Click the \"Settings\" button in the top right corner of the Cost Estimate screen to open Productivity Settings, where you choose how estimates are calculated. This setting applies across Material, Labor, Equipment, and other estimate tabs. Note: the Settings button is only visible if your user permissions allow viewing/editing productivity settings.",
    tags: ["productivity settings","cost estimate settings","calculation settings","estimate configuration"]
  },
  {
    action: "track",
    object: "labor cost",
    scope: "project",
    question: "How do I record labor, equipment, sub-contractor, or other expense costs?",
    answer: "In Cost Estimate, select the Labor, Equipment, Sub-Contractor, or Other Expenses tab — each follows the same process as the Material tab (Add Custom Columns, pull from Global Data, or add a new entry manually).",
    tags: ["labor cost","equipment cost","sub-contractor cost","other expenses","cost estimate tabs"]
  },
  {
    action: "view",
    object: "cost estimate summary",
    scope: "project",
    question: "Where can I see a summary of all project costs?",
    answer: "Go to Cost Estimate - Summary, a view-only page showing all costs documented via the Estimate tab for materials, labor, equipment, sub-contractor, and other expenses.",
    tags: ["cost summary","estimate summary","view all costs","cost estimate summary"]
  },
  {
    action: "view",
    object: "cost by cost type",
    scope: "project",
    question: "How do I see costs broken down by cost type?",
    answer: "Go to Cost Estimate - Cost Tracking (By Cost Types). This page lists the estimated and actual costs for each cost type.",
    tags: ["cost by type","cost tracking by cost types","cost type breakdown","actual vs estimated cost"]
  },
  {
    action: "configure",
    object: "cost estimate workflow",
    scope: "project",
    question: "How do I set up an approval workflow for cost estimates?",
    answer: "Navigate to Project Setup → Cost Estimate → Workflow. Select the feature the workflow applies to (Timesheets or Quantity Tracksheets), then click \"Create Level\" to add an approval level. Choose the level type (\"All must approve\" or \"Anyone can approve\") and select the approvers for that level.",
    tags: ["cost estimate workflow","approval workflow","create level","timesheet approval","quantity tracksheet approval"]
  },
  {
    action: "define",
    object: "approval level type",
    scope: "project",
    question: "What is the difference between \"All must approve\" and \"Anyone can approve\" in Cost Estimate workflows?",
    answer: "\"All must approve\" requires every approver assigned to that workflow level to approve before it advances; \"Anyone can approve\" only needs one of the assigned approvers to approve.",
    tags: ["all must approve","anyone can approve","approval level","workflow level type"]
  },
  {
    action: "edit",
    object: "cost estimate workflow",
    scope: "project",
    question: "What happens if I change an existing cost estimate approval workflow?",
    answer: "Modifying the levels of an existing workflow triggers a warning, because changes affect all forms or documents already linked to that workflow.",
    tags: ["edit workflow","workflow warning","modify approval levels","linked documents"]
  }
];

const QA_DOCUMENTMANAGEMENT = [
  {
    action: "view",
    object: "project documents",
    scope: "project",
    question: "Where do I manage general project documents?",
    answer: "Go to Project Setup → Documents. (Detailed step-by-step documentation for this screen was not published at the time of writing; related document handling within Quality is available at Project Setup → Quality → Quality & Documents.)",
    tags: ["project documents","documents module","project setup documents"]
  }
];

const QA_DRAWINGMANAGEMENT = [
  {
    action: "create",
    object: "drawing package",
    scope: "project",
    question: "How do I organize drawings into packages/folders?",
    answer: "Go to Project Setup → Drawings → Drawing Packages, click \"Create Drawing Package\", enter the details plus a training template, and click \"Submit\". Edit or Delete a package via the kebab (3-dot) menu. Click into a package to view/upload its Drawing Logs.",
    tags: ["drawing package","create package","drawing folder"]
  },
  {
    action: "create",
    object: "drawing log / upload drawing",
    scope: "project",
    question: "How do I upload a drawing into a package?",
    answer: "Inside a Drawing Package, click \"Upload Drawing\" (PDF or image files accepted), then choose \"Auto Label Upload\" (extracts labels via OCR from the trained template) or \"Write Label Manually\". Then \"Review & Submit\" each drawing individually or \"Submit All\" at once. Uploaded drawings appear in a table linking to the Drawing Page.",
    tags: ["upload drawing","drawing log","auto label","write label manually"]
  },
  {
    action: "edit",
    object: "drawing (annotation)",
    scope: "project",
    question: "How do I annotate or comment on a drawing?",
    answer: "Open the drawing page and click \"Edit Drawing\" (or \"Comments\") to enter edit mode with annotation tools; click \"Save\"/\"Save Changes\" to keep changes. Use the \"Comment\" tool to pin a comment to a point, and toggle \"Threads\" to show/hide comment locations. Use the \"Drop\" tool to link a project form (e.g. RFI) to a specific point on the drawing.",
    tags: ["annotate drawing","comment on drawing","drop form on drawing","threads toggle"]
  },
  {
    action: "create",
    object: "drawing revision",
    scope: "project",
    question: "How do I create a new revision of an existing drawing?",
    answer: "Open the drawing and click \"Create Revision\" to upload a new version. Use the \"Revisions\" action on a drawing log to open the revision compare screen, where minor and major changes are shown with color codes. Use \"Compare\" to directly compare the existing and revised drawing. If the master (reference) drawing is deleted, the next drawing automatically becomes the new master.",
    tags: ["drawing revision","create revision","compare drawings","master drawing"]
  },
  {
    action: "link",
    object: "drawing to tree elements",
    scope: "project",
    question: "How do I link a drawing to project tree elements (CWA/System/Tags)?",
    answer: "On a drawing log, use the \"Link\" action (link icon) to open a dialog listing the project's tree elements (CWA, System, Tags). Select the elements to map; once mapped, the drawing becomes visible in the corresponding work logs or quality forms for reference.",
    tags: ["link drawing","map drawing to tags","drawing tree elements"]
  },
  {
    action: "export",
    object: "drawing (share/print/download)",
    scope: "project",
    question: "How do I share, print, or download a drawing?",
    answer: "On a drawing log's \"Actions\" menu use: Download (latest version file), Share (select registered users, then a mail pop-up to compose and send), Print (send to a connected printer), and Edit (modify drawing metadata). \"Edit Bulk Drawings\" lets you modify labels/approval workflows across multiple drawings at once.",
    tags: ["share drawing","download drawing","print drawing","edit bulk drawings"]
  },
  {
    action: "configure",
    object: "drawing OCR training",
    scope: "project",
    question: "How do I train OCR labels on a drawing template?",
    answer: "Go to Project Setup → Drawings → Drawing Training, click \"Create Training Template\" (name + description), then configure it in 4 steps: Step 1 Upload Sample Drawing; Step 2 Create Labels (standard + configurable, choosing a Field Type like Text box, Date, Signature, or \"Training Category\" for OCR-marked fields); Step 3 OCR Training — select each label and mark its Horizontal or Vertical position on the sample drawing; Step 4 Preview Table to review.",
    tags: ["OCR training","drawing training template","create label","mark position"]
  },
  {
    action: "configure",
    object: "drawing approval workflow",
    scope: "project",
    question: "How do I create an approval workflow specifically for drawing logs?",
    answer: "Go to Project Setup → Drawings → Create Approval Workflow, click \"Create Approval Workflow\", then \"Create Level\", choosing \"All must approve\" or \"Anyone can approve\" and selecting the approvers for that level.",
    tags: ["drawing approval workflow","create drawing workflow","drawing levels"]
  },
  {
    action: "track",
    object: "drawing workflow issues",
    scope: "project",
    question: "What happens when a drawing is rejected during approval?",
    answer: "A \"Drawing Workflow Issue\" is auto-created in Field Works → Drawing Management → Drawing Workflow Issues whenever a drawing is rejected at any approval level. It supports search by ID/status, due dates/assignment, Chat, filters, \"Download Excel\", and a table/card view toggle.",
    tags: ["drawing workflow issues","drawing rejection","drawing issue tracking"]
  }
];

const QA_FIELDWORKS = [
  {
    action: "view",
    object: "Field Works - Progress",
    scope: "project",
    question: "Where do I find day-to-day progress logs, RFIs, and construction forms in a project?",
    answer: "Open the project and go to Field Works → Progress. This area contains Productivity Logs, Work Logs, Site Posts, and Construction Forms (RFIs, Submittals, Change Orders, Meeting Minutes, Form Issues/Workflow Issues).",
    tags: ["field works progress","deliver work","progress area","construction forms location"]
  },
  {
    action: "view",
    object: "Field Works - Drawing Management",
    scope: "project",
    question: "Where do I manage drawing issues from the field?",
    answer: "Open the project and go to Field Works → Drawing Management. Currently this space surfaces \"Drawing Workflow Issues\" — issues raised automatically when a drawing is rejected at any approval level.",
    tags: ["field works drawings","drawing management field","drawing workflow issues"]
  },
  {
    action: "view",
    object: "Field Works - Quality",
    scope: "project",
    question: "Where do I access quality inspections and logs from the field?",
    answer: "Open the project and go to Field Works → Quality. This space handles all quality logs, inspections, and issues related to fieldwork, including Quality Level 1/Level 2 forms, Approve/Submitted Quality Logs, Quality Workflow Issues, and Punch Lists.",
    tags: ["field works quality","quality inspections","quality level 1","quality level 2"]
  },
  {
    action: "view",
    object: "Field Works - Safety",
    scope: "project",
    question: "Where do I access safety forms and inspections from the field?",
    answer: "Open the project and go to Field Works → Safety. This space handles all safety logs, inspections and issues, including Safety Forms, Safety Calendar, Safety Observations, Daily Safety Issues, and Completed Safety Forms.",
    tags: ["field works safety","safety inspections field","safety forms field"]
  },
  {
    action: "view",
    object: "Field Works - Arena Quick Apps",
    scope: "project",
    question: "What is Arena Quick Apps in Field Works?",
    answer: "Arena Quick Apps is a Field Works entry point for quick, lightweight utility apps within a project. (Detailed documentation for this sub-area was not published at the time of writing.)",
    tags: ["quick apps","arena quick apps","field works apps"]
  },
  {
    action: "create",
    object: "productivity log",
    scope: "project",
    question: "How do I create a productivity log (timesheet/quantity entry)?",
    answer: "Open the project, go to Field Works → Progress → Productivity Logs → Create. First click \"Set Phase Codes\" to pick the phase codes to log, choose the date range, then click \"Create Log\" and select \"Add Employee\" (fills a row for hours/quantities per Phase Code/CWA/System/Commodity), \"Add Crew\" (select a crew and log per member), or \"Clone Log\" (duplicate an existing log). After Log Time, click \"Next\" to enter the Log Quantity tab, then submit.",
    tags: ["productivity log","create log","log time","log quantity","timesheet entry"]
  },
  {
    action: "view",
    object: "productivity logs list",
    scope: "project",
    question: "How do I review, approve, or reject productivity logs?",
    answer: "Go to Field Works → Progress → Productivity Logs → Logs. Regular users see only their own logs; Admins/Approvers see all logs and get Approve/Reject buttons (in the Quantities tab for Direct/Change Order phase codes, or the Timesheets tab for Indirect/Non-Productive phase codes). Use \"Download Excel\" to export, and the kebab menu to delete a log.",
    tags: ["productivity logs review","approve productivity log","reject productivity log"]
  },
  {
    action: "configure",
    object: "productivity logs approval workflow",
    scope: "project",
    question: "How do I set up a review/approval workflow for productivity logs?",
    answer: "Go to Field Works → Progress → Productivity Logs → Approval Workflow, click \"Create Level\", enter a description, choose \"All Must Approve\" or \"Anyone Can Approve\", and select approvers from the search list. Edit or Delete a level via its action buttons; click the workflow tree diagram to view the full approval chart.",
    tags: ["productivity approval workflow","create level","productivity logs approval"]
  },
  {
    action: "view",
    object: "productivity logs data summary",
    scope: "project",
    question: "Where can I see a summary of timesheets, quantities, and labor units?",
    answer: "Go to Field Works → Progress → Productivity Logs → Data Summary. It has three tabs: Timesheets (hours by employee/crew), Quantities (quantity achieved by Phase Code/Location), and Labor Units (ratio of submitted hours to submitted quantities). Each tab has a \"Download Excel\" option for the selected date range.",
    tags: ["data summary","timesheet summary","quantity summary","labor units"]
  },
  {
    action: "track",
    object: "productivity logs issues",
    scope: "project",
    question: "How are rejected productivity logs tracked as issues?",
    answer: "Go to Field Works → Progress → Productivity Logs → Issues. Issues are auto-generated when a log is rejected by an Approver/Admin during review, with comments explaining the rejection; the admin/approver can assign the issue to a user with a due date. Use search, status filters, and \"Download Excel\" (with image-inclusion options) to manage them.",
    tags: ["productivity log issues","rejected log","log rejection"]
  },
  {
    action: "configure",
    object: "productivity settings",
    scope: "project",
    question: "How do I configure the logging type and fields for productivity logs?",
    answer: "Go to Project Settings → Productivity Log Settings. Choose the Logging Type: \"Create Productivity Logs By Phase Code\" or \"Create Productivity Logs By Level 3s\" (filters phase codes by location instead). Then configure the standard and custom fields shown in the Timesheets and Quantity tabs.",
    tags: ["productivity settings","logging type","phase code logging","level 3 logging"]
  },
  {
    action: "create",
    object: "RFI (Request For Information)",
    scope: "project",
    question: "How do I create an RFI in a project?",
    answer: "Open the project, go to Field Works → Progress → RFIs, click \"Create\", fill in the RFI form, and click \"Save As Draft\" or \"Submit For Approval\" (if an approval workflow is configured). Draft forms show a \"Draft\" label; submitted forms get an auto-generated ID and show Approve/Reject buttons to assigned approvers.",
    tags: ["create RFI","request for information","RFI form","submit RFI"]
  },
  {
    action: "approve",
    object: "RFI",
    scope: "project",
    question: "How do I approve or reject a submitted RFI?",
    answer: "Open Field Works → Progress → RFIs. If you are configured as an approver in the RFI's approval workflow, \"Approve\" and \"Reject\" buttons appear on the submitted RFI card. The approval level and current status are shown on each card.",
    tags: ["approve RFI","reject RFI","RFI approval"]
  },
  {
    action: "view",
    object: "RFI actions (follow up, history, share)",
    scope: "project",
    question: "What actions can I perform on an RFI log?",
    answer: "On any RFI card/form use: Follow Up Actions (view connected items — other forms, drawings, issues, tree elements), See History (full audit trail), Download (PDF), Share (email to other users), Print, Compose Mail, and See All Email Threads. A \"Chat\" button on each card supports notes, images and video collaboration, and \"Download Excel\" exports all RFI logs.",
    tags: ["RFI actions","follow up actions","RFI history","RFI chat"]
  },
  {
    action: "create",
    object: "Submittal",
    scope: "project",
    question: "How do I create a Submittal log in a project?",
    answer: "Open the project, go to Field Works → Progress → Submittals, click \"Create\", fill in the Submittal form (as configured by the project admin), and click \"Save As Draft\" or \"Submit For Approval\". Each log gets an auto-generated ID; approvers see Approve/Reject buttons when the log reaches their level.",
    tags: ["create submittal","submittal form","submit submittal"]
  },
  {
    action: "create",
    object: "Change Order",
    scope: "project",
    question: "How do I create a Change Order log?",
    answer: "Open the project, go to Field Works → Progress → Change Orders, click \"Create\", fill in the Change Order form, and click \"Save As Draft\" or \"Submit for Approval\". Use \"Assign To\" and \"Due Date\" to route responsibility; the \"Chat\" button and Follow Up Actions/History/Download/Share/Print/Compose Mail options work the same as on RFIs.",
    tags: ["create change order","change order form","change order log"]
  },
  {
    action: "create",
    object: "Meeting Minutes",
    scope: "project",
    question: "How do I record meeting minutes for a project?",
    answer: "Open the project, go to Field Works → Progress → Meeting Minutes → Forms tab, click \"Create\", fill in the details, and click \"Save As Draft\" or \"Submit\". Drafts show a \"Draft\" tag. Use the \"Actions\" tab (within a meeting or across all meetings) to track action items — each with a status, assignee(s), and due date. Use Download, Share, Print, and the built-in chat to collaborate.",
    tags: ["meeting minutes","create meeting","action items","meeting form"]
  },
  {
    action: "configure",
    object: "construction forms templates",
    scope: "project",
    question: "How do I set up the fields and sections for RFI, Submittal, Change Order, or Meeting Minutes forms?",
    answer: "This is done at the Global Data level (not inside a project): go to Global Data → Construction Forms, select the form (RFI/Submittal/Change Order/Meeting Minutes). Standard Fields are locked but can be toggled Required; Configurable Fields can be added via \"Add Section\"/\"Add Field\" with types like Attachment, Checkbox, Date, Multi/Single select, Table, Signature, etc. Toggle \"Approval Work Toggle\" (not available for Meeting Minutes) to require an approval workflow, and \"Connected Services Toggle\" to allow cross-linking forms (e.g. raising a Change Order from an RFI). Click \"Save Changes\" after edits. Note: this configures the template used by all projects; the per-project approval workflow itself is set separately in Project Setup → Forms → Approval Workflow.",
    tags: ["construction forms setup","form templates","configurable fields","approval work toggle","connected services"]
  },
  {
    action: "track",
    object: "form issues and form workflow issues",
    scope: "project",
    question: "Where are issues raised on project forms (RFIs, Submittals, Change Orders) tracked?",
    answer: "Go to Field Works → Progress → Issues. \"Form Issues\" holds issues raised directly from a form's fields (each shows a Form Type tag and goes Open → Rectified). \"Form Workflow Issues\" holds issues created when a form's approval workflow is rejected (Open → Closed once re-submitted and approved).",
    tags: ["form issues","form workflow issues","project form issues","rejected form"]
  },
  {
    action: "view",
    object: "Site Posts",
    scope: "project",
    question: "What is Site Posts and how do I use it?",
    answer: "Site Posts (Field Works → Progress → Work Logs → Site Posts) is Arena's internal social feed for a project. Click \"Create a Post\" to share updates, images, or videos (up to 50MB) visible to all project users. Use the people search or date-range filters to browse, and Like/Comment (with one level of reply) to interact.",
    tags: ["site posts","project feed","social posts","create post"]
  },
  {
    action: "view",
    object: "Work Logs and Submitted Work Logs",
    scope: "project",
    question: "Where can I see all recorded work logs for a project?",
    answer: "Go to Field Works → Progress → Work Logs to record progress via the configured Work Log Template (Work Package to Tag, Tag to Work Package, System to Tag, or Scheduled view). Go to \"Submitted Work Logs\" to see the full repository of all logs regardless of status, filterable by date range and by user, with a \"Download Excel\" export.",
    tags: ["work logs","submitted work logs","work log template","work log repository"]
  },
  {
    action: "view",
    object: "Quality Level 1 / Level 2 forms",
    scope: "project",
    question: "How do I complete a quality inspection form on-site?",
    answer: "Go to Field Works → choose a Tree Version → Quality tab. Depending on the configured Work Log Template, use either \"Work Package to Location/Tags Logging\" (select an Entity/CWA, then a Work Package, then a Ready item) or \"System to Tag Mapping\" (select a tag, then a quality package). Fill the form, then \"Save As Draft\" or \"Submit for Approval\". Level 1 must be approved (or skipped, per Project Settings → Quality Logs) before Level 2 becomes available.",
    tags: ["quality level 1","quality level 2","quality inspection","quality form field"]
  },
  {
    action: "approve",
    object: "quality logs",
    scope: "project",
    question: "How do I approve quality logs that have been submitted?",
    answer: "Go to Field Works → Quality → Approve Quality Logs. The default \"To Be Approved\" tab shows only forms awaiting your approval (visible only to users with approval permissions). Click a location/tag to open its pending work packages on the right and approve or reject; click \"All\" to see every work package with its status across all CWAs/Systems.",
    tags: ["approve quality logs","quality approval","quality logs review"]
  },
  {
    action: "view",
    object: "submitted quality logs",
    scope: "project",
    question: "Where is the full history of quality logs?",
    answer: "Go to Field Works → Quality → Submitted Quality Logs. Filter by Quality Level 1/2 and by user via the dropdowns, and by date range via the Filters/calendar. Use \"Download Excel\" to export the filtered or full set of logs.",
    tags: ["submitted quality logs","quality log history","quality log export"]
  },
  {
    action: "track",
    object: "quality workflow issues",
    scope: "project",
    question: "What happens when a quality form's approval is rejected?",
    answer: "A \"Quality Workflow Issue\" is created automatically in Field Works → Quality → Quality Workflow Issues. It has Open/Closed status (closes once the form is re-submitted and approved), can have a due date and assignee, supports Chat, and can be exported via \"Download Excel\".",
    tags: ["quality workflow issues","quality rejection","quality form rejected"]
  },
  {
    action: "track",
    object: "punch list",
    scope: "project",
    question: "What is a Punch List and how do I track it?",
    answer: "A Punch List is created automatically when an issue is raised from a quality form. Go to Field Works → Quality → Punch Lists to view them. Each punch list moves through Open → Rectify → QC_Verify states (click \"Rectify\" then \"QC_Verify\" to progress it), can have due dates/assignees, supports Chat, and can be filtered and exported via \"Download Excel\".",
    tags: ["punch list","quality punch list","QC verify","rectify"]
  },
  {
    action: "track",
    object: "restraint",
    scope: "project",
    question: "How do I raise and track a restraint (physical, legal, or contractual)?",
    answer: "Go to Field Works → Quality → Restraints, click \"Add Restraint\", fill the form, and submit. A restraint moves through Open → Rectify → QC_Verify (click \"Rectify\" then \"QC_Verify\" to progress). Add rectification guidance for a restraint type at the \"Restraint Rectification\" screen. Restraints support due dates, assignment, Chat, filters, and \"Download Excel\".",
    tags: ["restraint","create restraint","restraint rectification","restraint states"]
  },
  {
    action: "create",
    object: "safety observation",
    scope: "project",
    question: "How do I log a safety observation?",
    answer: "Go to Field Works → Safety → Safety Observations, click \"Add Observation\", fill in the details, and click \"Submit\". Each observation moves Open → Rectified (click \"Rectify\" to close it), can have a due date/assignee, and supports Chat, Follow Up Actions, filters, and \"Download Excel\".",
    tags: ["safety observation","add observation","safety inspection log"]
  },
  {
    action: "view",
    object: "safety calendar",
    scope: "project",
    question: "How do I access scheduled safety forms that are due?",
    answer: "Go to Field Works → Safety → Safety Calendar. Forms in \"Ready\" state appear in blue, grouped by category, per their scheduled date/time. Grey forms are not yet enabled; yellow forms are \"In Progress\" (awaiting approval or with issues). Open a form, fill it, then \"Save As Draft\" or \"Submit\"/\"Submit for Approval\".",
    tags: ["safety calendar","scheduled safety form","ready forms"]
  },
  {
    action: "create",
    object: "Daily Safety Issue (DSI)",
    scope: "project",
    question: "How are issues raised from safety forms tracked?",
    answer: "Issues raised from a project safety form or calendar form automatically become \"Daily Safety Issues\" — go to Field Works → Safety → Daily Safety Issues to view them. Each DSI moves Open → Rectified (click \"Rectify\" to close), can have a due date/assignee, and supports Chat, filters, and \"Download Excel\".",
    tags: ["daily safety issue","DSI","safety issue tracking"]
  },
  {
    action: "view",
    object: "completed safety forms",
    scope: "project",
    question: "Where is the full repository of submitted safety forms?",
    answer: "Go to Field Works → Safety → Completed Safety Forms. This shows all logs from both Safety Forms and Safety Calendar Forms, most recent first. Filter by user (Users dropdown) or by date range (Filters/calendar), and export via \"Download Excel\".",
    tags: ["completed safety forms","safety forms repository","submitted safety logs"]
  },
  {
    action: "submit",
    object: "safety form",
    scope: "project",
    question: "How do I fill out and submit an unscheduled safety form?",
    answer: "Go to Field Works → Safety → Safety Forms. Expand a category in the left menu to see its forms, click \"Create Form\", fill it in, then \"Save As Draft\" or \"Submit\"/\"Submit for Approval\". Each submitted card has a Chat button (images/text/video up to 5MB) and the standard Follow Up Actions/History/Download/Share/Print/Compose Mail/Email Threads actions. Failed checkpoints (answered \"No\") can auto-raise a Daily Safety Issue.",
    tags: ["safety form submission","submit safety form","safety checklist"]
  },
  {
    action: "view",
    object: "drawing workflow issues (field)",
    scope: "project",
    question: "How are drawing rejections tracked in the field?",
    answer: "Go to Field Works → Drawing Management → Drawing Workflow Issues. Every rejected drawing (at any approval level) creates a card here, searchable by ID/status, with due dates, assignment, Chat, filters, \"Download Excel\", and a table/card view toggle.",
    tags: ["drawing workflow issues","drawing rejection field","drawing issue tracking"]
  }
];

const QA_NOTIFICATIONS = [
  {
    action: "configure",
    object: "notification events",
    scope: "project",
    question: "How do I customize the message or channel for a notification event?",
    answer: "Go to Notifications → Events tab. Each event (a pre-defined trigger from Arena) has Email/Web/Mobile icons — click one to open and edit its message template. Click \"Reset to Standard\" to revert all templates to Arena's defaults (with a confirmation warning).",
    tags: ["notification events","notification template","reset to standard"]
  },
  {
    action: "create",
    object: "event group",
    scope: "project",
    question: "How do I group notification events and assign them to specific users?",
    answer: "Go to Notifications → Event Groups tab. Click \"Get Standard Event Groups\" to create Arena's default groups (only if none exist yet — running it again overwrites same-named groups with a warning), or click \"Add Event Group\" to create a custom one. Each group has \"Notifications\" and \"Users\" buttons to map which events and which users belong to it — only those users receive notifications for that group's events.",
    tags: ["event group","notification group","get standard event groups","assign notification users"]
  }
];

const QA_PEOPLEPROJECT = [
  {
    action: "assign",
    object: "project indirect staff",
    scope: "project",
    question: "How do I add indirect staff to a project?",
    answer: "Open the project and go to Project Setup → People/Roster → Project Indirect Staff. Select the system users to add and click \"Submit\" to assign them as indirect staff for the project.",
    tags: ["project indirect staff","indirect team","assign staff"]
  },
  {
    action: "create",
    object: "project crew",
    scope: "project",
    question: "How do I create a crew within a specific project?",
    answer: "Open the project, go to Project Setup → People/Roster → Project Crews, and click \"Create Crew\". Enter the crew name, select a supervisor and foreman, and pick the users to include (searchable), then click \"Submit\". Alternatively, click \"Copy Crews from Global Data\" to import existing crews from Global Data → Crews, or \"Map Crews to Projects\" to copy a crew from this project to others.",
    tags: ["create project crew","project crew","copy crew from global data","supervisor foreman"]
  },
  {
    action: "assign",
    object: "people to work packages",
    scope: "project",
    question: "How do I assign users/teams to project work packages?",
    answer: "Go to Project Setup → Project Works → Assign People (\"People\" screen), select CWA → System → Tag → Work Package, assign users/teams from the project Roster, then \"Save Changes\". Use \"Copy Users To\"/\"Copy Teams To\" to bulk-apply the same assignment to other selected work packages, and set an approval workflow via the \"Approval\" link.",
    tags: ["assign people work package","people screen","copy users to"]
  }
];

const QA_PERMISSIONS = [
  {
    action: "create",
    object: "permission role/user group (project)",
    scope: "project",
    question: "How do I create a new role or permission group in a project?",
    answer: "Open the project's Permissions screen, click the \"User Group\" button, and enter the name of the new user group in the pop-up.",
    tags: ["create permission group","project role","user group project"]
  },
  {
    action: "configure",
    object: "module permissions (rights)",
    scope: "project",
    question: "What permission rights can I grant to a role for a module?",
    answer: "On a role's card, click \"Permissions\", turn on \"Roll Back\" for the module, then choose from: Assign To (only the assigned user can view/create/edit/delete), View (view only), Create (add new data), Edit (update but not delete), Delete, Download (export excel), Print, and Admin (grants all of the above for that module).",
    tags: ["permission rights","assign to view create edit delete","admin permission","roll back toggle"]
  },
  {
    action: "copy",
    object: "user group to projects",
    scope: "project",
    question: "How do I copy a user group's permissions to other projects?",
    answer: "On the Permissions screen, click \"Copy User Groups to Projects\", which opens a pop-up to select the target projects to copy the user group(s) to.",
    tags: ["copy user group","copy permissions to projects"]
  },
  {
    action: "edit",
    object: "role/user group (rename, copy, delete)",
    scope: "project",
    question: "How do I rename, duplicate, or delete a permission role?",
    answer: "On the role's kebab menu (3 vertical dots): \"Edit\" opens a pop-up to rename the group; \"Copy\" duplicates the group's users and permissions into a new named group; \"Delete\" removes the group with a confirmation warning.",
    tags: ["edit role","copy role","delete permission group"]
  },
  {
    action: "assign",
    object: "users to a permission group",
    scope: "project",
    question: "How do I add users to a permission/role group?",
    answer: "On the role's card, click \"Users\" to open the list of users, and select which users should have that role's configured permissions and rights.",
    tags: ["assign users to role","add users to permission group"]
  }
];

const QA_PRODUCTIVITYLOGS = [
  {
    action: "create",
    object: "productivity log",
    scope: "project",
    question: "How do I log hours or quantities for a crew or employee?",
    answer: "Go to Field Works → Progress → Productivity Logs → Create. Click \"Set Phase Codes\" to choose which phase codes to log, pick the date range, then \"Create Log\" → \"Add Employee\" or \"Add Crew\" (or \"Clone Log\" to duplicate a prior log) and fill in the row(s). Click \"Next\" to move to the Log Quantity tab, enter quantities (check \"Activity 100% Complete\" if finished), then submit.",
    tags: ["create productivity log","log hours","log quantity","add employee add crew"]
  },
  {
    action: "approve",
    object: "productivity log",
    scope: "project",
    question: "How do I approve productivity logs submitted by field staff?",
    answer: "Go to Field Works → Progress → Productivity Logs → Logs. Admins/Approvers see Approve/Reject buttons — in the Quantities tab for Direct/Change Order phase codes, and the Timesheets tab for Indirect/Non-Productive phase codes.",
    tags: ["approve productivity log","reject productivity log","productivity logs review"]
  },
  {
    action: "configure",
    object: "productivity approval workflow",
    scope: "project",
    question: "How do I set up review levels for productivity logs?",
    answer: "Go to Field Works → Progress → Productivity Logs → Approval Workflow, click \"Create Level\", choose \"All Must Approve\" or \"Anyone Can Approve\", enter a description, and select approvers.",
    tags: ["productivity approval workflow","create level","review levels"]
  },
  {
    action: "view",
    object: "data summary (timesheets, quantities, labor units)",
    scope: "project",
    question: "How do I see aggregated productivity data across the project?",
    answer: "Go to Field Works → Progress → Productivity Logs → Data Summary. Three tabs: Timesheets (hours by employee/crew), Quantities (quantity by phase code/location), Labor Units (hours-to-quantity ratio). Each has \"Download Excel\" for the selected date range.",
    tags: ["data summary","timesheet data","quantity data","labor units summary"]
  },
  {
    action: "track",
    object: "productivity log issues",
    scope: "project",
    question: "What happens to a rejected productivity log?",
    answer: "A rejected log auto-generates an issue in Field Works → Progress → Productivity Logs → Issues, with comments from the approver/admin explaining the rejection; it can be assigned with a due date. Searchable and exportable via \"Download Excel\".",
    tags: ["productivity log issue","rejected log","log rejection reason"]
  }
];

const QA_PROJECTSETTINGS = [
  {
    action: "configure",
    object: "forms color template",
    scope: "project",
    question: "How do I set the brand color used across all forms in a project?",
    answer: "Go to Project Settings → Forms, select the organization's brand color from the dropdown, and click \"Save Changes\". This color is applied across all forms in the application.",
    tags: ["forms color","brand color","form template color"]
  },
  {
    action: "configure",
    object: "look and feel (light/dark mode)",
    scope: "project",
    question: "How do I switch the application to dark mode?",
    answer: "Go to Project Settings → Look & Feel, choose Light or Dark mode, and click \"Save Changes\". This setting is device-specific — it only applies to the device where it was configured.",
    tags: ["dark mode","light mode","look and feel settings"]
  },
  {
    action: "configure",
    object: "productivity log settings",
    scope: "project",
    question: "Where do I configure how productivity logs are created?",
    answer: "Go to Project Settings → Productivity Log Settings. Choose the Logging Type (\"Create Productivity Logs By Phase Code\" or \"By Level 3s\") and configure the Timesheets and Quantity tab fields (standard plus custom configurable fields).",
    tags: ["productivity log settings","logging type configuration"]
  }
];

const QA_PROJECTSETUP = [
  {
    action: "create",
    object: "WBS tree / tree version",
    scope: "project",
    question: "How do I create a WBS or tree structure for a project?",
    answer: "Open the Project, go to Project Setup → Project Works → Tree Version(s), then click \"Create\". You can either \"Create Tree Version\" and enter data manually (name, description, assign people), or choose \"Upload Tree Version Data\" to download a sample Excel, fill in Tree Version/Activity Sequence/User assignment/Other Attributes data, then upload it choosing Global or Local sequence type. The base skeleton structure is first defined in Global Data, and the Tree Version is the project-specific subproject/multi-tree built from it.",
    tags: ["WBS","tree version","work breakdown structure","project structure","upload tree excel","create tree"]
  },
  {
    action: "edit",
    object: "tree version",
    scope: "project",
    question: "How do I modify or delete a tree version?",
    answer: "In Project Setup → Project Works → Tree Version, click the edit icon on the tree version, change the fields, and click \"Submit\" to modify it. To delete, click the delete button inside the ellipsis (kebab) menu on that tree version's card.",
    tags: ["edit tree version","delete tree version","naming framework","assign percentage"]
  },
  {
    action: "create",
    object: "CWA (Construction Work Area)",
    scope: "project",
    question: "How do I create a Construction Work Area (CWA)?",
    answer: "Go to Project Setup → Project Works → Create CWA, click \"Create\", enter the CWA name, and click \"Submit\". CWA is the tier-1 layer of the project's 3-tier work structure; a project can have multiple CWAs. A CWA cannot be deleted if one or more Systems (tier-2) are linked to it.",
    tags: ["CWA","construction work area","tier 1","create work area"]
  },
  {
    action: "configure",
    object: "measurement method (progress/quality tracking)",
    scope: "project",
    question: "How is work package completion tracked or measured in a project?",
    answer: "Inncircles Arena supports two measurement methods, configured at Project Settings → Project Work Measurement: \"Percentage Based\" (assign percentage weightage to activities and to work packages within each activity; percentages within a group must sum to 100%) and \"Effort Based\" (assign man-hours instead of percentages). To assign weightages, go to Project Setup → Project Works → Measurement Methods, choose the Progress or Quality tab, click \"Assign\" on an activity, then \"View & Edit Work Packages\" to assign at the work-package level.",
    tags: ["measurement method","percentage based","effort based","progress tracking","work package completion"]
  },
  {
    action: "create",
    object: "custom column (project tree)",
    scope: "project",
    question: "How do I add a custom column to the project tree data?",
    answer: "Go to Project Setup → Project Works → Custom Columns, click \"Add Custom Column\", enter the column name and type, and click \"Submit\". A new column appears where users can enter related information for each tree element (CWA → System → Tag). Use \"Export\" to download the data as Excel, and the \"Edit\"/\"Delete\" options in the column header to modify or remove a custom column.",
    tags: ["custom columns","project tree columns","add column","export excel"]
  },
  {
    action: "define",
    object: "activity sequence",
    scope: "project",
    question: "How do I assign or modify a work sequence for a tag/location?",
    answer: "Go to Project Setup → Project Works → Assign Activity Sequence. For each tag with a sequence pre-defined in Global Data, click \"Add New Mappings\", select the sequence, and click \"Submit\". To customize, drag and drop work packages to reorder, or add/delete packages. Use \"Copy The Same For\" to apply a sequence to selected tags, or \"Copy The Same For Project\" to apply it project-wide to all unmapped tags of the same type.",
    tags: ["activity sequence","work sequence","assign sequence","tag mapping","copy sequence"]
  },
  {
    action: "define",
    object: "other attributes (budgeted qty/hours)",
    scope: "project",
    question: "How do I set budgeted hours or quantity for a work package?",
    answer: "Go to Project Setup → Project Works → Other Attributes (Qty | Hrs), select a CWA → System, then enter Budgeted Hours, Budgeted Quantity, Estimated Quantity, Planned Start/End Date, Forecasted End Date, Client End Date and Skyline End Date for each work package.",
    tags: ["other attributes","budgeted hours","budgeted quantity","estimate","planned dates"]
  },
  {
    action: "assign",
    object: "people to work packages",
    scope: "project",
    question: "How do I assign users or teams to a work package in a project?",
    answer: "Go to Project Setup → Project Works → Assign People (the \"People\" screen). Select CWA → System → Tag → Work Package, assign users/teams (pulled from the project's Roster), and click \"Save Changes\". Use \"Copy Users To\" or \"Copy Teams To\" to apply the same assignment to multiple selected work packages, and set up an approval workflow via the \"Approval\" option.",
    tags: ["assign people","work package assignment","project roster","copy users"]
  },
  {
    action: "create",
    object: "project crew",
    scope: "project",
    question: "How do I create a project crew or import crews from Global Data?",
    answer: "Go to Project Setup → People/Roster → Project Crews. Click \"Create Crew\" to build one manually (enter crew name, select supervisor, foreman, and users), or click \"Copy Crews from Global Data\" to select and import existing crews from Global Data → Crews. Use \"Map Crews to Projects\" to copy a crew from this project into other projects.",
    tags: ["project crew","create crew","copy crew","global data crews","foreman supervisor"]
  },
  {
    action: "assign",
    object: "project indirect staff",
    scope: "project",
    question: "What is Project Indirect Staff and how do I add users to it?",
    answer: "Project Indirect Staff refers to system users who work for the project but are not directly involved in field execution. Go to the Project Indirect Staff screen, select the users, and click \"Submit\" to assign them as indirect staff.",
    tags: ["indirect staff","project roster","indirect team"]
  },
  {
    action: "create",
    object: "cost estimate",
    scope: "project",
    question: "How do I create a cost estimate for a project?",
    answer: "Go to Project Setup → Cost Estimate → Create, select an Estimate Category, and click \"Create Estimate\". Under the Material/Labor/Equipment/Sub-Contractor/Other Expenses tabs you can \"Add Custom Columns\", \"Get Materials from Global Data\" (keep-and-update or replace-all), or \"Add Material\" to add line items manually; totals calculate automatically.",
    tags: ["cost estimate","create estimate","material cost","labor cost","budget"]
  },
  {
    action: "view",
    object: "cost estimate summary",
    scope: "project",
    question: "Where can I see a summary of all project costs?",
    answer: "Go to Project Setup → Cost Estimate → Estimate Summary. This is a view-only page showing all documented costs across materials, labor, equipment, sub-contractor and other expenses.",
    tags: ["cost estimate summary","view costs","cost summary"]
  },
  {
    action: "configure",
    object: "cost estimate approval workflow",
    scope: "project",
    question: "How do I set up an approval workflow for timesheets or quantity tracksheets?",
    answer: "Go to Project Setup → Cost Estimate → Workflow, select the feature (Timesheets or Quantity Tracksheets), click \"Create Level\", choose \"All Must Approve\" or \"Anyone Can Approve\", and select the approvers for that level.",
    tags: ["cost estimate workflow","approval workflow","timesheet approval","quantity approval"]
  },
  {
    action: "configure",
    object: "drawing training template (OCR)",
    scope: "project",
    question: "How do I set up OCR training for drawings?",
    answer: "Go to Project Setup → Drawings → Drawing Training, click \"Create Training Template\", name it, and click \"Submit\". Then configure it in 4 steps: (1) Upload Sample Drawing, (2) Create Labels (standard + configurable fields with types like Checkbox, Date, Text box, Single/Multi select, Signature, or \"Training Category\" for OCR), (3) OCR Training — select a label and mark its position (horizontal/vertical) on the drawing, (4) Preview Table to review all configured labels.",
    tags: ["drawing training","OCR configuration","drawing labels","auto label","training template"]
  },
  {
    action: "create",
    object: "drawing package",
    scope: "project",
    question: "How do I create a drawing package and upload drawings?",
    answer: "Go to Project Setup → Drawings → Drawing Packages, click \"Create Drawing Package\", fill in the details plus the training template, and click \"Submit\". Open the package to view Drawing Logs, then click \"Upload Drawing\" (PDF or image files), choose \"Auto Label Upload\" (OCR extraction) or \"Write Label Manually\", then \"Review & Submit\" each drawing or \"Submit All\".",
    tags: ["drawing package","upload drawing","drawing logs","create package"]
  },
  {
    action: "edit",
    object: "drawing (annotate/revise)",
    scope: "project",
    question: "How do I annotate, revise, or compare drawing versions?",
    answer: "Open a drawing from Drawing Packages/Drawing Logs and click \"Edit Drawing\" (or \"Comments\") to enter edit mode with annotation tools; click \"Save\"/\"Save Changes\" when done. Use \"Create Revision\" to upload a new version of the drawing. Use the \"Actions\" menu on a drawing log for Revisions (compare with color-coded diffs), Compare, Download, Share, Edit, Link (map to CWA/System/Tags), and Delete.",
    tags: ["drawing revision","drawing comparison","annotate drawing","create revision","edit drawing"]
  },
  {
    action: "configure",
    object: "drawing approval workflow",
    scope: "project",
    question: "How do I create an approval workflow for drawings?",
    answer: "Go to Project Setup → Drawings → Create Approval Workflow, click \"Create Approval Workflow\", then \"Create Level\" to add levels, choosing \"All must approve\" or \"Anyone can approve\" and selecting the approvers for that level.",
    tags: ["drawing approval workflow","create workflow","drawing levels"]
  },
  {
    action: "configure",
    object: "project forms approval workflow",
    scope: "project",
    question: "How do I set up an approval workflow for RFIs, Submittals, Change Orders, or custom project forms?",
    answer: "Go to Project Setup → Forms → Approval Workflow, select the form type (RFI, Submittal, Change Order, or a custom form), click \"Create Level\", choose \"All must approve\" or \"Anyone can approve\", and select the approvers for that level. This is configured per project and applies only if the \"Approval Work Toggle\" for that form type is set to Active in the Global Data form template.",
    tags: ["project forms approval","RFI workflow","submittal workflow","change order workflow","create level"]
  },
  {
    action: "configure",
    object: "safety approval workflow",
    scope: "project",
    question: "How do I create and assign a safety inspection approval workflow?",
    answer: "To create one, go to Project Setup → Safety → Create Workflow, click \"Create Workflow\" then \"Create Level\" (choose \"All must approve\" or \"Anyone can approve\" and select approvers). To apply it, go to Project Setup → Safety → Assign Workflow, select the safety work division and package, choose the workflow, and click \"Submit\" (\"Clear\" removes it unless already in progress).",
    tags: ["safety workflow","assign safety workflow","create safety workflow","approval levels"]
  },
  {
    action: "configure",
    object: "quality approval workflow",
    scope: "project",
    question: "How do I create and assign a quality control approval workflow?",
    answer: "To create one, go to Project Setup → Quality → Create Workflow, click \"Create Workflow\" then \"Create Level\" (choose \"All must approve\" or \"Anyone can approve\" and select approvers). To apply it, go to Project Setup → Quality → Assign Workflow, select the CWA, System, Tag and quality package, choose the workflow, and click \"Submit\".",
    tags: ["quality workflow","assign quality workflow","create quality workflow","quality approval"]
  },
  {
    action: "create",
    object: "safety folders and documents",
    scope: "project",
    question: "How do I create folders for safety-related documents?",
    answer: "Go to Project Setup → Safety → Safety & Documents, enter a name and click \"+\" to create a folder, then click into the folder to add related documents/files. Each folder supports Share (email to selected users), Print, and Delete (with warning).",
    tags: ["safety documents","safety folders","create folder"]
  },
  {
    action: "configure",
    object: "safety calendar forms",
    scope: "project",
    question: "How do I set up recurring (scheduled) safety forms?",
    answer: "Go to Project Setup → Safety → Setup Safety Calendar, click \"Create Safety Calendar Category\", name it, choose the safety forms to include, and set the schedule (Start Date/Time, End Date, recurrence frequency). Then click \"Click to make assignments\" on each form to assign it to users — unassigned forms will not appear to end users in Field Works.",
    tags: ["safety calendar","scheduled safety forms","recurrence","safety category"]
  },
  {
    action: "configure",
    object: "project safety forms (unscheduled)",
    scope: "project",
    question: "How do I set up unscheduled/ad-hoc safety forms for a project?",
    answer: "Go to Project Setup → Safety → Setup Project Safety Forms, click \"Create Safety Form Category\", name it and select the safety forms for that category, then click \"Click to make assignments\" to assign the forms to users (unassigned forms will not show in Field Works). Assigned users can be copied to other forms via the copy button.",
    tags: ["project safety forms","unscheduled safety","safety form category"]
  },
  {
    action: "create",
    object: "quality & documents folder (loop folder)",
    scope: "project",
    question: "How do I create a Quality & Documents (loop) folder and map work packages to it?",
    answer: "Go to Project Setup → Quality → Quality & Documents, click \"Create Folder\", name it, and click \"Submit\". Inside a folder, use \"Folder Items\" → \"Map Work Packages\" to assign CWA/System/Tag combinations to it, and use the Drawings, Documents, and Photos tabs to attach related files. Each folder tracks completed/in-progress/not-ready form counts.",
    tags: ["quality documents","loop folder","map work packages","quality folder"]
  },
  {
    action: "configure",
    object: "custom project form (Project Forms)",
    scope: "project",
    question: "How do I create a custom project form log?",
    answer: "Open the project, go to Field Works → Project Forms, click \"Create\" on the selected custom form from the left menu, fill the fields, then click \"Save As Draft\" or \"Submit For Approval\"/\"Submit\". This is distinct from Global Data's Construction Forms setup, which defines the form template itself (fields, sections, approval toggle) rather than individual logs.",
    tags: ["project forms","custom forms","create form log","save as draft"]
  },
  {
    action: "view",
    object: "project overview navigation",
    scope: "project",
    question: "What sub-sections exist under Project Setup?",
    answer: "Project Setup contains: Project Works (WBS/tree, CWA, Activity Sequence, Custom Columns, Other Attributes), Roster (People/Crews), Work Schedule, Quality, Safety, Drawings (Create Workflow, Drawing & OCR Configuration, Drawing Logs), Documents, Cost Estimates, and Forms.",
    tags: ["project setup navigation","project setup sections","project setup overview"]
  }
];

const QA_PROJECTUSERGROUPS = [
  {
    action: "view",
    object: "project users",
    scope: "module",
    question: "How do I see which projects and groups a specific user belongs to?",
    answer: "Go to Project User Groups → Project Users. Select a user from the list on the left (searchable by name or email) to see a table of the projects they're on and their group in each. Click a group in the table to see its permissions.",
    tags: ["project users list","user's projects","user group lookup"]
  },
  {
    action: "create",
    object: "standard user",
    scope: "module",
    question: "How do I add a \"standard user\" who is auto-added to every project?",
    answer: "Go to Project User Groups → Standard Users, click \"Add User\", select the user, then pick a standard group (only groups with \"Set as Default\" enabled are shown). That user is then automatically added to the project roster and default group of every existing and future project. Deleting a standard user does not remove them from projects they're already in.",
    tags: ["standard user","add standard user","default project user"]
  },
  {
    action: "create",
    object: "standard group",
    scope: "module",
    question: "How do I create a permission group that applies to every project by default?",
    answer: "Go to Project User Groups → Standard Groups, click \"Project User Groups\" to create one, enter a name, enable the needed permissions (checkboxes per field), and click \"Save Changes\". Enable \"Set to Default\" so it's automatically added to all existing and future projects (it will show a link icon inside each project's Users and Permissions). Enable \"Restrict Users\" to limit which users can belong to this group across projects — after enabling, select the eligible users, click Submit, then choose which projects the restriction applies to.",
    tags: ["standard group","set to default","restrict users","create permission group"]
  },
  {
    action: "edit",
    object: "standard group propagation",
    scope: "module",
    question: "What happens to existing projects when I edit a Standard Group?",
    answer: "Editing a Standard Group (that has \"Set to Default\" enabled) prompts a dialog asking which existing projects should receive the updated permissions/users — only the selected projects get the change; others keep their prior configuration. Disabling \"Set to Default\" stops it being applied to new projects but does not change existing projects, which keep functioning independently.",
    tags: ["standard group edit","propagate changes","set to default disable"]
  }
];

const QA_QUALITY = [
  {
    action: "configure",
    object: "quality form template (Level 1/Level 2)",
    scope: "module",
    question: "How do I set up the fields on a Quality Level 1 or Level 2 form?",
    answer: "First create Quality Work Packages under Global Work Packages → Quality. Then go to Global Data → Quality Forms, choose Quality Level-1 or Quality Level-2, and configure: Add Inspection Items (each gets Yes/No/N/A responses; \"No\" requires the user to specify an issue and priority), then Build Form (Add/Copy/Delete Section, Add/Copy/Delete Field with types like Attachment, Date, Signature, Table, etc., mark fields Required or \"Show on Cards\"), then Setup Trigger Points (raise issue / enter notes on field update, with a Post Rectification Status), and Preview. Click \"Save Changes\" after editing, \"Copy Form\" to duplicate across work packages, or \"Delete Form\" to remove it.",
    tags: ["quality form setup","quality level 1 template","quality level 2 template","inspection items"]
  },
  {
    action: "configure",
    object: "quality level settings (Project Settings)",
    scope: "project",
    question: "How do I disable Quality Level 2 (single-level quality inspection)?",
    answer: "Go to Project Settings → Quality Logs. By default Arena has two quality inspection levels; if a company only needs one, this is where you configure it. Click \"Save Changes\" to apply.",
    tags: ["quality level settings","single quality level","disable level 2","quality logs settings"]
  },
  {
    action: "configure",
    object: "quality work log template",
    scope: "project",
    question: "How do I choose which quality logging template a project uses?",
    answer: "Go to Project Settings → Quality Work Logs (Quality Work Log Templates). Choose between the available templates — e.g. \"Work Package to Location/Tags Logging\" (maps work packages to tags) or \"System to Tag Mapping\" (tags shown as status-colored cards) — which changes how the Quality tab appears in Field Works.",
    tags: ["quality work log template","quality template settings","work package to tags"]
  },
  {
    action: "configure",
    object: "quality priority levels (punch lists/restraints)",
    scope: "project",
    question: "How do I set priority levels for punch lists and restraints?",
    answer: "Go to Project Settings → Punch Lists & Restraints, click \"Add Priority\", enter the name and due hours within which the issue must be resolved, then click \"Add\". Use the Actions column to edit or delete a priority level.",
    tags: ["punch list priority","restraint priority","quality priority settings"]
  },
  {
    action: "submit",
    object: "quality inspection form",
    scope: "project",
    question: "How do I complete a Level 1 or Level 2 quality inspection in the field?",
    answer: "Go to Field Works → choose a Tree Version → Quality tab. Select the Entity/CWA (or search/filter by location for System-to-Tag templates), open a \"Ready\" item, fill the form (with mapped documents/drawings shown alongside), and click \"Save As Draft\" or \"Submit for Approval\". Level 2 becomes available once Level 1 is approved (or automatically if Level 1 is skipped in settings).",
    tags: ["submit quality form","quality inspection","quality level 1 submission"]
  },
  {
    action: "assign",
    object: "quality package responsible/approval",
    scope: "project",
    question: "How do I assign who is responsible for a quality package and who approves it?",
    answer: "Go to Project Setup → Works → People, and use \"Quality Package Responsible\" and \"Quality Package Approval\" to assign responsible individuals and configure the approval workflow for each work package.",
    tags: ["quality package responsible","quality package approval","assign quality workflow"]
  },
  {
    action: "approve",
    object: "quality log",
    scope: "project",
    question: "How do I approve or reject a submitted quality log?",
    answer: "Go to Field Works → Quality → Approve Quality Logs. The \"To Be Approved\" tab (visible only to approval-permitted users) shows pending work packages; click a location/tag to open it and approve/reject. Click \"All\" to view every work package's status across CWAs/Systems (color-coded legend at top right).",
    tags: ["approve quality log","reject quality log","quality approval screen"]
  },
  {
    action: "view",
    object: "submitted quality logs",
    scope: "project",
    question: "Where can I find the history of all submitted quality logs?",
    answer: "Go to Field Works → Quality → Submitted Quality Logs. Filter by Level 1/2 and by user, filter by date range, and use \"Download Excel\" to export.",
    tags: ["submitted quality logs","quality history","quality export"]
  },
  {
    action: "track",
    object: "quality workflow issues",
    scope: "project",
    question: "How are rejected quality forms tracked?",
    answer: "Go to Field Works → Quality → Quality Workflow Issues. A rejected quality form creates an issue here with Open/Closed status (closes once re-submitted and approved); supports due dates, assignment, Chat, and \"Download Excel\".",
    tags: ["quality workflow issues","quality form rejected","quality issue tracking"]
  },
  {
    action: "track",
    object: "punch list",
    scope: "project",
    question: "How do I manage a punch list item raised from a quality inspection?",
    answer: "Go to Field Works → Quality → Punch Lists. Each punch list moves Open → Rectify → QC_Verify (click \"Rectify\" then \"QC_Verify\"); assign due dates/users, use Chat for collaboration, filter, and export via \"Download Excel\".",
    tags: ["punch list","quality punch list","rectify punch list","QC verify"]
  },
  {
    action: "track",
    object: "restraint and restraint rectification",
    scope: "project",
    question: "How do I add rectification guidance for a restraint?",
    answer: "Go to Field Works → Quality → Restraint Rectification. Each existing restraint has an Edit button to enter rectification text, which then displays as guidance on the restraint for users. Use \"Download Excel\" to export restraints with rectification text.",
    tags: ["restraint rectification","rectification guidance","restraint edit"]
  },
  {
    action: "create",
    object: "quality & documents (loop) folder",
    scope: "project",
    question: "How do I create and organize a Quality & Documents (loop) folder?",
    answer: "Go to Project Setup → Quality → Quality & Documents, click \"Create Folder\", name it, and \"Submit\". Use the search bar to find folders, \"Filters\" to filter by CWA/System/Commodity, and the kebab menu for Edit/Share/Delete/Print. Each folder has four sections: Folder Items (map work packages via \"Map Work Packages\"), Drawings (create sub-folders, add/map drawing files, link to tags), Documents (create/upload/link documents, set up an approval workflow via \"Setup Workflow\"), and Photos (add/edit/delete images).",
    tags: ["quality documents folder","loop folder","create quality folder","map work packages"]
  },
  {
    action: "approve",
    object: "quality document",
    scope: "project",
    question: "How do I approve a document uploaded to a Quality & Documents folder?",
    answer: "Documents added to a Quality & Documents folder require approval if a workflow was set up (\"Setup Workflow\" on the document). Use \"Send for Approval\" on the document, then approvers act on it via the \"Approve Documents\" section, where documents needing their review appear.",
    tags: ["approve quality document","document approval workflow","send for approval"]
  },
  {
    action: "export",
    object: "quality data (excel upload)",
    scope: "project",
    question: "How do I bulk-upload quality data and documents via Excel/ZIP?",
    answer: "Go to Data Analytics and Insights → Configurable Analytics → Excel. Use \"People Assignments Excel\" to bulk-assign users to work packages, or \"Upload Quality and Documents\" to upload a ZIP of quality-related drawings/documents. Alternatively, upload drawings directly via Project Setup → Quality → Upload Excel; view all uploaded ZIPs under Project Setup → Quality → Uploaded Files.",
    tags: ["quality excel upload","bulk upload quality","upload zip","people assignments excel"]
  }
];

const QA_SAFETY = [
  {
    action: "configure",
    object: "safety form template",
    scope: "module",
    question: "How do I set up the fields on a Safety form?",
    answer: "Go to Global Data → Safety Forms. Pre-requisite: create Work Packages under the Safety dropdown in Global Work Packages. Then configure: Create Inspection Items (Yes/No/N/A responses; \"No\" auto-prompts an issue), customize Inspection Item Response text (e.g. Accept/Reject) via each response's edit icon, and build sections/fields (Add Section, Add Field with types like Attachment, Checkbox, Date, Signature, Table, etc.). Set Trigger Points to allow issue-raising per field, then Preview. Save with \"Save Changes\".",
    tags: ["safety form setup","safety inspection items","safety form fields","global data safety forms"]
  },
  {
    action: "configure",
    object: "safety issue priority levels",
    scope: "project",
    question: "How do I set priority levels for safety issues?",
    answer: "Go to Project Settings → Safety Issues, click \"Add Priority\", enter the name and due hours within which the issue must be resolved, then click \"Add\".",
    tags: ["safety issue priority","safety priority settings","add priority"]
  },
  {
    action: "configure",
    object: "safety calendar forms (scheduled)",
    scope: "project",
    question: "How do I schedule a recurring safety form for a project?",
    answer: "Go to Project Setup → Safety → Setup Safety Calendar, click \"Create Safety Calendar Category\", name it, select the safety forms, and set the schedule (Start Date/Time, End Date, recurrence frequency). Click \"Click to make assignments\" on each form to assign users — unassigned forms won't appear to end users in Field Works.",
    tags: ["safety calendar setup","scheduled safety forms","recurring safety inspection"]
  },
  {
    action: "configure",
    object: "project safety forms (unscheduled)",
    scope: "project",
    question: "How do I set up an ad-hoc (non-recurring) safety form for a project?",
    answer: "Go to Project Setup → Safety → Setup Project Safety Forms, click \"Create Safety Form Category\", name it and pick the forms, then use \"Click to make assignments\" to assign users to each form (required for it to show in Field Works). Categories can be edited/deleted if there are no dependent logs.",
    tags: ["project safety forms setup","unscheduled safety","ad hoc safety form"]
  },
  {
    action: "create",
    object: "safety folders and documents",
    scope: "project",
    question: "How do I organize safety-related documents into folders?",
    answer: "Go to Project Setup → Safety → Safety & Documents, enter a folder name and click \"+\". Click into a folder to add documents/files. Folder-level actions: Share (email to selected users), Print (bulk document print), and Delete (with a warning).",
    tags: ["safety documents folder","safety file organization"]
  },
  {
    action: "configure",
    object: "safety approval workflow",
    scope: "project",
    question: "How do I create and assign a safety inspection approval workflow?",
    answer: "Create it at Project Setup → Safety → Create Workflow: click \"Create Workflow\", then \"Create Level\" (choose \"All must approve\" or \"Anyone can approve\" and pick approvers). Apply it at Project Setup → Safety → Assign Workflow: select the safety work division and package, choose the workflow, and click \"Submit\" (\"Clear\" removes it unless in progress).",
    tags: ["safety approval workflow","create safety workflow","assign safety workflow"]
  },
  {
    action: "submit",
    object: "safety form (field)",
    scope: "project",
    question: "How do I fill out a safety form on-site?",
    answer: "Go to Field Works → Safety → Safety Forms (for ad-hoc forms) or Safety Calendar (for scheduled ones). Click \"Create Form\" (or open a scheduled \"Ready\" form), fill it in, then \"Save As Draft\" or \"Submit\"/\"Submit for Approval\". A \"No\" answer on an inspection item can auto-raise a Daily Safety Issue.",
    tags: ["submit safety form","fill safety form","safety inspection field"]
  },
  {
    action: "create",
    object: "safety observation",
    scope: "project",
    question: "How do I log a safety observation during a random inspection?",
    answer: "Go to Field Works → Safety → Safety Observations, click \"Add Observation\", enter the details, and \"Submit\". It moves Open → Rectified (click \"Rectify\" to close); supports due dates, assignment, Chat, Follow Up Actions, filters, and \"Download Excel\".",
    tags: ["safety observation","log observation","safety inspection concern"]
  },
  {
    action: "track",
    object: "Daily Safety Issue (DSI)",
    scope: "project",
    question: "What is a Daily Safety Issue and how is it created?",
    answer: "A Daily Safety Issue (DSI) is auto-generated when an issue is raised from a project safety form or calendar form. View them at Field Works → Safety → Daily Safety Issues. Each DSI moves Open → Rectified (click \"Rectify\"); supports due dates, assignment, Chat, filters, and \"Download Excel\".",
    tags: ["daily safety issue","DSI","safety issue creation"]
  },
  {
    action: "view",
    object: "completed/submitted safety forms",
    scope: "project",
    question: "Where is the repository of all completed safety forms?",
    answer: "Go to Field Works → Safety → Completed Safety Forms. Shows all logs from Safety Forms and Safety Calendar, most recent first; filter by user or date range, export via \"Download Excel\".",
    tags: ["completed safety forms","safety form repository","submitted safety logs"]
  },
  {
    action: "view",
    object: "safety calendar (ready forms)",
    scope: "project",
    question: "How do I see which safety forms are due today?",
    answer: "Go to Field Works → Safety → Safety Calendar. \"Ready\" forms (enabled per their scheduled date/time) appear in blue by category; grey means not yet enabled, yellow means in-progress/awaiting approval or has issues.",
    tags: ["safety calendar ready","due safety forms","safety schedule view"]
  }
];

const QA_WORKLOGS = [
  {
    action: "create",
    object: "work log",
    scope: "project",
    question: "How do I record a work log entry?",
    answer: "Go to Field Works → Progress → Work Logs. The available views depend on the configured Work Log Template: Work Package to Tag View, Tag to Work Package View, System to Tag View, or Worklogs in Scheduled View.",
    tags: ["create work log","work log views","record progress"]
  },
  {
    action: "view",
    object: "submitted work logs",
    scope: "project",
    question: "Where can I see every work log regardless of its status?",
    answer: "Go to Field Works → Progress → Submitted Work Logs. All logs are recorded here by default regardless of status. Filter by a time range (default \"All\") and by user via the Users filter, then export via \"Download Excel\".",
    tags: ["submitted work logs","work log repository","all work logs"]
  },
  {
    action: "view",
    object: "Site Posts",
    scope: "project",
    question: "What is Site Posts?",
    answer: "Site Posts (Field Works → Progress → Work Logs → Site Posts) is Arena's built-in social feed for a project — click \"Create a Post\" to share text, images or video (up to 50MB) visible to all project users, with Like/Comment support.",
    tags: ["site posts","social feed","project updates"]
  }
];

const QA_WORKORDER = [
  {
    action: "create",
    object: "work order",
    scope: "module",
    question: "How do I create a new work order?",
    answer: "Go to Home → Work Order → click the \"Create\" button. Fill in the relevant details, select the Work Order Type (configured in Global Data) from the dropdown, then click Submit. The new work order appears as a card you can click to open.",
    tags: ["new work order","add work order","work order contract","create contract","work order creation"]
  },
  {
    action: "view",
    object: "work order",
    scope: "module",
    question: "How do I open a work order I already created?",
    answer: "On the Work Order Creation page, click the card of the work order you want to open. You can also switch between grid/card view using the view toggle in the top right of the page.",
    tags: ["open work order","view work order","work order card","switch view"]
  },
  {
    action: "define",
    object: "work order profile",
    scope: "module",
    question: "What is the Work Order Profile tab?",
    answer: "Work Order - Profile is the space to set up a work order's profile details and create items along with forms. It uses the form configured in Global Data for that Work Order Type.",
    tags: ["work order profile","profile tab","work order details","item setup"]
  },
  {
    action: "create",
    object: "work order item",
    scope: "module",
    question: "How do I add an item inside a work order?",
    answer: "Open the work order's Profile tab and click \"Create Item\". You can create multiple items inside one work order, and each item can be connected to a Project tree or to Issues.",
    tags: ["add item","work order item","create item","link item"]
  },
  {
    action: "link",
    object: "work order item",
    scope: "module",
    question: "How do I link a work order item to a project tree?",
    answer: "In Work Order - Profile, when linking an item to a tree, select the Project, then select its tree version, and continue through the remaining tree selections.",
    tags: ["link project tree","item to tree","project version","tree linking"]
  },
  {
    action: "link",
    object: "work order item",
    scope: "module",
    question: "How do I link issues to a work order item?",
    answer: "In Work Order - Profile, when linking with Issues, select the Issue type from the dropdown to see the detailed list of issues, then select one or multiple issues to link to the item.",
    tags: ["link issues","item issues","issue linking","work order issues"]
  },
  {
    action: "assign",
    object: "work order team",
    scope: "module",
    question: "How do I add users to a work order's team?",
    answer: "Go to Work Order - Team, select the \"Users\" tab at the top, multi-select the users you want to add, then click Submit.",
    tags: ["add users","work order team","assign users","team setup"]
  },
  {
    action: "assign",
    object: "work order crew",
    scope: "module",
    question: "How do I add a crew to a work order?",
    answer: "Go to Work Order - Team, select the \"Crews\" tab at the top, multi-select from the crews already created in Global Data, then click Submit.",
    tags: ["add crew","assign crew","work order crew","crews tab"]
  },
  {
    action: "view",
    object: "work order drawing",
    scope: "module",
    question: "How do I upload a drawing to a work order?",
    answer: "Go to Work Order - Drawings and click \"Upload Drawing\". Once uploaded, the drawing appears on the same page; you can switch between table view and card view.",
    tags: ["upload drawing","work order drawing","add drawing","drawing tab"]
  },
  {
    action: "edit",
    object: "work order drawing",
    scope: "module",
    question: "How do I annotate or delete a work order drawing?",
    answer: "On Work Order - Drawings, open the ellipsis (...) menu on the drawing and choose Edit, Annotate, or Delete. Choose \"Annotate\" to mark changes directly on the drawing file.",
    tags: ["annotate drawing","edit drawing","delete drawing","drawing menu"]
  },
  {
    action: "view",
    object: "work order document",
    scope: "module",
    question: "Where do I find documents related to a work order's procurement?",
    answer: "Go to Work Order - Documents. This space shows all Procurement documents fetched directly from every Procurement stage; click a folder to open the documents linked to that stage.",
    tags: ["work order documents","procurement documents","document folders","view documents"]
  },
  {
    action: "submit",
    object: "work order email",
    scope: "module",
    question: "How do I send an email from a work order?",
    answer: "Go to Work Order - Communication and click \"Compose Mail\" to send a new mail. This tab is a mail repository for the work order with Sent, Starred, Drafts, and Trash sections, similar to a standard inbox.",
    tags: ["compose mail","work order email","send mail","communication tab"]
  },
  {
    action: "configure",
    object: "work order status",
    scope: "global",
    question: "How do I configure statuses for work orders and items?",
    answer: "Go to Global Data → Work Order → Work Order Status Configuration. Select the appropriate section on the left, then click \"Add status\" to create a status type (e.g. \"Yet to begin\", \"Completed\"). You can set each status's color using the pencil icon in the Actions column.",
    tags: ["work order status","configure status","add status","status colors","global data work order"]
  },
  {
    action: "create",
    object: "work order type",
    scope: "global",
    question: "How do I create a new Work Order Type?",
    answer: "In Global Data → Work Order → Work Order Types, click \"Create\". In the dialog, enter the name and description for the Work Order type and press Submit. Created types are listed on the Work Order page in Global Data and can be edited via the \"Edit\" option on each card.",
    tags: ["work order type","create type","global data work order types","configure work order type"]
  },
  {
    action: "edit",
    object: "work order type",
    scope: "global",
    question: "How do I edit an existing Work Order Type?",
    answer: "In Global Data → Work Order → Work Order Types, click the name of the Work Order type to open its details, or click \"Edit\" on the Work Order card to modify it.",
    tags: ["edit work order type","modify work order type","global data"]
  },
  {
    action: "define",
    object: "work order timesheet",
    scope: "module",
    question: "What is the Work Order Timesheet tab for?",
    answer: "Work Order - Timesheet is the tab within a work order used to manage crew/vendor timesheet entries for that work order (accessed via the work order's Timesheet tab).",
    tags: ["work order timesheet","timesheet tab","crew timesheet","vendee timesheet"]
  },
  {
    action: "view",
    object: "work order inventory",
    scope: "module",
    question: "What is the Work Order Inventory Management tab?",
    answer: "Work Order - Inventory Management is the tab within a work order for tracking inventory associated with that work order.",
    tags: ["work order inventory","inventory management","inventory tab"]
  },
  {
    action: "view",
    object: "work order LOR",
    scope: "module",
    question: "How do I access Load Out Requests (LORs) from a work order?",
    answer: "Open the work order and go to its \"LORs\" tab (Work Order - LORs) to view Load Out Requests / equipment associated with that work order.",
    tags: ["work order LOR","load out request","equipment tab","LORs"]
  }
];

// Arena Knowledge Base — structured module content
// Each module: id, name, tile, tagline, sections[]. Each section: heading, html (body), qa[] (question, answer html, tags[])

const MODULES = [
  {
    id: "opportunity",
    qaItems: QA_OPPORTUNITY,
    name: "Opportunity Management",
    alias: "Leads Management",
    icon: "groups",
    tagline: "Identify opportunities and build relationships with customers",
    color: "#c15f3c",
    overview: `<p><strong>Opportunity Management</strong> is Arena's pre-construction CRM module — the front end of the business-development pipeline. Staff capture potential jobs as early as the <strong>Lead</strong> stage, track them through a configurable pipeline (<strong>Lead → Proposal → Closed</strong>), assign owners/competitors/stakeholders, log every customer interaction, and hand qualified pursuits to <strong>Proposal Management</strong> and <strong>Tender Management</strong>.</p>
    <p>In the URL and inside an open Project, this module is labeled <strong>Leads Management</strong> (route <code>#/leads-management</code>, main tab "Leads"). From the company-wide Home screen it's labeled <strong>Opportunities Management</strong> ("Opportunities"). Same screens, same functionality — just a per-context label.</p>`,
    navigation: [
      `From <strong>Home</strong>, click the <strong>Opportunity Management</strong> tile.`,
      `Opens at <code>#/leads-management</code> on the <strong>My Dashboard</strong> tab.`,
      `Second-level tabs: My Dashboard, Opportunities, Customers Interactions, Analytics, Reports, Account Assignment.`,
      `Icon shortcuts to the right of the tabs: Task, Calendar, Contacts Directory, Customers, Owners, Competitors, Settings.`
    ],
    sections: [
      {
        id: "dashboard",
        heading: "My Dashboard",
        html: `<p>Personal KPI landing page for the pipeline.</p>
        <ul>
          <li><strong>Total Opportunities</strong> card — count + <strong>Total value (₹)</strong>, trend vs. yesterday, with a <strong>Daily / Weekly / Monthly</strong> toggle that re-bases every KPI card.</li>
          <li><strong>Total Opportunity Value</strong> — sum of Opportunity Value across all records.</li>
          <li><strong>Weighted Opportunity Value</strong> — value weighted by win probability.</li>
          <li><strong>Due This Week</strong> — opportunities whose Due Date falls this week.</li>
          <li><strong>Stale Opportunities</strong> — count past the configurable Stale Threshold (Settings → Opportunities Form).</li>
          <li><strong>Opportunity Funnel</strong> — chart of counts/value by stage.</li>
          <li><strong>Task</strong> panel — module task list, <strong>+ Create Task</strong>.</li>
          <li><strong>Recent Activity</strong> — activity feed.</li>
          <li><strong>Top 10 Opportunities</strong> — ranked by value, with its own <strong>+ Create Opportunity</strong> shortcut.</li>
          <li><strong>Upcoming Opportunity Due Date</strong> — opportunities nearing due date, own <strong>+ Create</strong>.</li>
        </ul>`,
        qa: [
          {
            q: "What is Weighted Opportunity Value?",
            tags: ["weighted value","dashboard kpi","win probability"],
            a: `<p>It's the sum of opportunity values weighted by win-probability, shown as a KPI on <strong>My Dashboard</strong>. It gives a probability-adjusted view of pipeline value rather than a raw total.</p>`
          },
          {
            q: "What is a Stale Opportunity?",
            tags: ["stale opportunity","stale threshold","inactivity"],
            a: `<p>An opportunity that has crossed the configurable <strong>Stale Threshold</strong> — a number of days of inactivity set in <strong>Settings → Opportunities Form → Stale Threshold</strong>. The count of stale opportunities is shown as a KPI on <strong>My Dashboard</strong>.</p>`
          },
          {
            q: "Where can I see a quick summary of pipeline health?",
            tags: ["pipeline summary","dashboard overview"],
            a: `<p><strong>My Dashboard</strong> is the personal, KPI-driven landing page showing totals, value, staleness, funnel shape, tasks, and upcoming due dates.</p>`
          },
          {
            q: "Where do I see opportunities that are overdue or coming due soon?",
            tags: ["due date","overdue opportunities","upcoming due date"],
            a: `<p>Check <strong>My Dashboard's Due This Week</strong> KPI card and <strong>Upcoming Opportunity Due Date</strong> list, or filter the Opportunities list by <strong>Due Date</strong>.</p>`
          },
          {
            q: "Where do I see the top opportunities by value?",
            tags: ["top opportunities","highest value"],
            a: `<p><strong>My Dashboard's Top 10 Opportunities</strong> widget, ranked by value, with its own <span class="kbd">+ Create Opportunity</span> shortcut.</p>`
          }
        ]
      },
      {
        id: "opportunities-list",
        heading: "Opportunities (main list)",
        html: `<p>System-of-record list of every pursuit, with full CRUD, filtering, column customization, and three layouts.</p>
        <p><strong>Toolbar:</strong> <span class="kbd">+ Create</span> · Search · <span class="kbd">Export</span> · <span class="kbd">Filters</span> · <span class="kbd">Manage Columns</span> (Table view only) · view toggles <strong>Table / Grid / Kanban</strong> (Kanban boards by Stage, showing count + Opportunity/Forecasted Value totals per column) · Save view.</p>
        <p><strong>Default columns:</strong> Opportunity ID, Opportunity Name, Description, Created By, Customer, Customer POC, Owner, Owner POC, Project Locations, Due Date, Opportunity Value, Competitors, Assign To, Actions.</p>
        <p><strong>Filters panel fields:</strong> Name, ID, Stage, Status, Created By, Created/Due Date ranges, Customer Groups, Customers, Customer POC, Contracting Entities (+POC), Owner (+POC), EPC/Engineer (+POC), Project Locations, Assign To, Business Development, Business Unit, Opportunity Type, Project Type, Market Type, Sub Market Type, Opportunity Value range. Buttons: Save Filters, Clear Filters, Submit.</p>
        <p><strong>Manage Columns</strong> exposes the full data model (45+ fields) across two panes — Column Options (checkbox list, searchable) and Column Arrangement (drag to reorder, × to remove). Buttons: Reset to Default, Cancel, Apply.</p>`,
        qa: [
          {
            q: "How do I create a new opportunity?",
            tags: ["create opportunity","add lead","new pursuit"],
            a: `<ol>
              <li>Go to <strong>Opportunities Management → Opportunities</strong>.</li>
              <li>Click <span class="kbd">+ Create</span> in the toolbar.</li>
              <li><strong>Details:</strong> enter <strong>Opportunity Name*</strong> (required) and pick a <strong>Market Type</strong> (Highway, Residential, Infrastructure, Interiors, …).</li>
              <li><strong>Status &amp; Value:</strong> <strong>Stage*</strong> defaults to "Lead" and is locked. <strong>Status*</strong> is required — its options come from whatever Statuses are configured for that Stage.</li>
              <li><strong>Contact:</strong> optionally set <strong>Customer Groups</strong>, <strong>Site Representative</strong>, <strong>Corporate Lead</strong>, <strong>Executive Lead</strong> (searchable people-pickers, auto-suggested from Account Assignment).</li>
              <li>Click <span class="kbd">Submit</span>.</li>
            </ol>
            <p class="callout">⚠ In this environment, Submit can fail with "Status is required" because the <strong>Lead</strong> stage has zero Statuses configured under Settings → Stages &amp; Statuses Configuration. An admin must add at least one Status to Lead before new opportunities can be created.</p>`
          },
          {
            q: "What columns can I add to the Opportunities table?",
            tags: ["manage columns","fields","data model"],
            a: `<p>Via <span class="kbd">Manage Columns</span>: Opportunity ID/Name, Description, Created By, Project Types, Business Development, Business Unit, Opportunity Type, Milestone Template, Market/Sub Market Type, Stage, Status, TIC, Opportunity Value, Go %, Get %, Win Probability (%), AI Probability, Weighted Value (+AI), Probability (Manual/AI), Proposals, Tenders, Required Compliances, Created/Due/Follow Up Date, Opportunity Age, Stage Threshold Notification, Last Interaction, Inactivity (Days), Inactive Threshold Notification, Customer (+POC, Tier), Owner (+POC), EPC/Engineer (+POC), Contracting Entity (+POC), Project Locations, Competitors, Site Representative, Corporate Lead, Executive Lead, Assign To, Actions.</p>`
          },
          {
            q: "What view modes does the Opportunities list support?",
            tags: ["table view","grid view","kanban view"],
            a: `<p>Three: <strong>Table View</strong> (default, spreadsheet-style grid), <strong>Grid View</strong> (card-based layout), and <strong>Kanban View</strong> (a board with one column per Stage: Lead, Proposal, Closed). Each Kanban column header shows the opportunity count for that stage plus its Opportunity Value and Forecasted Value totals.</p>`
          },
          {
            q: "What is required to create an Opportunity, and can I choose the starting Stage?",
            tags: ["required fields","starting stage","lead stage"],
            a: `<p>Only <strong>Opportunity Name*</strong> and <strong>Status*</strong> are marked required on the Create Opportunity dialog. <strong>Stage*</strong> is also required but is pre-set to <strong>Lead</strong> and locked — every new Opportunity starts in Lead and you cannot choose a different starting stage.</p>`
          },
          {
            q: "How do I edit or delete an existing Opportunity?",
            tags: ["edit opportunity","delete opportunity"],
            a: `<p>Open the row's <strong>Actions</strong> menu on the Opportunities list and choose <strong>Edit</strong> (opens the record in an editable form) or <strong>Delete</strong> — the same row-action pattern (History / Edit / Delete / Notes) used on Customers, Owners, and Competitors.</p>`
          },
          {
            q: "Where do I set the Opportunity's Description, Owner, or Opportunity Value if they aren't on the Create dialog?",
            tags: ["opportunity fields","edit opportunity value","owner field"],
            a: `<p>Fields like <strong>Description, Project Types, Business Development, Business Unit, Opportunity Type, Milestone Template, Sub Market Type, TIC, Opportunity Value, Owner, Owner POC, Customer, Tier, EPC/Engineer, Contracting Entity, Project Locations, Competitors, Assign To</strong>, and others exist on the full Opportunity record (visible in <strong>Manage Columns</strong> and the Pipeline Report) but aren't present on the initial Create dialog — they're editable from the Opportunity's detail/edit view once the record exists.</p>`
          },
          {
            q: "Can an Opportunity have sub-opportunities?",
            tags: ["parent opportunity","child opportunity","sub-opportunity"],
            a: `<p>Yes. The full Opportunity record includes a <strong>Parent / Child / Standalone</strong> relationship flag with Child Count and Active Child Count, so Opportunities can be organized hierarchically — e.g. a master pursuit with several sub-opportunities. The ID format for child opportunities is configured separately under <strong>Settings → ID Settings → Child ID Settings</strong>.</p>`
          },
          {
            q: "How do I change the column order, or remove a single column, in the Opportunities table?",
            tags: ["reorder columns","remove column","column arrangement"],
            a: `<p>Open <strong>Manage Columns → Column Arrangement</strong>: drag a column using its handle to reorder it, or click the close (×) icon next to a column to remove it. Click <strong>Apply</strong> when done, or <strong>Reset to Default</strong> to restore the default set entirely.</p>`
          },
          {
            q: "How do I save my current view (filters, columns, and layout) for next time?",
            tags: ["save view","save filters and columns"],
            a: `<p>Click the <strong>save</strong> icon in the Opportunities toolbar — it saves the current filter, column, and layout configuration together.</p>`
          },
          {
            q: "What's the difference between Go % and Get %?",
            tags: ["go percent","get percent","probability metrics"],
            a: `<p>Both appear as separate percentage fields/columns on Opportunities and in the Forecast Report (e.g. Go% Weighted Value vs. Get% Weighted Value), used alongside Win Probability and AI Probability as distinct probability/likelihood measures feeding weighted-value calculations. The exact business meaning of each beyond that isn't further defined in the product.</p>`
          },
          {
            q: "What is the difference between Win Probability (%), AI Probability, and Probability (Manual/AI)?",
            tags: ["win probability","ai probability","weighted value"],
            a: `<p><strong>Win Probability (%)</strong> and <strong>AI Probability</strong> are tracked as separate columns on an Opportunity, and <strong>Probability (Manual/AI)</strong> is a toggle/flag indicating which probability source is in effect. Correspondingly, <strong>Weighted Value</strong> and <strong>AI Weighted Value</strong> are separate weighted-value calculations — one based on manual probability entry, one AI-derived.</p>`
          },
          {
            q: "What does \"Opportunity Age\" mean?",
            tags: ["opportunity age","days open"],
            a: `<p>A tracked field (in days) representing how long the Opportunity has existed, shown in <strong>Manage Columns</strong> and the Pipeline Report as "Opportunity Age (In Days)".</p>`
          },
          {
            q: "What is \"Inactivity (In Days)\" vs. \"Last Interaction\"?",
            tags: ["inactivity","last interaction","days in stage"],
            a: `<p><strong>Last Interaction</strong> records the date of the most recent activity on the Opportunity; <strong>Inactivity (In Days)</strong> is the number of days elapsed since that last interaction. Both are available as columns, and Inactivity feeds the Stale Threshold logic. A related field, <strong>Days in Current Stage</strong> (seen in the Opportunity Aging Report and Pipeline Report), tracks how long the Opportunity has sat in its current Stage, used to gauge pipeline velocity.</p>`
          },
          {
            q: "What is a \"Stage Threshold\" and how is it different from \"Stale Threshold\"?",
            tags: ["stage threshold","stale threshold difference"],
            a: `<p><strong>Stage Threshold (In Days)</strong> is configured per Stage in <strong>Settings → Stages &amp; Statuses Configuration</strong> and drives the "Stage Threshold Notification" column (flagging opportunities that have lingered too long in a specific stage). <strong>Stale Threshold</strong> is a single, module-wide setting in <strong>Settings → Opportunities Form</strong> based on overall inactivity, feeding the dashboard's Stale Opportunities KPI. They apply at different scopes — per-stage vs. whole-opportunity.</p>`
          },
          {
            q: "What's the difference between Site Representative, Corporate Lead, and Executive Lead?",
            tags: ["site representative","corporate lead","executive lead"],
            a: `<p>All three are searchable people-picker roles assignable to any system user/contact, used both on <strong>Create Opportunity</strong> and in <strong>Account Assignment</strong>. They represent three levels of the responsibility chain for a customer account — an on-the-ground Site Representative, a Corporate Lead, and an Executive Lead — pre-populated from the Account Assignment registry when a matching Customer/Market Type combination exists.</p>`
          },
          {
            q: "What is Market Type vs. Sub Market Type?",
            tags: ["market type","sub market type"],
            a: `<p><strong>Market Type</strong> is the top-level segment an Opportunity or Account Assignment belongs to (e.g. Highway, Residential, Infrastructure, Interiors). <strong>Sub Market Type</strong> is a more granular classification nested under it, tracked as a separate field/column throughout the module.</p>`
          },
          {
            q: "Why don't I see a Manage Columns button on the Opportunities list?",
            tags: ["manage columns missing","grid view","kanban view"],
            a: `<p>You're likely in <strong>Grid View</strong> or <strong>Kanban View</strong> — <strong>Manage Columns</strong> only appears in <strong>Table View</strong>.</p>`
          },
          {
            q: "Why is the Opportunities list showing \"No Data Available\", with no row actions?",
            tags: ["no data available","no opportunities","empty list"],
            a: `<p>There are no Opportunity records created yet in this environment — which currently requires the Lead-stage Status configuration fix to resolve (see <strong>Why can't I select a Status when creating an opportunity?</strong>). Once records exist, an <strong>Actions</strong> column exposes per-row actions, following the same pattern seen on Customers, Owners, and Competitors (History, Edit, Delete, Notes).</p>`
          },
          {
            q: "What's the difference between Filters and Manage Columns?",
            tags: ["filters vs columns","row filtering","column visibility"],
            a: `<p><strong>Filters</strong> controls which rows/records are shown, based on field criteria (e.g. only opportunities above a certain value). <strong>Manage Columns</strong> controls which fields/columns are visible and in what order, without changing which records show.</p>`
          }
        ]
      },
      {
        id: "customer-interactions",
        heading: "Customers Interactions",
        html: `<p>CRM contact/communication log: browse companies, drill into contacts, log every interaction.</p>
        <p>Top table columns: <strong>Customer ID, Customer Name, Groups, Notes</strong> (Notes opens a "Customer Form Chat" panel). Clicking a Customer Name opens its <strong>Contact</strong> list (Contact ID, Primary Phone, Primary Email). Clicking a contact opens a full interaction workspace with sub-tabs:</p>
        <ul>
          <li><strong>Call Logs</strong> — Call Type, Date, Time, Summary, Tag, Attachments, Actions; own + Create.</li>
          <li><strong>Mails</strong> — embedded email client (Inbox/Sent/Drafts/Starred/Trash, Move, Import Group).</li>
          <li><strong>Events</strong>, <strong>Meetings</strong>, <strong>Task</strong>, <strong>Comments</strong> — require <strong>Calendar consent</strong> (My Profile → Settings → Calendar consent).</li>
          <li><strong>Notes</strong> — rich note editor with file attach.</li>
          <li><strong>See History</strong> — audit/activity history.</li>
        </ul>`,
        qa: [
          {
            q: "How do I see a customer's interaction history?",
            tags: ["customer history","contact log","crm"],
            a: `<ol>
              <li>Go to <strong>Opportunities Management → Customers Interactions</strong>.</li>
              <li>Click a row's <strong>Customer Name</strong> to open its contact list.</li>
              <li>Click a specific <strong>Contact</strong> card to open the interaction workspace.</li>
              <li>Use the sub-tabs (Call Logs, Mails, Events, Meetings, Task, Comments, Notes, See History) to view or log that interaction type.</li>
            </ol>`
          },
          {
            q: "What is the \"Notes\" button on the Customer Interactions list for?",
            tags: ["customer notes","customer form chat"],
            a: `<p>Each customer row on the top-level list has its own <strong>Notes</strong> cell/button that opens a "Customer Form Chat" side panel — a running notes/chat log tied to that customer as a whole, not to an individual contact.</p>`
          },
          {
            q: "How do I log a call with a customer contact?",
            tags: ["call log","log a call"],
            a: `<p>Open the contact's interaction workspace, go to the <strong>Call Logs</strong> sub-tab, and click its <span class="kbd">+ Create</span> button to add a new entry (Call Type, Date, Time, Summary, Tag, Attachments).</p>`
          },
          {
            q: "How do I write a note on a customer contact?",
            tags: ["write note","note editor"],
            a: `<p>Open the contact's interaction workspace, go to the <strong>Notes</strong> sub-tab, type in the rich note editor (you can also attach a file), and save.</p>`
          },
          {
            q: "Why am I seeing a \"Consent Not Granted\" message on the Events, Meetings, Task, or Comments tabs?",
            tags: ["consent not granted","calendar consent"],
            a: `<p>These tabs integrate with your connected calendar (Google/Outlook) and require <strong>Calendar consent</strong> before they'll function. Go to <strong>My Profile → Settings → Calendar consent</strong> and grant consent, then return to the tab.</p>`
          },
          {
            q: "Where can I see a full audit trail for a customer contact?",
            tags: ["audit trail","see history","contact history"],
            a: `<p>Open the contact's interaction workspace and go to the <strong>See History</strong> sub-tab — it shows an audit/activity history for that contact ("No history available" when empty).</p>`
          },
          {
            q: "Where do I find a customer's phone number and email?",
            tags: ["customer phone","customer email","contact info"],
            a: `<p>Drill into <strong>Customers Interactions → [Customer Name] → [Contact]</strong> — the Contact card view shows Contact ID, Primary Phone, and Primary Email. The <strong>Contacts Directory</strong> also stores Primary/Secondary Email and Phone Number fields.</p>`
          }
        ]
      },
      {
        id: "analytics",
        heading: "Analytics",
        html: `<p>Four BI sub-tabs, each with Filters and a Share icon:</p>
        <ul>
          <li><strong>Market &amp; Operations</strong> — Opportunity Project Type (Count/Dollar toggle), Geographic Distribution, Proposal Cycle Time Distribution, Permit &amp; Insurance Expiry Tracker table.</li>
          <li><strong>Executive Summary</strong> — KPI cards (Total/Weighted Value, Win Rate %, Average Deal Size), Scenario Forecast Comparison, Opportunity by Stage Value, Top Customers Performance, Team Performance Leadership.</li>
          <li><strong>Pipeline by BU</strong> — Opportunity Count/Value by BU, Pipeline Forecast by BU, BU Performance Matrix (Lead/Proposal/Closed/Total/Win Rate).</li>
          <li><strong>Pipeline Intelligence</strong> — AI heatmap, Scenario Forecast Comparison, Opportunity Dynamics by Month, BD Opportunity Load.</li>
        </ul>`,
        qa: [
          {
            q: "What KPIs are on the Executive Summary dashboard?",
            tags: ["executive summary","analytics kpis"],
            a: `<p><strong>Total Opportunity Value, Weighted Forecasted Value, Weighted Forecast This Quarter, Overall Win Rate (%),</strong> and <strong>Average Deal Size</strong>, along with a Scenario Forecast Comparison chart, Opportunity by Stage Value, a Top Customers Performance table, and a Team Performance Leadership table.</p>`
          },
          {
            q: "What is the Pipeline by BU tab for?",
            tags: ["pipeline by bu","business unit analytics"],
            a: `<p>It breaks the pipeline down by Business Unit: summary stats (Total Opportunities, Top BU by Volume, Highest Win Rate), several charts (Opportunity Count by BU, Opportunity Value by BU, Pipeline Forecast by BU, Opportunities by BU and Region, Opportunity Stage Mix), and a <strong>BU Performance Matrix</strong> table (Business Unit, Lead, Proposal, Closed, Total, Win Rate).</p>`
          },
          {
            q: "How do I share or filter an analytics dashboard?",
            tags: ["share dashboard","filter analytics"],
            a: `<p>Every Analytics sub-tab has a <strong>Filters</strong> button to narrow the data and a <strong>share</strong> icon to share the dashboard.</p>`
          },
          {
            q: "Where do I track permit and insurance expirations?",
            tags: ["permit expiry","insurance expiry","compliance tracker"],
            a: `<p>The <strong>Permit &amp; Insurance Expiry Tracker</strong> table, found on both the <strong>Market &amp; Operations</strong> and <strong>Executive Summary</strong> analytics tabs.</p>`
          },
          {
            q: "Where do I see which stage an opportunity's proposal cycle time falls into?",
            tags: ["proposal cycle time","cycle time distribution"],
            a: `<p>The <strong>Proposal Cycle Time Distribution</strong> chart on the <strong>Market &amp; Operations</strong> analytics tab.</p>`
          }
        ]
      },
      {
        id: "reports",
        heading: "Reports",
        html: `<p>Pre-built exportable reports, each with Search/Sort/Export/Filters/Manage Columns:</p>
        <ul>
          <li><strong>Forecast Report</strong> — value, probabilities (Stage/AI/Manual), weighted values, Go%/Get%.</li>
          <li><strong>Opportunity Aging Report</strong> — days in stage, days since activity, stale flag.</li>
          <li><strong>Outcome Analysis Report</strong> — closed date, sales cycle, project type.</li>
          <li><strong>Customer Win Rate Report</strong> — deals won/lost, win rate %, avg cycle days.</li>
          <li><strong>Pipeline Report</strong> — the fullest field set in the module (parent/child hierarchy, every metric).</li>
          <li><strong>Huddle Report</strong> — pick BD Representative + Date Range, click Generate.</li>
          <li><strong>Pipeline Gantt View</strong> — timeline with Daily/Weekly/Monthly/Quarterly/Yearly granularity.</li>
        </ul>`,
        qa: [
          {
            q: "How do I run a report?",
            tags: ["reports","export","forecast"],
            a: `<ol>
              <li>Go to <strong>Opportunities Management → Reports</strong>.</li>
              <li>Click the report name (e.g. Forecast Report).</li>
              <li>Use Filters / Sort By to narrow data, then Export — or for Huddle Report / Pipeline Gantt View, set parameters and click Generate.</li>
              <li>Use the back arrow next to the report title to return to the list.</li>
            </ol>`
          },
          {
            q: "How do I customize which columns show in a report?",
            tags: ["report columns","manage columns reports"],
            a: `<p>Reports share the same toolbar pattern as the main Opportunities list: use <strong>Manage Columns</strong> to add/remove/reorder columns, the same way you would on the Opportunities table.</p>`
          },
          {
            q: "What's the difference between the Opportunity Aging Report and the Pipeline Report?",
            tags: ["aging report vs pipeline report"],
            a: `<p>The <strong>Opportunity Aging Report</strong> is narrowly focused on staleness/velocity metrics — Days In Current Stage, Days Since Last Activity, Stale Flag, Aging Status. The <strong>Pipeline Report</strong> is the most complete field set in the whole module, covering nearly every field on an Opportunity record (identifiers, financials, dates, contacts, hierarchy) rather than just aging-related metrics.</p>`
          },
          {
            q: "How do I generate the Huddle Report?",
            tags: ["huddle report","bd representative"],
            a: `<ol>
        <li>Go to <strong>Reports → Huddle Report</strong>.</li>
        <li>Select a <strong>BD Representative</strong> and a <strong>Date Range</strong>.</li>
        <li>Optionally use <strong>Save Filters</strong> / <strong>Clear Filters</strong>.</li>
        <li>Click <strong>Generate</strong> to produce a downloadable report.</li>
      </ol>`
          },
          {
            q: "What is the Pipeline Gantt View for?",
            tags: ["pipeline gantt view","gantt timeline"],
            a: `<p>A Gantt-chart timeline of opportunities, with a granularity toggle (<strong>Daily / Weekly / Monthly / Quarterly / Yearly</strong>), a date-range picker, Filters, and download/save icons.</p>`
          },
          {
            q: "Where do I find win rate by customer?",
            tags: ["customer win rate","win rate report"],
            a: `<p><strong>Reports → Customer Win Rate Report</strong>, or the <strong>Top Customers Performance</strong> table on the <strong>Executive Summary</strong> analytics tab.</p>`
          }
        ]
      },
      {
        id: "account-assignment",
        heading: "Account Assignment",
        html: `<p>Maps each <strong>Customer</strong> account to responsible personnel by market segment/location — auto-populates the Site Representative / Corporate Lead / Executive Lead pickers elsewhere.</p>
        <p><strong>Columns:</strong> Customer Name, Location, State, City, Market/Sub Market Type, Site Representative, Corporate Lead, Executive Lead, Tier, Actions.</p>`,
        qa: [
          {
            q: "How do I assign a customer account to a responsibility chain?",
            tags: ["account assignment","site representative","corporate lead"],
            a: `<ol>
              <li>Go to <strong>Opportunities Management → Account Assignment</strong>.</li>
              <li>Click <span class="kbd">+ Add</span>.</li>
              <li>Search and select the <strong>Customer Name</strong>.</li>
              <li>Choose <strong>Market Type</strong>, <strong>Sub Market Type</strong>, <strong>Tier</strong>.</li>
              <li>Pick <strong>Site Representative</strong>, <strong>Corporate Lead</strong>, <strong>Executive Lead</strong>.</li>
              <li>Click <span class="kbd">Submit</span>.</li>
            </ol>`
          },
          {
            q: "Why does Create Opportunity automatically fill in the Site Representative field?",
            tags: ["auto-fill site representative","account assignment match"],
            a: `<p>Because a matching <strong>Account Assignment</strong> record exists for that Customer/Market Type combination — the assignment registry pre-populates the Site Representative, Corporate Lead, and Executive Lead pickers when it finds a match.</p>`
          },
          {
            q: "What's the difference between Account Assignment and the Contacts Directory?",
            tags: ["account assignment vs contacts directory"],
            a: `<p><strong>Account Assignment</strong> maps a Customer account to internal responsible personnel (Site Representative, Corporate Lead, Executive Lead) by market segment/location — it's about internal ownership of the relationship. The <strong>Contacts Directory</strong> is the external people directory — the actual contacts at Customer and Owner organizations.</p>`
          }
        ]
      },
      {
        id: "sidebar-shortcuts",
        heading: "Sidebar shortcuts",
        html: `<ul>
          <li><strong>Task</strong> — module task list, always linked to an Opportunity. Add Task fields: Name*, Description, Date*, Time, Opportunity*.</li>
          <li><strong>Calendar</strong> — month view of due dates/meetings/follow-ups; needs Calendar consent.</li>
          <li><strong>Contacts Directory</strong> — master people directory (Contacts / Customer Contacts / Owner Contacts sub-tabs).</li>
          <li><strong>Customers</strong> — master customer accounts. Create Customer is a 3-step wizard (Basic Details → Locations &amp; Tax Codes → Preview). Also: POC OCR (scan a card), Merge Duplicates, Convert Customers to Owners.</li>
          <li><strong>Owners</strong> — master project Owner organizations (distinct from Customers, though convertible).</li>
          <li><strong>Competitors</strong> — competing firms tracked against opportunities. Create fields: Competitor Name*, Competitor Type* (Direct/Indirect/Replacement), Description.</li>
          <li><strong>Settings</strong> — see next section.</li>
        </ul>`,
        qa: [
          {
            q: "How do I create a task linked to an Opportunity?",
            tags: ["create task","link task to opportunity"],
            a: `<ol>
        <li>Open the <strong>Task</strong> shortcut icon in the module's tab bar.</li>
        <li>Click <span class="kbd">+ Add Task</span>.</li>
        <li>Fill in <strong>Name*</strong> and <strong>Date*</strong> (required), and optionally Description and Time.</li>
        <li>Search for and link the required <strong>Opportunity*</strong>.</li>
        <li>Click <strong>Create</strong> (or Cancel to discard).</li>
      </ol>`
          },
          {
            q: "How do I see all module-related events on a calendar?",
            tags: ["calendar shortcut","module events"],
            a: `<p>Open the <strong>Calendar</strong> shortcut icon — it shows a full month-view calendar of module-related events (opportunity due dates, meetings, follow-ups), with a mini date-picker, a My Calendars panel, and a daily Events list for the selected day.</p>`
          },
          {
            q: "What's the difference between the Contacts Directory and Customers Interactions?",
            tags: ["contacts directory vs customers interactions"],
            a: `<p><strong>Contacts Directory</strong> is the master people directory — every Customer contact and Owner contact in one place, organized into Contacts (all), Customer Contacts, and Owner Contacts sub-tabs. <strong>Customers Interactions</strong> is where you drill into a specific customer and log/view interactions (calls, mail, meetings, notes) with their contacts. The Directory is the contact list; Customers Interactions is the activity log built on top of it.</p>`
          },
          {
            q: "What information is stored per contact in the Contacts Directory?",
            tags: ["contact fields","contacts directory fields"],
            a: `<p>Customer/Owner (type), Customer/Owner Name, Contact ID, Salutation, First/Middle/Last Name, Suffix, Job Title, Primary Email, Secondary Email, Primary Phone Number, Work Phone Number, Primary Address (Line 1/2, Country, State, City, Zip), Secondary Address (same fields), Services Provided, and Personal Website. Use the Contacts (all), Customer Contacts, or Owner Contacts sub-tabs to narrow the list.</p>`
          },
          {
            q: "How do I create a new customer?",
            tags: ["create customer","new customer wizard"],
            a: `<ol>
        <li>Open the <strong>Customers</strong> shortcut and click <strong>Create Customer</strong>.</li>
        <li>Step 1 — <strong>Basic Details</strong>: enter Customer Name* (required), plus Short Name, Alias Name, Phone Number, Email, Fax Number, Url, Group, and Primary/Mailing/Billing Address (use "Same as Primary address" as a shortcut).</li>
        <li>Step 2 — <strong>Locations &amp; Tax Codes</strong>.</li>
        <li>Step 3 — <strong>Preview</strong>, then submit.</li>
      </ol>`
          },
          {
            q: "What is POC OCR?",
            tags: ["poc ocr","scan business card"],
            a: `<p>An option on the <strong>Create Customer</strong> split button that lets you scan a business card or document to auto-populate a contact's details, rather than typing them manually.</p>`
          },
          {
            q: "How do I edit, delete, or view the history of a customer record?",
            tags: ["edit customer","delete customer","customer history"],
            a: `<p>Open the customer card's three-dot menu — it offers <strong>Edit</strong> (opens the record in an editable form), <strong>Delete</strong>, and <strong>History</strong> (audit/change history).</p>`
          },
          {
            q: "How do I merge two duplicate customer records?",
            tags: ["merge duplicates","duplicate customer"],
            a: `<p>Click <strong>Merge Duplicates</strong> in the Customers toolbar.</p>`
          },
          {
            q: "How do I turn a Customer into an Owner, or group customers together?",
            tags: ["convert customer to owner","add groups"],
            a: `<p>Use <strong>Convert Customers to Owners</strong> to migrate a customer record, or <strong>Add Groups</strong> to group customers — both are buttons in the Customers toolbar.</p>`
          },
          {
            q: "What's the difference between a Customer and an Owner?",
            tags: ["customer vs owner"],
            a: `<p>A <strong>Customer</strong> is a customer account/company that can be linked to Opportunities. An <strong>Owner</strong> is the project Owner organization — the client entity that owns/commissions a project. The two lists can overlap (a Customer can become an Owner via Convert Customers to Owners), but they're tracked as separate master lists.</p>`
          },
          {
            q: "How do I create a new Owner from Opportunity Management?",
            tags: ["create owner shortcut","owners sidebar"],
            a: `<p>Open the <strong>Owners</strong> shortcut and click <strong>Create Owner</strong>. Editing/deleting an Owner uses the same three-dot menu pattern as Customers and Competitors; the Owners screen also has its own Settings shortcut alongside Create Owner, Search, Export, and Filters.</p>`
          },
          {
            q: "How do I add a competitor?",
            tags: ["add competitor","create competitor"],
            a: `<ol>
        <li>Open the <strong>Competitors</strong> shortcut and click <strong>Create Competitor</strong>.</li>
        <li>Enter <strong>Competitor Name*</strong> (required).</li>
        <li>Select <strong>Competitor Type*</strong> (required — Direct, Indirect, or Replacement Competitor).</li>
        <li>Optionally add a Description.</li>
        <li>Click <strong>Submit</strong> (or Cancel to discard).</li>
      </ol>`
          },
          {
            q: "Where do competitors show up once created?",
            tags: ["competitors field","track competing firms"],
            a: `<p>They populate the searchable <strong>Competitors</strong> field/column on Opportunities, letting you track which competing firms are pursuing the same job.</p>`
          }
        ]
      },
      {
        id: "settings",
        heading: "Settings",
        html: `<ul>
          <li><strong>Competitor Form</strong> — customize the Competitor create form's fields.</li>
          <li><strong>Stages &amp; Statuses Configuration</strong> — defines the pipeline (Lead → Proposal → Closed). Per stage: Stage Name*, Default Win Probability (%)*, Stage Threshold (Days)*, Allowed Statuses (Closed stage statuses classify as Success/Failure). Supports Reorder Stages, Add Stages.</li>
          <li><strong>Opportunities Form</strong> — Standard Fields, Configurable Fields, Stale Threshold (days).</li>
          <li><strong>Expense</strong> — expense Form fields + Approval Workflow for pursuit-related spend.</li>
          <li><strong>ID Settings</strong> — auto-ID format (separator + Business Unit/Year/Serial components); Child ID Settings.</li>
          <li><strong>Business Development</strong> — BD codes/representatives catalog.</li>
          <li><strong>Project Types</strong>, <strong>Opportunity Type</strong>, <strong>Milestone Templates</strong> — maintained catalogs.</li>
          <li><strong>Customer Relation</strong> — Look Back Window (days) + SLA (hours).</li>
          <li><strong>Users and Permissions</strong> — User Groups (e.g. Opportunity Manager, Opportunity Estimator) with Permissions and Users management.</li>
        </ul>`,
        qa: [
          {
            q: "Why can't I select a Status when creating an opportunity?",
            tags: ["status missing","lead stage","stages and statuses"],
            a: `<p>The <strong>Status</strong> dropdown is populated from whatever Statuses are configured for the current Stage under <strong>Settings → Stages &amp; Statuses Configuration</strong>. If the <strong>Lead</strong> stage has no Statuses added, the dropdown is empty and the Create Opportunity dialog cannot be submitted.</p>
            <p><strong>Fix:</strong> An admin should go to Settings → Stages &amp; Statuses Configuration → Lead stage, and add at least one Status (e.g. "New", "Contacted", "Qualified").</p>`
          },
          {
            q: "How do I add a new Status to a Stage?",
            tags: ["add status","stage status configuration"],
            a: `<ol>
        <li>Go to <strong>Settings → Stages &amp; Statuses Configuration</strong>.</li>
        <li>Select the Stage you want to edit.</li>
        <li>Add the new status name under that Stage's Allowed Statuses.</li>
        <li>For the <strong>Closed</strong> stage specifically, also classify the status as <strong>Success</strong> or <strong>Failure</strong> (e.g. Won = Success; Lost, Cancelled, No Bid = Failure).</li>
      </ol>`
          },
          {
            q: "How do I add a whole new Stage, or reorder existing stages, in the pipeline?",
            tags: ["add stage","reorder stages"],
            a: `<p>Go to <strong>Settings → Stages &amp; Statuses Configuration</strong> and use <strong>Add Stages</strong> to add one, or <strong>Reorder Stages</strong> to change the pipeline order.</p>`
          },
          {
            q: "Where do I set the Stale Threshold?",
            tags: ["stale threshold setting","opportunities form"],
            a: `<p><strong>Settings → Opportunities Form → Stale Threshold</strong> — set the number of Days of inactivity after which an opportunity is flagged "stale." This feeds the dashboard's Stale Opportunities KPI.</p>`
          },
          {
            q: "How do I add a custom field to the Create Opportunity form?",
            tags: ["configurable fields","custom field opportunity form"],
            a: `<p>Go to <strong>Settings → Opportunities Form → Configurable Fields</strong> and add the custom field there. <strong>Standard Fields</strong> in the same section covers the built-in fields.</p>`
          },
          {
            q: "Where do I configure the Opportunity ID format?",
            tags: ["id settings","opportunity id format"],
            a: `<p><strong>Settings → ID Settings.</strong> Choose an ID Separator (<code>/</code>, <code>-</code>, or None) and compose the ID from Business Unit, Year, and Serial No./ID components. <strong>Child ID Settings</strong> configures the format for child opportunities separately.</p>`
          },
          {
            q: "Where do I manage expense tracking for a pursuit?",
            tags: ["expense settings","expense form"],
            a: `<p><strong>Settings → Expense</strong>, which has two sub-tabs: <strong>Form</strong> (Table Standard Fields — S.No, Expense Type, Item Name, Quantity, Unit Price, Amount, Comments — plus Configurable Fields) and <strong>Approval Workflow</strong>.</p>`
          },
          {
            q: "Where are the Business Development and Project Types catalogs maintained?",
            tags: ["business development catalog","project types catalog"],
            a: `<p><strong>Settings → Business Development</strong> maintains a list of BD codes/representatives (Serial Number, VP Business Unit, Description, Actions). <strong>Settings → Project Types</strong> maintains the project/work-type catalog (category such as FIELD or SHOP, material, and status flags).</p>`
          },
          {
            q: "What does Customer Relation configure?",
            tags: ["customer relation settings","sla"],
            a: `<p><strong>Settings → Customer Relation</strong> sets a <strong>Look Back Window (In Days)</strong> and an <strong>SLA (In Hours)</strong> used for customer-relationship/response tracking.</p>`
          },
          {
            q: "Where do I manage the Opportunity Type list or create Milestone Templates?",
            tags: ["opportunity type list","milestone templates"],
            a: `<p><strong>Settings → Opportunity Type</strong> is a simple maintained list (Serial Number, Opportunity Type, Actions). <strong>Settings → Milestone Templates</strong> has Milestone Templates and Master Milestones sub-tabs with a Create button.</p>`
          },
          {
            q: "How do I customize the Competitor creation form?",
            tags: ["competitor form settings","customize competitor fields"],
            a: `<p><strong>Settings → Competitor Form</strong> lets you customize the Competitor create form's standard and configurable fields.</p>`
          },
          {
            q: "How do I manage who can access Opportunity Management and what they can do?",
            tags: ["opportunity permissions","user groups"],
            a: `<p>Go to <strong>Settings → Users and Permissions</strong>. Manage existing User Groups (e.g. Opportunity Manager, Opportunity Estimator) via a three-dot menu offering Permissions and Users management, or click <strong>Add User Group</strong> to create a new group and configure its Permissions and Users.</p>`
          }
        ]
      },
      {
        id: "misc-faq",
        heading: "Comparisons & Miscellaneous",
        html: `<p>Terminology clarifications and cross-cutting questions that span more than one area of the module.</p>`,
        qa: [
          {
            q: "Why is the module sometimes called \"Leads Management\" and sometimes \"Opportunities Management\"?",
            tags: ["leads vs opportunities","module naming"],
            a: `<p>This is a per-context terminology setting. When the module is opened from <strong>Home</strong> with no project selected, it's labeled <strong>Opportunities Management</strong> with an <strong>Opportunities</strong> tab. When opened while a construction Project is in context, it's labeled <strong>Leads Management</strong> with a <strong>Leads</strong> tab and a project badge next to the Arena logo. The screens, fields, and functionality are identical either way.</p>`
          },
          {
            q: "Is Opportunity Management tied to a specific construction project?",
            tags: ["company-wide module","project scope"],
            a: `<p>No. The module is company-wide, not tied to a single project. It covers a personal dashboard, the Opportunity list/board, a customer-interaction CRM log, analytics, reports, and account assignment across the whole business.</p>`
          },
          {
            q: "Opportunities vs. Leads — is there a difference?",
            tags: ["opportunities vs leads","terminology"],
            a: `<p>No functional difference. "Opportunity" and "Lead" are two labels for the same module and the same records, chosen based on context: <strong>Opportunities</strong> when the module is reached from Home with no project selected, <strong>Leads</strong> when reached with a construction Project in context. Screens, fields, and functionality are identical.</p>`
          },
          {
            q: "What's the difference between a Customer and a Contact?",
            tags: ["customer vs contact"],
            a: `<p>A <strong>Customer</strong> is the company/account record. A <strong>Contact</strong> is an individual person associated with that Customer (or an Owner), tracked in the Contacts Directory and drilled into from Customers Interactions. A single Customer can have multiple Contacts.</p>`
          },
          {
            q: "Why can't I submit the Create Opportunity form even after filling in the Contact section fields?",
            tags: ["create opportunity blocked","contact fields optional"],
            a: `<p>The Contact section fields (Customer Groups, Site Representative, Corporate Lead, Executive Lead) are optional. The blocker is almost always the required <strong>Status</strong> field being empty because of the Lead-stage configuration gap — check that first (see <strong>Why can't I select a Status when creating an opportunity?</strong>).</p>`
          },
          {
            q: "Why are the Opportunity Type list and Milestone Templates empty?",
            tags: ["empty opportunity type list","empty milestone templates"],
            a: `<p>No entries have been added yet — <strong>Settings → Opportunity Type</strong> and <strong>Settings → Milestone Templates</strong> (Milestone Templates and Master Milestones sub-tabs) are empty by default until an administrator adds entries, using <strong>Create</strong> for Milestone Templates.</p>`
          }
        ]
      }
    ]
  },
  {
    id: "equipment",
    qaItems: QA_EQUIPMENT,
    name: "Equipment Management",
    alias: "Asset Management",
    icon: "handyman",
    tagline: "Identify, monitor and maintain different types of asset",
    color: "#3c7a5f",
    overview: `<p><strong>Equipment Management</strong> (Home tile: <strong>Asset Management</strong>; module breadcrumb: <strong>Equipment Master</strong>) is Arena's system for tracking construction equipment: what the company or a 3rd party owns, where it sits, its maintenance/inspection history, and its movement between inventory and job sites via a formal <strong>Load Out Request (LOR)</strong> process.</p>
    <p>Covers the full lifecycle: master registry → maintenance setup → request/approve/checkout/ship/checkin/shop-in → field inspections → issue tracking &amp; NCRs → supporting Global Data configuration (form builder, Adobe e-sign).</p>`,
    navigation: [
      `From <strong>Home</strong>, click the <strong>Asset Management</strong> tile (wrench icon).`,
      `Opens on the <strong>Asset Master</strong> tab; breadcrumb reads <strong>Equipment Master › Equipment</strong>.`,
      `Six tabs: Asset Master, Asset Setup, Load Out Request, Field Inspections, Asset Issues, Non Conformance Report — plus a Settings gear at far right.`,
      `Not nested inside individual projects — it's a company-wide, Home-level module.`
    ],
    sections: [
      {
        id: "asset-master",
        heading: "Asset Master (Equipment Master)",
        html: `<p>Master registry of all owned/leased equipment and accessories: availability, current location, check-in/out history, planned vs. actual return, maintenance records.</p>
        <p><strong>Sub-tabs:</strong> Company Owned Asset, Company Owned Accessory, 3rd Party Asset.</p>
        <p><strong>Toolbar:</strong> <span class="kbd">+ Asset</span> (becomes <span class="kbd">+ Accessory</span> on that sub-tab) · Search · pagination · <span class="kbd">Export</span> · <span class="kbd">Filters</span> (Status, Location, Loadout Request, Checkout/Check/Received By) · <span class="kbd">Manage Columns</span> · Grid/Table toggle · <strong>Add Custom Column</strong> (Text, Single Select, Multi-select, Date) · <strong>Inventory Locations</strong> panel (+ Add Location).</p>
        <p><strong>Status chips</strong> above the grid (clickable quick filters): Ready to Rent, On Rent – Project, Pending Shipment, On Rent – Customer, Checked In.</p>
        <p><strong>Table columns:</strong> Attachment, Asset, Asset Description, Asset ID, Status, Replacement Value, Current Location, Manufacturer, Model, Model Year, VIN No., Load Out Requests, Checkout Date/By, Checkin Date/By, Planned/Actual Return Date, Overdue Days, Received By, Maintenance Records, Actions.</p>
        <p><strong>Row actions:</strong> <em>history</em> (See History / Equipment Log), <em>qr_code</em> (print QR), <em>stacked_bar_chart</em> (Maintenance Records, if scheduled), <em>edit</em>, <em>delete</em> (only if not currently checked out).</p>`,
        qa: [
          {
            q: "How do I add a new piece of equipment?",
            tags: ["add asset","create equipment","new equipment"],
            a: `<ol>
              <li>Go to <strong>Home → Asset Management</strong>, ensure <strong>Asset Master → Company Owned Asset</strong> is selected.</li>
              <li>Click <span class="kbd">+ Asset</span>.</li>
              <li>In the <strong>Add Asset</strong> modal, fill <strong>Asset Name*</strong>, <strong>Asset ID*</strong>, <strong>Asset Description*</strong>, <strong>Replacement Value*</strong>, <strong>Current Location*</strong> (all required).</li>
              <li>Optionally fill Manufacturer, Model, Model Year, and attach an image/files.</li>
              <li>Click <span class="kbd">Submit</span> — the asset appears with status <strong>Ready to Rent</strong>.</li>
            </ol>`
          },
          {
            q: "How do I check an equipment item's full history?",
            tags: ["equipment history","audit log","see history"],
            a: `<p>Click the <strong>history</strong> icon on the item's row in Asset Master. This opens the <strong>Equipment Log</strong>: every request, check-in, check-out, shipment, and shop-in event, with who performed it and when.</p>`
          },
          {
            q: "How do I delete or retire an equipment item?",
            tags: ["delete equipment","retire asset"],
            a: `<p>Click the red <strong>delete</strong> icon on the item's row. This is only enabled if the equipment is <strong>not currently checked out</strong> or in use elsewhere — check it in via the Load Out Request flow first if needed.</p>`
          },
          {
            q: "What's the difference between Company Owned Asset and 3rd Party Asset?",
            tags: ["company owned asset","3rd party asset"],
            a: `<p>Company Owned Asset tracks equipment the company itself owns. 3rd Party Asset tracks equipment/accessories that belong to (or are leased from) an outside party, and is used together with the 3rd Party LOR / Lease Agreement workflow.</p>`
          },
          {
            q: "What's the difference between an Asset and an Accessory in Asset Master?",
            tags: ["asset vs accessory"],
            a: `<p>Assets are the equipment items themselves (tracked on <strong>Company Owned Asset</strong>); Accessories are attachments/consumables linked to equipment, tracked on <strong>Company Owned Accessory</strong>. The Accessory sub-tab shows a <strong>Related Assets</strong> column linking accessories back to the equipment they belong to.</p>`
          },
          {
            q: "How do I add a new accessory?",
            tags: ["add accessory","company owned accessory"],
            a: `<p>On the <strong>Company Owned Accessory</strong> sub-tab, click <span class="kbd">+ Accessory</span> (the same button becomes + Accessory here instead of + Asset) and fill in the equivalent accessory details, then Submit.</p>`
          },
          {
            q: "How do I edit an equipment record?",
            tags: ["edit equipment","update asset"],
            a: `<ol>
        <li>Locate the row in Asset Master (use Search or Filters if needed).</li>
        <li>Click the <strong>edit</strong> (pencil) icon on that row.</li>
        <li>Update the fields in the pre-filled form and click <strong>Submit</strong>.</li>
      </ol>`
          },
          {
            q: "Why can't I delete a piece of equipment?",
            tags: ["cannot delete equipment","delete disabled"],
            a: `<p>The delete icon is disabled while the equipment is currently checked out or in use elsewhere. You must wait until it's checked in / shopped in before it can be deleted.</p>`
          },
          {
            q: "How do I see maintenance records for a specific asset?",
            tags: ["maintenance records icon","asset maintenance history"],
            a: `<p>Click the <strong>Maintenance Records</strong> icon on that equipment's row — it's only shown for assets that have scheduled maintenance. You can also check the <strong>Maintenance Records</strong> column in the grid.</p>`
          },
          {
            q: "How do I change an equipment's current location?",
            tags: ["change equipment location","current location"],
            a: `<p>Click the <strong>edit</strong> (pencil) icon on the equipment's row to open the Add/Edit Asset form, then update the <strong>Current Location</strong> field (a dropdown of Inventory Locations) and Submit.</p>`
          },
          {
            q: "How do I add a new inventory location?",
            tags: ["inventory location","add location"],
            a: `<ol>
        <li>Click <strong>Inventory Locations</strong> in Asset Master.</li>
        <li>Click <strong>Add Location</strong>.</li>
        <li>Fill in the location name and physical address/location.</li>
      </ol>`
          },
          {
            q: "What do the different equipment status chips mean (Ready to Rent, On Rent - Project, Pending Shipment, etc.)?",
            tags: ["status chips","ready to rent","on rent"],
            a: `<p>These are live counts shown as colored chips above the Asset Master grid, each representing how many items are currently in that state: <strong>Ready to Rent</strong> (available, the default status for new equipment), <strong>On Rent – Project</strong> (checked out to an internal job), <strong>Pending Shipment</strong> (checked out, awaiting shipment), <strong>On Rent – Customer</strong> (leased to a 3rd party), and <strong>Checked In</strong> (returned). Clicking a chip filters the grid to that status.</p>`
          },
          {
            q: "How do I export or filter the equipment list?",
            tags: ["export equipment list","filter equipment"],
            a: `<p>Click <strong>Export</strong> to extract the inventory list to Excel. Click <strong>Filters</strong> to open the filter panel — filter by Status, Location, Loadout Request, Checkout By, Check By, or Received By; click Submit to apply, click the Save icon to persist the filter for reuse, or Clear to remove an active filter.</p>`
          },
          {
            q: "How do I switch between grid and table view, or add a custom column, in Asset Master?",
            tags: ["custom column","grid view table view"],
            a: `<p>Use the view-mode toggle (grid/card icon and table icon) near the top of the screen to switch between Grid View and Table View. To add a custom column, click <strong>Add Custom Column</strong> and choose a type: Text, Single Select, Multi-select, or Date.</p>`
          },
          {
            q: "What's the difference between Planned Return Date, Actual Return Date, and Overdue Days?",
            tags: ["planned return date","actual return date","overdue days"],
            a: `<p><strong>Planned Return Date</strong> is the date the equipment was expected back (set at request/checkout time); <strong>Actual Return Date</strong> is the date it was actually checked in. <strong>Overdue Days</strong> shows how many days an item is overdue against its Planned Return Date when no Actual Return Date has been logged yet.</p>`
          }
        ]
      },
      {
        id: "asset-setup",
        heading: "Asset Setup (Equipment Setup)",
        html: `<p>Defines recurring <strong>maintenance packages</strong> grouping equipment together with scheduled forms — a 4-step wizard via <strong>Create Maintenance Package</strong>:</p>
        <ol>
          <li><strong>List Equipment</strong> — name the package, then Add Equipment to pick items.</li>
          <li><strong>Identify Forms</strong> — Add Form to choose from centrally-configured maintenance forms.</li>
          <li><strong>Prepare Schedule</strong> — Recurrence Type (Daily/Weekly/<strong>Check Out</strong>/<strong>Check In</strong>), Start/End Date, Time. Check Out/In types trigger the form automatically during that LOR step instead of a calendar cadence.</li>
          <li><strong>Assign Crew</strong> — select users/crews; the schedule appears on their personal calendar.</li>
        </ol>
        <p>A package/equipment/form can only be deleted if none of its scheduled maintenances have started.</p>`,
        qa: [
          {
            q: "How do I set up a recurring maintenance schedule?",
            tags: ["maintenance package","schedule maintenance","recurring"],
            a: `<ol>
              <li>Go to <strong>Asset Setup</strong>, click <span class="kbd">Create Maintenance Package</span>.</li>
              <li>Enter Package Name and Description; Submit.</li>
              <li><strong>List Equipment</strong>: Add Equipment to select items.</li>
              <li><strong>Identify Forms</strong>: Add Form, tick required forms, Submit.</li>
              <li><strong>Prepare Schedule</strong>: choose Recurrence Type, Start/End dates, Time.</li>
              <li><strong>Assign Crew</strong>: select responsible individuals/crew, Save.</li>
            </ol>`
          },
          {
            q: "What are the four steps of the Create Maintenance Package wizard?",
            tags: ["maintenance package steps","wizard steps"],
            a: `<p><strong>List Equipment</strong> (pick equipment/accessories), <strong>Identify Forms</strong> (attach maintenance forms), <strong>Prepare Schedule</strong> (set recurrence, dates, time), and <strong>Assign Crew</strong> (assign users/crews responsible).</p>`
          },
          {
            q: "What's the difference between a Daily/Weekly recurrence and a Check Out/Check In recurrence?",
            tags: ["recurrence type","check out recurrence","check in recurrence"],
            a: `<p>Daily and Weekly recurrence trigger the maintenance form on a calendar cadence (a specific date/time). Check Out and Check In recurrence instead trigger the form automatically as part of the equipment's checkout or check-in step in the Load Out Request flow, rather than on a fixed schedule.</p>`
          },
          {
            q: "How do I assign a maintenance schedule to specific people?",
            tags: ["assign crew","maintenance schedule assignment"],
            a: `<p>In the <strong>Assign Crew</strong> step of the Create Maintenance Package wizard, select individual users or whole Crews responsible for that maintenance — the schedule then appears on each assignee's personal calendar and becomes fillable at the scheduled time.</p>`
          },
          {
            q: "What is \"Equipment Setup - Maintenance Logs\" and how is it different from Asset Setup?",
            tags: ["maintenance logs","utilization setup"],
            a: `<p>It's a closely related admin screen that follows the identical 4-step pattern (List Items / Identify Forms / Prepare Schedule / Assign Crew) but additionally has a parallel <strong>Utilization</strong> tab, letting you schedule utilization logs the same way maintenance logs are scheduled.</p>`
          }
        ]
      },
      {
        id: "field-inspections",
        heading: "Field Inspections",
        html: `<p>Where field crews perform/record maintenance and manage equipment photos. Three tabs: <strong>Maintenance</strong>, <strong>Utilization</strong>, <strong>Equipment Photos</strong>.</p>
        <p><strong>Scheduled:</strong> use the calendar view, pick a date, complete forms due that day. <strong>Ad-hoc:</strong> switch to the list tab, pick a form category, click <strong>Create Form</strong>.</p>
        <p><strong>Equipment Maintenance Calendar</strong> color legend: <span style="color:#8a8f98">Grey</span> = not due, <span style="color:#3f7fd1">Blue</span> = ready to fill, <span style="color:#c98a1e">Amber</span> = in progress/issue raised, <span style="color:#3c7a5f">Green</span> = submitted.</p>
        <p><strong>Equipment Photos:</strong> select an item, click Add → Upload File (multi-select), annotate with built-in markup tools, Save. A kebab menu offers Delete.</p>`,
        qa: [
          {
            q: "How do I log a scheduled maintenance activity?",
            tags: ["scheduled maintenance","field inspection"],
            a: `<ol>
              <li>Go to <strong>Field Inspections → Maintenance</strong>, switch to <strong>Calendar</strong>.</li>
              <li>Pick the due date — forms show color-coded (Blue = ready).</li>
              <li>Open the form, fill required fields, Submit — turns Green once complete.</li>
              <li>If a check fails, raise an <strong>issue</strong> directly from that field — it's logged to <strong>Asset Issues</strong> automatically.</li>
            </ol>`
          },
          {
            q: "How do I upload equipment photos?",
            tags: ["equipment photos","upload image"],
            a: `<ol>
              <li>Go to <strong>Field Inspections → Equipment Photos</strong>.</li>
              <li>Select the equipment/accessory from the left list.</li>
              <li>Click <span class="kbd">Add</span>, then Upload File to select one or more images.</li>
              <li>Optionally annotate using the markup tools, then <span class="kbd">Save</span>.</li>
            </ol>`
          },
          {
            q: "What's the difference between the Maintenance and Utilization tabs in Field Inspections?",
            tags: ["maintenance vs utilization tab"],
            a: `<p>Both work the same way (calendar-driven scheduled entries plus ad-hoc list entries), but <strong>Maintenance</strong> logs maintenance/inspection activity while <strong>Utilization</strong> logs ad-hoc utilization entries — they mirror each other in structure.</p>`
          },
          {
            q: "How do I log an ad-hoc (unplanned) inspection?",
            tags: ["ad-hoc inspection","create form"],
            a: `<ol>
        <li>Go to <strong>Field Inspections → Maintenance</strong> (or Utilization) and switch to the list/ad-hoc tab.</li>
        <li>Select the relevant form category on the left.</li>
        <li>Click <strong>Create Form</strong>, complete the fields, and Submit — it appears as a new card with Download, Share, Print, and Chat available.</li>
      </ol>`
          },
          {
            q: "How do I edit a maintenance form after it's been submitted?",
            tags: ["edit submitted form","reopen maintenance form"],
            a: `<p>Click the card for that submitted form to re-open it for review/editing — each card also offers Download, Share, Print, and a Chat panel for collaborative notes.</p>`
          },
          {
            q: "How do I view, annotate, or delete an equipment photo?",
            tags: ["view photo","annotate photo","delete photo"],
            a: `<p>Click "Click to View" on a photo to open a viewer with next/previous arrows. Use the built-in annotation tools below the image to mark it up, then click <strong>Save</strong> to persist the markup. Use the kebab (⋮) menu in the viewer to <strong>Delete</strong> the photo.</p>`
          },
          {
            q: "What is a trigger point on a maintenance form?",
            tags: ["trigger point","setup trigger points"],
            a: `<p>A trigger point is a checkbox configured per field in the form builder (<strong>Setup Trigger Points</strong>) that lets end-users raise an issue or note directly from that field if the checkpoint fails during an inspection. A triggered issue is logged automatically under <strong>Asset Issues</strong>.</p>`
          },
          {
            q: "What's the difference between a scheduled maintenance form and an ad-hoc inspection?",
            tags: ["scheduled vs ad-hoc inspection"],
            a: `<p>A scheduled form is generated automatically by a maintenance package's Prepare Schedule settings (Daily/Weekly/Check Out/Check In) and shows up on the Equipment Maintenance Calendar at the right time. An ad-hoc inspection is created manually at any time via Create Form on the list tab, without being tied to a pre-set schedule.</p>`
          }
        ]
      },
      {
        id: "asset-issues",
        heading: "Asset Issues (Equipment Issues)",
        html: `<p>Central log of issues raised during maintenance forms, inspections, or LOR check-out/in. Card view (table toggle available).</p>
        <p><strong>Actions:</strong> <span class="kbd">Rectify</span> (marks Rectified, re-enables the form), Chat (resolution notes), Assign To + Due Date, Filters (+Save), Export, Search, kebab menu (Delete), <span class="kbd">Create Work Order</span> (spin up a Work Order from the issue).</p>`,
        qa: [
          {
            q: "How do I resolve an equipment issue?",
            tags: ["resolve issue","rectify","equipment issue"],
            a: `<ol>
              <li>Go to <strong>Asset Issues</strong>, locate the issue via Search/Filters.</li>
              <li>Review details, add notes in <strong>Chat</strong> if collaborating.</li>
              <li>Once fixed, click <span class="kbd">Rectify</span> — status becomes Rectified and the linked form re-opens for completion.</li>
              <li>Optionally click <span class="kbd">Create Work Order</span> if formal remediation tracking is needed.</li>
            </ol>`
          },
          {
            q: "What's the difference between an Asset Issue and a Non-Conformance Report?",
            tags: ["asset issue vs ncr"],
            a: `<p>Asset Issues are typically raised automatically from a failed trigger-point check during a maintenance form, inspection, or an LOR check-out/check-in stage. NCRs are created manually (via + Add on the Non Conformance Report tab) to formally track a non-conformance event. Both use the same card/table view, Rectify workflow, Chat, Assign To/Due Date, and Create Work Order pattern, but they are separate, independently tracked records.</p>`
          },
          {
            q: "How do I create a Work Order from an equipment issue?",
            tags: ["create work order from issue"],
            a: `<p>Click <span class="kbd">Create Work Order</span> on the issue (or NCR) — this spins up a Work Order directly from it to track remediation labor/cost.</p>`
          },
          {
            q: "How do I delete, export, or change the view for issues and NCRs?",
            tags: ["delete issue","export issues","table view toggle"],
            a: `<p>Use the kebab (⋮) menu on a card for Delete; click Export to download all records to Excel; and use the table view toggle (top-right) to switch away from the default card view.</p>`
          },
          {
            q: "What do the header counters mean on Asset Issues / NCR?",
            tags: ["header counters","issue totals"],
            a: `<p>They show totals for the tab: total issues (or NCRs), how many have been raised, and how many have been rectified.</p>`
          }
        ]
      },
      {
        id: "ncr",
        heading: "Non Conformance Report (NCR)",
        html: `<p>Tracks Non-Conformance events flagged during maintenance — distinct from routine Issues. Card view (table toggle). <span class="kbd">+ Add</span> to create; same Rectify/Chat/Assign To/Due Date/Filters/Export pattern as Asset Issues; also has <span class="kbd">Create Work Order</span>.</p>`,
        qa: [
          {
            q: "How do I raise and close a Non-Conformance Report?",
            tags: ["ncr","non conformance report"],
            a: `<ol>
              <li>Go to <strong>Non Conformance Report</strong>, click <span class="kbd">+ Add</span>.</li>
              <li>Fill in NCR details and submit.</li>
              <li>Assign an owner (<strong>Assign To</strong>) and <strong>Due Date</strong>.</li>
              <li>Use Chat to document remediation steps.</li>
              <li>Once corrected, click <span class="kbd">Rectify</span> to close it out.</li>
            </ol>`
          },
          {
            q: "What does \"Rectify\" do on an Issue vs. on an NCR?",
            tags: ["rectify behavior","issue vs ncr rectify"],
            a: `<p>In both cases, <strong>Rectify</strong> marks the record as Rectified. On an Asset Issue, it additionally re-enables the associated maintenance form for completion/re-submission. On an NCR it simply closes the report out as resolved.</p>`
          },
          {
            q: "What's the difference between Asset Issues' Rectify and an NCR's Rectify?",
            tags: ["asset issue rectify vs ncr rectify"],
            a: `<p>Functionally similar — both set status to Rectified. On an Asset Issue, Rectify additionally re-enables the linked maintenance form so it can be completed/resubmitted; an NCR's Rectify simply closes the report, with no equivalent form-reopening behavior described.</p>`
          }
        ]
      },
      {
        id: "lor",
        heading: "Load Out Request (LOR)",
        html: `<p>The formal staged workflow moving equipment out of inventory to a job site (or on lease to a 3rd party) and back. Two parallel flows: <strong>LOR Internal Job</strong> and <strong>3rd Party LOR</strong>, each in Grid or Kanban view.</p>
        <h4>LOR Internal Job lifecycle</h4>
        <ol>
          <li><strong>Request</strong> — Add → fill Equipment/Accessory, Quantity, UOM, Requested By, Required Date, Planned Return Date, Supervisor, Job ID/Name. Submit → status <strong>REQUESTED</strong>.</li>
          <li><strong>Approval</strong> — Approve/Reject. Reject → Rejected (revise + resubmit). Approve → <strong>APPROVED</strong>.</li>
          <li><strong>Check Out</strong> — verify vs. Equipment Master stock; fill Assign ID, Checkout Date, Signature. Partial fulfillment supported (<strong>PARTIAL CHECK OUT</strong> → <strong>CHECKED OUT</strong>). A tied maintenance form must be filled; a failed check offers <strong>Proceed With Issue</strong> or <strong>Change Equipment</strong>.</li>
          <li><strong>Ship</strong> — shipment details + signature. Partial → <strong>PARTIAL SHIP IN</strong>; full → <strong>SHIPPED</strong>. A <strong>Delivery Request</strong> can be raised here (auto-creates a Requisition + RFQ).</li>
          <li><strong>Check In</strong> — tick returning items, name + signature. Partial → <strong>PARTIAL CHECK IN</strong>; full → <strong>CHECKED IN</strong>. Issues prompt "Hold the Equipment or Not" — No proceeds as <strong>CHECK IN ISSUE</strong> (logged to Asset Issues); Yes blocks check-in.</li>
          <li><strong>Shop In</strong> — confirm return to inventory location, signature, Submit → <strong>CLOSED</strong> (or <strong>PARTIAL CLOSED</strong>).</li>
          <li><strong>Preview</strong> — full collected form set for the LOR.</li>
        </ol>
        <p><strong>Full status list:</strong> Requested, Approved, Rejected, Check Out, Partial Check Out, Check Out With Issue, Ship In, Partial Ship In, Check In, Partial Check-In, Check In With Issue, Shop In, Partial Closed, Closed.</p>
        <h4>3rd Party LOR — differences</h4>
        <p>Same flow, plus a <strong>Lease Agreement</strong> stage after Check Out (no Job Name/Location on the Request form): capture equipment details + replacement value, both parties sign, then <strong>Email Agreement for Approval</strong>. Status: <strong>Waiting for Approval</strong> → <strong>Approved (Mail ID)</strong>. The recipient gets a <strong>View Form</strong> link with Approve/Reject (optionally e-signed via Adobe Acrobat Sign). Then Ship/Check In/Shop In as normal.</p>
        <p><strong>Common features:</strong> kebab menu (See History, Delete if nothing checked out yet), Assign To (View/Edit permission), Filters, Search, Download/Print, Share, Chat, Documents bundle, Mail (Gmail/Outlook per Global Settings), Roster field per stage.</p>
        <p><strong>LOR - Workflows</strong> (approval config): Create Level → choose "All must approve" or "Anyone can approve" → pick approvers. Tree/graph view visualizes the structure.</p>`,
        qa: [
          {
            q: "How do I raise an internal Load Out Request?",
            tags: ["load out request","lor","checkout equipment"],
            a: `<ol>
              <li>Go to <strong>Load Out Request</strong> (Internal Job view), click <span class="kbd">Add</span>.</li>
              <li>Fill Equipment/Accessory, Quantity, UOM, Requested By, Required Date, Planned Return Date, Supervisor, Job ID/Name.</li>
              <li>Submit → status <strong>REQUESTED</strong>. Wait for <strong>Approve</strong>.</li>
              <li>Warehouse staff perform <strong>Check Out</strong> (Assign ID, Checkout Date, Signature) per item.</li>
              <li>Perform <strong>Ship</strong> to send to the job site.</li>
              <li>On return, perform <strong>Check In</strong> per item.</li>
              <li>Perform <strong>Shop In</strong> to return to inventory — LOR reaches <strong>CLOSED</strong>.</li>
            </ol>`
          },
          {
            q: "How do I raise a 3rd-party lease Load Out Request?",
            tags: ["3rd party lor","lease agreement","lease equipment"],
            a: `<ol>
              <li>Go to <strong>Load Out Request</strong>, 3rd Party view, click <span class="kbd">Add</span>.</li>
              <li>Fill the Request form (no Job Name/Location needed) and get it <strong>Approved</strong>.</li>
              <li><strong>Check Out</strong> the equipment.</li>
              <li>Complete the <strong>Lease Agreement</strong>, click <span class="kbd">Email Agreement for Approval</span>.</li>
              <li>Once the 3rd party approves (optionally e-signs via Adobe Sign), proceed to <strong>Ship</strong>.</li>
              <li>On return, <strong>Check In</strong>, then <strong>Shop In</strong> to close the LOR.</li>
            </ol>`
          },
          {
            q: "What does 'PARTIAL CHECK OUT' status mean?",
            tags: ["lor status","partial check out"],
            a: `<p>It means only <em>some</em> of the requested items on that Load Out Request have been checked out so far — a single LOR can be fulfilled across multiple check-out submissions. The status becomes <strong>CHECKED OUT</strong> once every item on the request has been checked out.</p>`
          },
          {
            q: "What's different between LOR Internal Job and 3rd Party LOR?",
            tags: ["lor internal vs 3rd party"],
            a: `<p>The 3rd Party LOR's Request form omits <strong>Job Name/Job Location</strong> (there's no internal job involved), and it inserts an extra <strong>Lease Agreement</strong> stage after Check Out and before Ship, where both parties sign a legal document before proceeding to Ship. All other stages (Ship, Check In, Shop In, Preview) are identical between the two flows.</p>`
          },
          {
            q: "What fields are on the LOR Request form?",
            tags: ["lor request fields"],
            a: `<p><strong>Equipment or Accessory required, Quantity, UOM, Requested By, Required Date, Planned Return Date, Supervisor, Job ID/Job Name</strong> (the Job ID/Job Name field is omitted on 3rd Party LOR requests).</p>`
          },
          {
            q: "How do I approve or reject a Load Out Request?",
            tags: ["approve lor","reject lor"],
            a: `<p>Once a request is submitted (status REQUESTED), the warehouse manager/approver sees <strong>Approve</strong> and <strong>Reject</strong> buttons on it. Clicking Approve sets the status to APPROVED and removes the buttons. Clicking Reject turns the button red and sets status to Rejected; the requester can then revise using the approver's comments and resubmit.</p>`
          },
          {
            q: "What is \"Check Out Issue\" status, and what are my options if a maintenance check fails during checkout?",
            tags: ["check out issue","proceed with issue","change equipment"],
            a: `<p>It occurs when a Scheduled Equipment Maintenance form tied to the Check Out stage fails a check. A confirmation dialog offers <strong>Proceed With Issue</strong> (continues the checkout, setting status to Check Out Issue, with the item marked "ID – Has Issue") or <strong>Change Equipment</strong> (swap in a different item instead).</p>`
          },
          {
            q: "Can I request transport/delivery for shipping equipment?",
            tags: ["delivery request","requisition","rfq"],
            a: `<p>Yes — a <strong>Delivery Request</strong> can be created directly from the Ship page (or the Check-in page) if transport is needed. This automatically creates a Requisition (REQ) and kicks off the RFQ process.</p>`
          },
          {
            q: "What does \"Hold the Equipment/Accessory or Not\" mean during Check In?",
            tags: ["hold equipment","check in issue"],
            a: `<p>It's a prompt shown when a maintenance form tied to the Check In stage finds an issue. Answering <strong>No</strong> proceeds with the check-in anyway, setting status to CHECK IN ISSUE (logged to Asset Issues). Answering <strong>Yes</strong> blocks the check-in until the issue is fixed.</p>`
          },
          {
            q: "What's the difference between PARTIAL CLOSED and CLOSED?",
            tags: ["partial closed vs closed"],
            a: `<p><strong>CLOSED</strong> means every item on the LOR has completed Shop In. <strong>PARTIAL CLOSED</strong> means only some items have been shopped in so far.</p>`
          },
          {
            q: "What is the full list of possible LOR statuses, and where can I see all of an LOR's forms in one place?",
            tags: ["lor status list","lor preview"],
            a: `<p><strong>Requested, Approved, Rejected, Check Out, Partial Check Out, Check Out With Issue, Ship In, Partial Ship In, Check In, Partial Check-In, Check In With Issue, Shop In, Partial Closed, Closed.</strong> The <strong>Preview</strong> tab on an LOR shows the full collected set of forms (Request, Check Out, Ship, Check In, Shop In) in one place.</p>`
          },
          {
            q: "How do I view the full history of a Load Out Request?",
            tags: ["lor history","see history"],
            a: `<p>Click the kebab (⋮) menu on the LOR card and select <strong>See History</strong> — this opens the full Equipment Log of requests, check-ins, check-outs, shipments, and shop-ins, including who performed each and when.</p>`
          },
          {
            q: "How do I delete a Load Out Request?",
            tags: ["delete lor"],
            a: `<p>Click the kebab (⋮) menu on the LOR card and select <strong>Delete</strong>. This is only available while no equipment included in the LOR has yet been checked out — once any item has been checked out, the option disappears.</p>`
          },
          {
            q: "How do I assign an LOR to another user?",
            tags: ["assign lor","view edit permission"],
            a: `<p>Use the <strong>Assign to</strong> field on the LOR to assign it to one or more users, granting them either View or Edit permission.</p>`
          },
          {
            q: "What per-LOR actions are available (download, share, mail, documents)?",
            tags: ["lor download","lor share","lor mail"],
            a: `<p>Each LOR has action icons for: <strong>Download</strong> (PDF of the current stage's form) and <strong>Print</strong>; <strong>Share</strong> (send to other system users via System Default, Outlook, or Gmail); <strong>Documents</strong> (store/download all related files, and bundle all equipment's docs into one document); and <strong>Mail</strong> (compose email via Gmail or Outlook depending on Global Settings → Mail Settings).</p>`
          },
          {
            q: "What is the Roster field on an LOR stage for?",
            tags: ["roster field lor"],
            a: `<p><strong>Roster</strong> lets you select the acting user's name/designation at that stage. It becomes active only once an Assign ID has been chosen.</p>`
          },
          {
            q: "What information shows on an LOR card, and can I view LORs as a Kanban board?",
            tags: ["lor card info","lor kanban view"],
            a: `<p>Each card shows the selected Equipment/Accessory, Required-by Date, Created By, Workflow Level, and current Status/ID. A view toggle in the top-right of the Load Out Request tab switches between Grid View and Kanban View for both LOR Internal Job and 3rd Party LOR.</p>`
          },
          {
            q: "Where do I configure the approval chain for Load Out Requests?",
            tags: ["lor workflows","approval chain"],
            a: `<p>Go to <strong>LOR - Workflows</strong>, a separate configuration screen for defining the approval chain(s) used by LOR / 3rd Party LOR requests.</p>`
          },
          {
            q: "How do I add a new approval level to an LOR workflow?",
            tags: ["lor approval level","create level"],
            a: `<ol>
        <li>Go to <strong>LOR - Workflows</strong>.</li>
        <li>Click <strong>Create Level</strong>.</li>
        <li>In the pop-up, choose the level type: "All must approve" or "Anyone can approve".</li>
        <li>Pick the approvers for that level.</li>
      </ol>`
          },
          {
            q: "What's the difference between \"All must approve\" and \"Anyone can approve\"?",
            tags: ["all must approve","anyone can approve"],
            a: `<p><strong>"All must approve"</strong> requires every approver assigned to that level to approve before the LOR advances. <strong>"Anyone can approve"</strong> lets a single approver at that level clear it for everyone.</p>`
          },
          {
            q: "What happens if I edit an existing LOR approval workflow?",
            tags: ["edit lor workflow warning"],
            a: `<p>You'll see a warning that changes affect all forms/documents already linked to that workflow — editing a live workflow is not isolated to future requests only.</p>`
          },
          {
            q: "How can I visualize the structure of an LOR approval workflow?",
            tags: ["lor workflow diagram","tree graph view"],
            a: `<p>Click the tree/graph view icon in the top right of the LOR - Workflows screen to see a visual diagram of the workflow structure.</p>`
          },
          {
            q: "What's the difference between Check In and Shop In?",
            tags: ["check in vs shop in"],
            a: `<p><strong>Check In</strong> records that equipment/accessories have returned from the field (tick returning items, add name/signature). <strong>Shop In</strong> is the subsequent, final step confirming the equipment has been physically placed back into its inventory location — only after Shop In does the LOR reach CLOSED.</p>`
          },
          {
            q: "Why is my Load Out Request showing \"Rejected\"?",
            tags: ["lor rejected","troubleshoot rejected lor"],
            a: `<p>The approver clicked <strong>Reject</strong> on your request (instead of Approve). Check the approver's comments, revise the request accordingly, and resubmit.</p>`
          },
          {
            q: "Why do I see \"Check Out Issue\" instead of a normal checked-out status?",
            tags: ["check out issue troubleshoot"],
            a: `<p>A Scheduled Equipment Maintenance form tied to the Check Out stage found a failed check, and the checkout user chose <strong>Proceed With Issue</strong> in the resulting confirmation dialog rather than Change Equipment.</p>`
          },
          {
            q: "Why is my Check In blocked?",
            tags: ["check in blocked troubleshoot"],
            a: `<p>A maintenance form tied to the Check In stage found an issue, and when prompted "Hold the Equipment/Accessory or Not", the answer given was <strong>Yes</strong> — this blocks check-in until the issue is fixed. Answering No would instead let check-in proceed with status CHECK IN ISSUE.</p>`
          },
          {
            q: "Why do I need to fill in a maintenance form before I can check out or check in equipment?",
            tags: ["maintenance form required","check out check in gating"],
            a: `<p>Because the equipment's maintenance package has a Recurrence Type of Check Out or Check In, meaning its scheduled form is triggered automatically at that step of the LOR flow rather than on a calendar date, and must be completed as part of that step.</p>`
          },
          {
            q: "Why does my LOR still say PARTIAL CHECK OUT / PARTIAL SHIP IN / PARTIAL CHECK IN?",
            tags: ["partial status troubleshoot"],
            a: `<p>Because not all items on that LOR have completed that stage yet. These "Partial" statuses apply whenever some but not all of the requested items have been checked out, shipped, or checked in — the status upgrades to the full (non-partial) version once every item completes that stage.</p>`
          },
          {
            q: "Why is the Reject/Approve buttons missing from my Load Out Request?",
            tags: ["approve reject missing"],
            a: `<p>Once an LOR has been Approved, the Approve/Reject buttons disappear — they are only shown while the request is in REQUESTED status awaiting a decision.</p>`
          },
          {
            q: "Why doesn't my 3rd Party LOR request form have a Job Name field?",
            tags: ["3rd party lor no job name"],
            a: `<p>Because 3rd Party LOR is for leasing equipment out to (or in from) an external party, not for an internal job — the Request form omits Job Name/Job Location for this flow, unlike LOR Internal Job.</p>`
          },
          {
            q: "I raised an issue from a maintenance form — where did it go?",
            tags: ["issue routed to asset issues"],
            a: `<p>It's automatically logged under the <strong>Asset Issues</strong> tab, where it can be reviewed, assigned, and eventually marked Rectified.</p>`
          },
          {
            q: "Why can't I edit an approved Lease Agreement's workflow without a warning?",
            tags: ["lease agreement workflow warning"],
            a: `<p>Editing an existing LOR approval workflow level shows a warning because changes affect all forms/documents already linked to that workflow — not just future ones.</p>`
          }
        ]
      },
      {
        id: "global-setup",
        heading: "Global Data & Setup",
        html: `<p>Lives under Global Data, configures the module:</p>
        <ul>
          <li><strong>Global Data - Equipment Management</strong> — admin entry point for equipment-related global settings.</li>
          <li><strong>Maintenance Form Builder</strong> (Global Data → Maintenance Builder) — Create Form, Add Section, Add Field (types: Attachment, Check box, Date, Label, Multi select, Paragraph, Roster, Scribble, Single select, Table, Text box, Time, Signature), Setup Trigger Points (flags that let end-users raise an issue if a check fails), Preview, Save Changes.</li>
          <li><strong>Adobe Acrobat Sign integration</strong> — one-time setup for e-signing 3rd-Party LOR Lease Agreements: register an API app in Adobe's console → configure OAuth (redirect URL + scopes) → in Arena go to Global Settings → Adobe Sign Settings, enter Client ID/Secret, Save, Consent, authorize → enable Adobe Sign on the Lease Agreement form under Global Data → Forms → Equipment Forms.</li>
        </ul>`,
        qa: [
          {
            q: "How do I build or edit maintenance/inspection form templates, and how do I create a new one?",
            tags: ["maintenance builder","create form template"],
            a: `<ol>
        <li>In <strong>Global Data → Maintenance Builder</strong> (also called Equipment Maintenance Forms), click <strong>Create Form</strong>.</li>
        <li>Click <strong>Add Section</strong> to structure the form (use the trash icon to delete a section).</li>
        <li>Click <strong>Add Field</strong> and choose a field type: Attachment, Check box, Date, Label, Multi select, Paragraph, Roster, Scribble, Single select, Table, Text box, Time, Signature.</li>
        <li>Use <strong>Setup Trigger Points</strong> to tick which fields should let end-users raise an issue if that checkpoint fails.</li>
        <li>Click <strong>Preview</strong> to see the form as end-users will see it, including company branding.</li>
        <li>Click <strong>Save Changes</strong>.</li>
      </ol>`
          },
          {
            q: "What field types are available in the maintenance form builder?",
            tags: ["form field types"],
            a: `<p><strong>Attachment, Check box, Date, Label, Multi select, Paragraph, Roster, Scribble</strong> (signature/print name), <strong>Single select, Table</strong> (configurable rows/columns), <strong>Text box</strong> (default), <strong>Time, Signature</strong>.</p>`
          },
          {
            q: "What is the Adobe Acrobat Sign integration used for?",
            tags: ["adobe sign purpose"],
            a: `<p>It lets a 3rd-party signer affix a legal e-signature to a 3rd-Party LOR Lease Agreement as part of approving it, instead of just clicking Approve/Reject.</p>`
          },
          {
            q: "Once Adobe Sign is set up, how does it get used in the LOR flow?",
            tags: ["adobe sign lor usage"],
            a: `<p>In the 3rd Party LOR flow, once equipment is checked out, the Lease Agreement emailed to the 3rd party can be digitally signed via the Adobe Sign integration as part of their approval.</p>`
          },
          {
            q: "Is \"Equipment Management\" a different module from \"Asset Management\"?",
            tags: ["equipment management vs asset management"],
            a: `<p>No — they're the same module. "Asset Management" is the name on the Home hub tile, "Equipment Master" appears in the module's own breadcrumb, and "Equipment Management" is the name used in the underlying documentation. The UI itself mostly uses "Asset" in labels (Asset Master, Asset Setup, Asset Issues, + Asset).</p>`
          }
        ]
      }
    ]
  },
  {
    id: "global-data",
    qaItems: QA_GLOBALDATA,
    name: "Global Data",
    alias: "Company Admin & Setup",
    icon: "settings",
    tagline: "The company-wide admin backbone every project inherits from",
    color: "#3a5f8a",
    overview: `<p><strong>Global Data</strong> is the company-wide administration and configuration layer of Arena. Company profile, approved vendors and owners, tax rules, units of measure, work-breakdown libraries, naming conventions, notification rules, user accounts and permissions are all defined once here and then inherited by every Project created afterward. Nothing in Global Data is project-specific — it is the "master data" layer that keeps every project in the company consistent.</p>
    <p>Global Data is organized as a grid of tiles, each opening into its own screen with its own tabs, tables, and forms. Most tiles follow a small number of recurring patterns: a <strong>Create / Register / Add</strong> button that opens a form or multi-step wizard, a data table or card grid with <strong>Search / Filters / Export / Manage Columns</strong>, row-level <strong>Edit</strong> (pencil) / <strong>Delete</strong> (trash) actions, and — for several modules — bulk <strong>Upload Excel / Download Excel</strong> import-export.</p>`,
    navigation: [
      `Click <strong>Global Data</strong> in the top navigation bar (globe icon).`,
      `Lands on the Global Data home page (route <code>#/global-data/home-page</code>), which shows two top tabs: <strong>Company</strong> (the tile grid) and <strong>Construction Type</strong> (a separate 10-step configuration pipeline).`,
      `The <strong>Company</strong> tab shows a grid of ~24 tiles: Company, Owners, Locations, Tax Configuration, Vendors, Sub Contractors, Work Order Management, Construction Types, Users &amp; Permissions, Crews, UOM/Phasecode &amp; GL Codes, Settings, Forms, Notifications, Quickapps, Document Management, Marketplace, Bid Templates, Customer, Staged Tables, Cost, Compliance Hub, Business Units, Measurement Templates.`,
      `Clicking a tile drills into that module; a breadcrumb trail top-left (e.g. <code>Global Data &gt; Owners</code>) navigates back. Most modules also have their own internal tabs once opened.`
    ],
    sections: [
      {
        id: "company",
        heading: "Company & Business Units",
        html: `<p>Stores the company's own profile — the legal/business entity information that appears on documents, forms, and communications generated by Arena — plus any subsidiary company profiles.</p>
        <p><strong>Company Details</strong> tab: a single profile form with <strong>Upload Company Logo</strong> and a <strong>Submit</strong> button. Fields: Company Name*, Company ID*, Street Address*, City*, State*, State Zip Code*, Contact Person*, Contact Person Phone Number* (country-code dropdown + extension), Contact Person Email*, Company Email*, Company Phone Number*, PAN Number, GST IN, plus an <strong>SSO Clients</strong> section with <strong>Add SSO Provider</strong> for enterprise single sign-on.</p>
        <p><strong>Subsidiary</strong> tab: <strong>Create Subsidiary</strong> button, search box, list/grid view toggle.</p>
        <h4>Business Units</h4>
        <p>A simple registry of the company's internal business units/divisions, used to categorize operations and reporting across the company.</p>
        <p><strong>Table:</strong> Serial Number, Code, Description, Actions. <strong>Add</strong> button.</p>`,
        qa: [
          {
            q: "How do I update the company profile?",
            tags: ["company profile","company logo","company details"],
            a: `<ol>
              <li>Global Data → <strong>Company</strong> tile → <strong>Company Details</strong> tab.</li>
              <li>Click <strong>Upload Company Logo</strong> to set the brand logo used across generated documents.</li>
              <li>Fill in/update the required fields (Company Name, ID, Address, City, State, Zip, Contact Person details, Company Email/Phone, optionally PAN/GST).</li>
              <li>To configure SSO, click <strong>Add SSO Provider</strong> under SSO Clients and complete the provider's setup.</li>
              <li>Click <strong>Submit</strong> to save.</li>
            </ol>`
          },
          {
            q: "How do I add a business unit?",
            tags: ["business unit","add business unit"],
            a: `<ol>
              <li>Global Data → <strong>Business Units</strong> → <strong>Add</strong>.</li>
              <li>Enter a Code and Description.</li>
              <li>Submit.</li>
            </ol>`
          }
        ]
      },
      {
        id: "owners",
        heading: "Owners",
        html: `<p>Maintains the master directory of project <strong>Owners</strong> (the client/owner entity that commissions a project) — the same list used when creating a Project and choosing its Owner. "Owners Creation" is the same screen, not a separate one.</p>
        <p><strong>Create Owner</strong> is a split button → dropdown offers <strong>Create Owner</strong> (opens the wizard) or <strong>POC OCR</strong> (OCR-assisted document intake for owner data). Grid of Owner cards (Owner ID, Owner Name, Owner Email) with a <strong>⋮</strong> menu per card. Toolbar: Search, Filters, Export, list/grid/table toggles, and a <strong>Settings</strong> gear.</p>
        <p><strong>Settings</strong> gear opens "Owner Settings" — choose how many hierarchy levels Owners are divided into: Level 1 (Owner only, default/locked), Level 2 (Category &gt; Owner), or Level 3 (Category &gt; SubCategory &gt; Owner).</p>`,
        qa: [
          {
            q: "How do I create a new Owner record?",
            tags: ["create owner","register owner","new owner"],
            a: `<ol>
              <li>Global Data → <strong>Owners</strong> tile → <strong>Create Owner</strong> (split button) → <strong>Create Owner</strong>.</li>
              <li><strong>Step 1 – Basic Details:</strong> enter Owner Name* (required), Short Name, Alias Name, Phone Number*, Email*, Fax Number, Url; expand and fill Primary Address, optionally check <strong>Same as Primary address</strong> for Mailing/Billing Address.</li>
              <li><strong>Step 2 – Locations &amp; Tax Codes:</strong> click <strong>Link Locations</strong> to associate company Locations (with a Default flag), and <strong>Add</strong> under Tax Codes to attach Tax Group/Tax Class/Tax Code combinations.</li>
              <li><strong>Step 3 – Preview:</strong> review all entered data.</li>
              <li>Click <strong>Submit</strong> to create the Owner.</li>
            </ol>
            <p>To bulk-create Owners, use <strong>Export</strong>, which also exposes Download/Upload Excel options with a template.</p>`
          },
          {
            q: "How do I configure Owner hierarchy levels?",
            tags: ["owner settings","owner hierarchy","owner levels"],
            a: `<ol>
              <li>Owners tile → <strong>Settings</strong> (gear icon, top right).</li>
              <li>In "Owner Settings," choose Level 1, Level 2, or Level 3 depending on how granular owner categorization should be company-wide.</li>
            </ol>`
          }
        ]
      },
      {
        id: "locations",
        heading: "Locations & Tax Configuration",
        html: `<p>Central registry of physical addresses/locations used throughout Arena — for material delivery, owner linking, tax jurisdiction assignment, etc. (Same table also referenced as "Delivery Locations" in older documentation.)</p>
        <p><strong>Toolbar:</strong> Create, Search, Export, Filters, Manage Columns.</p>
        <p><strong>Table columns:</strong> Location ID, Location Name, Address, Zip Code, City, State, Actions.</p>
        <h4>Tax Configuration</h4>
        <p>Defines the company's tax structure — Tax Groups (e.g. "GST 18", "GST 111") each containing individual Tax Codes with percentages — used by Owners, Locations, Vendors, and Work Orders wherever tax applies.</p>
        <p><strong>Left panel:</strong> list of Tax Groups with an <strong>Add Tax Group</strong> button (⋮ menu per group); expanding a group reveals its Tax Codes.</p>
        <p><strong>Right panel:</strong> table of Tax Codes for the selected group (Tax Code, Tax Percentage, Actions) with <strong>Add Tax Code</strong>, <strong>Upload Excel</strong>, <strong>Download Excel</strong>.</p>`,
        qa: [
          {
            q: "How do I add a new company delivery location?",
            tags: ["add location","delivery location","create location"],
            a: `<ol>
              <li>Global Data → <strong>Locations</strong> tile → <strong>Create</strong>.</li>
              <li>In the "Add Location" dialog, fill Location Name*, Address*, Zip Code, City, State.</li>
              <li>Under <strong>Tax Codes*</strong>, click <strong>Add</strong> to attach one or more Tax Group/Tax Class/Tax Code entries.</li>
              <li>Click <strong>Submit</strong>.</li>
            </ol>
            <p>Bulk location setup is also possible via Excel import from this screen's Export/Upload options.</p>`
          },
          {
            q: "How do I set up tax groups and tax codes?",
            tags: ["tax configuration","tax group","tax code","gst"],
            a: `<ol>
              <li>Global Data → <strong>Tax Configuration</strong> → <strong>Add Tax Group</strong> → enter the Group name → <strong>Submit</strong>.</li>
              <li>Select the new group in the left panel, then click <strong>Add Tax Code</strong> → enter Tax Code* and Tax Percentage* → <strong>Submit</strong>.</li>
              <li>Repeat for each code belonging to that group (e.g. CGST, SGST, ITC, Freight).</li>
              <li>Use <strong>Upload Excel</strong> / <strong>Download Excel</strong> to bulk manage tax codes.</li>
            </ol>`
          }
        ]
      },
      {
        id: "vendors",
        heading: "Vendors & Sub Contractors",
        html: `<p>Central directory of external material/equipment suppliers, with categorization, preferred/blocked status, rate cards, and a configurable vendor rating form — used by Procurement, Work Orders, and other modules company-wide.</p>
        <p><strong>Left panel:</strong> vendor Categories (e.g. Equipment Vendors, Material Vendors, Cement Vendors, General, Eco category), expandable to sub-categories, with a <strong>Create Category</strong> button.</p>
        <p><strong>Top toolbar:</strong> Vendors / Ratings Form tabs; <strong>Restore Vendors</strong>, <strong>Register Vendor</strong>, search, <strong>Add Groups</strong>, <strong>Download Excel</strong>, <strong>Upload Vendors</strong>, and a <strong>Settings</strong> gear (same Level 1/2/3 hierarchy pattern as Owners).</p>
        <p>Clicking a vendor card opens its <strong>Vendor Edit</strong> page with <strong>Profile</strong> and <strong>Rate Card</strong> tabs:</p>
        <ul>
          <li><strong>Profile</strong> — Vendor ID, Company Name*, First Name*, Last Name*, a contact-persons table with <strong>Add</strong>, Username*, Phone Number*, Email*, Select Sign Label, Initials*, Vendor Title, Address, Licence Number, Fax, Scope, Website.</li>
          <li><strong>Rate Card</strong> — Materials and Equipment sub-tabs, each a table (Cost Code, Name, UOM Group, UOM, Type, editable Rate columns) with an <strong>Upload Logs</strong> button to bulk-update rates via an Excel template (Daily/Weekly/Monthly rate columns).</li>
        </ul>
        <p><strong>Ratings Form</strong> tab: a form-builder for vendor evaluation — a Standard field ("Vendor Rating") plus Custom fields (e.g. "Safety," "Quality") each with a weight/value, Required toggle, Show on card toggle, Choose Type dropdown, duplicate/delete icons, an <strong>Add field</strong> button, and <strong>Save Changes</strong>.</p>
        <h4>Sub Contractors</h4>
        <p>A parallel registry to Vendors, specifically for subcontracted labor/trade-partner companies (as distinct from material/equipment suppliers).</p>
        <p><strong>Register Sub Contractor</strong> button, <strong>Add Groups</strong>, search, grid/list view toggle. Cards show Sub Contractor name and an ID/registration number, with a <strong>⋮</strong> menu per card.</p>`,
        qa: [
          {
            q: "How do I add a new vendor?",
            tags: ["register vendor","add vendor","new vendor"],
            a: `<ol>
              <li>Global Data → <strong>Vendors</strong> tile → <strong>Register Vendor</strong>.</li>
              <li>Upload a profile picture (optional), fill Vendor ID*, Company Name*, First Name*, Last Name*.</li>
              <li>Click <strong>Add</strong> in the contact table to add one or more contact persons with their details.</li>
              <li>Fill Username*, Phone Number* (with country code + extension), Email*.</li>
              <li>Choose a <strong>Select Sign Label</strong> (e.g. Initials) and fill Initials* — used as the digital signature label on approved documents; optionally toggle <strong>Enable Security Key Authentication</strong>.</li>
              <li>Optionally fill Vendor Title, Address, Licence Number.</li>
              <li>Click <strong>Submit</strong>.</li>
            </ol>`
          },
          {
            q: "How do I set up a vendor's rate card?",
            tags: ["rate card","vendor rates","upload logs"],
            a: `<ol>
              <li>Open the vendor's card from the <strong>Vendors</strong> tile.</li>
              <li>Go to the <strong>Rate Card</strong> tab, choose <strong>Materials</strong> or <strong>Equipment</strong>.</li>
              <li>Click <strong>Upload Logs</strong>, download the Excel template, fill in Daily/Weekly/Monthly rates per item, then upload the completed file — or edit the <strong>Rate</strong> field inline per row.</li>
            </ol>`
          },
          {
            q: "How do I configure the vendor rating form?",
            tags: ["vendor rating","ratings form","vendor evaluation"],
            a: `<ol>
              <li>Vendors tile → <strong>Ratings Form</strong> tab.</li>
              <li>Click <strong>Add field</strong> to add a new custom rating criterion (e.g. "Safety").</li>
              <li>Set its weight/value, toggle <strong>Required</strong> and/or <strong>Show on card</strong> as needed, choose its type via <strong>Choose Type</strong> (e.g. Rating).</li>
              <li>Click <strong>Save Changes</strong>.</li>
            </ol>`
          },
          {
            q: "How do I register a subcontractor?",
            tags: ["subcontractor","register sub contractor"],
            a: `<ol>
              <li>Global Data → <strong>Sub Contractors</strong> tile → <strong>Register Sub Contractor</strong>.</li>
              <li>Complete the registration form (name, contact, ID) and submit.</li>
              <li>Use <strong>Add Groups</strong> to organize subcontractors into categories, similar to Vendor categories.</li>
            </ol>`
          },
          {
            q: "How do I track vendor/subcontractor certifications like ISO or safety licenses?",
            tags: ["subcontractor compliance","iso certification","safety license"],
            a: `<ol>
              <li>Go to <strong>Global Data → Settings → Sub Contractor Settings</strong> to define which certification fields (e.g. ISO 9001, CIDB) subcontractors must upload.</li>
              <li>Or, for company-wide compliance items, use <strong>Global Data → Compliance Hub → Compliance Directory → Create</strong> to define the requirement (Name, Category, Renewal Frequency, Evidence Type), then track status under <strong>My Company Compliance</strong>.</li>
            </ol>`
          }
        ]
      },
      {
        id: "work-order-management",
        heading: "Work Order Management",
        html: `<p>Configures the templates and types used to raise Work Orders (Equipment, Material, or Service work) across projects, and hosts a library of Work Order Contracts.</p>
        <p><strong>Main list</strong> ("Work Order Contract"): Create, Search, Export, Manage Columns, Settings gear, list/grid/table toggle. Columns include Name, Description, Status, Location, Address, Contact, Company, WO Description, Mechanic, Inventory Location, Shop, Equipment, Created/Scheduled dates.</p>
        <p><strong>Create</strong> opens "Create Work Order Contract": Name*, Description, <strong>Work Order Type*</strong> (Service / Equipment / Material).</p>
        <p><strong>Settings</strong> gear opens a dedicated admin area:</p>
        <ul>
          <li><strong>Work Order Types</strong> — cards for each type (Service, Equipment, Material) with a create button; each card's ⋮ menu offers Edit/Delete. Creating a type only needs Name* and Description.</li>
          <li><strong>Users and Permissions</strong> — a "Users Groups" screen with <strong>Add User Group</strong>, scoping which user groups can access/act on Work Orders.</li>
        </ul>
        <p>Opening an individual Work Order Contract record shows tabs: Profile, Team, Timesheets, Equipment, Inventory, Procurement, Expense, Schedule, Communication, Documents, Drawings — plus a <strong>Work Order Status</strong> dropdown and, in Profile, an <strong>Item Details</strong> panel with <strong>Create Items</strong>. The <strong>Expense</strong> tab lists Expense records tagged by Work Order Type, with a Create button and Filters/grid-list toggle.</p>`,
        qa: [
          {
            q: "How do I create a Work Order Type?",
            tags: ["work order type","create work order type"],
            a: `<ol>
              <li>Global Data → <strong>Work Order Management</strong> → <strong>Settings</strong> gear → <strong>Work Order Types</strong>.</li>
              <li>Click <strong>Work Order Type</strong>, enter a Name* and Description, click <strong>Submit</strong>.</li>
            </ol>`
          },
          {
            q: "How do I create a Work Order Contract template?",
            tags: ["work order contract","create work order"],
            a: `<ol>
              <li>Work Order Management → <strong>Create</strong>.</li>
              <li>Enter Name*, Description, and select a <strong>Work Order Type*</strong> (Service/Equipment/Material).</li>
              <li>Submit, then open the new record to configure its Profile fields, add Items via <strong>Create Items</strong>, and configure Expense forms under the <strong>Expense</strong> tab.</li>
            </ol>`
          }
        ]
      },
      {
        id: "construction-types",
        heading: "Construction Types & the Construction Type Pipeline",
        html: `<h4>Construction Types (tile)</h4>
        <p>Defines the master list of construction project categories (e.g. Infrastructure, Flyover, Residential, Electrical and Instrumentation, Roads, Commercial Project, Tunnel) that every project must be tagged with at creation. All of the Construction Type pipeline's work-breakdown configuration (below) is scoped per Construction Type.</p>
        <p><strong>Table:</strong> S.No, Types of Construction, <strong>Set as Default</strong> radio, Actions (drag-handle reorder, Edit, Delete). <strong>Copy</strong> duplicates an existing type's full configuration into a new named type. <strong>Create</strong> adds a new blank type. A type cannot be edited/deleted once projects exist using it.</p>
        <h4>Construction Type (configuration pipeline)</h4>
        <p>A separate top-level tab next to "Company" on the Global Data home page, distinct from the "Construction Types" tile. It presents a <strong>10-step visual pipeline</strong> for building out the full work-breakdown-structure (WBS) library for a selected Construction Type, chosen via a dropdown at the top.</p>
        <ol>
          <li><strong>Global Work Areas</strong> — the physical/organizational location hierarchy of a project site as a three-tier nested structure (Tier 1 → Tier 2 → Tier 3, e.g. Tower → Floor → Room). Sub-tabs: Entity Types, Super Location Types, Location Types — each with Create + Upload Excel. A parent entry cannot be deleted while children exist. Names are customizable via the Naming Framework.</li>
          <li><strong>Global Work Packages</strong> — the first-level library of construction work content: <strong>Activities</strong> (major work divisions, e.g. Excavation, Backfilling, Shuttering, Concreting) each containing many <strong>Work Packages</strong> (the actual unit of work). The Work Packages screen has three top tabs — Progress, Quality, Safety — since a work package can be scoped per product line. Also on the pipeline: Progress/Quality/Safety Forms boxes to configure standard data-capture forms tied to a work package.</li>
          <li><strong>Activity Sequence Templates</strong> — captures the logical work sequence/dependencies between Work Packages, driving schedule and progress logic. <strong>Map Work Packages to Work Locations</strong> is a prerequisite for Progress tracking. <strong>Create Activity Sequence Templates</strong> builds a dependency graph (WBS template); templates support Create, Edit, Pause/Play, Delete (blocked if in active use).</li>
          <li><strong>Material and Labor Estimation Templates</strong> — four cards: Map Materials to Activity, Map Labor to Activity, Map Materials to Work Package, Map Labor to Work Package, for cost/productivity estimation.</li>
          <li><strong>Naming Framework</strong> (construction-type scoped) — a table of Activity Sequence Level rows (Tree Version, Entity, Super Location, Location, Activity, Work Package, Sub Activity, and more) with Default Name, editable Custom Name, and Short Name columns. Changes relabel that concept everywhere in the app for this construction type.</li>
          <li><strong>P6 Activity Codes</strong> — uses Primavera P6 activity codes to categorize/classify project activities for schedule interoperability with P6.</li>
          <li><strong>Data Migration</strong> — bulk-loads historical/master data from Excel into this construction type's structures. Each section (Master Data, Global Work Packages, Locations Type Work Packages, Global Sequence Model, etc.) has a Template download link and a drag-and-drop upload zone. Newly uploaded data is appended to existing data.</li>
          <li><strong>Metadata</strong> — add custom Metadata fields globally, extending the standard data model.</li>
          <li><strong>Work Package Linked Forms</strong> — associates specific forms (Progress/Quality/Safety/etc.) with individual Work Packages so the correct form appears when work is logged in the field.</li>
          <li><strong>Work Package Measurement Template Linking</strong> — links a Measurement Template to a Work Package, so quantity take-off math is automatically available when recording progress against that work package.</li>
        </ol>`,
        qa: [
          {
            q: "How do I configure which construction categories are available when creating a project?",
            tags: ["construction types","project category","construction category"],
            a: `<ol>
              <li>Global Data → <strong>Construction Types</strong> tile.</li>
              <li>Click <strong>Create</strong> to add a new type, or <strong>Copy</strong> an existing type to clone its full setup into a new one.</li>
              <li>Optionally mark one type as <strong>Set as Default</strong>.</li>
            </ol>`
          },
          {
            q: "What's the difference between \"Construction Types\" and the \"Construction Type\" tab?",
            tags: ["construction types vs construction type","wbs pipeline"],
            a: `<p><strong>Construction Types</strong> (a tile) is the simple master list of category names (Infrastructure, Residential, etc.) used when creating a project. The <strong>Construction Type</strong> tab (next to "Company" on the Global Data home page) is a 10-step configuration pipeline where you build out the full work-breakdown library — Global Work Areas, Activities/Work Packages, Sequence Templates, Naming Framework, Data Migration, and more — for whichever Construction Type is selected in its dropdown.</p>`
          },
          {
            q: "How do I bulk-load historical data instead of entering it manually?",
            tags: ["data migration","bulk upload","excel import"],
            a: `<ol>
              <li>Global Data → <strong>Construction Type</strong> tab → <strong>Step 7 (Data Migration)</strong>.</li>
              <li>For each section (Master Data, Global Work Packages, Locations Type Work Packages, Global Sequence Model, etc.), click the <strong>Template</strong> link to download the correctly-formatted Excel file.</li>
              <li>Fill it in and drag it into the upload zone. Existing data is preserved — new rows are appended.</li>
            </ol>`
          }
        ]
      },
      {
        id: "users-permissions",
        heading: "Users, Permissions & Crews",
        html: `<p>The full identity, roster, and access-control system for the company — who can log in, what roster/HR-style data is tracked about them, and what each user/group is allowed to do inside Arena.</p>
        <p><strong>Top tabs:</strong> User Accounts, Global Rosters, Global Permission, User Permission.</p>
        <ul>
          <li><strong>User Accounts</strong> → Active Users / Inactive Users sub-tabs. <strong>Register User</strong> opens the user-creation form (name, contact, email, password); a Signature field supports Initials, Sign (scribble pad), or Upload modes. Table: Profile, Created From, Employee ID, First/Last Name, Last Login, User Name, Contact No., Email ID, Actions. Deleting an Active User moves them to Inactive Users (not a hard delete); Inactive Users can be Activated again. Bulk operations: Download Sample Excel, Download Excel, Upload Excel.</li>
          <li><strong>Global Rosters</strong> → System User / Non System User / Non System Inactive User sub-tabs. Rich HR-style table (Roster ID, First/Last Name, Group No., Last Login, Email ID, Default Indirect Phase Code, Address, Designation, Skills, and more). Non-system users represent temporary/outside workers who are not full Arena logins but still need to be tracked (timesheets, crew assignment).</li>
          <li><strong>Global Permission</strong> — Grid of Group cards (Super Admin, Global Data Admin, All Home Modules Admin, Cost Tracking Admin, Work Order Admin, Foreman, Supervisor, Project Manager, etc.), each with Permissions and Users buttons. <strong>Add User Group</strong> creates a new group; <strong>Fetch Templates</strong> imports Arena's standard prebuilt permission groups. Each group's ⋮ menu offers Edit, Delete, and Copy.</li>
          <li><strong>User Permission</strong> — individual-level permission override. Selecting a user shows Basic Details, Groups (memberships), and Permissions (individually assignable, independent of group-level grants).</li>
        </ul>
        <h4>Crews</h4>
        <p>Groups Roster members (system + non-system users) into named work <strong>Crews</strong> with a designated Supervisor and Foreman, for labor tracking, timesheets, and work assignment.</p>
        <p><strong>Create</strong> button; grid of Crew cards showing Total Supervisors, Total Foremen, Total Crew Rosters counts, with a ⋮ (Edit/Delete) menu per card.</p>`,
        qa: [
          {
            q: "How do I register a new user or employee?",
            tags: ["register user","add employee","new user account"],
            a: `<ol>
              <li>Global Data → <strong>Users &amp; Permissions</strong> → <strong>User Accounts</strong> → <strong>Active Users</strong> tab.</li>
              <li>Click <strong>Register User</strong> and fill in the required details (name, contact, email, password/signature).</li>
              <li>Click <strong>Submit</strong>. Use <strong>Notify User</strong> to email them their login/setup instructions.</li>
            </ol>`
          },
          {
            q: "How do I bulk-import users instead of adding them one by one?",
            tags: ["bulk import users","upload excel users","onboard users"],
            a: `<ol>
              <li>Users &amp; Permissions → <strong>Active Users</strong> tab.</li>
              <li>Click <strong>Download Sample Excel</strong>, fill in one row per user (use correct country codes for phone numbers).</li>
              <li>Click <strong>Upload Excel</strong> and select the completed file — Arena creates the accounts and emails each new user automatically.</li>
            </ol>`
          },
          {
            q: "How do I set up permissions for a group of users?",
            tags: ["permission group","user group","global permission"],
            a: `<ol>
              <li>Global Data → <strong>Users &amp; Permissions</strong> → <strong>Global Permission</strong> tab.</li>
              <li>Click <strong>Add User Group</strong>, name it, then click its <strong>Permissions</strong> button and select the allowed modules/actions.</li>
              <li>Click its <strong>Users</strong> button to add members — they inherit the group's permissions.</li>
              <li>Optionally use <strong>Fetch Templates</strong> to start from one of Arena's standard permission templates (e.g. Super Admin).</li>
            </ol>`
          },
          {
            q: "What's the difference between Active Users and Inactive Users?",
            tags: ["active users","inactive users","deactivate user"],
            a: `<p><strong>Active Users</strong> can currently log in. Deleting a user from Active Users doesn't erase them — it moves them to <strong>Inactive Users</strong>, where they're retained and can later be re-Activated (which resends a registration/password-reset email).</p>`
          },
          {
            q: "How do I add a non-system (temporary) worker to the global roster?",
            tags: ["non system user","temporary worker","global roster"],
            a: `<ol>
              <li>Users &amp; Permissions → <strong>Global Rosters</strong> → <strong>Non System User</strong> → <strong>Add Non System Roster</strong>.</li>
              <li>Fill in worker details (name, designation, skills, experience, group number, etc.) → Submit.</li>
              <li>Use <strong>Export All Users</strong> to download the full roster, or <strong>Add Role</strong> to assign a role to selected rosters.</li>
            </ol>`
          },
          {
            q: "How do I create a crew?",
            tags: ["create crew","crew setup","supervisor foreman"],
            a: `<ol>
              <li>Global Data → <strong>Crews</strong> tile → <strong>Create</strong>.</li>
              <li>Enter the Crew Name.</li>
              <li>Select a <strong>Supervisor</strong> and a <strong>Foreman</strong> from the dropdown (these people must already exist in Global Rosters).</li>
              <li>Select <strong>Rosters</strong> — check the individual roster members (system and non-system) who belong to this crew.</li>
              <li>Click <strong>Submit</strong>.</li>
            </ol>`
          }
        ]
      },
      {
        id: "uom-phasecode-gl",
        heading: "UOM, Phasecode & GL Codes",
        html: `<p>The shared reference-data library for quantity, cost, and accounting classification used across Estimating, Work Orders, Procurement, and Cost modules: Units of Measure, Phase Codes, Repair Types, and GL Codes.</p>
        <p><strong>Top tabs:</strong> UOMs, Phase Codes, Repair Types, GL Codes.</p>
        <ul>
          <li><strong>UOMs</strong> sub-tabs: <strong>UOMs</strong> (flat list of unit names — Kg, Lbs, Cum, Litres, Sqm, Rm, etc. — with Add UOM, Edit/Delete per row), <strong>UOM Groups</strong> (groups multiple UOMs under a category like Area, Length, Mass, Volume, Weight, with Add UOM Group), <strong>UOM Conversions</strong> (a read-only table of every conversion factor defined across all UOM Groups, e.g. "Kg → 2.2 → Lbs").</li>
          <li><strong>Phase Codes</strong> — a large table (Phase Code, Description, Phase Code Type: Direct / Indirect / Non-Productive / Change Order, and multi-select Cost Types: Material, Labor, Equipment, Subcontractors, Other Expenses). Add + Export buttons.</li>
          <li><strong>Repair Types</strong> — simple table (Repair Type, Description) with Add and Save Changes, used to classify equipment/work-order repairs.</li>
          <li><strong>GL Codes</strong> — simple table (Code, Description) with Add, for general-ledger/accounting integration.</li>
        </ul>`,
        qa: [
          {
            q: "How do I add a new unit of measure (UOM) and group it?",
            tags: ["uom","unit of measure","uom conversion"],
            a: `<ol>
              <li>Global Data → <strong>UOM, Phasecode &amp; GL Codes</strong> tile → <strong>UOMs</strong> tab.</li>
              <li>Click <strong>Add UOM</strong>, type the unit name (e.g. "Tonne"), and save.</li>
              <li>To make it convertible with other units, go to <strong>UOM Groups</strong>, add it to (or create) a group, and enter the conversion factor(s).</li>
              <li>The new factors then appear read-only under <strong>UOM Conversions</strong>.</li>
            </ol>`
          },
          {
            q: "How do I add a Phase Code?",
            tags: ["phase code","add phase code","cost type"],
            a: `<ol>
              <li>Phase Codes tab → <strong>Add</strong>.</li>
              <li>Enter the Phase Code, its Description, choose its Phase Code Type (Direct/Indirect/Non-Productive/Change Order), and select which Cost Types apply (Material/Labor/Equipment/Subcontractors/Other Expenses).</li>
              <li>Save. Bulk create/update is also available via Excel Upload, which supports a <strong>Create Mode</strong> and an <strong>Update Mode</strong>.</li>
            </ol>`
          }
        ]
      },
      {
        id: "settings",
        heading: "Settings (Global Settings)",
        html: `<p>A large catch-all hub of company-wide configuration screens, reached as its own tile, organized as a left-hand navigation list with a detail panel on the right.</p>
        <p><strong>Left navigation includes:</strong> Roster Settings, Procurement Settings, Holidays, Naming Framework, Currency, Attachment Settings, Project Status, Project Form, Mail Settings, Keyboard Shortcuts, Adobe Sign Settings, Global Date Format, Sub Contractor Settings, Owner, Earnings Codes, Enterprise Dashboard, Hindrance Category, Location settings, Request for Information, Transmittals Submitted Type, Market Type, Configure Safety Observation.</p>
        <h4>Selected screens</h4>
        <ul>
          <li><strong>Roster Settings</strong> — fixed Table Standard Fields always shown; admins add Configurable Fields via Add Field, each with a label, a Choose Type dropdown (Text Box, Attachment, Check Box, Date, Label, Multi Select, Paragraph, Roster-lookup, Scribble, Single Select, Table, Time, Signature), a Required toggle, and a Show on cards toggle. Save Changes applies.</li>
          <li><strong>Owner</strong> (Settings) — the same Standard Fields + Add Field builder, for the Owner registration form — drives the fields seen in the Owners "Create Owner" wizard.</li>
          <li><strong>Currency</strong> — a single dropdown (Indian Rupee, USD, EUR, GBP, JPY, CHF) + Save Changes, setting the currency symbol/format used company-wide.</li>
          <li><strong>Global Date Format</strong> — two radio options, MM-DD-YYYY or DD-MM-YYYY, + Save Changes.</li>
          <li><strong>Mail Settings</strong> — a table of modules (LOR, Procurement, Opportunities, Work Order, Proposal Management, Arena Communications, Expense Tracker, RFI, Transmittal, Tender Management, Capital Management, Submittal, Change Order, Delay Form, Other Forms) each with a Gmail vs Outlook radio choice.</li>
          <li><strong>Naming Framework</strong> (Global Settings version) — a large table of Activity Sequence Level rows covering Procurement/Inventory/Roster/Cost terminology (Project, Inventory Master, Pickup Ticket, Load Out Request, Vendor, Purchase Order, Opportunity, Customer, Phase Code, Estimate, and more), each with editable Custom Name and Short Name — distinct from the per-Construction-Type Naming Framework.</li>
          <li><strong>Sub Contractor Settings</strong> — Standard Fields + a Configurable Fields builder supporting certification/compliance attachments (CIDB, ISO 9001, ISO 45001, ISO 14001, Safety and Health Assessment, Electrical Contractor License), each toggle-able Required, typed as Attachment.</li>
          <li>Other entries (Procurement Settings, Holidays, Attachment Settings, Project Status, Project Form, Keyboard Shortcuts, Adobe Sign Settings, Earnings Codes, Enterprise Dashboard, Hindrance Category, Location settings, Request for Information, Transmittals Submitted Type, Market Type, Configure Safety Observation) follow the same left-nav pattern.</li>
        </ul>
        <p class="callout">"Test Emails" and "Enable AWP (Advanced Work Packaging)" are documented as Global Settings items (a test-email allowlist, and a single toggle that shows/hides the AWP menu) but were not visible in this navigation list during review — they may be feature-flagged per company/plan.</p>`,
        qa: [
          {
            q: "How do I change the company's currency?",
            tags: ["currency","change currency","settings"],
            a: `<ol>
              <li>Global Data → <strong>Settings</strong> → <strong>Currency</strong> (left nav).</li>
              <li>Choose the desired currency from the dropdown.</li>
              <li>Click <strong>Save Changes</strong>.</li>
            </ol>`
          },
          {
            q: "How do I change the global date format?",
            tags: ["date format","global date format"],
            a: `<ol>
              <li>Settings → <strong>Global Date Format</strong>.</li>
              <li>Select <strong>MM-DD-YYYY</strong> or <strong>DD-MM-YYYY</strong>.</li>
              <li>Click <strong>Save Changes</strong>.</li>
            </ol>`
          },
          {
            q: "How do I route a module's emails through Outlook instead of Gmail?",
            tags: ["mail settings","outlook","gmail routing"],
            a: `<ol>
              <li>Settings → <strong>Mail Settings</strong>.</li>
              <li>Find the module row (e.g. Work Order) and click the <strong>Outlook</strong> radio button in that row.</li>
              <li>The change saves immediately per row (ensure Outlook has been connected first via Marketplace).</li>
            </ol>`
          },
          {
            q: "What is AWP and how do I enable it?",
            tags: ["awp","advanced work packaging"],
            a: `<p>AWP stands for <strong>Advanced Work Packaging</strong>. Per Arena's reference documentation it is controlled by a single toggle under <strong>Global Data → Settings → Enable AWP</strong> — turning it on/off shows or hides the AWP menu for all users. This toggle was not visible in the Settings navigation during review, so it may be feature-gated for your plan; contact your Arena account admin if you don't see it.</p>`
          },
          {
            q: "How do I rename terminology used throughout the app (e.g. call \"Work Package\" something else)?",
            tags: ["naming framework","rename terminology","custom labels"],
            a: `<p>There are two Naming Framework screens:</p>
            <ol>
              <li><strong>Global Data → Construction Type tab → Step 5 (Naming Framework)</strong> — renames Activity/Work-Package/Location-hierarchy terms, scoped per Construction Type.</li>
              <li><strong>Global Data → Settings → Naming Framework</strong> — renames Procurement/Inventory/Roster/Cost terms company-wide.</li>
            </ol>
            <p>In either, edit the <strong>Custom Name</strong> (and optionally <strong>Short Name</strong>) column next to the term you want to relabel, then save.</p>`
          }
        ]
      },
      {
        id: "forms",
        heading: "Forms, Document Management & Quickapps",
        html: `<p>A large template library and form-builder for all the standard construction documents and workflow forms Arena supports, organized by functional area.</p>
        <p><strong>Top tabs:</strong> Construction Forms, Work Order Forms, Procurement, Inventory Forms, Project Forms, Drawing Management Forms, Cost, Invoice Forms.</p>
        <p><strong>Construction Forms</strong> tab shows cards: RFI, Submittals, Change Orders, Meeting Minutes, Delay Form, Request For Information, Transmittals — each described as "Configure [X] according to the templates set by your organization." Clicking into a form type (e.g. RFI) opens its <strong>Templates</strong> screen: a grid of named templates with a <strong>Create Template</strong> button, where the field-by-field form layout is built.</p>
        <h4>Document Management</h4>
        <p>Defines standard document-folder-structure <strong>templates</strong> that get applied to new projects, so every project starts with a consistent folder taxonomy for drawings/documents.</p>
        <p><strong>Left list</strong> of templates (e.g. FEL-1, FEL-2, FEL-3, Detailed Engineering) with Create Template, and inline Edit/Delete icons. <strong>Right panel</strong>: the selected template's folder tree (e.g. under FEL-1: Civil, Mechanical, Structural, Architectural, Instrumentation, Process Controls) with columns Last Modified, Added On, Actions; a <strong>New Folder</strong> button adds more folders/subfolders.</p>
        <h4>Quickapps</h4>
        <p>Lets the company build lightweight custom mini-apps/forms ("Quick Apps") for ad-hoc field data capture, and also hosts the <strong>Standard Tables</strong> feature for reusable reference tables.</p>
        <p><strong>Two tabs:</strong> Standard Tables, Quick Apps.</p>
        <ul>
          <li><strong>Standard Tables</strong> — a grid of named tables (e.g. Arena, Drawing Status, Sample) with an <strong>Add</strong> button, for standardized tables reused across projects.</li>
          <li><strong>Quick Apps</strong> — a grid of custom app cards (e.g. Bid or Estimate Log, Subcontractor Bid Proposal, Observation Report, Non-Conformance Report, Completion Notice, Storage Inspections, Variance Request) with a <strong>Create</strong> button.</li>
        </ul>`,
        qa: [
          {
            q: "How do I create a new RFI template?",
            tags: ["rfi template","create template","construction forms"],
            a: `<ol>
              <li>Global Data → <strong>Forms</strong> → <strong>Construction Forms</strong> tab → click <strong>RFI</strong>.</li>
              <li>Click <strong>Create Template</strong>.</li>
              <li>Build the form layout (sections/fields) as needed and save.</li>
              <li>The new template becomes available for selection whenever an RFI is raised on a project.</li>
            </ol>`
          },
          {
            q: "How do I create a reusable folder structure for project documents?",
            tags: ["document template","folder structure","document management"],
            a: `<ol>
              <li>Global Data → <strong>Document Management</strong> → <strong>Create Template</strong>, name it (e.g. "FEL-1").</li>
              <li>Select the template, then click <strong>New Folder</strong> repeatedly to build out the folder hierarchy (e.g. Civil, Mechanical, Structural).</li>
              <li>Apply this template when setting up a new project's document space.</li>
            </ol>`
          },
          {
            q: "How do I create a Quick App?",
            tags: ["quick app","create quickapp","custom form"],
            a: `<ol>
              <li>Global Data → <strong>Quickapps</strong> → <strong>Quick Apps</strong> tab → <strong>Create</strong>.</li>
              <li>Name the app and design its data-capture fields.</li>
              <li>Save — the Quick App becomes available from the mobile/field app or relevant project screen.</li>
            </ol>`
          },
          {
            q: "How do I create a Standard Table?",
            tags: ["standard table","reference table"],
            a: `<ol>
              <li>Quickapps → <strong>Standard Tables</strong> tab → <strong>Add</strong>.</li>
              <li>Define the table's name and columns.</li>
              <li>Save — the table can then be reused/referenced across projects.</li>
            </ol>`
          }
        ]
      },
      {
        id: "notifications",
        heading: "Notifications (Global Notifications)",
        html: `<p>Configures which system events trigger notifications, on which channels (Mail / Web / Mobile), for which groups of users — at the company level (as opposed to per-project notification settings).</p>
        <p><strong>Two tabs:</strong> Event Groups, Events.</p>
        <ul>
          <li><strong>Event Groups</strong> — cards for each functional group (Inventory Management, Equipment Management, Opportunity Management, Timesheet Management, Global, Procurement, Fabrication, Work Order, Sub Contractor Management, Expense Tracker, Document Management, Proposal Management, Bid Management, plus custom groups). Each card has Notifications and Users buttons. <strong>Add Event Groups</strong> creates a new custom group; <strong>Get Standard Event Groups</strong> reseeds Arena's default groups (with confirmation). Clicking Notifications on a group opens a dialog listing every event grouped by module, each expandable to show individual events with Mail/Web/Mobile checkbox toggles.</li>
          <li><strong>Events</strong> tab — the master list of every configurable event with Mail/Web/Mobile column toggles, plus a <strong>Reset to Standard</strong> button.</li>
        </ul>`,
        qa: [
          {
            q: "How do I set up notification rules (e.g. email alerts for low inventory)?",
            tags: ["notification rules","event groups","alerts"],
            a: `<ol>
              <li>Global Data → <strong>Notifications</strong> → <strong>Event Groups</strong>.</li>
              <li>Click <strong>Notifications</strong> on the relevant group (e.g. Inventory Management).</li>
              <li>Expand the module section, find the specific event (e.g. "Minimum Stock Reached"), and toggle <strong>Mail</strong>, <strong>Web</strong>, and/or <strong>Mobile</strong> on.</li>
            </ol>`
          },
          {
            q: "How do I create a custom notification group?",
            tags: ["custom notification group","add event group"],
            a: `<ol>
              <li>Notifications → <strong>Event Groups</strong> → <strong>Add Event Groups</strong>.</li>
              <li>Name the group, then use its <strong>Notifications</strong> button to select which events feed into it and on which channels.</li>
              <li>Use its <strong>Users</strong> button to add the people who should receive these notifications.</li>
            </ol>`
          }
        ]
      },
      {
        id: "marketplace",
        heading: "Marketplace & Staged Tables",
        html: `<p>The integrations hub for connecting Arena to third-party services company-wide — most require an admin to grant org-wide OAuth consent once, after which all users benefit without individually consenting.</p>
        <p><strong>Grid of integration cards:</strong> Microsoft OneDrive, Microsoft Sharepoint, Microsoft Outlook, Microsoft Users, Microsoft Calendar, Adobe Sign, Trimble Viewpoint, Google Maps, Inn Clock Consent, Zoom Info, IFS.</p>
        <ul>
          <li>Each Microsoft integration's connect screen shows a diagram and a note that consent is granted on behalf of the whole organization, with a <strong>Sign in with Microsoft</strong> button. The sign-in must use a company-domain email — personal Microsoft accounts cannot connect.</li>
          <li>After org-wide consent, individual users can still optionally connect their own mailbox via <strong>My Profile → Settings</strong> (Outlook Management Consent / Document Management Consent / Calendar consent); if a user never does, mail/calendar/document actions fall back to routing through the Admin Account.</li>
          <li><strong>Trimble Viewpoint</strong> connects via connection credentials + <strong>Test Connection and Save</strong>, then per-module Table Name/Schema Name mapping + <strong>Save Configuration</strong>; each module then gets a <strong>Link</strong> button to tie it to a Stage (feeding the Staged Tables screen) and a Primary Key column.</li>
          <li><strong>Adobe Sign</strong> requires logging in with Adobe Sign credentials and configuring Adobe API settings, used for electronic signatures on documents.</li>
        </ul>
        <h4>Staged Tables</h4>
        <p>The landing zone for data synced in from external ERP/accounting systems (e.g. Trimble Viewpoint, Soft Tech) before it is mapped and promoted into native Arena records — the operational counterpart to the Marketplace integration setup.</p>
        <p><strong>Top tabs</strong> per connected external system (e.g. View Point, Soft Tech). <strong>Left nav</strong> of stageable entities: Users, Projects, Crews, Phase Codes, Customers, Vendors, Owners, Project User Mapping, Project Crew Mapping, Work Order Crew Mapping, GL Codes, Work Orders, Logs.</p>
        <p><strong>Toolbar per entity:</strong> <strong>Map Attributes</strong> (maps each staged/external column to its native Arena field, with an "update after sync" checkbox), Filters, <strong>Auto Sync Criteria</strong> (set an hours-based recurring sync interval), and <strong>Bulk Create Arena Records</strong> (promotes all staged rows into real Arena records, with confirmation).</p>`,
        qa: [
          {
            q: "How do I connect Arena to Microsoft Outlook for email?",
            tags: ["connect outlook","marketplace","microsoft integration"],
            a: `<ol>
              <li>Global Data → <strong>Marketplace</strong> → <strong>Microsoft Outlook</strong>.</li>
              <li>Click <strong>Sign in with Microsoft</strong> and grant organization-wide consent (must use a company-domain email, not personal).</li>
              <li>Then go to <strong>Settings → Mail Settings</strong> and switch the relevant modules (e.g. Work Order) to <strong>Outlook</strong>.</li>
            </ol>`
          },
          {
            q: "How do I sync external users into Arena via Staged Tables?",
            tags: ["staged tables","sync external data","map attributes"],
            a: `<ol>
              <li>Connect the source system first (Global Data → <strong>Marketplace</strong> → e.g. Trimble Viewpoint → enter credentials → <strong>Test Connection and Save</strong> → map Table/Schema per module → <strong>Save Configuration</strong>).</li>
              <li>Global Data → <strong>Staged Tables</strong> → select the system tab (e.g. View Point) → select <strong>Users</strong> in the left nav.</li>
              <li>Click <strong>Map Attributes</strong> and map each external column to the matching Arena field.</li>
              <li>Optionally set <strong>Auto Sync Criteria</strong> for a recurring schedule, or click <strong>Bulk Create Arena Records</strong> to promote all currently staged rows immediately.</li>
            </ol>`
          }
        ]
      },
      {
        id: "customer",
        heading: "Customer (Opportunity Customer Settings)",
        html: `<p>Configures the customer/lead-management data model used by the Opportunities/Proposal pipeline, including a multi-level customer approval workflow.</p>
        <p><strong>Three tabs:</strong> Customer, Contact, Approval Workflow.</p>
        <ul>
          <li><strong>Customer</strong> — Standard Fields (Customer ID, Customer Name, Short Name, Alias Name, Primary/Mailing/Billing Address, Email Address, Phone Number, Fax Number, URL, Tax Codes, Locations) plus a Configurable Fields builder (Add Field, Choose Type, Required, Show on cards toggles) — the same builder pattern as Owner/Roster Settings.</li>
          <li><strong>Contact</strong> — the same style of settings for individual customer contacts (mirrors the Vendor contact-table pattern).</li>
          <li><strong>Approval Workflow</strong> — a table of approval Levels (Level, Level Description, Approvers, Workflow Type) with a <strong>Create Level</strong> button, defining a multi-step sign-off chain for customer/opportunity records.</li>
        </ul>`,
        qa: [
          {
            q: "How do I add an approval level for customer records?",
            tags: ["customer approval workflow","create level"],
            a: `<ol>
              <li>Global Data → <strong>Customer</strong> tile → <strong>Approval Workflow</strong> tab → <strong>Create Level</strong>.</li>
              <li>Name/describe the level, assign Approvers, and choose the Workflow Type.</li>
              <li>Save — subsequent opportunity/customer approvals will route through this chain in order.</li>
            </ol>`
          }
        ]
      },
      {
        id: "cost",
        heading: "Cost & Bid Templates",
        html: `<p>Defines the company's cost classification taxonomy (Cost Types) and reusable Cost Breakdown Structure (CBS) templates built from Phase Codes, used across estimating, budgeting, and cost tracking.</p>
        <p><strong>Two tabs:</strong> Cost Type, Cost Breakdown Structure.</p>
        <ul>
          <li><strong>Cost Type</strong> — fixed system types (Material, Equipment, Labor, Unit Rate, Sub Contractor) plus custom types created via <strong>Add Type</strong> (e.g. BOQ's, Freight Charges, Fuel &amp; Gas), each showing Description and Created By.</li>
          <li><strong>Cost Breakdown Structure</strong> — left nav Phase Codes (the same Phase Code table seen under UOM/Phasecode &amp; GL Codes, reused here) and Templates (named CBS templates, one markable as Default, with an Add Template button).</li>
        </ul>
        <h4>Bid Templates</h4>
        <p>A master catalog of estimate/bid line items (Item Description + Unit of Measure) that bid/estimate forms can pull from, so bids use consistent item descriptions and units across the company.</p>
        <p><strong>Table:</strong> S.No, Item Description, UOM Group, UOM, Actions. Buttons: <strong>Add Item</strong>, Download Excel, Download Sample Excel, Upload Excel.</p>`,
        qa: [
          {
            q: "How do I add a custom cost category (like \"Freight Charges\")?",
            tags: ["cost type","add cost category","freight charges"],
            a: `<ol>
              <li>Global Data → <strong>Cost</strong> → <strong>Cost Type</strong> tab → <strong>Add Type</strong>.</li>
              <li>Enter the name (e.g. "Freight Charges") and a description, then submit.</li>
            </ol>`
          },
          {
            q: "How do I set up a Cost Breakdown Structure (CBS) template?",
            tags: ["cost breakdown structure","cbs template"],
            a: `<ol>
              <li>Global Data → <strong>Cost</strong> → <strong>Cost Breakdown Structure</strong> tab → <strong>Templates</strong> → <strong>Add Template</strong>.</li>
              <li>Name it and build its structure using the available Phase Codes (managed under the Phase Codes side-list on the same screen, or under UOM/Phasecode &amp; GL Codes).</li>
              <li>Optionally mark it as the company's Default CBS template.</li>
            </ol>`
          },
          {
            q: "How do I add a bid line item?",
            tags: ["bid template","add item","estimate line item"],
            a: `<ol>
              <li>Global Data → <strong>Bid Templates</strong> → <strong>Add Item</strong>.</li>
              <li>Enter the Item Description and choose its UOM Group and UOM.</li>
              <li>Submit. For bulk loading, use <strong>Download Sample Excel</strong>, fill it in, then <strong>Upload Excel</strong>.</li>
            </ol>`
          }
        ]
      },
      {
        id: "compliance-hub",
        heading: "Compliance Hub",
        html: `<p>Tracks required company/vendor/subcontractor compliance documents (licenses, certifications, insurance, etc.) — first defining what's required (the Directory), then tracking the company's actual status against it.</p>
        <p><strong>Two tabs:</strong> Compliance Directory, My Company Compliance.</p>
        <ul>
          <li><strong>Compliance Directory</strong> — defines the types of compliance required. <strong>Create</strong> opens "Create Compliance Directory": Compliance Name*, Compliance Description, Category/Type*, Renewal Frequency, Renewal Period, Evidence Type*, Required Evidence* (file upload). Status counter chips: Met / Expired / Expiring Soon / Missing.</li>
          <li><strong>My Company Compliance</strong> — the company's actual submitted/tracked compliance records against the Directory's defined requirements, same table shape plus a Source column, and status chips Met / Expired / Expiring Soon.</li>
        </ul>`,
        qa: [
          {
            q: "How do I define a new compliance requirement?",
            tags: ["compliance directory","compliance requirement"],
            a: `<ol>
              <li>Global Data → <strong>Compliance Hub</strong> → <strong>Compliance Directory</strong> → <strong>Create</strong>.</li>
              <li>Fill Compliance Name*, Description, Category/Type*, Renewal Frequency and Period (if periodic renewal applies), Evidence Type*, and upload the Required Evidence template/sample.</li>
              <li>Submit — this requirement is now tracked (and can show as Missing/Expiring/Expired) under <strong>My Company Compliance</strong>.</li>
            </ol>`
          }
        ]
      },
      {
        id: "measurement-templates",
        heading: "Measurement Templates",
        html: `<p>Defines reusable quantity take-off formulas (e.g. Length × Breadth × Depth × Count) that can be linked to Work Packages (Construction Type Step 10) so field teams get an automatic quantity calculator when logging progress.</p>
        <p><strong>Table:</strong> Template ID, Template Name, Fields, Formula, Actions. Buttons: <strong>Add Template</strong>, Download Excel.</p>
        <p><strong>Create Measurement Template</strong> dialog: Template ID*, Template Name*, <strong>Parameters*</strong> (add named parameters like L, B, D, Nos via a + button), <strong>Formula*</strong> (free-text expression referencing the parameters by position, e.g. <code>[1]*[2]*[3]*[4]</code>, with the helper example <code>e.g. [1] * [3] or [1] * [2] / [3]</code>).</p>`,
        qa: [
          {
            q: "How do I build a quantity take-off formula for progress tracking?",
            tags: ["measurement template","quantity takeoff","formula"],
            a: `<ol>
              <li>Global Data → <strong>Measurement Templates</strong> → <strong>Add Template</strong>.</li>
              <li>Enter a Template ID* and Template Name* (e.g. "LBD").</li>
              <li>Under <strong>Parameters</strong>, add each variable the formula needs (e.g. L, B, D, Nos), clicking + after each.</li>
              <li>Enter the <strong>Formula</strong> referencing the parameters (e.g. <code>(L)*(B)*(D)*(Nos)</code>).</li>
              <li>Click <strong>Submit</strong>.</li>
              <li>Later, link this template to a Work Package via the Construction Type pipeline's Step 10 (Work Package Measurement Template Linking).</li>
            </ol>`
          }
        ]
      }
    ]
  }
  ,
  {
    id: "account-basics",
    qaItems: QA_ACCOUNTBASICS,
    name: "Getting Started",
    alias: "Login & Account Setup",
    icon: "login",
    tagline: "Get oriented with the Home page, user registration, permissions, and notifications.",
    color: "#3a7ca5",
    overview: `<p>Notion documentation directly covering login, logout, password reset, SSO, and support-ticket screens does not exist — each of those routes (#/login, #/forgot-Password, #/sso-login, #/support) is a placeholder "Documentation Not Found!" row. However, real documented content exists for the adjacent account/setup flows: the Home Page tile grid, Global Data setup, Company Details, user registration (including password-set-by-email and signature capture), and Permissions/Notifications configuration. QA items below are built only from that real content plus explicit navigation labels found in the source; items about login/password-reset/support ticketing itself are intentionally omitted because no source text exists to ground them.</p>`,
    navigation: [
      `<strong>Home</strong> is the first screen after logging in, showing your projects and permitted module tiles.`,
      `User registration and company setup live under <strong>Global Data → Company → Users and Permissions</strong>.`,
      `Notifications and permission groups are configured per-project or globally, depending on scope.`
    ],
    sections: [{ id: "account-basics-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "calendar",
    qaItems: QA_CALENDAR,
    name: "Calendar",
    alias: "Outlook Calendar Sync",
    icon: "calendar_month",
    tagline: "Sync an Outlook calendar into Arena and map events to modules.",
    color: "#b8860b",
    overview: `<p>Arena Calendar (Home → Calendar) syncs a user's Outlook calendar into Arena, letting events be created, mapped to specific modules, and viewed alongside imported Outlook groups; Microsoft Calendar Integration covers the admin/marketplace side of connecting Outlook to Arena.</p>`,
    navigation: [
      `From <strong>Home</strong>, click the <strong>Calendar</strong> tile.`,
      `Connect your account under <strong>My Profile → Settings → Calendar Consent</strong>, or use the admin-wide connection at <strong>Global Data → Marketplace</strong>.`
    ],
    sections: [{ id: "calendar-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "communication",
    qaItems: QA_COMMUNICATION,
    name: "Communication",
    alias: "Email Hub",
    icon: "mail",
    tagline: "Sync an Outlook mailbox into Arena and map emails to the modules they relate to.",
    color: "#a8456b",
    overview: `<p>Arena Communication (Home → Communications) is an integrated email hub that syncs a user's Outlook mailbox into Arena and lets mail be mapped to specific modules (e.g. opportunities, proposals, bid management), with standard inbox functions like Compose, Sent, Drafts, Saved, and Trash.</p>`,
    navigation: [
      `From <strong>Home</strong>, click the <strong>Communications</strong> tile.`,
      `Grant Outlook consent (admin via Global Data → Marketplace, or individually via My Profile → Settings) before mail will sync.`
    ],
    sections: [{ id: "communication-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "construction-forms",
    qaItems: QA_CONSTRUCTIONFORMS,
    name: "Construction Forms",
    alias: "RFIs & Submittals",
    icon: "description",
    tagline: "Raise and track RFIs, Submittals, Change Orders, and Meeting Minutes within a project.",
    color: "#5a6472",
    overview: `<p>Construction Forms (a Project-scope module distinct from the Global Data form template setup) covers the day-to-day RFI, Submittal, Change Order, and Meeting Minutes logs raised inside a specific project, plus the Global Data screen where the underlying form templates (fields, sections, approval toggle) are configured for all projects to use.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to <strong>Field Works → Progress</strong> to raise RFIs, Submittals, Change Orders, or Meeting Minutes.`,
      `Form templates (fields, sections, approval toggle) are configured company-wide under <strong>Global Data → Forms</strong>.`
    ],
    sections: [{ id: "construction-forms-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "cost-management",
    qaItems: QA_COSTMANAGEMENT,
    name: "Cost Management",
    alias: "Project Cost Estimates",
    icon: "account_balance_wallet",
    tagline: "Create project cost estimates and approval workflows for related timesheets and tracksheets.",
    color: "#9a7c4c",
    overview: `<p>Cost Management (project scope, under Project Setup) covers creating cost estimates for materials, labor, equipment, sub-contractors and other expenses, viewing a rolled-up cost summary, and configuring approval workflows for related timesheet/quantity tracking.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to <strong>Project Setup → Cost Estimate</strong>.`,
      `Use Create, Cost Estimates (line items), Estimate Summary, and Workflow sub-tabs.`
    ],
    sections: [{ id: "cost-management-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "cost-tracking",
    qaItems: QA_COSTTRACKING,
    name: "Cost Tracking",
    alias: "Cost Estimating",
    icon: "payments",
    tagline: "Build project cost estimates across material, labor, equipment and other expense types.",
    color: "#6b4c9a",
    overview: `<p>Cost Tracking (catalogued in Notion under the "Cost Management" module) covers building out a project's Cost Estimate — recording anticipated Material, Labor, Equipment, Sub-Contractor and Other Expense costs — plus a read-only cost summary, cost breakdown by cost type, and configurable multi-level approval workflows for related timesheets and quantity tracksheets.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to <strong>Project Setup → Cost Estimate</strong>.`,
      `Use the Material, Labor, Equipment, Sub-Contractor, and Other Expenses tabs to build the estimate, and Estimate Summary or Cost Tracking (By Cost Types) to review it.`
    ],
    sections: [{ id: "cost-tracking-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "document-management",
    qaItems: QA_DOCUMENTMANAGEMENT,
    name: "Document Management",
    alias: "Project Documents",
    icon: "folder",
    tagline: "Store and organize general project documents alongside other project setup content.",
    color: "#4c5a8a",
    overview: `<p>Document Management (project scope) provides a Documents area under Project Setup for storing and organizing project files, which other modules like Quality & Documents can link to.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to <strong>Project Setup → Documents</strong>.`
    ],
    sections: [{ id: "document-management-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "drawing-management",
    qaItems: QA_DRAWINGMANAGEMENT,
    name: "Drawing Management",
    alias: "Drawings & OCR",
    icon: "draw",
    tagline: "Upload, OCR-train, annotate, revise, and approve construction drawings organized into packages.",
    color: "#2f6f4f",
    overview: `<p>Drawing Management is a project-scope module for uploading, OCR-training, annotating, revising, and approving construction drawings, organized into Drawing Packages (folders of drawings) that use Drawing Training templates for auto-label extraction, plus a Field Works view for tracking drawing-related workflow issues.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to <strong>Project Setup → Drawings</strong> to manage packages, training templates, and approval workflows.`,
      `Rejected drawings surface as issues under <strong>Field Works → Drawing Management</strong>.`
    ],
    sections: [{ id: "drawing-management-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "field-works",
    qaItems: QA_FIELDWORKS,
    name: "Field Works",
    alias: "Day-to-Day Execution",
    icon: "construction",
    tagline: "Log day-to-day site progress, RFIs, quality inspections, safety forms, and drawing issues.",
    color: "#4a6b3c",
    overview: `<p>Field Works is the "deliver work" area inside an open project where day-to-day site data is logged and tracked: Progress (RFIs, Submittals, Change Orders, Meeting Minutes, Work Logs, Productivity Logs), Quality, Safety, Drawing Management, and Arena Quick Apps. It is the execution-time counterpart to Project Setup, which defines the templates, workflows and structures that Field Works screens use.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to its <strong>Field Works</strong> section in the left sidebar.`,
      `Covers Progress, Quality, Safety, Drawing Management, and Arena Quick Apps sub-areas.`
    ],
    sections: [{ id: "field-works-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "notifications",
    qaItems: QA_NOTIFICATIONS,
    name: "Notifications",
    alias: "Alert Configuration",
    icon: "notifications",
    tagline: "Define which events trigger email, web, or mobile notifications and who receives them.",
    color: "#8a3c5c",
    overview: `<p>Notifications is a project-scope configuration area for defining which system events trigger email/web/mobile notifications, and for grouping those events with the users who should receive them.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to its <strong>Notifications</strong> settings screen.`,
      `Use the Events tab to customize templates and the Event Groups tab to map events to recipients.`
    ],
    sections: [{ id: "notifications-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "people-project",
    qaItems: QA_PEOPLEPROJECT,
    name: "People (Project)",
    alias: "Project Roster",
    icon: "groups_2",
    tagline: "Manage a project's roster: indirect staff, project crews, and work-package assignments.",
    color: "#476b8a",
    overview: `<p>People (Project) covers the project-level roster: assigning indirect staff, creating/copying project crews, and mapping people to work packages — distinct from Global Data's company-wide user/crew directory, which is the source these project-level rosters pull from.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to <strong>Project Setup → People/Roster</strong>.`,
      `Covers Project Indirect Staff, Project Crews, and the Assign People screen.`
    ],
    sections: [{ id: "people-project-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "permissions",
    qaItems: QA_PERMISSIONS,
    name: "Permissions",
    alias: "Project Roles",
    icon: "lock",
    tagline: "Create project-level roles and grant granular per-module rights to user groups.",
    color: "#3c8a6f",
    overview: `<p>Permissions (project scope) is where role/permission groups are created and configured with granular rights (Assign To, View, Create, Edit, Delete, Download, Print, Admin) per module, for a specific project.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to its <strong>Permissions</strong> screen.`,
      `Use User Group to create a role, then Permissions and Users buttons on each role's card to configure it.`
    ],
    sections: [{ id: "permissions-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "productivity-logs",
    qaItems: QA_PRODUCTIVITYLOGS,
    name: "Productivity Logs",
    alias: "Timesheets & Quantities",
    icon: "schedule",
    tagline: "Log employee/crew hours and quantities against phase codes, then review and approve them.",
    color: "#3c6b6b",
    overview: `<p>Productivity Logs is a project-scope module for logging employee/crew hours and quantities against phase codes, reviewing and approving those logs, and viewing summarized data (timesheets, quantities, labor units) — configured via Productivity Settings and a dedicated approval workflow.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to <strong>Field Works → Progress → Productivity Logs</strong>.`,
      `Covers Create, Logs (review/approve), Approval Workflow, Data Summary, and Issues sub-tabs.`
    ],
    sections: [{ id: "productivity-logs-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "project-settings",
    qaItems: QA_PROJECTSETTINGS,
    name: "Project Settings",
    alias: "Branding & Preferences",
    icon: "tune",
    tagline: "Configure per-project form branding, light/dark mode, and productivity logging preferences.",
    color: "#7a6a2f",
    overview: `<p>Project Settings is a project-scope configuration area for form colors/branding, application look & feel, and priority/level settings for Safety, Quality, and Productivity — distinct from Project Setup, which builds the project's structural and workflow content.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to its <strong>Project Settings</strong> section in the left sidebar.`,
      `Covers Forms (color), Look & Feel, and Productivity Log Settings.`
    ],
    sections: [{ id: "project-settings-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "project-setup",
    qaItems: QA_PROJECTSETUP,
    name: "Project Setup",
    alias: "Project Configuration",
    icon: "settings_applications",
    tagline: "Configure a project's work structure, activity sequencing, cost estimates, drawings, and workflows.",
    color: "#8a5a3c",
    overview: `<p>Project Setup is the project-level configuration area (open a Project first) where the 3-tier work structure (CWA → System → Tag/Location, i.e. the WBS/Tree), activity sequencing, cost estimates, drawings, safety/quality workflow setup, and project forms are all configured. It is distinct from Global Data, which defines the reusable skeleton/templates shared across projects; Project Setup is where that skeleton is built out and customized for one specific project.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to its <strong>Project Setup</strong> section in the left sidebar.`,
      `Covers Project Works (WBS/tree, CWA), Roster, Cost Estimate, Drawings, Safety, Quality, and Forms sub-sections.`
    ],
    sections: [{ id: "project-setup-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "project-user-groups",
    qaItems: QA_PROJECTUSERGROUPS,
    name: "Project User Groups",
    alias: "Default Project Access",
    icon: "admin_panel_settings",
    tagline: "Define standard users and permission groups that automatically apply to every project.",
    color: "#6a4a6a",
    overview: `<p>Project User Groups is a Global Data-adjacent configuration area for standard (default) users and standard permission groups that get automatically applied to every project — new and existing — reducing repetitive per-project user setup.</p>`,
    navigation: [
      `From <strong>Global Data</strong>, open <strong>Project User Groups</strong>.`,
      `Use Project Users to look up access, Standard Users and Standard Groups to configure company-wide defaults.`
    ],
    sections: [{ id: "project-user-groups-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "quality",
    qaItems: QA_QUALITY,
    name: "Quality",
    alias: "Quality Inspections",
    icon: "verified",
    tagline: "Configure and complete Level 1/Level 2 quality inspections, approvals, punch lists, and restraints.",
    color: "#1f7a6c",
    overview: `<p>Quality is a project-scope module covering Level 1 and Level 2 quality inspection forms, their configuration (Global Data quality form templates and Project Settings quality options), approval workflows, and the resulting logs, punch lists, and workflow issues raised in the field.</p>`,
    navigation: [
      `Templates: <strong>Global Data → Quality Forms</strong>. Project settings: <strong>Project Settings → Quality Logs</strong>.`,
      `Open a <strong>Project</strong>, then use <strong>Field Works → Quality</strong> to submit, approve, and track inspection logs.`
    ],
    sections: [{ id: "quality-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "safety",
    qaItems: QA_SAFETY,
    name: "Safety",
    alias: "Safety Inspections",
    icon: "shield",
    tagline: "Schedule and complete safety inspections, observations, and daily safety issue tracking.",
    color: "#b34747",
    overview: `<p>Safety is a project-scope module covering scheduled (Safety Calendar) and unscheduled (Project Safety Forms) safety inspection forms, their Global Data template configuration, approval workflows, and the resulting observations, daily safety issues, and completed-form logs generated in the field.</p>`,
    navigation: [
      `Templates: <strong>Global Data → Safety Forms</strong>. Scheduling: <strong>Project Setup → Safety → Setup Safety Calendar</strong>.`,
      `Open a <strong>Project</strong>, then use <strong>Field Works → Safety</strong> to submit forms and view observations/issues.`
    ],
    sections: [{ id: "safety-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "work-logs",
    qaItems: QA_WORKLOGS,
    name: "Work Logs",
    alias: "Progress Logging",
    icon: "fact_check",
    tagline: "Record day-to-day progress entries and browse the full repository of submitted work logs.",
    color: "#5c7a3c",
    overview: `<p>Work Logs is a project-scope module for recording day-to-day progress entries using a configurable Work Log Template, plus a repository view of every submitted log regardless of status, and the informal Site Posts social feed.</p>`,
    navigation: [
      `Open a <strong>Project</strong>, then go to <strong>Field Works → Progress → Work Logs</strong>.`,
      `Use Submitted Work Logs for the full history, or Site Posts for the project's internal social feed.`
    ],
    sections: [{ id: "work-logs-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "work-order",
    qaItems: QA_WORKORDER,
    name: "Work Order",
    alias: "Work Order Contracts",
    icon: "assignment",
    tagline: "Create and manage operational work order contracts from profile to close-out.",
    color: "#2d7d7d",
    overview: `<p>The Work Order module (Home) is where operational work orders / work order contracts are created and managed day to day — covering profile setup, items, team assignment, drawings, documents, communication, inventory, LORs, and timesheets for each work order. It is distinct from Global Data's Work Order Management, which defines the underlying Work Order Types and default status configurations that this module's records draw from.</p>`,
    navigation: [
      `From <strong>Home</strong>, click the <strong>Work Order</strong> tile.`,
      `Open a work order card to reach its Profile, Team, Drawings, Documents, Communication, Inventory, LORs, and Timesheet tabs.`,
      `Work Order Types and status configuration are maintained separately under <strong>Global Data → Work Order</strong>.`
    ],
    sections: [{ id: "work-order-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  }
];

// Flatten a searchable index: one entry per Q&A pair plus one per section (for browsing)
function buildSearchIndex() {
  const idx = [];
  MODULES.forEach(mod => {
    mod.sections.forEach(sec => {
      (sec.qa || []).forEach((item, i) => {
        idx.push({
          type: "qa",
          moduleId: mod.id,
          moduleName: mod.name,
          sectionId: sec.id,
          sectionHeading: sec.heading,
          question: item.q,
          answer: item.a,
          tags: item.tags || [],
          color: mod.color,
          key: `${mod.id}-${sec.id}-${i}`
        });
      });
      idx.push({
        type: "section",
        moduleId: mod.id,
        moduleName: mod.name,
        sectionId: sec.id,
        sectionHeading: sec.heading,
        question: `${sec.heading} — ${mod.name}`,
        answer: sec.html,
        tags: [],
        color: mod.color,
        key: `${mod.id}-${sec.id}-section`
      });
    });
  });
  return idx;
}
