// ---- Flat intent-tagged QA items (for the offline chat engine) ----
const QA_OPPORTUNITY = [
  {
    action: "view",
    object: "weighted opportunity value",
    scope: "module", section: "Dashboard",
    question: "What is Weighted Opportunity Value?",
    answer: "It's the sum of opportunity values weighted by win-probability, shown as a KPI on **My Dashboard**. It gives a probability-adjusted view of pipeline value rather than a raw total.",
    tags: ["weighted value","dashboard kpi","win probability","kpi definition"]
  },
  {
    action: "define",
    object: "stale opportunity",
    scope: "module", section: "Dashboard",
    question: "What is a Stale Opportunity?",
    answer: "An opportunity that has crossed the configurable **Stale Threshold** — a number of days of inactivity set in **Settings → Opportunities Form → Stale Threshold**. The count of stale opportunities is shown as a KPI on **My Dashboard**.",
    tags: ["stale opportunity","stale threshold","inactivity","what is stale"]
  },
  {
    action: "view",
    object: "pipeline dashboard",
    scope: "module", section: "Dashboard",
    question: "Where can I see a quick summary of pipeline health?",
    answer: "**My Dashboard** is the personal, KPI-driven landing page showing totals, value, staleness, funnel shape, tasks, and upcoming due dates.",
    tags: ["pipeline summary","dashboard overview","my dashboard"]
  },
  {
    action: "view",
    object: "overdue opportunity",
    scope: "module", section: "Dashboard",
    question: "Where do I see opportunities that are overdue or coming due soon?",
    answer: "Check **My Dashboard's Due This Week** KPI card and **Upcoming Opportunity Due Date** list, or filter the Opportunities list by **Due Date**.",
    tags: ["due date","overdue opportunities","upcoming due date","due this week"]
  },
  {
    action: "view",
    object: "top opportunities",
    scope: "module", section: "Dashboard",
    question: "Where do I see the top opportunities by value?",
    answer: "**My Dashboard's Top 10 Opportunities** widget, ranked by value, with its own **+ Create Opportunity** shortcut.",
    tags: ["top opportunities","highest value","highest value list"]
  },
  {
    action: "create",
    object: "opportunity",
    scope: "module", section: "Opportunities",
    question: "How do I create a new opportunity?",
    answer: "1. Go to **Opportunities Management → Opportunities**.\n2. Click **+ Create** in the toolbar.\n3. **Details:** enter **Opportunity Name*** (required) and pick a **Market Type** (Highway, Residential, Infrastructure, Interiors, …).\n4. **Status & Value:** **Stage*** defaults to \"Lead\" and is locked. **Status*** is required — its options come from whatever Statuses are configured for that Stage.\n5. **Contact:** optionally set **Customer Groups**, **Site Representative**, **Corporate Lead**, **Executive Lead** (searchable people-pickers, auto-suggested from Account Assignment).\n6. Click **Submit**.\n\n⚠ In this environment, Submit can fail with \"Status is required\" because the **Lead** stage has zero Statuses configured under Settings → Stages & Statuses Configuration. An admin must add at least one Status to Lead before new opportunities can be created.",
    tags: ["create opportunity","add lead","new pursuit","new lead form"]
  },
  {
    action: "configure",
    object: "opportunity table columns",
    scope: "module", section: "Opportunities",
    question: "What columns can I add to the Opportunities table?",
    answer: "Via **Manage Columns**: Opportunity ID/Name, Description, Created By, Project Types, Business Development, Business Unit, Opportunity Type, Milestone Template, Market/Sub Market Type, Stage, Status, TIC, Opportunity Value, Go %, Get %, Win Probability (%), AI Probability, Weighted Value (+AI), Probability (Manual/AI), Proposals, Tenders, Required Compliances, Created/Due/Follow Up Date, Opportunity Age, Stage Threshold Notification, Last Interaction, Inactivity (Days), Inactive Threshold Notification, Customer (+POC, Tier), Owner (+POC), EPC/Engineer (+POC), Contracting Entity (+POC), Project Locations, Competitors, Site Representative, Corporate Lead, Executive Lead, Assign To, Actions.",
    tags: ["manage columns","fields","data model","manage columns fields"]
  },
  {
    action: "view",
    object: "opportunities list view mode",
    scope: "module", section: "Opportunities",
    question: "What view modes does the Opportunities list support?",
    answer: "Three: **Table View** (default, spreadsheet-style grid), **Grid View** (card-based layout), and **Kanban View** (a board with one column per Stage: Lead, Proposal, Closed). Each Kanban column header shows the opportunity count for that stage plus its Opportunity Value and Forecasted Value totals.",
    tags: ["table view","grid view","kanban view","table grid kanban"]
  },
  {
    action: "define",
    object: "opportunity required fields",
    scope: "module", section: "Opportunities",
    question: "What is required to create an Opportunity, and can I choose the starting Stage?",
    answer: "Only **Opportunity Name*** and **Status*** are marked required on the Create Opportunity dialog. **Stage*** is also required but is pre-set to **Lead** and locked — every new Opportunity starts in Lead and you cannot choose a different starting stage.",
    tags: ["required fields","starting stage","lead stage","starting stage lead"]
  },
  {
    action: "edit",
    object: "opportunity",
    scope: "module", section: "Opportunities",
    question: "How do I edit or delete an existing Opportunity?",
    answer: "Open the row's **Actions** menu on the Opportunities list and choose **Edit** (opens the record in an editable form) or **Delete** — the same row-action pattern (History / Edit / Delete / Notes) used on Customers, Owners, and Competitors.",
    tags: ["edit opportunity","delete opportunity"]
  },
  {
    action: "edit",
    object: "opportunity field",
    scope: "module", section: "Opportunities",
    question: "Where do I set the Opportunity's Description, Owner, or Opportunity Value if they aren't on the Create dialog?",
    answer: "Fields like **Description, Project Types, Business Development, Business Unit, Opportunity Type, Milestone Template, Sub Market Type, TIC, Opportunity Value, Owner, Owner POC, Customer, Tier, EPC/Engineer, Contracting Entity, Project Locations, Competitors, Assign To**, and others exist on the full Opportunity record (visible in **Manage Columns** and the Pipeline Report) but aren't present on the initial Create dialog — they're editable from the Opportunity's detail/edit view once the record exists.",
    tags: ["opportunity fields","edit opportunity value","owner field","opportunity value owner description"]
  },
  {
    action: "define",
    object: "sub-opportunity",
    scope: "module", section: "Opportunities",
    question: "Can an Opportunity have sub-opportunities?",
    answer: "Yes. The full Opportunity record includes a **Parent / Child / Standalone** relationship flag with Child Count and Active Child Count, so Opportunities can be organized hierarchically — e.g. a master pursuit with several sub-opportunities. The ID format for child opportunities is configured separately under **Settings → ID Settings → Child ID Settings**.",
    tags: ["parent opportunity","child opportunity","sub-opportunity","parent child opportunity"]
  },
  {
    action: "configure",
    object: "opportunity table columns",
    scope: "module", section: "Opportunities",
    question: "How do I change the column order, or remove a single column, in the Opportunities table?",
    answer: "Open **Manage Columns → Column Arrangement**: drag a column using its handle to reorder it, or click the close (×) icon next to a column to remove it. Click **Apply** when done, or **Reset to Default** to restore the default set entirely.",
    tags: ["reorder columns","remove column","column arrangement"]
  },
  {
    action: "configure",
    object: "saved view",
    scope: "module", section: "Opportunities",
    question: "How do I save my current view (filters, columns, and layout) for next time?",
    answer: "Click the **save** icon in the Opportunities toolbar — it saves the current filter, column, and layout configuration together.",
    tags: ["save view","save filters and columns","save filters and layout"]
  },
  {
    action: "define",
    object: "go percent get percent",
    scope: "module", section: "Opportunities",
    question: "What's the difference between Go % and Get %?",
    answer: "Both appear as separate percentage fields/columns on Opportunities and in the Forecast Report (e.g. Go% Weighted Value vs. Get% Weighted Value), used alongside Win Probability and AI Probability as distinct probability/likelihood measures feeding weighted-value calculations. The exact business meaning of each beyond that isn't further defined in the product.",
    tags: ["go percent","get percent","probability metrics"]
  },
  {
    action: "define",
    object: "win probability field",
    scope: "module", section: "Opportunities",
    question: "What is the difference between Win Probability (%), AI Probability, and Probability (Manual/AI)?",
    answer: "**Win Probability (%)** and **AI Probability** are tracked as separate columns on an Opportunity, and **Probability (Manual/AI)** is a toggle/flag indicating which probability source is in effect. Correspondingly, **Weighted Value** and **AI Weighted Value** are separate weighted-value calculations — one based on manual probability entry, one AI-derived.",
    tags: ["win probability","ai probability","weighted value"]
  },
  {
    action: "define",
    object: "opportunity age",
    scope: "module", section: "Opportunities",
    question: "What does \"Opportunity Age\" mean?",
    answer: "A tracked field (in days) representing how long the Opportunity has existed, shown in **Manage Columns** and the Pipeline Report as \"Opportunity Age (In Days)\".",
    tags: ["opportunity age","days open","days open field"]
  },
  {
    action: "define",
    object: "inactivity field",
    scope: "module", section: "Opportunities",
    question: "What is \"Inactivity (In Days)\" vs. \"Last Interaction\"?",
    answer: "**Last Interaction** records the date of the most recent activity on the Opportunity; **Inactivity (In Days)** is the number of days elapsed since that last interaction. Both are available as columns, and Inactivity feeds the Stale Threshold logic. A related field, **Days in Current Stage** (seen in the Opportunity Aging Report and Pipeline Report), tracks how long the Opportunity has sat in its current Stage, used to gauge pipeline velocity.",
    tags: ["inactivity","last interaction","days in stage","last interaction field"]
  },
  {
    action: "define",
    object: "stage threshold",
    scope: "module", section: "Opportunities",
    question: "What is a \"Stage Threshold\" and how is it different from \"Stale Threshold\"?",
    answer: "**Stage Threshold (In Days)** is configured per Stage in **Settings → Stages & Statuses Configuration** and drives the \"Stage Threshold Notification\" column (flagging opportunities that have lingered too long in a specific stage). **Stale Threshold** is a single, module-wide setting in **Settings → Opportunities Form** based on overall inactivity, feeding the dashboard's Stale Opportunities KPI. They apply at different scopes — per-stage vs. whole-opportunity.",
    tags: ["stage threshold","stale threshold difference","stale threshold comparison"]
  },
  {
    action: "define",
    object: "responsibility chain role",
    scope: "module", section: "Opportunities",
    question: "What's the difference between Site Representative, Corporate Lead, and Executive Lead?",
    answer: "All three are searchable people-picker roles assignable to any system user/contact, used both on **Create Opportunity** and in **Account Assignment**. They represent three levels of the responsibility chain for a customer account — an on-the-ground Site Representative, a Corporate Lead, and an Executive Lead — pre-populated from the Account Assignment registry when a matching Customer/Market Type combination exists.",
    tags: ["site representative","corporate lead","executive lead","site representative corporate lead executive lead"]
  },
  {
    action: "define",
    object: "market type field",
    scope: "module", section: "Opportunities",
    question: "What is Market Type vs. Sub Market Type?",
    answer: "**Market Type** is the top-level segment an Opportunity or Account Assignment belongs to (e.g. Highway, Residential, Infrastructure, Interiors). **Sub Market Type** is a more granular classification nested under it, tracked as a separate field/column throughout the module.",
    tags: ["market type","sub market type"]
  },
  {
    action: "view",
    object: "manage columns button",
    scope: "module", section: "Opportunities",
    question: "Why don't I see a Manage Columns button on the Opportunities list?",
    answer: "You're likely in **Grid View** or **Kanban View** — **Manage Columns** only appears in **Table View**.",
    tags: ["manage columns missing","grid view","kanban view","missing manage columns"]
  },
  {
    action: "view",
    object: "opportunities list",
    scope: "module", section: "Opportunities",
    question: "Why is the Opportunities list showing \"No Data Available\", with no row actions?",
    answer: "There are no Opportunity records created yet in this environment — which currently requires the Lead-stage Status configuration fix to resolve (see **Why can't I select a Status when creating an opportunity?**). Once records exist, an **Actions** column exposes per-row actions, following the same pattern seen on Customers, Owners, and Competitors (History, Edit, Delete, Notes).",
    tags: ["no data available","no opportunities","empty list"]
  },
  {
    action: "define",
    object: "filters vs manage columns",
    scope: "module", section: "Opportunities",
    question: "What's the difference between Filters and Manage Columns?",
    answer: "**Filters** controls which rows/records are shown, based on field criteria (e.g. only opportunities above a certain value). **Manage Columns** controls which fields/columns are visible and in what order, without changing which records show.",
    tags: ["filters vs columns","row filtering","column visibility","row filtering vs column visibility"]
  },
  {
    action: "view",
    object: "customer interaction history",
    scope: "module", section: "Customer Interactions",
    question: "How do I see a customer's interaction history?",
    answer: "1. Go to **Opportunities Management → Customers Interactions**.\n2. Click a row's **Customer Name** to open its contact list.\n3. Click a specific **Contact** card to open the interaction workspace.\n4. Use the sub-tabs (Call Logs, Mails, Events, Meetings, Task, Comments, Notes, See History) to view or log that interaction type.",
    tags: ["customer history","contact log","crm","crm contact log"]
  },
  {
    action: "define",
    object: "customer notes button",
    scope: "module", section: "Customer Interactions",
    question: "What is the \"Notes\" button on the Customer Interactions list for?",
    answer: "Each customer row on the top-level list has its own **Notes** cell/button that opens a \"Customer Form Chat\" side panel — a running notes/chat log tied to that customer as a whole, not to an individual contact.",
    tags: ["customer notes","customer form chat"]
  },
  {
    action: "track",
    object: "call log",
    scope: "module", section: "Customer Interactions",
    question: "How do I log a call with a customer contact?",
    answer: "Open the contact's interaction workspace, go to the **Call Logs** sub-tab, and click its **+ Create** button to add a new entry (Call Type, Date, Time, Summary, Tag, Attachments).",
    tags: ["call log","log a call","log customer call"]
  },
  {
    action: "create",
    object: "customer contact note",
    scope: "module", section: "Customer Interactions",
    question: "How do I write a note on a customer contact?",
    answer: "Open the contact's interaction workspace, go to the **Notes** sub-tab, type in the rich note editor (you can also attach a file), and save.",
    tags: ["write note","note editor"]
  },
  {
    action: "define",
    object: "calendar consent error",
    scope: "module", section: "Customer Interactions",
    question: "Why am I seeing a \"Consent Not Granted\" message on the Events, Meetings, Task, or Comments tabs?",
    answer: "These tabs integrate with your connected calendar (Google/Outlook) and require **Calendar consent** before they'll function. Go to **My Profile → Settings → Calendar consent** and grant consent, then return to the tab.",
    tags: ["consent not granted","calendar consent"]
  },
  {
    action: "view",
    object: "contact audit trail",
    scope: "module", section: "Customer Interactions",
    question: "Where can I see a full audit trail for a customer contact?",
    answer: "Open the contact's interaction workspace and go to the **See History** sub-tab — it shows an audit/activity history for that contact (\"No history available\" when empty).",
    tags: ["audit trail","see history","contact history"]
  },
  {
    action: "view",
    object: "customer contact info",
    scope: "module", section: "Customer Interactions",
    question: "Where do I find a customer's phone number and email?",
    answer: "Drill into **Customers Interactions → [Customer Name] → [Contact]** — the Contact card view shows Contact ID, Primary Phone, and Primary Email. The **Contacts Directory** also stores Primary/Secondary Email and Phone Number fields.",
    tags: ["customer phone","customer email","contact info","phone email"]
  },
  {
    action: "view",
    object: "executive summary kpis",
    scope: "module", section: "Analytics",
    question: "What KPIs are on the Executive Summary dashboard?",
    answer: "**Total Opportunity Value, Weighted Forecasted Value, Weighted Forecast This Quarter, Overall Win Rate (%),** and **Average Deal Size**, along with a Scenario Forecast Comparison chart, Opportunity by Stage Value, a Top Customers Performance table, and a Team Performance Leadership table.",
    tags: ["executive summary","analytics kpis","analytics dashboard"]
  },
  {
    action: "view",
    object: "pipeline by business unit",
    scope: "module", section: "Analytics",
    question: "What is the Pipeline by BU tab for?",
    answer: "It breaks the pipeline down by Business Unit: summary stats (Total Opportunities, Top BU by Volume, Highest Win Rate), several charts (Opportunity Count by BU, Opportunity Value by BU, Pipeline Forecast by BU, Opportunities by BU and Region, Opportunity Stage Mix), and a **BU Performance Matrix** table (Business Unit, Lead, Proposal, Closed, Total, Win Rate).",
    tags: ["pipeline by bu","business unit analytics","bu analytics tab"]
  },
  {
    action: "filter",
    object: "analytics dashboard",
    scope: "module", section: "Analytics",
    question: "How do I share or filter an analytics dashboard?",
    answer: "Every Analytics sub-tab has a **Filters** button to narrow the data and a **share** icon to share the dashboard.",
    tags: ["share dashboard","filter analytics"]
  },
  {
    action: "track",
    object: "permit and insurance expiry",
    scope: "module", section: "Analytics",
    question: "Where do I track permit and insurance expirations?",
    answer: "The **Permit & Insurance Expiry Tracker** table, found on both the **Market & Operations** and **Executive Summary** analytics tabs.",
    tags: ["permit expiry","insurance expiry","compliance tracker"]
  },
  {
    action: "view",
    object: "proposal cycle time",
    scope: "module", section: "Analytics",
    question: "Where do I see which stage an opportunity's proposal cycle time falls into?",
    answer: "The **Proposal Cycle Time Distribution** chart on the **Market & Operations** analytics tab.",
    tags: ["proposal cycle time","cycle time distribution"]
  },
  {
    action: "export",
    object: "report",
    scope: "module", section: "Reports",
    question: "How do I run a report?",
    answer: "1. Go to **Opportunities Management → Reports**.\n2. Click the report name (e.g. Forecast Report).\n3. Use Filters / Sort By to narrow data, then Export — or for Huddle Report / Pipeline Gantt View, set parameters and click Generate.\n4. Use the back arrow next to the report title to return to the list.",
    tags: ["reports","export","forecast","run a report"]
  },
  {
    action: "configure",
    object: "report columns",
    scope: "module", section: "Reports",
    question: "How do I customize which columns show in a report?",
    answer: "Reports share the same toolbar pattern as the main Opportunities list: use **Manage Columns** to add/remove/reorder columns, the same way you would on the Opportunities table.",
    tags: ["report columns","manage columns reports"]
  },
  {
    action: "define",
    object: "aging report vs pipeline report",
    scope: "module", section: "Reports",
    question: "What's the difference between the Opportunity Aging Report and the Pipeline Report?",
    answer: "The **Opportunity Aging Report** is narrowly focused on staleness/velocity metrics — Days In Current Stage, Days Since Last Activity, Stale Flag, Aging Status. The **Pipeline Report** is the most complete field set in the whole module, covering nearly every field on an Opportunity record (identifiers, financials, dates, contacts, hierarchy) rather than just aging-related metrics.",
    tags: ["aging report vs pipeline report","report comparison"]
  },
  {
    action: "export",
    object: "huddle report",
    scope: "module", section: "Reports",
    question: "How do I generate the Huddle Report?",
    answer: "1. Go to **Reports → Huddle Report**.\n2. Select a **BD Representative** and a **Date Range**.\n3. Optionally use **Save Filters** / **Clear Filters**.\n4. Click **Generate** to produce a downloadable report.",
    tags: ["huddle report","bd representative","generate huddle report"]
  },
  {
    action: "view",
    object: "pipeline gantt view",
    scope: "module", section: "Reports",
    question: "What is the Pipeline Gantt View for?",
    answer: "A Gantt-chart timeline of opportunities, with a granularity toggle (**Daily / Weekly / Monthly / Quarterly / Yearly**), a date-range picker, Filters, and download/save icons.",
    tags: ["pipeline gantt view","gantt timeline","gantt timeline report"]
  },
  {
    action: "view",
    object: "customer win rate",
    scope: "module", section: "Reports",
    question: "Where do I find win rate by customer?",
    answer: "**Reports → Customer Win Rate Report**, or the **Top Customers Performance** table on the **Executive Summary** analytics tab.",
    tags: ["customer win rate","win rate report"]
  },
  {
    action: "assign",
    object: "account assignment",
    scope: "module", section: "Account Assignment",
    question: "How do I assign a customer account to a responsibility chain?",
    answer: "1. Go to **Opportunities Management → Account Assignment**.\n2. Click **+ Add**.\n3. Search and select the **Customer Name**.\n4. Choose **Market Type**, **Sub Market Type**, **Tier**.\n5. Pick **Site Representative**, **Corporate Lead**, **Executive Lead**.\n6. Click **Submit**.",
    tags: ["account assignment","site representative","corporate lead","responsibility chain"]
  },
  {
    action: "define",
    object: "site representative auto-fill",
    scope: "module", section: "Account Assignment",
    question: "Why does Create Opportunity automatically fill in the Site Representative field?",
    answer: "Because a matching **Account Assignment** record exists for that Customer/Market Type combination — the assignment registry pre-populates the Site Representative, Corporate Lead, and Executive Lead pickers when it finds a match.",
    tags: ["auto-fill site representative","account assignment match"]
  },
  {
    action: "define",
    object: "account assignment vs contacts directory",
    scope: "module", section: "Account Assignment",
    question: "What's the difference between Account Assignment and the Contacts Directory?",
    answer: "**Account Assignment** maps a Customer account to internal responsible personnel (Site Representative, Corporate Lead, Executive Lead) by market segment/location — it's about internal ownership of the relationship. The **Contacts Directory** is the external people directory — the actual contacts at Customer and Owner organizations.",
    tags: ["account assignment vs contacts directory","module comparison"]
  },
  {
    action: "create",
    object: "task",
    scope: "module", section: "Sidebar Shortcuts",
    question: "How do I create a task linked to an Opportunity?",
    answer: "1. Open the **Task** shortcut icon in the module's tab bar.\n2. Click **+ Add Task**.\n3. Fill in **Name*** and **Date*** (required), and optionally Description and Time.\n4. Search for and link the required **Opportunity***.\n5. Click **Create** (or Cancel to discard).",
    tags: ["create task","link task to opportunity"]
  },
  {
    action: "view",
    object: "module calendar",
    scope: "module", section: "Sidebar Shortcuts",
    question: "How do I see all module-related events on a calendar?",
    answer: "Open the **Calendar** shortcut icon — it shows a full month-view calendar of module-related events (opportunity due dates, meetings, follow-ups), with a mini date-picker, a My Calendars panel, and a daily Events list for the selected day.",
    tags: ["calendar shortcut","module events"]
  },
  {
    action: "define",
    object: "contacts directory vs customer interactions",
    scope: "module", section: "Sidebar Shortcuts",
    question: "What's the difference between the Contacts Directory and Customers Interactions?",
    answer: "**Contacts Directory** is the master people directory — every Customer contact and Owner contact in one place, organized into Contacts (all), Customer Contacts, and Owner Contacts sub-tabs. **Customers Interactions** is where you drill into a specific customer and log/view interactions (calls, mail, meetings, notes) with their contacts. The Directory is the contact list; Customers Interactions is the activity log built on top of it.",
    tags: ["contacts directory vs customers interactions","module comparison"]
  },
  {
    action: "view",
    object: "contact fields",
    scope: "module", section: "Sidebar Shortcuts",
    question: "What information is stored per contact in the Contacts Directory?",
    answer: "Customer/Owner (type), Customer/Owner Name, Contact ID, Salutation, First/Middle/Last Name, Suffix, Job Title, Primary Email, Secondary Email, Primary Phone Number, Work Phone Number, Primary Address (Line 1/2, Country, State, City, Zip), Secondary Address (same fields), Services Provided, and Personal Website. Use the Contacts (all), Customer Contacts, or Owner Contacts sub-tabs to narrow the list.",
    tags: ["contact fields","contacts directory fields"]
  },
  {
    action: "create",
    object: "customer",
    scope: "module", section: "Sidebar Shortcuts",
    question: "How do I create a new customer?",
    answer: "1. Open the **Customers** shortcut and click **Create Customer**.\n2. Step 1 — **Basic Details**: enter Customer Name* (required), plus Short Name, Alias Name, Phone Number, Email, Fax Number, Url, Group, and Primary/Mailing/Billing Address (use \"Same as Primary address\" as a shortcut).\n3. Step 2 — **Locations & Tax Codes**.\n4. Step 3 — **Preview**, then submit.",
    tags: ["create customer","new customer wizard"]
  },
  {
    action: "define",
    object: "poc ocr",
    scope: "module", section: "Sidebar Shortcuts",
    question: "What is POC OCR?",
    answer: "An option on the **Create Customer** split button that lets you scan a business card or document to auto-populate a contact's details, rather than typing them manually.",
    tags: ["poc ocr","scan business card"]
  },
  {
    action: "edit",
    object: "customer record",
    scope: "module", section: "Sidebar Shortcuts",
    question: "How do I edit, delete, or view the history of a customer record?",
    answer: "Open the customer card's three-dot menu — it offers **Edit** (opens the record in an editable form), **Delete**, and **History** (audit/change history).",
    tags: ["edit customer","delete customer","customer history","delete customer history"]
  },
  {
    action: "edit",
    object: "duplicate customer",
    scope: "module", section: "Sidebar Shortcuts",
    question: "How do I merge two duplicate customer records?",
    answer: "Click **Merge Duplicates** in the Customers toolbar.",
    tags: ["merge duplicates","duplicate customer"]
  },
  {
    action: "edit",
    object: "customer",
    scope: "module", section: "Sidebar Shortcuts",
    question: "How do I turn a Customer into an Owner, or group customers together?",
    answer: "Use **Convert Customers to Owners** to migrate a customer record, or **Add Groups** to group customers — both are buttons in the Customers toolbar.",
    tags: ["convert customer to owner","add groups","convert to owner add groups"]
  },
  {
    action: "define",
    object: "customer vs owner",
    scope: "module", section: "Sidebar Shortcuts",
    question: "What's the difference between a Customer and an Owner?",
    answer: "A **Customer** is a customer account/company that can be linked to Opportunities. An **Owner** is the project Owner organization — the client entity that owns/commissions a project. The two lists can overlap (a Customer can become an Owner via Convert Customers to Owners), but they're tracked as separate master lists.",
    tags: ["customer vs owner","terminology"]
  },
  {
    action: "create",
    object: "owner",
    scope: "module", section: "Sidebar Shortcuts",
    question: "How do I create a new Owner from Opportunity Management?",
    answer: "Open the **Owners** shortcut and click **Create Owner**. Editing/deleting an Owner uses the same three-dot menu pattern as Customers and Competitors; the Owners screen also has its own Settings shortcut alongside Create Owner, Search, Export, and Filters.",
    tags: ["create owner shortcut","owners sidebar"]
  },
  {
    action: "create",
    object: "competitor",
    scope: "module", section: "Sidebar Shortcuts",
    question: "How do I add a competitor?",
    answer: "1. Open the **Competitors** shortcut and click **Create Competitor**.\n2. Enter **Competitor Name*** (required).\n3. Select **Competitor Type*** (required — Direct, Indirect, or Replacement Competitor).\n4. Optionally add a Description.\n5. Click **Submit** (or Cancel to discard).",
    tags: ["add competitor","create competitor"]
  },
  {
    action: "view",
    object: "competitor field",
    scope: "module", section: "Sidebar Shortcuts",
    question: "Where do competitors show up once created?",
    answer: "They populate the searchable **Competitors** field/column on Opportunities, letting you track which competing firms are pursuing the same job.",
    tags: ["competitors field","track competing firms"]
  },
  {
    action: "define",
    object: "status dropdown error",
    scope: "module", section: "Settings",
    question: "Why can't I select a Status when creating an opportunity?",
    answer: "The **Status** dropdown is populated from whatever Statuses are configured for the current Stage under **Settings → Stages & Statuses Configuration**. If the **Lead** stage has no Statuses added, the dropdown is empty and the Create Opportunity dialog cannot be submitted.\n\n**Fix:** An admin should go to Settings → Stages & Statuses Configuration → Lead stage, and add at least one Status (e.g. \"New\", \"Contacted\", \"Qualified\").",
    tags: ["status missing","lead stage","stages and statuses","status missing troubleshoot"]
  },
  {
    action: "create",
    object: "status",
    scope: "module", section: "Settings",
    question: "How do I add a new Status to a Stage?",
    answer: "1. Go to **Settings → Stages & Statuses Configuration**.\n2. Select the Stage you want to edit.\n3. Add the new status name under that Stage's Allowed Statuses.\n4. For the **Closed** stage specifically, also classify the status as **Success** or **Failure** (e.g. Won = Success; Lost, Cancelled, No Bid = Failure).",
    tags: ["add status","stage status configuration","add status to stage"]
  },
  {
    action: "configure",
    object: "pipeline stage",
    scope: "module", section: "Settings",
    question: "How do I add a whole new Stage, or reorder existing stages, in the pipeline?",
    answer: "Go to **Settings → Stages & Statuses Configuration** and use **Add Stages** to add one, or **Reorder Stages** to change the pipeline order.",
    tags: ["add stage","reorder stages","add stage reorder stages"]
  },
  {
    action: "configure",
    object: "stale threshold",
    scope: "module", section: "Settings",
    question: "Where do I set the Stale Threshold?",
    answer: "**Settings → Opportunities Form → Stale Threshold** — set the number of Days of inactivity after which an opportunity is flagged \"stale.\" This feeds the dashboard's Stale Opportunities KPI.",
    tags: ["stale threshold setting","opportunities form","opportunities form setting"]
  },
  {
    action: "create",
    object: "custom field",
    scope: "module", section: "Settings",
    question: "How do I add a custom field to the Create Opportunity form?",
    answer: "Go to **Settings → Opportunities Form → Configurable Fields** and add the custom field there. **Standard Fields** in the same section covers the built-in fields.",
    tags: ["configurable fields","custom field opportunity form","configurable fields opportunity form"]
  },
  {
    action: "configure",
    object: "opportunity id format",
    scope: "module", section: "Settings",
    question: "Where do I configure the Opportunity ID format?",
    answer: "**Settings → ID Settings.** Choose an ID Separator (`/`, `-`, or None) and compose the ID from Business Unit, Year, and Serial No./ID components. **Child ID Settings** configures the format for child opportunities separately.",
    tags: ["id settings","opportunity id format"]
  },
  {
    action: "configure",
    object: "expense tracking",
    scope: "module", section: "Settings",
    question: "Where do I manage expense tracking for a pursuit?",
    answer: "**Settings → Expense**, which has two sub-tabs: **Form** (Table Standard Fields — S.No, Expense Type, Item Name, Quantity, Unit Price, Amount, Comments — plus Configurable Fields) and **Approval Workflow**.",
    tags: ["expense settings","expense form"]
  },
  {
    action: "configure",
    object: "business development catalog",
    scope: "module", section: "Settings",
    question: "Where are the Business Development and Project Types catalogs maintained?",
    answer: "**Settings → Business Development** maintains a list of BD codes/representatives (Serial Number, VP Business Unit, Description, Actions). **Settings → Project Types** maintains the project/work-type catalog (category such as FIELD or SHOP, material, and status flags).",
    tags: ["business development catalog","project types catalog"]
  },
  {
    action: "define",
    object: "customer relation settings",
    scope: "module", section: "Settings",
    question: "What does Customer Relation configure?",
    answer: "**Settings → Customer Relation** sets a **Look Back Window (In Days)** and an **SLA (In Hours)** used for customer-relationship/response tracking.",
    tags: ["customer relation settings","sla","look back window sla"]
  },
  {
    action: "configure",
    object: "opportunity type list",
    scope: "module", section: "Settings",
    question: "Where do I manage the Opportunity Type list or create Milestone Templates?",
    answer: "**Settings → Opportunity Type** is a simple maintained list (Serial Number, Opportunity Type, Actions). **Settings → Milestone Templates** has Milestone Templates and Master Milestones sub-tabs with a Create button.",
    tags: ["opportunity type list","milestone templates"]
  },
  {
    action: "configure",
    object: "competitor form",
    scope: "module", section: "Settings",
    question: "How do I customize the Competitor creation form?",
    answer: "**Settings → Competitor Form** lets you customize the Competitor create form's standard and configurable fields.",
    tags: ["competitor form settings","customize competitor fields"]
  },
  {
    action: "configure",
    object: "user group permissions",
    scope: "module", section: "Settings",
    question: "How do I manage who can access Opportunity Management and what they can do?",
    answer: "Go to **Settings → Users and Permissions**. Manage existing User Groups (e.g. Opportunity Manager, Opportunity Estimator) via a three-dot menu offering Permissions and Users management, or click **Add User Group** to create a new group and configure its Permissions and Users.",
    tags: ["opportunity permissions","user groups"]
  },
  {
    action: "define",
    object: "module naming",
    scope: "module", section: "Comparisons & Miscellaneous",
    question: "Why is the module sometimes called \"Leads Management\" and sometimes \"Opportunities Management\"?",
    answer: "This is a per-context terminology setting. When the module is opened from **Home** with no project selected, it's labeled **Opportunities Management** with an **Opportunities** tab. When opened while a construction Project is in context, it's labeled **Leads Management** with a **Leads** tab and a project badge next to the Arena logo. The screens, fields, and functionality are identical either way.",
    tags: ["leads vs opportunities","module naming"]
  },
  {
    action: "define",
    object: "module scope",
    scope: "module", section: "Comparisons & Miscellaneous",
    question: "Is Opportunity Management tied to a specific construction project?",
    answer: "No. The module is company-wide, not tied to a single project. It covers a personal dashboard, the Opportunity list/board, a customer-interaction CRM log, analytics, reports, and account assignment across the whole business.",
    tags: ["company-wide module","project scope"]
  },
  {
    action: "define",
    object: "opportunities vs leads terminology",
    scope: "module", section: "Comparisons & Miscellaneous",
    question: "Opportunities vs. Leads — is there a difference?",
    answer: "No functional difference. \"Opportunity\" and \"Lead\" are two labels for the same module and the same records, chosen based on context: **Opportunities** when the module is reached from Home with no project selected, **Leads** when reached with a construction Project in context. Screens, fields, and functionality are identical.",
    tags: ["opportunities vs leads","terminology"]
  },
  {
    action: "define",
    object: "customer vs contact",
    scope: "module", section: "Comparisons & Miscellaneous",
    question: "What's the difference between a Customer and a Contact?",
    answer: "A **Customer** is the company/account record. A **Contact** is an individual person associated with that Customer (or an Owner), tracked in the Contacts Directory and drilled into from Customers Interactions. A single Customer can have multiple Contacts.",
    tags: ["customer vs contact","terminology"]
  },
  {
    action: "define",
    object: "create opportunity blocked",
    scope: "module", section: "Comparisons & Miscellaneous",
    question: "Why can't I submit the Create Opportunity form even after filling in the Contact section fields?",
    answer: "The Contact section fields (Customer Groups, Site Representative, Corporate Lead, Executive Lead) are optional. The blocker is almost always the required **Status** field being empty because of the Lead-stage configuration gap — check that first (see **Why can't I select a Status when creating an opportunity?**).",
    tags: ["create opportunity blocked","contact fields optional"]
  },
  {
    action: "view",
    object: "empty catalog list",
    scope: "module", section: "Comparisons & Miscellaneous",
    question: "Why are the Opportunity Type list and Milestone Templates empty?",
    answer: "No entries have been added yet — **Settings → Opportunity Type** and **Settings → Milestone Templates** (Milestone Templates and Master Milestones sub-tabs) are empty by default until an administrator adds entries, using **Create** for Milestone Templates.",
    tags: ["empty opportunity type list","empty milestone templates","opportunity type milestone templates empty"]
  }
];

const QA_EQUIPMENT = [
  {
    action: "create",
    object: "equipment",
    scope: "module", section: "Asset Master",
    question: "How do I add a new piece of equipment?",
    answer: "1. Go to **Home → Asset Management**, ensure **Asset Master → Company Owned Asset** is selected.\n2. Click **+ Asset**.\n3. In the **Add Asset** modal, fill **Asset Name***, **Asset ID***, **Asset Description***, **Replacement Value***, **Current Location*** (all required).\n4. Optionally fill Manufacturer, Model, Model Year, and attach an image/files.\n5. Click **Submit** — the asset appears with status **Ready to Rent**.",
    tags: ["add asset","create equipment","new equipment","add asset form"]
  },
  {
    action: "view",
    object: "equipment history",
    scope: "module", section: "Asset Master",
    question: "How do I check an equipment item's full history?",
    answer: "Click the **history** icon on the item's row in Asset Master. This opens the **Equipment Log**: every request, check-in, check-out, shipment, and shop-in event, with who performed it and when.",
    tags: ["equipment history","audit log","see history","equipment log"]
  },
  {
    action: "delete",
    object: "equipment",
    scope: "module", section: "Asset Master",
    question: "How do I delete or retire an equipment item?",
    answer: "Click the red **delete** icon on the item's row. This is only enabled if the equipment is **not currently checked out** or in use elsewhere — check it in via the Load Out Request flow first if needed.",
    tags: ["delete equipment","retire asset","retire equipment"]
  },
  {
    action: "define",
    object: "company owned vs 3rd party asset",
    scope: "module", section: "Asset Master",
    question: "What's the difference between Company Owned Asset and 3rd Party Asset?",
    answer: "Company Owned Asset tracks equipment the company itself owns. 3rd Party Asset tracks equipment/accessories that belong to (or are leased from) an outside party, and is used together with the 3rd Party LOR / Lease Agreement workflow.",
    tags: ["company owned asset","3rd party asset","asset ownership type"]
  },
  {
    action: "define",
    object: "asset vs accessory",
    scope: "module", section: "Asset Master",
    question: "What's the difference between an Asset and an Accessory in Asset Master?",
    answer: "Assets are the equipment items themselves (tracked on **Company Owned Asset**); Accessories are attachments/consumables linked to equipment, tracked on **Company Owned Accessory**. The Accessory sub-tab shows a **Related Assets** column linking accessories back to the equipment they belong to.",
    tags: ["asset vs accessory","equipment terminology"]
  },
  {
    action: "create",
    object: "accessory",
    scope: "module", section: "Asset Master",
    question: "How do I add a new accessory?",
    answer: "On the **Company Owned Accessory** sub-tab, click **+ Accessory** (the same button becomes + Accessory here instead of + Asset) and fill in the equivalent accessory details, then Submit.",
    tags: ["add accessory","company owned accessory"]
  },
  {
    action: "edit",
    object: "equipment record",
    scope: "module", section: "Asset Master",
    question: "How do I edit an equipment record?",
    answer: "1. Locate the row in Asset Master (use Search or Filters if needed).\n2. Click the **edit** (pencil) icon on that row.\n3. Update the fields in the pre-filled form and click **Submit**.",
    tags: ["edit equipment","update asset"]
  },
  {
    action: "delete",
    object: "equipment",
    scope: "module", section: "Asset Master",
    question: "Why can't I delete a piece of equipment?",
    answer: "The delete icon is disabled while the equipment is currently checked out or in use elsewhere. You must wait until it's checked in / shopped in before it can be deleted.",
    tags: ["cannot delete equipment","delete disabled","delete disabled troubleshoot"]
  },
  {
    action: "view",
    object: "maintenance records",
    scope: "module", section: "Asset Master",
    question: "How do I see maintenance records for a specific asset?",
    answer: "Click the **Maintenance Records** icon on that equipment's row — it's only shown for assets that have scheduled maintenance. You can also check the **Maintenance Records** column in the grid.",
    tags: ["maintenance records icon","asset maintenance history"]
  },
  {
    action: "edit",
    object: "equipment location",
    scope: "module", section: "Asset Master",
    question: "How do I change an equipment's current location?",
    answer: "Click the **edit** (pencil) icon on the equipment's row to open the Add/Edit Asset form, then update the **Current Location** field (a dropdown of Inventory Locations) and Submit.",
    tags: ["change equipment location","current location","current location field"]
  },
  {
    action: "create",
    object: "inventory location",
    scope: "module", section: "Asset Master",
    question: "How do I add a new inventory location?",
    answer: "1. Click **Inventory Locations** in Asset Master.\n2. Click **Add Location**.\n3. Fill in the location name and physical address/location.",
    tags: ["inventory location","add location"]
  },
  {
    action: "define",
    object: "equipment status chip",
    scope: "module", section: "Asset Master",
    question: "What do the different equipment status chips mean (Ready to Rent, On Rent - Project, Pending Shipment, etc.)?",
    answer: "These are live counts shown as colored chips above the Asset Master grid, each representing how many items are currently in that state: **Ready to Rent** (available, the default status for new equipment), **On Rent – Project** (checked out to an internal job), **Pending Shipment** (checked out, awaiting shipment), **On Rent – Customer** (leased to a 3rd party), and **Checked In** (returned). Clicking a chip filters the grid to that status.",
    tags: ["status chips","ready to rent","on rent","ready to rent on rent"]
  },
  {
    action: "filter",
    object: "equipment list",
    scope: "module", section: "Asset Master",
    question: "How do I export or filter the equipment list?",
    answer: "Click **Export** to extract the inventory list to Excel. Click **Filters** to open the filter panel — filter by Status, Location, Loadout Request, Checkout By, Check By, or Received By; click Submit to apply, click the Save icon to persist the filter for reuse, or Clear to remove an active filter.",
    tags: ["export equipment list","filter equipment"]
  },
  {
    action: "configure",
    object: "asset master view",
    scope: "module", section: "Asset Master",
    question: "How do I switch between grid and table view, or add a custom column, in Asset Master?",
    answer: "Use the view-mode toggle (grid/card icon and table icon) near the top of the screen to switch between Grid View and Table View. To add a custom column, click **Add Custom Column** and choose a type: Text, Single Select, Multi-select, or Date.",
    tags: ["custom column","grid view table view","custom column grid table view"]
  },
  {
    action: "define",
    object: "return date fields",
    scope: "module", section: "Asset Master",
    question: "What's the difference between Planned Return Date, Actual Return Date, and Overdue Days?",
    answer: "**Planned Return Date** is the date the equipment was expected back (set at request/checkout time); **Actual Return Date** is the date it was actually checked in. **Overdue Days** shows how many days an item is overdue against its Planned Return Date when no Actual Return Date has been logged yet.",
    tags: ["planned return date","actual return date","overdue days","planned actual return overdue days"]
  },
  {
    action: "create",
    object: "maintenance package",
    scope: "module", section: "Asset Setup",
    question: "How do I set up a recurring maintenance schedule?",
    answer: "1. Go to **Asset Setup**, click **Create Maintenance Package**.\n2. Enter Package Name and Description; Submit.\n3. **List Equipment**: Add Equipment to select items.\n4. **Identify Forms**: Add Form, tick required forms, Submit.\n5. **Prepare Schedule**: choose Recurrence Type, Start/End dates, Time.\n6. **Assign Crew**: select responsible individuals/crew, Save.",
    tags: ["maintenance package","schedule maintenance","recurring","recurring maintenance schedule"]
  },
  {
    action: "define",
    object: "maintenance package wizard steps",
    scope: "module", section: "Asset Setup",
    question: "What are the four steps of the Create Maintenance Package wizard?",
    answer: "**List Equipment** (pick equipment/accessories), **Identify Forms** (attach maintenance forms), **Prepare Schedule** (set recurrence, dates, time), and **Assign Crew** (assign users/crews responsible).",
    tags: ["maintenance package steps","wizard steps","create maintenance package"]
  },
  {
    action: "define",
    object: "maintenance recurrence type",
    scope: "module", section: "Asset Setup",
    question: "What's the difference between a Daily/Weekly recurrence and a Check Out/Check In recurrence?",
    answer: "Daily and Weekly recurrence trigger the maintenance form on a calendar cadence (a specific date/time). Check Out and Check In recurrence instead trigger the form automatically as part of the equipment's checkout or check-in step in the Load Out Request flow, rather than on a fixed schedule.",
    tags: ["recurrence type","check out recurrence","check in recurrence","check out check in recurrence"]
  },
  {
    action: "assign",
    object: "maintenance schedule crew",
    scope: "module", section: "Asset Setup",
    question: "How do I assign a maintenance schedule to specific people?",
    answer: "In the **Assign Crew** step of the Create Maintenance Package wizard, select individual users or whole Crews responsible for that maintenance — the schedule then appears on each assignee's personal calendar and becomes fillable at the scheduled time.",
    tags: ["assign crew","maintenance schedule assignment"]
  },
  {
    action: "define",
    object: "maintenance logs vs asset setup",
    scope: "module", section: "Asset Setup",
    question: "What is \"Equipment Setup - Maintenance Logs\" and how is it different from Asset Setup?",
    answer: "It's a closely related admin screen that follows the identical 4-step pattern (List Items / Identify Forms / Prepare Schedule / Assign Crew) but additionally has a parallel **Utilization** tab, letting you schedule utilization logs the same way maintenance logs are scheduled.",
    tags: ["maintenance logs","utilization setup"]
  },
  {
    action: "track",
    object: "scheduled maintenance activity",
    scope: "module", section: "Field Inspections",
    question: "How do I log a scheduled maintenance activity?",
    answer: "1. Go to **Field Inspections → Maintenance**, switch to **Calendar**.\n2. Pick the due date — forms show color-coded (Blue = ready).\n3. Open the form, fill required fields, Submit — turns Green once complete.\n4. If a check fails, raise an **issue** directly from that field — it's logged to **Asset Issues** automatically.",
    tags: ["scheduled maintenance","field inspection","field inspection log"]
  },
  {
    action: "create",
    object: "equipment photo",
    scope: "module", section: "Field Inspections",
    question: "How do I upload equipment photos?",
    answer: "1. Go to **Field Inspections → Equipment Photos**.\n2. Select the equipment/accessory from the left list.\n3. Click **Add**, then Upload File to select one or more images.\n4. Optionally annotate using the markup tools, then **Save**.",
    tags: ["equipment photos","upload image","upload equipment photo"]
  },
  {
    action: "define",
    object: "maintenance vs utilization tab",
    scope: "module", section: "Field Inspections",
    question: "What's the difference between the Maintenance and Utilization tabs in Field Inspections?",
    answer: "Both work the same way (calendar-driven scheduled entries plus ad-hoc list entries), but **Maintenance** logs maintenance/inspection activity while **Utilization** logs ad-hoc utilization entries — they mirror each other in structure.",
    tags: ["maintenance vs utilization tab","field inspections tabs"]
  },
  {
    action: "create",
    object: "ad-hoc inspection",
    scope: "module", section: "Field Inspections",
    question: "How do I log an ad-hoc (unplanned) inspection?",
    answer: "1. Go to **Field Inspections → Maintenance** (or Utilization) and switch to the list/ad-hoc tab.\n2. Select the relevant form category on the left.\n3. Click **Create Form**, complete the fields, and Submit — it appears as a new card with Download, Share, Print, and Chat available.",
    tags: ["ad-hoc inspection","create form"]
  },
  {
    action: "edit",
    object: "maintenance form",
    scope: "module", section: "Field Inspections",
    question: "How do I edit a maintenance form after it's been submitted?",
    answer: "Click the card for that submitted form to re-open it for review/editing — each card also offers Download, Share, Print, and a Chat panel for collaborative notes.",
    tags: ["edit submitted form","reopen maintenance form","reopen submitted form"]
  },
  {
    action: "edit",
    object: "equipment photo",
    scope: "module", section: "Field Inspections",
    question: "How do I view, annotate, or delete an equipment photo?",
    answer: "Click \"Click to View\" on a photo to open a viewer with next/previous arrows. Use the built-in annotation tools below the image to mark it up, then click **Save** to persist the markup. Use the kebab (⋮) menu in the viewer to **Delete** the photo.",
    tags: ["view photo","annotate photo","delete photo","annotate delete photo"]
  },
  {
    action: "define",
    object: "trigger point",
    scope: "module", section: "Field Inspections",
    question: "What is a trigger point on a maintenance form?",
    answer: "A trigger point is a checkbox configured per field in the form builder (**Setup Trigger Points**) that lets end-users raise an issue or note directly from that field if the checkpoint fails during an inspection. A triggered issue is logged automatically under **Asset Issues**.",
    tags: ["trigger point","setup trigger points"]
  },
  {
    action: "define",
    object: "scheduled vs ad-hoc inspection",
    scope: "module", section: "Field Inspections",
    question: "What's the difference between a scheduled maintenance form and an ad-hoc inspection?",
    answer: "A scheduled form is generated automatically by a maintenance package's Prepare Schedule settings (Daily/Weekly/Check Out/Check In) and shows up on the Equipment Maintenance Calendar at the right time. An ad-hoc inspection is created manually at any time via Create Form on the list tab, without being tied to a pre-set schedule.",
    tags: ["scheduled vs ad-hoc inspection","inspection type comparison"]
  },
  {
    action: "edit",
    object: "equipment issue",
    scope: "module", section: "Asset Issues",
    question: "How do I resolve an equipment issue?",
    answer: "1. Go to **Asset Issues**, locate the issue via Search/Filters.\n2. Review details, add notes in **Chat** if collaborating.\n3. Once fixed, click **Rectify** — status becomes Rectified and the linked form re-opens for completion.\n4. Optionally click **Create Work Order** if formal remediation tracking is needed.",
    tags: ["resolve issue","rectify","equipment issue","resolve rectify issue"]
  },
  {
    action: "define",
    object: "asset issue vs ncr",
    scope: "module", section: "Asset Issues",
    question: "What's the difference between an Asset Issue and a Non-Conformance Report?",
    answer: "Asset Issues are typically raised automatically from a failed trigger-point check during a maintenance form, inspection, or an LOR check-out/check-in stage. NCRs are created manually (via + Add on the Non Conformance Report tab) to formally track a non-conformance event. Both use the same card/table view, Rectify workflow, Chat, Assign To/Due Date, and Create Work Order pattern, but they are separate, independently tracked records.",
    tags: ["asset issue vs ncr","issue comparison"]
  },
  {
    action: "create",
    object: "work order",
    scope: "module", section: "Asset Issues",
    question: "How do I create a Work Order from an equipment issue?",
    answer: "Click **Create Work Order** on the issue (or NCR) — this spins up a Work Order directly from it to track remediation labor/cost.",
    tags: ["create work order from issue"]
  },
  {
    action: "delete",
    object: "asset issue",
    scope: "module", section: "Asset Issues",
    question: "How do I delete, export, or change the view for issues and NCRs?",
    answer: "Use the kebab (⋮) menu on a card for Delete; click Export to download all records to Excel; and use the table view toggle (top-right) to switch away from the default card view.",
    tags: ["delete issue","export issues","table view toggle","export issues table view toggle"]
  },
  {
    action: "view",
    object: "issue header counters",
    scope: "module", section: "Asset Issues",
    question: "What do the header counters mean on Asset Issues / NCR?",
    answer: "They show totals for the tab: total issues (or NCRs), how many have been raised, and how many have been rectified.",
    tags: ["header counters","issue totals"]
  },
  {
    action: "create",
    object: "non conformance report",
    scope: "module", section: "Non Conformance Report",
    question: "How do I raise and close a Non-Conformance Report?",
    answer: "1. Go to **Non Conformance Report**, click **+ Add**.\n2. Fill in NCR details and submit.\n3. Assign an owner (**Assign To**) and **Due Date**.\n4. Use Chat to document remediation steps.\n5. Once corrected, click **Rectify** to close it out.",
    tags: ["ncr","non conformance report","raise and close ncr"]
  },
  {
    action: "define",
    object: "rectify action",
    scope: "module", section: "Non Conformance Report",
    question: "What does \"Rectify\" do on an Issue vs. on an NCR?",
    answer: "In both cases, **Rectify** marks the record as Rectified. On an Asset Issue, it additionally re-enables the associated maintenance form for completion/re-submission. On an NCR it simply closes the report out as resolved.",
    tags: ["rectify behavior","issue vs ncr rectify"]
  },
  {
    action: "define",
    object: "rectify behavior",
    scope: "module", section: "Non Conformance Report",
    question: "What's the difference between Asset Issues' Rectify and an NCR's Rectify?",
    answer: "Functionally similar — both set status to Rectified. On an Asset Issue, Rectify additionally re-enables the linked maintenance form so it can be completed/resubmitted; an NCR's Rectify simply closes the report, with no equivalent form-reopening behavior described.",
    tags: ["asset issue rectify vs ncr rectify"]
  },
  {
    action: "create",
    object: "load out request",
    scope: "module", section: "Load Out Request",
    question: "How do I raise an internal Load Out Request?",
    answer: "1. Go to **Load Out Request** (Internal Job view), click **Add**.\n2. Fill Equipment/Accessory, Quantity, UOM, Requested By, Required Date, Planned Return Date, Supervisor, Job ID/Name.\n3. Submit → status **REQUESTED**. Wait for **Approve**.\n4. Warehouse staff perform **Check Out** (Assign ID, Checkout Date, Signature) per item.\n5. Perform **Ship** to send to the job site.\n6. On return, perform **Check In** per item.\n7. Perform **Shop In** to return to inventory — LOR reaches **CLOSED**.",
    tags: ["load out request","lor","checkout equipment","internal job lor"]
  },
  {
    action: "create",
    object: "3rd party load out request",
    scope: "module", section: "Load Out Request",
    question: "How do I raise a 3rd-party lease Load Out Request?",
    answer: "1. Go to **Load Out Request**, 3rd Party view, click **Add**.\n2. Fill the Request form (no Job Name/Location needed) and get it **Approved**.\n3. **Check Out** the equipment.\n4. Complete the **Lease Agreement**, click **Email Agreement for Approval**.\n5. Once the 3rd party approves (optionally e-signs via Adobe Sign), proceed to **Ship**.\n6. On return, **Check In**, then **Shop In** to close the LOR.",
    tags: ["3rd party lor","lease agreement","lease equipment"]
  },
  {
    action: "define",
    object: "lor status",
    scope: "module", section: "Load Out Request",
    question: "What does 'PARTIAL CHECK OUT' status mean?",
    answer: "It means only *some* of the requested items on that Load Out Request have been checked out so far — a single LOR can be fulfilled across multiple check-out submissions. The status becomes **CHECKED OUT** once every item on the request has been checked out.",
    tags: ["lor status","partial check out"]
  },
  {
    action: "define",
    object: "lor internal vs 3rd party",
    scope: "module", section: "Load Out Request",
    question: "What's different between LOR Internal Job and 3rd Party LOR?",
    answer: "The 3rd Party LOR's Request form omits **Job Name/Job Location** (there's no internal job involved), and it inserts an extra **Lease Agreement** stage after Check Out and before Ship, where both parties sign a legal document before proceeding to Ship. All other stages (Ship, Check In, Shop In, Preview) are identical between the two flows.",
    tags: ["lor internal vs 3rd party","lor flow comparison"]
  },
  {
    action: "define",
    object: "lor request form fields",
    scope: "module", section: "Load Out Request",
    question: "What fields are on the LOR Request form?",
    answer: "**Equipment or Accessory required, Quantity, UOM, Requested By, Required Date, Planned Return Date, Supervisor, Job ID/Job Name** (the Job ID/Job Name field is omitted on 3rd Party LOR requests).",
    tags: ["lor request fields","load out request fields"]
  },
  {
    action: "approve",
    object: "load out request",
    scope: "module", section: "Load Out Request",
    question: "How do I approve or reject a Load Out Request?",
    answer: "Once a request is submitted (status REQUESTED), the warehouse manager/approver sees **Approve** and **Reject** buttons on it. Clicking Approve sets the status to APPROVED and removes the buttons. Clicking Reject turns the button red and sets status to Rejected; the requester can then revise using the approver's comments and resubmit.",
    tags: ["approve lor","reject lor"]
  },
  {
    action: "define",
    object: "check out issue status",
    scope: "module", section: "Load Out Request",
    question: "What is \"Check Out Issue\" status, and what are my options if a maintenance check fails during checkout?",
    answer: "It occurs when a Scheduled Equipment Maintenance form tied to the Check Out stage fails a check. A confirmation dialog offers **Proceed With Issue** (continues the checkout, setting status to Check Out Issue, with the item marked \"ID – Has Issue\") or **Change Equipment** (swap in a different item instead).",
    tags: ["check out issue","proceed with issue","change equipment","proceed with issue change equipment"]
  },
  {
    action: "create",
    object: "delivery request",
    scope: "module", section: "Load Out Request",
    question: "Can I request transport/delivery for shipping equipment?",
    answer: "Yes — a **Delivery Request** can be created directly from the Ship page (or the Check-in page) if transport is needed. This automatically creates a Requisition (REQ) and kicks off the RFQ process.",
    tags: ["delivery request","requisition","rfq","requisition rfq"]
  },
  {
    action: "define",
    object: "hold equipment prompt",
    scope: "module", section: "Load Out Request",
    question: "What does \"Hold the Equipment/Accessory or Not\" mean during Check In?",
    answer: "It's a prompt shown when a maintenance form tied to the Check In stage finds an issue. Answering **No** proceeds with the check-in anyway, setting status to CHECK IN ISSUE (logged to Asset Issues). Answering **Yes** blocks the check-in until the issue is fixed.",
    tags: ["hold equipment","check in issue"]
  },
  {
    action: "define",
    object: "lor status",
    scope: "module", section: "Load Out Request",
    question: "What's the difference between PARTIAL CLOSED and CLOSED?",
    answer: "**CLOSED** means every item on the LOR has completed Shop In. **PARTIAL CLOSED** means only some items have been shopped in so far.",
    tags: ["partial closed vs closed"]
  },
  {
    action: "view",
    object: "lor status list",
    scope: "module", section: "Load Out Request",
    question: "What is the full list of possible LOR statuses, and where can I see all of an LOR's forms in one place?",
    answer: "**Requested, Approved, Rejected, Check Out, Partial Check Out, Check Out With Issue, Ship In, Partial Ship In, Check In, Partial Check-In, Check In With Issue, Shop In, Partial Closed, Closed.** The **Preview** tab on an LOR shows the full collected set of forms (Request, Check Out, Ship, Check In, Shop In) in one place.",
    tags: ["lor status list","lor preview"]
  },
  {
    action: "view",
    object: "load out request history",
    scope: "module", section: "Load Out Request",
    question: "How do I view the full history of a Load Out Request?",
    answer: "Click the kebab (⋮) menu on the LOR card and select **See History** — this opens the full Equipment Log of requests, check-ins, check-outs, shipments, and shop-ins, including who performed each and when.",
    tags: ["lor history","see history"]
  },
  {
    action: "delete",
    object: "load out request",
    scope: "module", section: "Load Out Request",
    question: "How do I delete a Load Out Request?",
    answer: "Click the kebab (⋮) menu on the LOR card and select **Delete**. This is only available while no equipment included in the LOR has yet been checked out — once any item has been checked out, the option disappears.",
    tags: ["delete lor"]
  },
  {
    action: "assign",
    object: "load out request",
    scope: "module", section: "Load Out Request",
    question: "How do I assign an LOR to another user?",
    answer: "Use the **Assign to** field on the LOR to assign it to one or more users, granting them either View or Edit permission.",
    tags: ["assign lor","view edit permission"]
  },
  {
    action: "view",
    object: "lor actions",
    scope: "module", section: "Load Out Request",
    question: "What per-LOR actions are available (download, share, mail, documents)?",
    answer: "Each LOR has action icons for: **Download** (PDF of the current stage's form) and **Print**; **Share** (send to other system users via System Default, Outlook, or Gmail); **Documents** (store/download all related files, and bundle all equipment's docs into one document); and **Mail** (compose email via Gmail or Outlook depending on Global Settings → Mail Settings).",
    tags: ["lor download","lor share","lor mail","download share mail documents"]
  },
  {
    action: "define",
    object: "roster field",
    scope: "module", section: "Load Out Request",
    question: "What is the Roster field on an LOR stage for?",
    answer: "**Roster** lets you select the acting user's name/designation at that stage. It becomes active only once an Assign ID has been chosen.",
    tags: ["roster field lor","lor stage roster"]
  },
  {
    action: "view",
    object: "lor card",
    scope: "module", section: "Load Out Request",
    question: "What information shows on an LOR card, and can I view LORs as a Kanban board?",
    answer: "Each card shows the selected Equipment/Accessory, Required-by Date, Created By, Workflow Level, and current Status/ID. A view toggle in the top-right of the Load Out Request tab switches between Grid View and Kanban View for both LOR Internal Job and 3rd Party LOR.",
    tags: ["lor card info","lor kanban view"]
  },
  {
    action: "configure",
    object: "lor approval workflow",
    scope: "module", section: "Load Out Request",
    question: "Where do I configure the approval chain for Load Out Requests?",
    answer: "Go to **LOR - Workflows**, a separate configuration screen for defining the approval chain(s) used by LOR / 3rd Party LOR requests.",
    tags: ["lor workflows","approval chain"]
  },
  {
    action: "create",
    object: "lor approval level",
    scope: "module", section: "Load Out Request",
    question: "How do I add a new approval level to an LOR workflow?",
    answer: "1. Go to **LOR - Workflows**.\n2. Click **Create Level**.\n3. In the pop-up, choose the level type: \"All must approve\" or \"Anyone can approve\".\n4. Pick the approvers for that level.",
    tags: ["lor approval level","create level"]
  },
  {
    action: "define",
    object: "approval level type",
    scope: "module", section: "Load Out Request",
    question: "What's the difference between \"All must approve\" and \"Anyone can approve\"?",
    answer: "**\"All must approve\"** requires every approver assigned to that level to approve before the LOR advances. **\"Anyone can approve\"** lets a single approver at that level clear it for everyone.",
    tags: ["all must approve","anyone can approve","all must approve anyone can approve"]
  },
  {
    action: "edit",
    object: "lor approval workflow",
    scope: "module", section: "Load Out Request",
    question: "What happens if I edit an existing LOR approval workflow?",
    answer: "You'll see a warning that changes affect all forms/documents already linked to that workflow — editing a live workflow is not isolated to future requests only.",
    tags: ["edit lor workflow warning","edit workflow warning"]
  },
  {
    action: "view",
    object: "lor workflow diagram",
    scope: "module", section: "Load Out Request",
    question: "How can I visualize the structure of an LOR approval workflow?",
    answer: "Click the tree/graph view icon in the top right of the LOR - Workflows screen to see a visual diagram of the workflow structure.",
    tags: ["lor workflow diagram","tree graph view"]
  },
  {
    action: "define",
    object: "check in vs shop in",
    scope: "module", section: "Load Out Request",
    question: "What's the difference between Check In and Shop In?",
    answer: "**Check In** records that equipment/accessories have returned from the field (tick returning items, add name/signature). **Shop In** is the subsequent, final step confirming the equipment has been physically placed back into its inventory location — only after Shop In does the LOR reach CLOSED.",
    tags: ["check in vs shop in","lor stage comparison"]
  },
  {
    action: "define",
    object: "lor rejected status",
    scope: "module", section: "Load Out Request",
    question: "Why is my Load Out Request showing \"Rejected\"?",
    answer: "The approver clicked **Reject** on your request (instead of Approve). Check the approver's comments, revise the request accordingly, and resubmit.",
    tags: ["lor rejected","troubleshoot rejected lor"]
  },
  {
    action: "define",
    object: "check out issue status",
    scope: "module", section: "Load Out Request",
    question: "Why do I see \"Check Out Issue\" instead of a normal checked-out status?",
    answer: "A Scheduled Equipment Maintenance form tied to the Check Out stage found a failed check, and the checkout user chose **Proceed With Issue** in the resulting confirmation dialog rather than Change Equipment.",
    tags: ["check out issue troubleshoot","troubleshoot check out issue"]
  },
  {
    action: "define",
    object: "check in blocked",
    scope: "module", section: "Load Out Request",
    question: "Why is my Check In blocked?",
    answer: "A maintenance form tied to the Check In stage found an issue, and when prompted \"Hold the Equipment/Accessory or Not\", the answer given was **Yes** — this blocks check-in until the issue is fixed. Answering No would instead let check-in proceed with status CHECK IN ISSUE.",
    tags: ["check in blocked troubleshoot","troubleshoot check in blocked"]
  },
  {
    action: "define",
    object: "maintenance form gating",
    scope: "module", section: "Load Out Request",
    question: "Why do I need to fill in a maintenance form before I can check out or check in equipment?",
    answer: "Because the equipment's maintenance package has a Recurrence Type of Check Out or Check In, meaning its scheduled form is triggered automatically at that step of the LOR flow rather than on a calendar date, and must be completed as part of that step.",
    tags: ["maintenance form required","check out check in gating"]
  },
  {
    action: "define",
    object: "partial status",
    scope: "module", section: "Load Out Request",
    question: "Why does my LOR still say PARTIAL CHECK OUT / PARTIAL SHIP IN / PARTIAL CHECK IN?",
    answer: "Because not all items on that LOR have completed that stage yet. These \"Partial\" statuses apply whenever some but not all of the requested items have been checked out, shipped, or checked in — the status upgrades to the full (non-partial) version once every item completes that stage.",
    tags: ["partial status troubleshoot","partial check out ship check in troubleshoot"]
  },
  {
    action: "define",
    object: "approve reject buttons missing",
    scope: "module", section: "Load Out Request",
    question: "Why is the Reject/Approve buttons missing from my Load Out Request?",
    answer: "Once an LOR has been Approved, the Approve/Reject buttons disappear — they are only shown while the request is in REQUESTED status awaiting a decision.",
    tags: ["approve reject missing","lor approved troubleshoot"]
  },
  {
    action: "define",
    object: "3rd party lor job name field",
    scope: "module", section: "Load Out Request",
    question: "Why doesn't my 3rd Party LOR request form have a Job Name field?",
    answer: "Because 3rd Party LOR is for leasing equipment out to (or in from) an external party, not for an internal job — the Request form omits Job Name/Job Location for this flow, unlike LOR Internal Job.",
    tags: ["3rd party lor no job name","missing job name troubleshoot"]
  },
  {
    action: "track",
    object: "maintenance form issue routing",
    scope: "module", section: "Asset Issues",
    question: "I raised an issue from a maintenance form — where did it go?",
    answer: "It's automatically logged under the **Asset Issues** tab, where it can be reviewed, assigned, and eventually marked Rectified.",
    tags: ["issue routed to asset issues"]
  },
  {
    action: "edit",
    object: "lease agreement workflow",
    scope: "module", section: "Load Out Request",
    question: "Why can't I edit an approved Lease Agreement's workflow without a warning?",
    answer: "Editing an existing LOR approval workflow level shows a warning because changes affect all forms/documents already linked to that workflow — not just future ones.",
    tags: ["lease agreement workflow warning","edit workflow warning"]
  },
  {
    action: "create",
    object: "maintenance form template",
    scope: "module", section: "Global Data & Setup",
    question: "How do I build or edit maintenance/inspection form templates, and how do I create a new one?",
    answer: "1. In **Global Data → Maintenance Builder** (also called Equipment Maintenance Forms), click **Create Form**.\n2. Click **Add Section** to structure the form (use the trash icon to delete a section).\n3. Click **Add Field** and choose a field type: Attachment, Check box, Date, Label, Multi select, Paragraph, Roster, Scribble, Single select, Table, Text box, Time, Signature.\n4. Use **Setup Trigger Points** to tick which fields should let end-users raise an issue if that checkpoint fails.\n5. Click **Preview** to see the form as end-users will see it, including company branding.\n6. Click **Save Changes**.",
    tags: ["maintenance builder","create form template","maintenance form builder"]
  },
  {
    action: "define",
    object: "form field types",
    scope: "module", section: "Global Data & Setup",
    question: "What field types are available in the maintenance form builder?",
    answer: "**Attachment, Check box, Date, Label, Multi select, Paragraph, Roster, Scribble** (signature/print name), **Single select, Table** (configurable rows/columns), **Text box** (default), **Time, Signature**.",
    tags: ["form field types","maintenance builder field types"]
  },
  {
    action: "define",
    object: "adobe sign integration",
    scope: "module", section: "Global Data & Setup",
    question: "What is the Adobe Acrobat Sign integration used for?",
    answer: "It lets a 3rd-party signer affix a legal e-signature to a 3rd-Party LOR Lease Agreement as part of approving it, instead of just clicking Approve/Reject.",
    tags: ["adobe sign purpose","e-signature purpose"]
  },
  {
    action: "define",
    object: "adobe sign lor usage",
    scope: "module", section: "Global Data & Setup",
    question: "Once Adobe Sign is set up, how does it get used in the LOR flow?",
    answer: "In the 3rd Party LOR flow, once equipment is checked out, the Lease Agreement emailed to the 3rd party can be digitally signed via the Adobe Sign integration as part of their approval.",
    tags: ["adobe sign lor usage","lease agreement e-sign"]
  },
  {
    action: "define",
    object: "equipment management vs asset management",
    scope: "module", section: "Global Data & Setup",
    question: "Is \"Equipment Management\" a different module from \"Asset Management\"?",
    answer: "No — they're the same module. \"Asset Management\" is the name on the Home hub tile, \"Equipment Master\" appears in the module's own breadcrumb, and \"Equipment Management\" is the name used in the underlying documentation. The UI itself mostly uses \"Asset\" in labels (Asset Master, Asset Setup, Asset Issues, + Asset).",
    tags: ["equipment management vs asset management","module naming"]
  }
];

const QA_GLOBALDATA = [
  {
    action: "edit",
    object: "company profile",
    scope: "global", section: "Company & Business Units",
    question: "How do I update the company profile?",
    answer: "1. Global Data → **Company** tile → **Company Details** tab.\n2. Click **Upload Company Logo** to set the brand logo used across generated documents.\n3. Fill in/update the required fields (Company Name, ID, Address, City, State, Zip, Contact Person details, Company Email/Phone, optionally PAN/GST).\n4. To configure SSO, click **Add SSO Provider** under SSO Clients and complete the provider's setup.\n5. Click **Submit** to save.",
    tags: ["company profile","company logo","company details","company logo details"]
  },
  {
    action: "create",
    object: "business unit",
    scope: "global", section: "Company & Business Units",
    question: "How do I add a business unit?",
    answer: "1. Global Data → **Business Units** → **Add**.\n2. Enter a Code and Description.\n3. Submit.",
    tags: ["business unit","add business unit"]
  },
  {
    action: "create",
    object: "owner",
    scope: "global", section: "Owners",
    question: "How do I create a new Owner record?",
    answer: "1. Global Data → **Owners** tile → **Create Owner** (split button) → **Create Owner**.\n2. **Step 1 – Basic Details:** enter Owner Name* (required), Short Name, Alias Name, Phone Number*, Email*, Fax Number, Url; expand and fill Primary Address, optionally check **Same as Primary address** for Mailing/Billing Address.\n3. **Step 2 – Locations & Tax Codes:** click **Link Locations** to associate company Locations (with a Default flag), and **Add** under Tax Codes to attach Tax Group/Tax Class/Tax Code combinations.\n4. **Step 3 – Preview:** review all entered data.\n5. Click **Submit** to create the Owner.\n\nTo bulk-create Owners, use **Export**, which also exposes Download/Upload Excel options with a template.",
    tags: ["create owner","register owner","new owner"]
  },
  {
    action: "configure",
    object: "owner hierarchy levels",
    scope: "global", section: "Owners",
    question: "How do I configure Owner hierarchy levels?",
    answer: "1. Owners tile → **Settings** (gear icon, top right).\n2. In \"Owner Settings,\" choose Level 1, Level 2, or Level 3 depending on how granular owner categorization should be company-wide.",
    tags: ["owner settings","owner hierarchy","owner levels"]
  },
  {
    action: "create",
    object: "delivery location",
    scope: "global", section: "Locations & Tax",
    question: "How do I add a new company delivery location?",
    answer: "1. Global Data → **Locations** tile → **Create**.\n2. In the \"Add Location\" dialog, fill Location Name*, Address*, Zip Code, City, State.\n3. Under **Tax Codes***, click **Add** to attach one or more Tax Group/Tax Class/Tax Code entries.\n4. Click **Submit**.\n\nBulk location setup is also possible via Excel import from this screen's Export/Upload options.",
    tags: ["add location","delivery location","create location"]
  },
  {
    action: "configure",
    object: "tax group and tax code",
    scope: "global", section: "Locations & Tax",
    question: "How do I set up tax groups and tax codes?",
    answer: "1. Global Data → **Tax Configuration** → **Add Tax Group** → enter the Group name → **Submit**.\n2. Select the new group in the left panel, then click **Add Tax Code** → enter Tax Code* and Tax Percentage* → **Submit**.\n3. Repeat for each code belonging to that group (e.g. CGST, SGST, ITC, Freight).\n4. Use **Upload Excel** / **Download Excel** to bulk manage tax codes.",
    tags: ["tax configuration","tax group","tax code","gst","gst setup"]
  },
  {
    action: "create",
    object: "vendor",
    scope: "global", section: "Vendors & Subcontractors",
    question: "How do I add a new vendor?",
    answer: "1. Global Data → **Vendors** tile → **Register Vendor**.\n2. Upload a profile picture (optional), fill Vendor ID*, Company Name*, First Name*, Last Name*.\n3. Click **Add** in the contact table to add one or more contact persons with their details.\n4. Fill Username*, Phone Number* (with country code + extension), Email*.\n5. Choose a **Select Sign Label** (e.g. Initials) and fill Initials* — used as the digital signature label on approved documents; optionally toggle **Enable Security Key Authentication**.\n6. Optionally fill Vendor Title, Address, Licence Number.\n7. Click **Submit**.",
    tags: ["register vendor","add vendor","new vendor"]
  },
  {
    action: "configure",
    object: "vendor rate card",
    scope: "global", section: "Vendors & Subcontractors",
    question: "How do I set up a vendor's rate card?",
    answer: "1. Open the vendor's card from the **Vendors** tile.\n2. Go to the **Rate Card** tab, choose **Materials** or **Equipment**.\n3. Click **Upload Logs**, download the Excel template, fill in Daily/Weekly/Monthly rates per item, then upload the completed file — or edit the **Rate** field inline per row.",
    tags: ["rate card","vendor rates","upload logs","vendor rates upload logs"]
  },
  {
    action: "configure",
    object: "vendor rating form",
    scope: "global", section: "Vendors & Subcontractors",
    question: "How do I configure the vendor rating form?",
    answer: "1. Vendors tile → **Ratings Form** tab.\n2. Click **Add field** to add a new custom rating criterion (e.g. \"Safety\").\n3. Set its weight/value, toggle **Required** and/or **Show on card** as needed, choose its type via **Choose Type** (e.g. Rating).\n4. Click **Save Changes**.",
    tags: ["vendor rating","ratings form","vendor evaluation"]
  },
  {
    action: "create",
    object: "subcontractor",
    scope: "global", section: "Vendors & Subcontractors",
    question: "How do I register a subcontractor?",
    answer: "1. Global Data → **Sub Contractors** tile → **Register Sub Contractor**.\n2. Complete the registration form (name, contact, ID) and submit.\n3. Use **Add Groups** to organize subcontractors into categories, similar to Vendor categories.",
    tags: ["subcontractor","register sub contractor"]
  },
  {
    action: "track",
    object: "vendor certification",
    scope: "global", section: "Vendors & Subcontractors",
    question: "How do I track vendor/subcontractor certifications like ISO or safety licenses?",
    answer: "1. Go to **Global Data → Settings → Sub Contractor Settings** to define which certification fields (e.g. ISO 9001, CIDB) subcontractors must upload.\n2. Or, for company-wide compliance items, use **Global Data → Compliance Hub → Compliance Directory → Create** to define the requirement (Name, Category, Renewal Frequency, Evidence Type), then track status under **My Company Compliance**.",
    tags: ["subcontractor compliance","iso certification","safety license","iso certification safety license"]
  },
  {
    action: "create",
    object: "work order type",
    scope: "global", section: "Work Order Management",
    question: "How do I create a Work Order Type?",
    answer: "1. Global Data → **Work Order Management** → **Settings** gear → **Work Order Types**.\n2. Click **Work Order Type**, enter a Name* and Description, click **Submit**.",
    tags: ["work order type","create work order type","work order type setup"]
  },
  {
    action: "create",
    object: "work order contract template",
    scope: "global", section: "Work Order Management",
    question: "How do I create a Work Order Contract template?",
    answer: "1. Work Order Management → **Create**.\n2. Enter Name*, Description, and select a **Work Order Type*** (Service/Equipment/Material).\n3. Submit, then open the new record to configure its Profile fields, add Items via **Create Items**, and configure Expense forms under the **Expense** tab.",
    tags: ["work order contract","create work order"]
  },
  {
    action: "configure",
    object: "construction type",
    scope: "global", section: "Construction Types",
    question: "How do I configure which construction categories are available when creating a project?",
    answer: "1. Global Data → **Construction Types** tile.\n2. Click **Create** to add a new type, or **Copy** an existing type to clone its full setup into a new one.\n3. Optionally mark one type as **Set as Default**.",
    tags: ["construction types","project category","construction category"]
  },
  {
    action: "define",
    object: "construction types vs construction type tab",
    scope: "global", section: "Construction Types",
    question: "What's the difference between \"Construction Types\" and the \"Construction Type\" tab?",
    answer: "**Construction Types** (a tile) is the simple master list of category names (Infrastructure, Residential, etc.) used when creating a project. The **Construction Type** tab (next to \"Company\" on the Global Data home page) is a 10-step configuration pipeline where you build out the full work-breakdown library — Global Work Areas, Activities/Work Packages, Sequence Templates, Naming Framework, Data Migration, and more — for whichever Construction Type is selected in its dropdown.",
    tags: ["construction types vs construction type","wbs pipeline","wbs pipeline comparison"]
  },
  {
    action: "export",
    object: "data migration",
    scope: "global", section: "Construction Types",
    question: "How do I bulk-load historical data instead of entering it manually?",
    answer: "1. Global Data → **Construction Type** tab → **Step 7 (Data Migration)**.\n2. For each section (Master Data, Global Work Packages, Locations Type Work Packages, Global Sequence Model, etc.), click the **Template** link to download the correctly-formatted Excel file.\n3. Fill it in and drag it into the upload zone. Existing data is preserved — new rows are appended.",
    tags: ["data migration","bulk upload","excel import","bulk upload excel import"]
  },
  {
    action: "create",
    object: "user account",
    scope: "global", section: "Users & Permissions",
    question: "How do I register a new user or employee?",
    answer: "1. Global Data → **Users & Permissions** → **User Accounts** → **Active Users** tab.\n2. Click **Register User** and fill in the required details (name, contact, email, password/signature).\n3. Click **Submit**. Use **Notify User** to email them their login/setup instructions.",
    tags: ["register user","add employee","new user account","register user employee"]
  },
  {
    action: "create",
    object: "user account",
    scope: "global", section: "Users & Permissions",
    question: "How do I bulk-import users instead of adding them one by one?",
    answer: "1. Users & Permissions → **Active Users** tab.\n2. Click **Download Sample Excel**, fill in one row per user (use correct country codes for phone numbers).\n3. Click **Upload Excel** and select the completed file — Arena creates the accounts and emails each new user automatically.",
    tags: ["bulk import users","upload excel users","onboard users","bulk import users upload excel"]
  },
  {
    action: "configure",
    object: "user group permissions",
    scope: "global", section: "Users & Permissions",
    question: "How do I set up permissions for a group of users?",
    answer: "1. Global Data → **Users & Permissions** → **Global Permission** tab.\n2. Click **Add User Group**, name it, then click its **Permissions** button and select the allowed modules/actions.\n3. Click its **Users** button to add members — they inherit the group's permissions.\n4. Optionally use **Fetch Templates** to start from one of Arena's standard permission templates (e.g. Super Admin).",
    tags: ["permission group","user group","global permission"]
  },
  {
    action: "define",
    object: "active vs inactive users",
    scope: "global", section: "Users & Permissions",
    question: "What's the difference between Active Users and Inactive Users?",
    answer: "**Active Users** can currently log in. Deleting a user from Active Users doesn't erase them — it moves them to **Inactive Users**, where they're retained and can later be re-Activated (which resends a registration/password-reset email).",
    tags: ["active users","inactive users","deactivate user"]
  },
  {
    action: "create",
    object: "non-system roster worker",
    scope: "global", section: "Users & Permissions",
    question: "How do I add a non-system (temporary) worker to the global roster?",
    answer: "1. Users & Permissions → **Global Rosters** → **Non System User** → **Add Non System Roster**.\n2. Fill in worker details (name, designation, skills, experience, group number, etc.) → Submit.\n3. Use **Export All Users** to download the full roster, or **Add Role** to assign a role to selected rosters.",
    tags: ["non system user","temporary worker","global roster","temporary worker global roster"]
  },
  {
    action: "create",
    object: "crew",
    scope: "global", section: "Users & Permissions",
    question: "How do I create a crew?",
    answer: "1. Global Data → **Crews** tile → **Create**.\n2. Enter the Crew Name.\n3. Select a **Supervisor** and a **Foreman** from the dropdown (these people must already exist in Global Rosters).\n4. Select **Rosters** — check the individual roster members (system and non-system) who belong to this crew.\n5. Click **Submit**.",
    tags: ["create crew","crew setup","supervisor foreman","crew setup supervisor foreman"]
  },
  {
    action: "create",
    object: "unit of measure",
    scope: "global", section: "UOM & Phase Codes",
    question: "How do I add a new unit of measure (UOM) and group it?",
    answer: "1. Global Data → **UOM, Phasecode & GL Codes** tile → **UOMs** tab.\n2. Click **Add UOM**, type the unit name (e.g. \"Tonne\"), and save.\n3. To make it convertible with other units, go to **UOM Groups**, add it to (or create) a group, and enter the conversion factor(s).\n4. The new factors then appear read-only under **UOM Conversions**.",
    tags: ["uom","unit of measure","uom conversion","uom group conversion"]
  },
  {
    action: "create",
    object: "phase code",
    scope: "global", section: "UOM & Phase Codes",
    question: "How do I add a Phase Code?",
    answer: "1. Phase Codes tab → **Add**.\n2. Enter the Phase Code, its Description, choose its Phase Code Type (Direct/Indirect/Non-Productive/Change Order), and select which Cost Types apply (Material/Labor/Equipment/Subcontractors/Other Expenses).\n3. Save. Bulk create/update is also available via Excel Upload, which supports a **Create Mode** and an **Update Mode**.",
    tags: ["phase code","add phase code","cost type","cost type classification"]
  },
  {
    action: "configure",
    object: "currency",
    scope: "global", section: "Settings",
    question: "How do I change the company's currency?",
    answer: "1. Global Data → **Settings** → **Currency** (left nav).\n2. Choose the desired currency from the dropdown.\n3. Click **Save Changes**.",
    tags: ["currency","change currency","settings"]
  },
  {
    action: "configure",
    object: "date format",
    scope: "global", section: "Settings",
    question: "How do I change the global date format?",
    answer: "1. Settings → **Global Date Format**.\n2. Select **MM-DD-YYYY** or **DD-MM-YYYY**.\n3. Click **Save Changes**.",
    tags: ["date format","global date format"]
  },
  {
    action: "configure",
    object: "mail routing",
    scope: "global", section: "Settings",
    question: "How do I route a module's emails through Outlook instead of Gmail?",
    answer: "1. Settings → **Mail Settings**.\n2. Find the module row (e.g. Work Order) and click the **Outlook** radio button in that row.\n3. The change saves immediately per row (ensure Outlook has been connected first via Marketplace).",
    tags: ["mail settings","outlook","gmail routing","outlook gmail settings"]
  },
  {
    action: "define",
    object: "awp toggle",
    scope: "global", section: "Settings",
    question: "What is AWP and how do I enable it?",
    answer: "AWP stands for **Advanced Work Packaging**. Per Arena's reference documentation it is controlled by a single toggle under **Global Data → Settings → Enable AWP** — turning it on/off shows or hides the AWP menu for all users. This toggle was not visible in the Settings navigation during review, so it may be feature-gated for your plan; contact your Arena account admin if you don't see it.",
    tags: ["awp","advanced work packaging"]
  },
  {
    action: "configure",
    object: "naming framework",
    scope: "global", section: "Settings",
    question: "How do I rename terminology used throughout the app (e.g. call \"Work Package\" something else)?",
    answer: "There are two Naming Framework screens:\n\n1. **Global Data → Construction Type tab → Step 5 (Naming Framework)** — renames Activity/Work-Package/Location-hierarchy terms, scoped per Construction Type.\n2. **Global Data → Settings → Naming Framework** — renames Procurement/Inventory/Roster/Cost terms company-wide.\n\nIn either, edit the **Custom Name** (and optionally **Short Name**) column next to the term you want to relabel, then save.",
    tags: ["naming framework","rename terminology","custom labels","rename terminology custom labels"]
  },
  {
    action: "create",
    object: "rfi template",
    scope: "global", section: "Forms & Quickapps",
    question: "How do I create a new RFI template?",
    answer: "1. Global Data → **Forms** → **Construction Forms** tab → click **RFI**.\n2. Click **Create Template**.\n3. Build the form layout (sections/fields) as needed and save.\n4. The new template becomes available for selection whenever an RFI is raised on a project.",
    tags: ["rfi template","create template","construction forms"]
  },
  {
    action: "create",
    object: "document folder template",
    scope: "global", section: "Forms & Quickapps",
    question: "How do I create a reusable folder structure for project documents?",
    answer: "1. Global Data → **Document Management** → **Create Template**, name it (e.g. \"FEL-1\").\n2. Select the template, then click **New Folder** repeatedly to build out the folder hierarchy (e.g. Civil, Mechanical, Structural).\n3. Apply this template when setting up a new project's document space.",
    tags: ["document template","folder structure","document management","document management structure"]
  },
  {
    action: "create",
    object: "quick app",
    scope: "global", section: "Forms & Quickapps",
    question: "How do I create a Quick App?",
    answer: "1. Global Data → **Quickapps** → **Quick Apps** tab → **Create**.\n2. Name the app and design its data-capture fields.\n3. Save — the Quick App becomes available from the mobile/field app or relevant project screen.",
    tags: ["quick app","create quickapp","custom form"]
  },
  {
    action: "create",
    object: "standard table",
    scope: "global", section: "Forms & Quickapps",
    question: "How do I create a Standard Table?",
    answer: "1. Quickapps → **Standard Tables** tab → **Add**.\n2. Define the table's name and columns.\n3. Save — the table can then be reused/referenced across projects.",
    tags: ["standard table","reference table"]
  },
  {
    action: "configure",
    object: "notification rule",
    scope: "global", section: "Notifications",
    question: "How do I set up notification rules (e.g. email alerts for low inventory)?",
    answer: "1. Global Data → **Notifications** → **Event Groups**.\n2. Click **Notifications** on the relevant group (e.g. Inventory Management).\n3. Expand the module section, find the specific event (e.g. \"Minimum Stock Reached\"), and toggle **Mail**, **Web**, and/or **Mobile** on.",
    tags: ["notification rules","event groups","alerts","event groups alerts"]
  },
  {
    action: "create",
    object: "notification group",
    scope: "global", section: "Notifications",
    question: "How do I create a custom notification group?",
    answer: "1. Notifications → **Event Groups** → **Add Event Groups**.\n2. Name the group, then use its **Notifications** button to select which events feed into it and on which channels.\n3. Use its **Users** button to add the people who should receive these notifications.",
    tags: ["custom notification group","add event group","custom event group"]
  },
  {
    action: "configure",
    object: "outlook integration",
    scope: "global", section: "Marketplace & Staged Tables",
    question: "How do I connect Arena to Microsoft Outlook for email?",
    answer: "1. Global Data → **Marketplace** → **Microsoft Outlook**.\n2. Click **Sign in with Microsoft** and grant organization-wide consent (must use a company-domain email, not personal).\n3. Then go to **Settings → Mail Settings** and switch the relevant modules (e.g. Work Order) to **Outlook**.",
    tags: ["connect outlook","marketplace","microsoft integration","connect marketplace"]
  },
  {
    action: "configure",
    object: "staged tables sync",
    scope: "global", section: "Marketplace & Staged Tables",
    question: "How do I sync external users into Arena via Staged Tables?",
    answer: "1. Connect the source system first (Global Data → **Marketplace** → e.g. Trimble Viewpoint → enter credentials → **Test Connection and Save** → map Table/Schema per module → **Save Configuration**).\n2. Global Data → **Staged Tables** → select the system tab (e.g. View Point) → select **Users** in the left nav.\n3. Click **Map Attributes** and map each external column to the matching Arena field.\n4. Optionally set **Auto Sync Criteria** for a recurring schedule, or click **Bulk Create Arena Records** to promote all currently staged rows immediately.",
    tags: ["staged tables","sync external data","map attributes","map attributes external data"]
  },
  {
    action: "create",
    object: "customer approval level",
    scope: "global", section: "Customer Settings",
    question: "How do I add an approval level for customer records?",
    answer: "1. Global Data → **Customer** tile → **Approval Workflow** tab → **Create Level**.\n2. Name/describe the level, assign Approvers, and choose the Workflow Type.\n3. Save — subsequent opportunity/customer approvals will route through this chain in order.",
    tags: ["customer approval workflow","create level","approval workflow"]
  },
  {
    action: "create",
    object: "cost type",
    scope: "global", section: "Cost & Bid Templates",
    question: "How do I add a custom cost category (like \"Freight Charges\")?",
    answer: "1. Global Data → **Cost** → **Cost Type** tab → **Add Type**.\n2. Enter the name (e.g. \"Freight Charges\") and a description, then submit.",
    tags: ["cost type","add cost category","freight charges"]
  },
  {
    action: "create",
    object: "cost breakdown structure template",
    scope: "global", section: "Cost & Bid Templates",
    question: "How do I set up a Cost Breakdown Structure (CBS) template?",
    answer: "1. Global Data → **Cost** → **Cost Breakdown Structure** tab → **Templates** → **Add Template**.\n2. Name it and build its structure using the available Phase Codes (managed under the Phase Codes side-list on the same screen, or under UOM/Phasecode & GL Codes).\n3. Optionally mark it as the company's Default CBS template.",
    tags: ["cost breakdown structure","cbs template"]
  },
  {
    action: "create",
    object: "bid line item",
    scope: "global", section: "Cost & Bid Templates",
    question: "How do I add a bid line item?",
    answer: "1. Global Data → **Bid Templates** → **Add Item**.\n2. Enter the Item Description and choose its UOM Group and UOM.\n3. Submit. For bulk loading, use **Download Sample Excel**, fill it in, then **Upload Excel**.",
    tags: ["bid template","add item","estimate line item"]
  },
  {
    action: "define",
    object: "compliance requirement",
    scope: "global", section: "Compliance Hub",
    question: "How do I define a new compliance requirement?",
    answer: "1. Global Data → **Compliance Hub** → **Compliance Directory** → **Create**.\n2. Fill Compliance Name*, Description, Category/Type*, Renewal Frequency and Period (if periodic renewal applies), Evidence Type*, and upload the Required Evidence template/sample.\n3. Submit — this requirement is now tracked (and can show as Missing/Expiring/Expired) under **My Company Compliance**.",
    tags: ["compliance directory","compliance requirement"]
  },
  {
    action: "create",
    object: "measurement template",
    scope: "global", section: "Measurement Templates",
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
    scope: "global", section: "Support",
    section: "Support",
    question: "How do I raise a support ticket?",
    answer: "Click the **Support** icon (headset icon, top-right of the navigation bar next to Notifications and Downloads) to open the Support panel, then describe what you were trying to do and submit it. If you don't see the Support icon, or need a faster response, email **support@inncircles.com** directly with your company name and a description of the issue.",
    tags: ["support ticket","raise a ticket","contact support","help desk","report an issue","get help"]
  },
  {
    action: "view",
    object: "home page",
    scope: "global", section: "Home Page",
    question: "What shows up on the Arena Home page after I log in?",
    answer: "Arena's Home page is the first page a user sees after logging in (users with only \"Projects\" permission are taken to the Projects page instead). It shows a weather report in the top-left (once location access is allowed), a horizontal tab of all projects with progress percentages, and tiles for Time Management, Equipment Management, and Inventory Management based on your permissions.",
    tags: ["home page","landing page","first screen","dashboard","what is home","post-login screen"]
  },
  {
    action: "navigate",
    object: "project desk",
    scope: "project", section: "Home Page",
    question: "How do I get to a specific project's detail view from Home?",
    answer: "On the Home page, click on any project's progress card in the horizontal project tab. This navigates you to that project's Project Desk page for a more refined view of project insights.",
    tags: ["project desk","project navigation","progress card","project insights","click through"]
  },
  {
    action: "view",
    object: "module access",
    scope: "global", section: "Home Page",
    question: "Why can't I see Time Management or Equipment Management on my Home page?",
    answer: "Access to each Home page module (Time Management, Equipment Management, Inventory Management, Projects) depends on your assigned permissions. Contact your project or system administrator if a module you need is missing.",
    tags: ["missing module","permissions","access denied","module visibility","administrator contact"]
  },
  {
    action: "create",
    object: "user account",
    scope: "system", section: "User Registration",
    question: "How do I register a new user in Arena?",
    answer: "Go to the Company section of Global Data, open the Users and Permissions tab, and click \"Register User.\" Fill in the required fields (name, email, contact number with country code, etc.), set a signature method, and click \"Submit\" to create the user card.",
    tags: ["register user","add user","create account","new user","user registration form"]
  },
  {
    action: "define",
    object: "signature",
    scope: "system", section: "User Registration",
    question: "How is a user's signature set up during registration?",
    answer: "The registration form includes a Signature field with three input methods: \"Initials,\" \"Sign\" (opens a scribble/drawing pad), or \"Upload\" (upload a signature image file from another source).",
    tags: ["signature setup","e-signature","scribble pad","upload signature","initials","registration form"]
  },
  {
    action: "reset",
    object: "password",
    scope: "system", section: "User Registration",
    question: "How does a new user set their password for the first time?",
    answer: "After a user is registered, click \"Notify User\" (or the system auto-sends on submit) to email the user a welcome registration link. The user follows that email link to set their own password.",
    tags: ["set password","first login","welcome email","registration email","notify user","password setup"]
  },
  {
    action: "reset",
    object: "password",
    scope: "system", section: "User Registration",
    question: "How do I resend a password-reset email to an existing user?",
    answer: "In Users & Permissions - Active Users, use the \"Notify User\" option on that user's row/card. This sends the user a registration email they can use to reset their password.",
    tags: ["resend password email","notify user","password reset","forgot password workaround","admin reset"]
  },
  {
    action: "create",
    object: "user account",
    scope: "system", section: "User Registration",
    question: "Can I register many users at once instead of one at a time?",
    answer: "Yes. In Users & Permissions - Active Users, click \"Download Sample\" to get the Excel template, fill it in, then use \"Upload Excel\" to bulk-create users. All users created this way receive welcome registration emails automatically.",
    tags: ["bulk register","upload excel","import users","sample excel","mass user creation"]
  },
  {
    action: "edit",
    object: "user account",
    scope: "system", section: "User Registration",
    question: "How do I edit or delete a registered user?",
    answer: "On the user's card or table row in Users & Permissions - Active Users, use the kebab (3-dot) menu or the Action column's edit/delete icons. Deleting a user moves their account to Inactive Users rather than permanently removing it.",
    tags: ["edit user","delete user","deactivate user","kebab menu","inactive users"]
  },
  {
    action: "search",
    object: "user account",
    scope: "system", section: "User Registration",
    question: "How do I find a specific user in the registered users list?",
    answer: "Use the Search bar next to the \"Register User\" button in Users & Permissions - Active Users. You can search by first name, last name, employee ID, contact number, or email.",
    tags: ["search user","find user","user lookup","search profiles"]
  },
  {
    action: "export",
    object: "user list",
    scope: "system", section: "User Registration",
    question: "How do I download a list of all registered users?",
    answer: "In Users & Permissions - Active Users, click \"Export\" or \"Download Excel\" to download the details of all registered users.",
    tags: ["export users","download users","user list export","download excel"]
  },
  {
    action: "view",
    object: "user status",
    scope: "system", section: "User Registration",
    question: "What's the difference between Active Users and Inactive Users?",
    answer: "Active Users are accounts that are created and currently able to log in to Arena. Inactive Users are accounts that have been deleted/deactivated from the Active list; they no longer have log-in access.",
    tags: ["active users","inactive users","user status","deactivated account","disabled login"]
  },
  {
    action: "create",
    object: "user group",
    scope: "project", section: "Permissions & Groups",
    question: "How do I create a permission/user group for a project?",
    answer: "Go to the project's Permissions screen and click the \"User Group\" button. Enter a name for the group in the pop-up and confirm to create it as a new role card.",
    tags: ["user group","permission group","role creation","add role","project permissions"]
  },
  {
    action: "link",
    object: "user group",
    scope: "project", section: "Permissions & Groups",
    question: "How do I copy a user group's permissions to other projects?",
    answer: "On the Permissions screen, click \"Copy User Groups to Projects.\" A pop-up lets you select which projects should receive a copy of that user group's setup.",
    tags: ["copy permissions","duplicate user group","copy to projects","clone role"]
  },
  {
    action: "configure",
    object: "permission",
    scope: "project", section: "Permissions & Groups",
    question: "What permission levels can I assign to a role in Arena?",
    answer: "For each module, a role can be granted: Assign To (only the assigned user can view/create/edit/delete), View, Create, Edit, Delete, Download, Print, and Admin (master permission covering all of the above). Toggle \"Roll Back\" on the role card first, then set these per-module rights.",
    tags: ["permission levels","view create edit delete","admin rights","roll back toggle","access rights"]
  },
  {
    action: "assign",
    object: "user",
    scope: "project", section: "Permissions & Groups",
    question: "How do I assign users to a permission/role group?",
    answer: "On the role's card in the Permissions screen, click the \"Users\" button, which opens a list where you select which users belong to that role/permission group.",
    tags: ["assign users","add users to role","users button","role membership"]
  },
  {
    action: "configure",
    object: "notification",
    scope: "project", section: "Notifications",
    question: "How do I set up which notifications users receive for a project?",
    answer: "Go to the project's Notifications screen, select the \"Events\" tab, and toggle the Email, Web, and/or Mobile icon on each event to control how that notification is delivered. Click the message icon to customize the notification's wording.",
    tags: ["configure notifications","event notifications","email web mobile alerts","notification settings"]
  },
  {
    action: "create",
    object: "notification event group",
    scope: "project", section: "Notifications",
    question: "How do I create a new notification event group?",
    answer: "In Notifications > Event Groups, click \"Add Event Group\" and enter a name in the pop-up. Alternatively, click \"Get Standard Event Groups\" to auto-create Arena's default event groups.",
    tags: ["event group","add event group","standard event groups","notification grouping"]
  },
  {
    action: "configure",
    object: "notification",
    scope: "global", section: "Notifications",
    question: "What's the difference between project Notifications and Global Notifications?",
    answer: "Project-level Notifications (under a project's settings) configure alerts specific to that project. Global Notifications (under Global Data) configure notifications at the company-wide level; project-level notifications do not appear in the Global Notifications screen.",
    tags: ["global notifications","project notifications","notification scope","company-wide alerts"]
  },
  {
    action: "configure",
    object: "company details",
    scope: "system", section: "Company & Global Data Setup",
    question: "Where do I set up my company's name, logo, and address in Arena?",
    answer: "Go to Global Data > Company (Company Details). Enter the company's name, logo, address, and contact information, then click \"Submit.\" This information auto-populates forms and other places across the application. Edit it later by returning to the same Company tab.",
    tags: ["company details","company setup","company logo","company address","company profile"]
  },
  {
    action: "configure",
    object: "global data",
    scope: "system", section: "Company & Global Data Setup",
    question: "What is the Global Data section used for?",
    answer: "Global Data is the setup space for construction-specific data — work areas, work packages, activity sequences, and BYO (Build Your Own) project forms — organized per Construction Type. Select a Construction Type from the dropdown first; all projects using that construction type will see the data entered here.",
    tags: ["global data","construction type","setup space","work areas","work packages","activity sequences"]
  },
  {
    action: "configure",
    object: "construction type data",
    scope: "system", section: "Company & Global Data Setup",
    question: "What order should I set up data in Global Data?",
    answer: "After selecting a Construction Type, follow: Step 1 Global Work Areas, Step 2 Global Work Packages, Step 3 Activity Sequence Templates.",
    tags: ["global data setup order","work areas","work packages","activity sequence templates","setup steps"]
  }
];

const QA_CALENDAR = [
  {
    action: "configure",
    object: "microsoft calendar integration",
    scope: "global", section: "Outlook Integration",
    question: "How do I connect Arena to Outlook Calendar as an admin?",
    answer: "Go to Global Data → Marketplace, click \"Sign in with Microsoft\" to grant Outlook consent. After signing in with Microsoft credentials, on the Permissions Requested page check the box to consent on behalf of the organization — this lets all users access the integration without individually consenting.",
    tags: ["microsoft calendar integration","connect outlook","admin consent","marketplace","sign in with microsoft"]
  },
  {
    action: "configure",
    object: "calendar consent",
    scope: "module", section: "Outlook Integration",
    question: "How do I revoke or change the Microsoft account connected to Arena Calendar?",
    answer: "In Global Data → Marketplace (Microsoft integration), click \"Revoke Consent\", then sign in again with a different Microsoft account to grant new consent.",
    tags: ["revoke consent","change microsoft account","disconnect calendar","reconnect outlook"]
  },
  {
    action: "configure",
    object: "user calendar consent",
    scope: "module", section: "Outlook Integration",
    question: "How do I personally connect my Outlook calendar to Arena?",
    answer: "Go to My Profile → Settings → Calendar Consent, then click \"Sign in with Microsoft\" and add your Microsoft account.",
    tags: ["user calendar consent","my profile settings","personal outlook connect","calendar consent"]
  },
  {
    action: "create",
    object: "calendar event",
    scope: "module", section: "Events",
    question: "How do I create an event in Arena Calendar?",
    answer: "In Arena Calendar, click \"Create Event\" and choose a Category (multi-select, Group, or Primary Calendar). Only categories selected in \"Configure Categories\" are available in the Category options.",
    tags: ["create event","calendar event","add event","configure categories"]
  },
  {
    action: "edit",
    object: "calendar event",
    scope: "module", section: "Events",
    question: "How do I edit or delete a calendar event?",
    answer: "Open the event in Arena Calendar; events can be edited or deleted directly from there.",
    tags: ["edit event","delete event","calendar event","remove event"]
  },
  {
    action: "link",
    object: "calendar event",
    scope: "module", section: "Events",
    question: "Can I link a calendar event to a specific module?",
    answer: "Yes. Events created in Arena Calendar can be mapped to Modules, and once mapped, events can be further selected/filtered based on the module.",
    tags: ["link event to module","map event","module event filter","event mapping"]
  },
  {
    action: "view",
    object: "synced outlook event",
    scope: "module", section: "Sync & Groups",
    question: "Do Outlook calendar events show up in Arena?",
    answer: "Yes. Events created in your Outlook calendar are also synced to the Arena calendar automatically.",
    tags: ["outlook sync","synced events","calendar sync","outlook events in arena"]
  },
  {
    action: "import",
    object: "outlook group",
    scope: "module", section: "Sync & Groups",
    question: "How are imported Outlook groups shown in the Calendar?",
    answer: "Groups imported and mapped via Arena Communications → Import Groups are also displayed in Arena Calendar.",
    tags: ["import groups calendar","outlook groups calendar","group mapping","communications import"]
  },
  {
    action: "configure",
    object: "calendar management permission",
    scope: "global", section: "Permissions",
    question: "What permission is needed for a user to access Admin Calendar Consent?",
    answer: "If a user hasn't granted consent individually, they can still use the admin consent granted in Global Data → Marketplace, but only if Admin Permission is enabled at Global Data → Users & Permissions → User Group → Permissions → General → Calendar Management.",
    tags: ["calendar management permission","admin permission","user group permissions","calendar access control"]
  }
];

const QA_COMMUNICATION = [
  {
    action: "configure",
    object: "outlook consent",
    scope: "global", section: "Outlook Setup",
    question: "How do I enable Outlook integration for Arena Communications?",
    answer: "An admin must grant Outlook consent in Global Data → Marketplace, and admin permissions for the communication module must be given to the user. Alternatively, an individual user can grant their own consent without admin consent via My Profile → Settings → Outlook Management Consent.",
    tags: ["outlook consent","enable communications","marketplace integration","admin consent","user consent"]
  },
  {
    action: "submit",
    object: "email",
    scope: "module", section: "Inbox & Mail",
    question: "How do I send an email in Arena Communications?",
    answer: "Go to Home → Communications and click \"Compose mail\" at the top to send a new message.",
    tags: ["compose mail","send email","arena communications","new mail"]
  },
  {
    action: "filter",
    object: "email",
    scope: "module", section: "Module Mapping",
    question: "How do I filter emails by module in Arena Communications?",
    answer: "Use the ribbon at the top of Communications, which lists all modules, to filter mail by which module it's mapped to.",
    tags: ["filter mail by module","communications ribbon","module filter","mail filter"]
  },
  {
    action: "view",
    object: "inbox",
    scope: "module", section: "Inbox & Mail",
    question: "What are the mail folders available in Arena Communications?",
    answer: "Arena Communications has Inbox (received mail), Sent (mail you sent), Drafts (saved drafts), Saved (starred mail), and Trash (deleted mail).",
    tags: ["inbox","sent","drafts","saved","trash","mail folders"]
  },
  {
    action: "import",
    object: "outlook group",
    scope: "module", section: "Module Mapping",
    question: "How do I import Outlook groups into Arena Communications?",
    answer: "Use the \"Import Groups\" feature in Communications. It opens a pop-up showing your Outlook groups alongside a Module dropdown, so you can map each imported group to a module.",
    tags: ["import groups","outlook groups","import groups feature","map group to module"]
  },
  {
    action: "link",
    object: "email",
    scope: "module", section: "Module Mapping",
    question: "Can I link an email to a specific module record?",
    answer: "Yes. Mails composed in Arena Communications can be mapped directly to different modules such as Opportunity, Proposal, and Bid Management.",
    tags: ["map email to module","link email","email mapping","module mail linking"]
  }
];

const QA_CONSTRUCTIONFORMS = [
  {
    action: "configure",
    object: "construction form template (global)",
    scope: "module", section: "Form Templates",
    question: "Where do I configure the standard fields, sections and field types for RFIs, Submittals, Change Orders and Meeting Minutes?",
    answer: "Go to Global Data → Forms (Construction Forms setup), select the form type, then configure Standard Fields (locked, but toggle \"Required\") and Configurable Fields (Add Section/Add Field, with types Attachment, Checkbox, Date, Label, Multi select, Paragraph, Roster, Scribble, Single select, Table, Text box, Time, Signature). Set Trigger Points to let end-users raise issues/notes per field, preview the form, and toggle \"Approval Work Toggle\" (all except Meeting Minutes) and \"Connected Services Toggle\" (cross-link to other forms/tree elements). This is a Global Data (not project-level) configuration; the actual per-project approval workflow is separately configured in Project Setup → Forms → Approval Workflow.",
    tags: ["construction forms template","form fields setup","global data forms","form field types"]
  },
  {
    action: "create",
    object: "RFI (project-level)",
    scope: "project", section: "RFI",
    question: "How do I raise an RFI (Request For Information) inside a project?",
    answer: "Open the project, go to Field Works → Progress → RFIs, click \"Create\", fill in the RFI form set up by the admin, and click \"Save As Draft\" or \"Submit for Approval\". A unique ID is auto-generated; approvers see Approve/Reject on their level.",
    tags: ["RFI","request for information","create RFI project"]
  },
  {
    action: "create",
    object: "Submittal (project-level)",
    scope: "project", section: "Submittals",
    question: "How do I create a Submittal inside a project?",
    answer: "Open the project, go to Field Works → Progress → Submittals, click \"Create\", complete the form, then \"Save As Draft\" or \"Submit for Approval\". Each log gets an auto-generated ID and shows Approve/Reject to configured approvers.",
    tags: ["submittal","create submittal project","submittal log"]
  },
  {
    action: "create",
    object: "Change Order (project-level)",
    scope: "project", section: "Change Orders",
    question: "How do I create a Change Order inside a project?",
    answer: "Open the project, go to Field Works → Progress → Change Orders, click \"Create\", fill the form, then \"Save As Draft\" or \"Submit for Approval\". Use \"Assign To\" and \"Due Date\" to route it, and the Chat/Follow Up Actions/History/Download/Share/Print/Compose Mail actions to manage it.",
    tags: ["change order","create change order project","change order log"]
  },
  {
    action: "create",
    object: "Meeting Minutes (project-level)",
    scope: "project", section: "Meeting Minutes",
    question: "How do I log meeting minutes inside a project?",
    answer: "Open the project, go to Field Works → Progress → Meeting Minutes → Forms, click \"Create\", fill in details, then \"Save As Draft\" or \"Submit\". Track follow-ups in the \"Actions\" tab, where each action item has a status, assignees, and due date.",
    tags: ["meeting minutes project","create meeting minutes","meeting action items"]
  }
];

const QA_COSTMANAGEMENT = [
  {
    action: "create",
    object: "cost estimate",
    scope: "project", section: "Cost Estimate",
    question: "How do I create a cost estimate?",
    answer: "Go to Project Setup → Cost Estimate → Create, select an Estimate Category, then click \"Create Estimate\".",
    tags: ["create cost estimate","estimate category","cost estimate creation"]
  },
  {
    action: "edit",
    object: "cost estimate line items (material/labor/etc.)",
    scope: "project", section: "Cost Estimate",
    question: "How do I add material, labor, or equipment costs to an estimate?",
    answer: "Go to Project Setup → Cost Estimate → Cost Estimates, select the Material (or Labor/Equipment/Sub-Contractor/Other Expenses) tab. Use \"Add Custom Columns\" for extra fields, \"Get Materials from Global Data\" (choose \"Keep existing and update with new materials\" or \"Replace all with Global Data\"), or \"Add Material\" to create a new line item manually. Totals calculate automatically and display read-only at top right. The table layout/calculation settings come from the \"Settings\" button, linking to Productivity Settings.",
    tags: ["cost estimate line items","add material","get materials from global data","labor cost estimate"]
  },
  {
    action: "view",
    object: "cost estimate summary",
    scope: "project", section: "Estimate Summary",
    question: "Where do I see the total documented project cost?",
    answer: "Go to Project Setup → Cost Estimate → Estimate Summary — a view-only page showing all costs documented across materials, labor, equipment, sub-contractor and other expenses.",
    tags: ["cost summary","view total cost","estimate summary"]
  },
  {
    action: "configure",
    object: "cost estimate workflow",
    scope: "project", section: "Approval Workflow",
    question: "How do I set up an approval process for timesheets or quantity tracksheets tied to cost estimates?",
    answer: "Go to Project Setup → Cost Estimate → Workflow, select the feature to configure, click \"Create Level\", choose \"All must approve\" or \"Anyone can approve\", and select the approvers for that level.",
    tags: ["cost estimate workflow","timesheet approval workflow","quantity tracksheet approval"]
  }
];

const QA_COSTTRACKING = [
  {
    action: "create",
    object: "cost estimate",
    scope: "project", section: "Cost Estimate",
    question: "How do I create a new cost estimate?",
    answer: "Go to Project Setup → Cost Estimate, select the Estimate Category, and click \"Create Estimate\".",
    tags: ["new cost estimate","add estimate","create estimate","cost-estimate"]
  },
  {
    action: "track",
    object: "material cost",
    scope: "project", section: "Cost Estimate",
    question: "How do I record estimated material costs?",
    answer: "In Cost Estimate, select the Material tab, then use the table's actions: \"Add Material\" to add a new material line from scratch, \"Get Materials from Global Data\" to pull materials from Global Data, or \"Add Custom Columns\" to add a new column. The total material cost is calculated automatically and shown top right.",
    tags: ["material cost","add material","cost estimate material","get materials from global data"]
  },
  {
    action: "define",
    object: "get materials from global data",
    scope: "project", section: "Cost Estimate",
    question: "What does \"Get Materials from Global Data\" do in Cost Estimate?",
    answer: "Clicking \"Get Materials from Global Data\" on the Material tab offers two options: \"Keep existing and update with new materials\" (merges) or \"Replace all with Global Data\" (erases existing rows and replaces them with Global Data's materials).",
    tags: ["get materials","replace materials","global data materials","merge materials"]
  },
  {
    action: "configure",
    object: "productivity settings",
    scope: "project", section: "Cost Estimate",
    question: "How do I change how cost estimates are calculated?",
    answer: "Click the \"Settings\" button in the top right corner of the Cost Estimate screen to open Productivity Settings, where you choose how estimates are calculated. This setting applies across Material, Labor, Equipment, and other estimate tabs. Note: the Settings button is only visible if your user permissions allow viewing/editing productivity settings.",
    tags: ["productivity settings","cost estimate settings","calculation settings","estimate configuration"]
  },
  {
    action: "track",
    object: "labor cost",
    scope: "project", section: "Cost Estimate",
    question: "How do I record labor, equipment, sub-contractor, or other expense costs?",
    answer: "In Cost Estimate, select the Labor, Equipment, Sub-Contractor, or Other Expenses tab — each follows the same process as the Material tab (Add Custom Columns, pull from Global Data, or add a new entry manually).",
    tags: ["labor cost","equipment cost","sub-contractor cost","other expenses","cost estimate tabs"]
  },
  {
    action: "view",
    object: "cost estimate summary",
    scope: "project", section: "Estimate Summary",
    question: "Where can I see a summary of all project costs?",
    answer: "Go to Cost Estimate - Summary, a view-only page showing all costs documented via the Estimate tab for materials, labor, equipment, sub-contractor, and other expenses.",
    tags: ["cost summary","estimate summary","view all costs","cost estimate summary"]
  },
  {
    action: "view",
    object: "cost by cost type",
    scope: "project", section: "Cost Tracking by Type",
    question: "How do I see costs broken down by cost type?",
    answer: "Go to Cost Estimate - Cost Tracking (By Cost Types). This page lists the estimated and actual costs for each cost type.",
    tags: ["cost by type","cost tracking by cost types","cost type breakdown","actual vs estimated cost"]
  },
  {
    action: "configure",
    object: "cost estimate workflow",
    scope: "project", section: "Approval Workflow",
    question: "How do I set up an approval workflow for cost estimates?",
    answer: "Navigate to Project Setup → Cost Estimate → Workflow. Select the feature the workflow applies to (Timesheets or Quantity Tracksheets), then click \"Create Level\" to add an approval level. Choose the level type (\"All must approve\" or \"Anyone can approve\") and select the approvers for that level.",
    tags: ["cost estimate workflow","approval workflow","create level","timesheet approval","quantity tracksheet approval"]
  },
  {
    action: "define",
    object: "approval level type",
    scope: "project", section: "Approval Workflow",
    question: "What is the difference between \"All must approve\" and \"Anyone can approve\" in Cost Estimate workflows?",
    answer: "\"All must approve\" requires every approver assigned to that workflow level to approve before it advances; \"Anyone can approve\" only needs one of the assigned approvers to approve.",
    tags: ["all must approve","anyone can approve","approval level","workflow level type"]
  },
  {
    action: "edit",
    object: "cost estimate workflow",
    scope: "project", section: "Approval Workflow",
    question: "What happens if I change an existing cost estimate approval workflow?",
    answer: "Modifying the levels of an existing workflow triggers a warning, because changes affect all forms or documents already linked to that workflow.",
    tags: ["edit workflow","workflow warning","modify approval levels","linked documents"]
  }
];

const QA_DOCUMENTMANAGEMENT = [
  {
    action: "view",
    object: "project documents",
    scope: "project", section: "Documents",
    question: "Where do I manage general project documents?",
    answer: "Go to Project Setup → Documents. (Detailed step-by-step documentation for this screen was not published at the time of writing; related document handling within Quality is available at Project Setup → Quality → Quality & Documents.)",
    tags: ["project documents","documents module","project setup documents"]
  }
];

const QA_DRAWINGMANAGEMENT = [
  {
    action: "create",
    object: "drawing package",
    scope: "project", section: "Drawing Packages",
    question: "How do I organize drawings into packages/folders?",
    answer: "Go to Project Setup → Drawings → Drawing Packages, click \"Create Drawing Package\", enter the details plus a training template, and click \"Submit\". Edit or Delete a package via the kebab (3-dot) menu. Click into a package to view/upload its Drawing Logs.",
    tags: ["drawing package","create package","drawing folder"]
  },
  {
    action: "create",
    object: "drawing log / upload drawing",
    scope: "project", section: "Drawing Packages",
    question: "How do I upload a drawing into a package?",
    answer: "Inside a Drawing Package, click \"Upload Drawing\" (PDF or image files accepted), then choose \"Auto Label Upload\" (extracts labels via OCR from the trained template) or \"Write Label Manually\". Then \"Review & Submit\" each drawing individually or \"Submit All\" at once. Uploaded drawings appear in a table linking to the Drawing Page.",
    tags: ["upload drawing","drawing log","auto label","write label manually"]
  },
  {
    action: "edit",
    object: "drawing (annotation)",
    scope: "project", section: "Annotations & Revisions",
    question: "How do I annotate or comment on a drawing?",
    answer: "Open the drawing page and click \"Edit Drawing\" (or \"Comments\") to enter edit mode with annotation tools; click \"Save\"/\"Save Changes\" to keep changes. Use the \"Comment\" tool to pin a comment to a point, and toggle \"Threads\" to show/hide comment locations. Use the \"Drop\" tool to link a project form (e.g. RFI) to a specific point on the drawing.",
    tags: ["annotate drawing","comment on drawing","drop form on drawing","threads toggle"]
  },
  {
    action: "create",
    object: "drawing revision",
    scope: "project", section: "Annotations & Revisions",
    question: "How do I create a new revision of an existing drawing?",
    answer: "Open the drawing and click \"Create Revision\" to upload a new version. Use the \"Revisions\" action on a drawing log to open the revision compare screen, where minor and major changes are shown with color codes. Use \"Compare\" to directly compare the existing and revised drawing. If the master (reference) drawing is deleted, the next drawing automatically becomes the new master.",
    tags: ["drawing revision","create revision","compare drawings","master drawing"]
  },
  {
    action: "link",
    object: "drawing to tree elements",
    scope: "project", section: "Linking & Sharing",
    question: "How do I link a drawing to project tree elements (CWA/System/Tags)?",
    answer: "On a drawing log, use the \"Link\" action (link icon) to open a dialog listing the project's tree elements (CWA, System, Tags). Select the elements to map; once mapped, the drawing becomes visible in the corresponding work logs or quality forms for reference.",
    tags: ["link drawing","map drawing to tags","drawing tree elements"]
  },
  {
    action: "export",
    object: "drawing (share/print/download)",
    scope: "project", section: "Linking & Sharing",
    question: "How do I share, print, or download a drawing?",
    answer: "On a drawing log's \"Actions\" menu use: Download (latest version file), Share (select registered users, then a mail pop-up to compose and send), Print (send to a connected printer), and Edit (modify drawing metadata). \"Edit Bulk Drawings\" lets you modify labels/approval workflows across multiple drawings at once.",
    tags: ["share drawing","download drawing","print drawing","edit bulk drawings"]
  },
  {
    action: "configure",
    object: "drawing OCR training",
    scope: "project", section: "OCR Training",
    question: "How do I train OCR labels on a drawing template?",
    answer: "Go to Project Setup → Drawings → Drawing Training, click \"Create Training Template\" (name + description), then configure it in 4 steps: Step 1 Upload Sample Drawing; Step 2 Create Labels (standard + configurable, choosing a Field Type like Text box, Date, Signature, or \"Training Category\" for OCR-marked fields); Step 3 OCR Training — select each label and mark its Horizontal or Vertical position on the sample drawing; Step 4 Preview Table to review.",
    tags: ["OCR training","drawing training template","create label","mark position"]
  },
  {
    action: "configure",
    object: "drawing approval workflow",
    scope: "project", section: "Approval Workflow",
    question: "How do I create an approval workflow specifically for drawing logs?",
    answer: "Go to Project Setup → Drawings → Create Approval Workflow, click \"Create Approval Workflow\", then \"Create Level\", choosing \"All must approve\" or \"Anyone can approve\" and selecting the approvers for that level.",
    tags: ["drawing approval workflow","create drawing workflow","drawing levels"]
  },
  {
    action: "track",
    object: "drawing workflow issues",
    scope: "project", section: "Workflow Issues",
    question: "What happens when a drawing is rejected during approval?",
    answer: "A \"Drawing Workflow Issue\" is auto-created in Field Works → Drawing Management → Drawing Workflow Issues whenever a drawing is rejected at any approval level. It supports search by ID/status, due dates/assignment, Chat, filters, \"Download Excel\", and a table/card view toggle.",
    tags: ["drawing workflow issues","drawing rejection","drawing issue tracking"]
  }
];

const QA_FIELDWORKS = [
  {
    action: "view",
    object: "Field Works - Progress",
    scope: "project", section: "Overview & Navigation",
    question: "Where do I find day-to-day progress logs, RFIs, and construction forms in a project?",
    answer: "Open the project and go to Field Works → Progress. This area contains Productivity Logs, Work Logs, Site Posts, and Construction Forms (RFIs, Submittals, Change Orders, Meeting Minutes, Form Issues/Workflow Issues).",
    tags: ["field works progress","deliver work","progress area","construction forms location"]
  },
  {
    action: "view",
    object: "Field Works - Drawing Management",
    scope: "project", section: "Overview & Navigation",
    question: "Where do I manage drawing issues from the field?",
    answer: "Open the project and go to Field Works → Drawing Management. Currently this space surfaces \"Drawing Workflow Issues\" — issues raised automatically when a drawing is rejected at any approval level.",
    tags: ["field works drawings","drawing management field","drawing workflow issues"]
  },
  {
    action: "view",
    object: "Field Works - Quality",
    scope: "project", section: "Overview & Navigation",
    question: "Where do I access quality inspections and logs from the field?",
    answer: "Open the project and go to Field Works → Quality. This space handles all quality logs, inspections, and issues related to fieldwork, including Quality Level 1/Level 2 forms, Approve/Submitted Quality Logs, Quality Workflow Issues, and Punch Lists.",
    tags: ["field works quality","quality inspections","quality level 1","quality level 2"]
  },
  {
    action: "view",
    object: "Field Works - Safety",
    scope: "project", section: "Overview & Navigation",
    question: "Where do I access safety forms and inspections from the field?",
    answer: "Open the project and go to Field Works → Safety. This space handles all safety logs, inspections and issues, including Safety Forms, Safety Calendar, Safety Observations, Daily Safety Issues, and Completed Safety Forms.",
    tags: ["field works safety","safety inspections field","safety forms field"]
  },
  {
    action: "view",
    object: "Field Works - Arena Quick Apps",
    scope: "project", section: "Overview & Navigation",
    question: "What is Arena Quick Apps in Field Works?",
    answer: "Arena Quick Apps is a Field Works entry point for quick, lightweight utility apps within a project. (Detailed documentation for this sub-area was not published at the time of writing.)",
    tags: ["quick apps","arena quick apps","field works apps"]
  },
  {
    action: "create",
    object: "productivity log",
    scope: "project", section: "Productivity Logs",
    question: "How do I create a productivity log (timesheet/quantity entry)?",
    answer: "Open the project, go to Field Works → Progress → Productivity Logs → Create. First click \"Set Phase Codes\" to pick the phase codes to log, choose the date range, then click \"Create Log\" and select \"Add Employee\" (fills a row for hours/quantities per Phase Code/CWA/System/Commodity), \"Add Crew\" (select a crew and log per member), or \"Clone Log\" (duplicate an existing log). After Log Time, click \"Next\" to enter the Log Quantity tab, then submit.",
    tags: ["productivity log","create log","log time","log quantity","timesheet entry"]
  },
  {
    action: "view",
    object: "productivity logs list",
    scope: "project", section: "Productivity Logs",
    question: "How do I review, approve, or reject productivity logs?",
    answer: "Go to Field Works → Progress → Productivity Logs → Logs. Regular users see only their own logs; Admins/Approvers see all logs and get Approve/Reject buttons (in the Quantities tab for Direct/Change Order phase codes, or the Timesheets tab for Indirect/Non-Productive phase codes). Use \"Download Excel\" to export, and the kebab menu to delete a log.",
    tags: ["productivity logs review","approve productivity log","reject productivity log"]
  },
  {
    action: "configure",
    object: "productivity logs approval workflow",
    scope: "project", section: "Productivity Logs",
    question: "How do I set up a review/approval workflow for productivity logs?",
    answer: "Go to Field Works → Progress → Productivity Logs → Approval Workflow, click \"Create Level\", enter a description, choose \"All Must Approve\" or \"Anyone Can Approve\", and select approvers from the search list. Edit or Delete a level via its action buttons; click the workflow tree diagram to view the full approval chart.",
    tags: ["productivity approval workflow","create level","productivity logs approval"]
  },
  {
    action: "view",
    object: "productivity logs data summary",
    scope: "project", section: "Productivity Logs",
    question: "Where can I see a summary of timesheets, quantities, and labor units?",
    answer: "Go to Field Works → Progress → Productivity Logs → Data Summary. It has three tabs: Timesheets (hours by employee/crew), Quantities (quantity achieved by Phase Code/Location), and Labor Units (ratio of submitted hours to submitted quantities). Each tab has a \"Download Excel\" option for the selected date range.",
    tags: ["data summary","timesheet summary","quantity summary","labor units"]
  },
  {
    action: "track",
    object: "productivity logs issues",
    scope: "project", section: "Productivity Logs",
    question: "How are rejected productivity logs tracked as issues?",
    answer: "Go to Field Works → Progress → Productivity Logs → Issues. Issues are auto-generated when a log is rejected by an Approver/Admin during review, with comments explaining the rejection; the admin/approver can assign the issue to a user with a due date. Use search, status filters, and \"Download Excel\" (with image-inclusion options) to manage them.",
    tags: ["productivity log issues","rejected log","log rejection"]
  },
  {
    action: "configure",
    object: "productivity settings",
    scope: "project", section: "Productivity Logs",
    question: "How do I configure the logging type and fields for productivity logs?",
    answer: "Go to Project Settings → Productivity Log Settings. Choose the Logging Type: \"Create Productivity Logs By Phase Code\" or \"Create Productivity Logs By Level 3s\" (filters phase codes by location instead). Then configure the standard and custom fields shown in the Timesheets and Quantity tabs.",
    tags: ["productivity settings","logging type","phase code logging","level 3 logging"]
  },
  {
    action: "create",
    object: "RFI (Request For Information)",
    scope: "project", section: "RFI",
    question: "How do I create an RFI in a project?",
    answer: "Open the project, go to Field Works → Progress → RFIs, click \"Create\", fill in the RFI form, and click \"Save As Draft\" or \"Submit For Approval\" (if an approval workflow is configured). Draft forms show a \"Draft\" label; submitted forms get an auto-generated ID and show Approve/Reject buttons to assigned approvers.",
    tags: ["create RFI","request for information","RFI form","submit RFI"]
  },
  {
    action: "approve",
    object: "RFI",
    scope: "project", section: "RFI",
    question: "How do I approve or reject a submitted RFI?",
    answer: "Open Field Works → Progress → RFIs. If you are configured as an approver in the RFI's approval workflow, \"Approve\" and \"Reject\" buttons appear on the submitted RFI card. The approval level and current status are shown on each card.",
    tags: ["approve RFI","reject RFI","RFI approval"]
  },
  {
    action: "view",
    object: "RFI actions (follow up, history, share)",
    scope: "project", section: "RFI",
    question: "What actions can I perform on an RFI log?",
    answer: "On any RFI card/form use: Follow Up Actions (view connected items — other forms, drawings, issues, tree elements), See History (full audit trail), Download (PDF), Share (email to other users), Print, Compose Mail, and See All Email Threads. A \"Chat\" button on each card supports notes, images and video collaboration, and \"Download Excel\" exports all RFI logs.",
    tags: ["RFI actions","follow up actions","RFI history","RFI chat"]
  },
  {
    action: "create",
    object: "Submittal",
    scope: "project", section: "Submittals",
    question: "How do I create a Submittal log in a project?",
    answer: "Open the project, go to Field Works → Progress → Submittals, click \"Create\", fill in the Submittal form (as configured by the project admin), and click \"Save As Draft\" or \"Submit For Approval\". Each log gets an auto-generated ID; approvers see Approve/Reject buttons when the log reaches their level.",
    tags: ["create submittal","submittal form","submit submittal"]
  },
  {
    action: "create",
    object: "Change Order",
    scope: "project", section: "Change Orders",
    question: "How do I create a Change Order log?",
    answer: "Open the project, go to Field Works → Progress → Change Orders, click \"Create\", fill in the Change Order form, and click \"Save As Draft\" or \"Submit for Approval\". Use \"Assign To\" and \"Due Date\" to route responsibility; the \"Chat\" button and Follow Up Actions/History/Download/Share/Print/Compose Mail options work the same as on RFIs.",
    tags: ["create change order","change order form","change order log"]
  },
  {
    action: "create",
    object: "Meeting Minutes",
    scope: "project", section: "Meeting Minutes",
    question: "How do I record meeting minutes for a project?",
    answer: "Open the project, go to Field Works → Progress → Meeting Minutes → Forms tab, click \"Create\", fill in the details, and click \"Save As Draft\" or \"Submit\". Drafts show a \"Draft\" tag. Use the \"Actions\" tab (within a meeting or across all meetings) to track action items — each with a status, assignee(s), and due date. Use Download, Share, Print, and the built-in chat to collaborate.",
    tags: ["meeting minutes","create meeting","action items","meeting form"]
  },
  {
    action: "configure",
    object: "construction forms templates",
    scope: "project", section: "Form Templates",
    question: "How do I set up the fields and sections for RFI, Submittal, Change Order, or Meeting Minutes forms?",
    answer: "This is done at the Global Data level (not inside a project): go to Global Data → Construction Forms, select the form (RFI/Submittal/Change Order/Meeting Minutes). Standard Fields are locked but can be toggled Required; Configurable Fields can be added via \"Add Section\"/\"Add Field\" with types like Attachment, Checkbox, Date, Multi/Single select, Table, Signature, etc. Toggle \"Approval Work Toggle\" (not available for Meeting Minutes) to require an approval workflow, and \"Connected Services Toggle\" to allow cross-linking forms (e.g. raising a Change Order from an RFI). Click \"Save Changes\" after edits. Note: this configures the template used by all projects; the per-project approval workflow itself is set separately in Project Setup → Forms → Approval Workflow.",
    tags: ["construction forms setup","form templates","configurable fields","approval work toggle","connected services"]
  },
  {
    action: "track",
    object: "form issues and form workflow issues",
    scope: "project", section: "Form Issues",
    question: "Where are issues raised on project forms (RFIs, Submittals, Change Orders) tracked?",
    answer: "Go to Field Works → Progress → Issues. \"Form Issues\" holds issues raised directly from a form's fields (each shows a Form Type tag and goes Open → Rectified). \"Form Workflow Issues\" holds issues created when a form's approval workflow is rejected (Open → Closed once re-submitted and approved).",
    tags: ["form issues","form workflow issues","project form issues","rejected form"]
  },
  {
    action: "view",
    object: "Site Posts",
    scope: "project", section: "Work Logs & Site Posts",
    question: "What is Site Posts and how do I use it?",
    answer: "Site Posts (Field Works → Progress → Work Logs → Site Posts) is Arena's internal social feed for a project. Click \"Create a Post\" to share updates, images, or videos (up to 50MB) visible to all project users. Use the people search or date-range filters to browse, and Like/Comment (with one level of reply) to interact.",
    tags: ["site posts","project feed","social posts","create post"]
  },
  {
    action: "view",
    object: "Work Logs and Submitted Work Logs",
    scope: "project", section: "Work Logs & Site Posts",
    question: "Where can I see all recorded work logs for a project?",
    answer: "Go to Field Works → Progress → Work Logs to record progress via the configured Work Log Template (Work Package to Tag, Tag to Work Package, System to Tag, or Scheduled view). Go to \"Submitted Work Logs\" to see the full repository of all logs regardless of status, filterable by date range and by user, with a \"Download Excel\" export.",
    tags: ["work logs","submitted work logs","work log template","work log repository"]
  },
  {
    action: "view",
    object: "Quality Level 1 / Level 2 forms",
    scope: "project", section: "Quality",
    question: "How do I complete a quality inspection form on-site?",
    answer: "Go to Field Works → choose a Tree Version → Quality tab. Depending on the configured Work Log Template, use either \"Work Package to Location/Tags Logging\" (select an Entity/CWA, then a Work Package, then a Ready item) or \"System to Tag Mapping\" (select a tag, then a quality package). Fill the form, then \"Save As Draft\" or \"Submit for Approval\". Level 1 must be approved (or skipped, per Project Settings → Quality Logs) before Level 2 becomes available.",
    tags: ["quality level 1","quality level 2","quality inspection","quality form field"]
  },
  {
    action: "approve",
    object: "quality logs",
    scope: "project", section: "Quality",
    question: "How do I approve quality logs that have been submitted?",
    answer: "Go to Field Works → Quality → Approve Quality Logs. The default \"To Be Approved\" tab shows only forms awaiting your approval (visible only to users with approval permissions). Click a location/tag to open its pending work packages on the right and approve or reject; click \"All\" to see every work package with its status across all CWAs/Systems.",
    tags: ["approve quality logs","quality approval","quality logs review"]
  },
  {
    action: "view",
    object: "submitted quality logs",
    scope: "project", section: "Quality",
    question: "Where is the full history of quality logs?",
    answer: "Go to Field Works → Quality → Submitted Quality Logs. Filter by Quality Level 1/2 and by user via the dropdowns, and by date range via the Filters/calendar. Use \"Download Excel\" to export the filtered or full set of logs.",
    tags: ["submitted quality logs","quality log history","quality log export"]
  },
  {
    action: "track",
    object: "quality workflow issues",
    scope: "project", section: "Quality",
    question: "What happens when a quality form's approval is rejected?",
    answer: "A \"Quality Workflow Issue\" is created automatically in Field Works → Quality → Quality Workflow Issues. It has Open/Closed status (closes once the form is re-submitted and approved), can have a due date and assignee, supports Chat, and can be exported via \"Download Excel\".",
    tags: ["quality workflow issues","quality rejection","quality form rejected"]
  },
  {
    action: "track",
    object: "punch list",
    scope: "project", section: "Quality",
    question: "What is a Punch List and how do I track it?",
    answer: "A Punch List is created automatically when an issue is raised from a quality form. Go to Field Works → Quality → Punch Lists to view them. Each punch list moves through Open → Rectify → QC_Verify states (click \"Rectify\" then \"QC_Verify\" to progress it), can have due dates/assignees, supports Chat, and can be filtered and exported via \"Download Excel\".",
    tags: ["punch list","quality punch list","QC verify","rectify"]
  },
  {
    action: "track",
    object: "restraint",
    scope: "project", section: "Quality",
    question: "How do I raise and track a restraint (physical, legal, or contractual)?",
    answer: "Go to Field Works → Quality → Restraints, click \"Add Restraint\", fill the form, and submit. A restraint moves through Open → Rectify → QC_Verify (click \"Rectify\" then \"QC_Verify\" to progress). Add rectification guidance for a restraint type at the \"Restraint Rectification\" screen. Restraints support due dates, assignment, Chat, filters, and \"Download Excel\".",
    tags: ["restraint","create restraint","restraint rectification","restraint states"]
  },
  {
    action: "create",
    object: "safety observation",
    scope: "project", section: "Safety",
    question: "How do I log a safety observation?",
    answer: "Go to Field Works → Safety → Safety Observations, click \"Add Observation\", fill in the details, and click \"Submit\". Each observation moves Open → Rectified (click \"Rectify\" to close it), can have a due date/assignee, and supports Chat, Follow Up Actions, filters, and \"Download Excel\".",
    tags: ["safety observation","add observation","safety inspection log"]
  },
  {
    action: "view",
    object: "safety calendar",
    scope: "project", section: "Safety",
    question: "How do I access scheduled safety forms that are due?",
    answer: "Go to Field Works → Safety → Safety Calendar. Forms in \"Ready\" state appear in blue, grouped by category, per their scheduled date/time. Grey forms are not yet enabled; yellow forms are \"In Progress\" (awaiting approval or with issues). Open a form, fill it, then \"Save As Draft\" or \"Submit\"/\"Submit for Approval\".",
    tags: ["safety calendar","scheduled safety form","ready forms"]
  },
  {
    action: "create",
    object: "Daily Safety Issue (DSI)",
    scope: "project", section: "Safety",
    question: "How are issues raised from safety forms tracked?",
    answer: "Issues raised from a project safety form or calendar form automatically become \"Daily Safety Issues\" — go to Field Works → Safety → Daily Safety Issues to view them. Each DSI moves Open → Rectified (click \"Rectify\" to close), can have a due date/assignee, and supports Chat, filters, and \"Download Excel\".",
    tags: ["daily safety issue","DSI","safety issue tracking"]
  },
  {
    action: "view",
    object: "completed safety forms",
    scope: "project", section: "Safety",
    question: "Where is the full repository of submitted safety forms?",
    answer: "Go to Field Works → Safety → Completed Safety Forms. This shows all logs from both Safety Forms and Safety Calendar Forms, most recent first. Filter by user (Users dropdown) or by date range (Filters/calendar), and export via \"Download Excel\".",
    tags: ["completed safety forms","safety forms repository","submitted safety logs"]
  },
  {
    action: "submit",
    object: "safety form",
    scope: "project", section: "Safety",
    question: "How do I fill out and submit an unscheduled safety form?",
    answer: "Go to Field Works → Safety → Safety Forms. Expand a category in the left menu to see its forms, click \"Create Form\", fill it in, then \"Save As Draft\" or \"Submit\"/\"Submit for Approval\". Each submitted card has a Chat button (images/text/video up to 5MB) and the standard Follow Up Actions/History/Download/Share/Print/Compose Mail/Email Threads actions. Failed checkpoints (answered \"No\") can auto-raise a Daily Safety Issue.",
    tags: ["safety form submission","submit safety form","safety checklist"]
  },
  {
    action: "view",
    object: "drawing workflow issues (field)",
    scope: "project", section: "Drawing Management",
    question: "How are drawing rejections tracked in the field?",
    answer: "Go to Field Works → Drawing Management → Drawing Workflow Issues. Every rejected drawing (at any approval level) creates a card here, searchable by ID/status, with due dates, assignment, Chat, filters, \"Download Excel\", and a table/card view toggle.",
    tags: ["drawing workflow issues","drawing rejection field","drawing issue tracking"]
  }
];

const QA_NOTIFICATIONS = [
  {
    action: "configure",
    object: "notification events",
    scope: "project", section: "Events",
    question: "How do I customize the message or channel for a notification event?",
    answer: "Go to Notifications → Events tab. Each event (a pre-defined trigger from Arena) has Email/Web/Mobile icons — click one to open and edit its message template. Click \"Reset to Standard\" to revert all templates to Arena's defaults (with a confirmation warning).",
    tags: ["notification events","notification template","reset to standard"]
  },
  {
    action: "create",
    object: "event group",
    scope: "project", section: "Event Groups",
    question: "How do I group notification events and assign them to specific users?",
    answer: "Go to Notifications → Event Groups tab. Click \"Get Standard Event Groups\" to create Arena's default groups (only if none exist yet — running it again overwrites same-named groups with a warning), or click \"Add Event Group\" to create a custom one. Each group has \"Notifications\" and \"Users\" buttons to map which events and which users belong to it — only those users receive notifications for that group's events.",
    tags: ["event group","notification group","get standard event groups","assign notification users"]
  }
];

const QA_PEOPLEPROJECT = [
  {
    action: "assign",
    object: "project indirect staff",
    scope: "project", section: "Indirect Staff",
    question: "How do I add indirect staff to a project?",
    answer: "Open the project and go to Project Setup → People/Roster → Project Indirect Staff. Select the system users to add and click \"Submit\" to assign them as indirect staff for the project.",
    tags: ["project indirect staff","indirect team","assign staff"]
  },
  {
    action: "create",
    object: "project crew",
    scope: "project", section: "Project Crews",
    question: "How do I create a crew within a specific project?",
    answer: "Open the project, go to Project Setup → People/Roster → Project Crews, and click \"Create Crew\". Enter the crew name, select a supervisor and foreman, and pick the users to include (searchable), then click \"Submit\". Alternatively, click \"Copy Crews from Global Data\" to import existing crews from Global Data → Crews, or \"Map Crews to Projects\" to copy a crew from this project to others.",
    tags: ["create project crew","project crew","copy crew from global data","supervisor foreman"]
  },
  {
    action: "assign",
    object: "people to work packages",
    scope: "project", section: "Assign People",
    question: "How do I assign users/teams to project work packages?",
    answer: "Go to Project Setup → Project Works → Assign People (\"People\" screen), select CWA → System → Tag → Work Package, assign users/teams from the project Roster, then \"Save Changes\". Use \"Copy Users To\"/\"Copy Teams To\" to bulk-apply the same assignment to other selected work packages, and set an approval workflow via the \"Approval\" link.",
    tags: ["assign people work package","people screen","copy users to"]
  }
];

const QA_PERMISSIONS = [
  {
    action: "create",
    object: "permission role/user group (project)",
    scope: "project", section: "User Groups",
    question: "How do I create a new role or permission group in a project?",
    answer: "Open the project's Permissions screen, click the \"User Group\" button, and enter the name of the new user group in the pop-up.",
    tags: ["create permission group","project role","user group project"]
  },
  {
    action: "configure",
    object: "module permissions (rights)",
    scope: "project", section: "Permission Rights",
    question: "What permission rights can I grant to a role for a module?",
    answer: "On a role's card, click \"Permissions\", turn on \"Roll Back\" for the module, then choose from: Assign To (only the assigned user can view/create/edit/delete), View (view only), Create (add new data), Edit (update but not delete), Delete, Download (export excel), Print, and Admin (grants all of the above for that module).",
    tags: ["permission rights","assign to view create edit delete","admin permission","roll back toggle"]
  },
  {
    action: "copy",
    object: "user group to projects",
    scope: "project", section: "Copy to Projects",
    question: "How do I copy a user group's permissions to other projects?",
    answer: "On the Permissions screen, click \"Copy User Groups to Projects\", which opens a pop-up to select the target projects to copy the user group(s) to.",
    tags: ["copy user group","copy permissions to projects"]
  },
  {
    action: "edit",
    object: "role/user group (rename, copy, delete)",
    scope: "project", section: "User Groups",
    question: "How do I rename, duplicate, or delete a permission role?",
    answer: "On the role's kebab menu (3 vertical dots): \"Edit\" opens a pop-up to rename the group; \"Copy\" duplicates the group's users and permissions into a new named group; \"Delete\" removes the group with a confirmation warning.",
    tags: ["edit role","copy role","delete permission group"]
  },
  {
    action: "assign",
    object: "users to a permission group",
    scope: "project", section: "User Groups",
    question: "How do I add users to a permission/role group?",
    answer: "On the role's card, click \"Users\" to open the list of users, and select which users should have that role's configured permissions and rights.",
    tags: ["assign users to role","add users to permission group"]
  }
];

const QA_PRODUCTIVITYLOGS = [
  {
    action: "create",
    object: "productivity log",
    scope: "project", section: "Create Logs",
    question: "How do I log hours or quantities for a crew or employee?",
    answer: "Go to Field Works → Progress → Productivity Logs → Create. Click \"Set Phase Codes\" to choose which phase codes to log, pick the date range, then \"Create Log\" → \"Add Employee\" or \"Add Crew\" (or \"Clone Log\" to duplicate a prior log) and fill in the row(s). Click \"Next\" to move to the Log Quantity tab, enter quantities (check \"Activity 100% Complete\" if finished), then submit.",
    tags: ["create productivity log","log hours","log quantity","add employee add crew"]
  },
  {
    action: "approve",
    object: "productivity log",
    scope: "project", section: "Approve Logs",
    question: "How do I approve productivity logs submitted by field staff?",
    answer: "Go to Field Works → Progress → Productivity Logs → Logs. Admins/Approvers see Approve/Reject buttons — in the Quantities tab for Direct/Change Order phase codes, and the Timesheets tab for Indirect/Non-Productive phase codes.",
    tags: ["approve productivity log","reject productivity log","productivity logs review"]
  },
  {
    action: "configure",
    object: "productivity approval workflow",
    scope: "project", section: "Approval Workflow",
    question: "How do I set up review levels for productivity logs?",
    answer: "Go to Field Works → Progress → Productivity Logs → Approval Workflow, click \"Create Level\", choose \"All Must Approve\" or \"Anyone Can Approve\", enter a description, and select approvers.",
    tags: ["productivity approval workflow","create level","review levels"]
  },
  {
    action: "view",
    object: "data summary (timesheets, quantities, labor units)",
    scope: "project", section: "Data Summary",
    question: "How do I see aggregated productivity data across the project?",
    answer: "Go to Field Works → Progress → Productivity Logs → Data Summary. Three tabs: Timesheets (hours by employee/crew), Quantities (quantity by phase code/location), Labor Units (hours-to-quantity ratio). Each has \"Download Excel\" for the selected date range.",
    tags: ["data summary","timesheet data","quantity data","labor units summary"]
  },
  {
    action: "track",
    object: "productivity log issues",
    scope: "project", section: "Issues",
    question: "What happens to a rejected productivity log?",
    answer: "A rejected log auto-generates an issue in Field Works → Progress → Productivity Logs → Issues, with comments from the approver/admin explaining the rejection; it can be assigned with a due date. Searchable and exportable via \"Download Excel\".",
    tags: ["productivity log issue","rejected log","log rejection reason"]
  }
];

const QA_PROJECTSETTINGS = [
  {
    action: "configure",
    object: "forms color template",
    scope: "project", section: "Forms Branding",
    question: "How do I set the brand color used across all forms in a project?",
    answer: "Go to Project Settings → Forms, select the organization's brand color from the dropdown, and click \"Save Changes\". This color is applied across all forms in the application.",
    tags: ["forms color","brand color","form template color"]
  },
  {
    action: "configure",
    object: "look and feel (light/dark mode)",
    scope: "project", section: "Look & Feel",
    question: "How do I switch the application to dark mode?",
    answer: "Go to Project Settings → Look & Feel, choose Light or Dark mode, and click \"Save Changes\". This setting is device-specific — it only applies to the device where it was configured.",
    tags: ["dark mode","light mode","look and feel settings"]
  },
  {
    action: "configure",
    object: "productivity log settings",
    scope: "project", section: "Productivity Settings",
    question: "Where do I configure how productivity logs are created?",
    answer: "Go to Project Settings → Productivity Log Settings. Choose the Logging Type (\"Create Productivity Logs By Phase Code\" or \"By Level 3s\") and configure the Timesheets and Quantity tab fields (standard plus custom configurable fields).",
    tags: ["productivity log settings","logging type configuration"]
  }
];

const QA_PROJECTSETUP = [
  {
    action: "create",
    object: "WBS tree / tree version",
    scope: "project", section: "WBS / Tree Structure",
    question: "How do I create a WBS or tree structure for a project?",
    answer: "Open the Project, go to Project Setup → Project Works → Tree Version(s), then click \"Create\". You can either \"Create Tree Version\" and enter data manually (name, description, assign people), or choose \"Upload Tree Version Data\" to download a sample Excel, fill in Tree Version/Activity Sequence/User assignment/Other Attributes data, then upload it choosing Global or Local sequence type. The base skeleton structure is first defined in Global Data, and the Tree Version is the project-specific subproject/multi-tree built from it.",
    tags: ["WBS","tree version","work breakdown structure","project structure","upload tree excel","create tree"]
  },
  {
    action: "edit",
    object: "tree version",
    scope: "project", section: "WBS / Tree Structure",
    question: "How do I modify or delete a tree version?",
    answer: "In Project Setup → Project Works → Tree Version, click the edit icon on the tree version, change the fields, and click \"Submit\" to modify it. To delete, click the delete button inside the ellipsis (kebab) menu on that tree version's card.",
    tags: ["edit tree version","delete tree version","naming framework","assign percentage"]
  },
  {
    action: "create",
    object: "CWA (Construction Work Area)",
    scope: "project", section: "WBS / Tree Structure",
    question: "How do I create a Construction Work Area (CWA)?",
    answer: "Go to Project Setup → Project Works → Create CWA, click \"Create\", enter the CWA name, and click \"Submit\". CWA is the tier-1 layer of the project's 3-tier work structure; a project can have multiple CWAs. A CWA cannot be deleted if one or more Systems (tier-2) are linked to it.",
    tags: ["CWA","construction work area","tier 1","create work area"]
  },
  {
    action: "configure",
    object: "measurement method (progress/quality tracking)",
    scope: "project", section: "WBS / Tree Structure",
    question: "How is work package completion tracked or measured in a project?",
    answer: "Inncircles Arena supports two measurement methods, configured at Project Settings → Project Work Measurement: \"Percentage Based\" (assign percentage weightage to activities and to work packages within each activity; percentages within a group must sum to 100%) and \"Effort Based\" (assign man-hours instead of percentages). To assign weightages, go to Project Setup → Project Works → Measurement Methods, choose the Progress or Quality tab, click \"Assign\" on an activity, then \"View & Edit Work Packages\" to assign at the work-package level.",
    tags: ["measurement method","percentage based","effort based","progress tracking","work package completion"]
  },
  {
    action: "create",
    object: "custom column (project tree)",
    scope: "project", section: "WBS / Tree Structure",
    question: "How do I add a custom column to the project tree data?",
    answer: "Go to Project Setup → Project Works → Custom Columns, click \"Add Custom Column\", enter the column name and type, and click \"Submit\". A new column appears where users can enter related information for each tree element (CWA → System → Tag). Use \"Export\" to download the data as Excel, and the \"Edit\"/\"Delete\" options in the column header to modify or remove a custom column.",
    tags: ["custom columns","project tree columns","add column","export excel"]
  },
  {
    action: "define",
    object: "activity sequence",
    scope: "project", section: "WBS / Tree Structure",
    question: "How do I assign or modify a work sequence for a tag/location?",
    answer: "Go to Project Setup → Project Works → Assign Activity Sequence. For each tag with a sequence pre-defined in Global Data, click \"Add New Mappings\", select the sequence, and click \"Submit\". To customize, drag and drop work packages to reorder, or add/delete packages. Use \"Copy The Same For\" to apply a sequence to selected tags, or \"Copy The Same For Project\" to apply it project-wide to all unmapped tags of the same type.",
    tags: ["activity sequence","work sequence","assign sequence","tag mapping","copy sequence"]
  },
  {
    action: "define",
    object: "other attributes (budgeted qty/hours)",
    scope: "project", section: "WBS / Tree Structure",
    question: "How do I set budgeted hours or quantity for a work package?",
    answer: "Go to Project Setup → Project Works → Other Attributes (Qty | Hrs), select a CWA → System, then enter Budgeted Hours, Budgeted Quantity, Estimated Quantity, Planned Start/End Date, Forecasted End Date, Client End Date and Skyline End Date for each work package.",
    tags: ["other attributes","budgeted hours","budgeted quantity","estimate","planned dates"]
  },
  {
    action: "assign",
    object: "people to work packages",
    scope: "project", section: "Roster & People",
    question: "How do I assign users or teams to a work package in a project?",
    answer: "Go to Project Setup → Project Works → Assign People (the \"People\" screen). Select CWA → System → Tag → Work Package, assign users/teams (pulled from the project's Roster), and click \"Save Changes\". Use \"Copy Users To\" or \"Copy Teams To\" to apply the same assignment to multiple selected work packages, and set up an approval workflow via the \"Approval\" option.",
    tags: ["assign people","work package assignment","project roster","copy users"]
  },
  {
    action: "create",
    object: "project crew",
    scope: "project", section: "Roster & People",
    question: "How do I create a project crew or import crews from Global Data?",
    answer: "Go to Project Setup → People/Roster → Project Crews. Click \"Create Crew\" to build one manually (enter crew name, select supervisor, foreman, and users), or click \"Copy Crews from Global Data\" to select and import existing crews from Global Data → Crews. Use \"Map Crews to Projects\" to copy a crew from this project into other projects.",
    tags: ["project crew","create crew","copy crew","global data crews","foreman supervisor"]
  },
  {
    action: "assign",
    object: "project indirect staff",
    scope: "project", section: "Roster & People",
    question: "What is Project Indirect Staff and how do I add users to it?",
    answer: "Project Indirect Staff refers to system users who work for the project but are not directly involved in field execution. Go to the Project Indirect Staff screen, select the users, and click \"Submit\" to assign them as indirect staff.",
    tags: ["indirect staff","project roster","indirect team"]
  },
  {
    action: "create",
    object: "cost estimate",
    scope: "project", section: "Cost Estimate",
    question: "How do I create a cost estimate for a project?",
    answer: "Go to Project Setup → Cost Estimate → Create, select an Estimate Category, and click \"Create Estimate\". Under the Material/Labor/Equipment/Sub-Contractor/Other Expenses tabs you can \"Add Custom Columns\", \"Get Materials from Global Data\" (keep-and-update or replace-all), or \"Add Material\" to add line items manually; totals calculate automatically.",
    tags: ["cost estimate","create estimate","material cost","labor cost","budget"]
  },
  {
    action: "view",
    object: "cost estimate summary",
    scope: "project", section: "Cost Estimate",
    question: "Where can I see a summary of all project costs?",
    answer: "Go to Project Setup → Cost Estimate → Estimate Summary. This is a view-only page showing all documented costs across materials, labor, equipment, sub-contractor and other expenses.",
    tags: ["cost estimate summary","view costs","cost summary"]
  },
  {
    action: "configure",
    object: "cost estimate approval workflow",
    scope: "project", section: "Cost Estimate",
    question: "How do I set up an approval workflow for timesheets or quantity tracksheets?",
    answer: "Go to Project Setup → Cost Estimate → Workflow, select the feature (Timesheets or Quantity Tracksheets), click \"Create Level\", choose \"All Must Approve\" or \"Anyone Can Approve\", and select the approvers for that level.",
    tags: ["cost estimate workflow","approval workflow","timesheet approval","quantity approval"]
  },
  {
    action: "configure",
    object: "drawing training template (OCR)",
    scope: "project", section: "Drawings",
    question: "How do I set up OCR training for drawings?",
    answer: "Go to Project Setup → Drawings → Drawing Training, click \"Create Training Template\", name it, and click \"Submit\". Then configure it in 4 steps: (1) Upload Sample Drawing, (2) Create Labels (standard + configurable fields with types like Checkbox, Date, Text box, Single/Multi select, Signature, or \"Training Category\" for OCR), (3) OCR Training — select a label and mark its position (horizontal/vertical) on the drawing, (4) Preview Table to review all configured labels.",
    tags: ["drawing training","OCR configuration","drawing labels","auto label","training template"]
  },
  {
    action: "create",
    object: "drawing package",
    scope: "project", section: "Drawings",
    question: "How do I create a drawing package and upload drawings?",
    answer: "Go to Project Setup → Drawings → Drawing Packages, click \"Create Drawing Package\", fill in the details plus the training template, and click \"Submit\". Open the package to view Drawing Logs, then click \"Upload Drawing\" (PDF or image files), choose \"Auto Label Upload\" (OCR extraction) or \"Write Label Manually\", then \"Review & Submit\" each drawing or \"Submit All\".",
    tags: ["drawing package","upload drawing","drawing logs","create package"]
  },
  {
    action: "edit",
    object: "drawing (annotate/revise)",
    scope: "project", section: "Drawings",
    question: "How do I annotate, revise, or compare drawing versions?",
    answer: "Open a drawing from Drawing Packages/Drawing Logs and click \"Edit Drawing\" (or \"Comments\") to enter edit mode with annotation tools; click \"Save\"/\"Save Changes\" when done. Use \"Create Revision\" to upload a new version of the drawing. Use the \"Actions\" menu on a drawing log for Revisions (compare with color-coded diffs), Compare, Download, Share, Edit, Link (map to CWA/System/Tags), and Delete.",
    tags: ["drawing revision","drawing comparison","annotate drawing","create revision","edit drawing"]
  },
  {
    action: "configure",
    object: "drawing approval workflow",
    scope: "project", section: "Drawings",
    question: "How do I create an approval workflow for drawings?",
    answer: "Go to Project Setup → Drawings → Create Approval Workflow, click \"Create Approval Workflow\", then \"Create Level\" to add levels, choosing \"All must approve\" or \"Anyone can approve\" and selecting the approvers for that level.",
    tags: ["drawing approval workflow","create workflow","drawing levels"]
  },
  {
    action: "configure",
    object: "project forms approval workflow",
    scope: "project", section: "Forms",
    question: "How do I set up an approval workflow for RFIs, Submittals, Change Orders, or custom project forms?",
    answer: "Go to Project Setup → Forms → Approval Workflow, select the form type (RFI, Submittal, Change Order, or a custom form), click \"Create Level\", choose \"All must approve\" or \"Anyone can approve\", and select the approvers for that level. This is configured per project and applies only if the \"Approval Work Toggle\" for that form type is set to Active in the Global Data form template.",
    tags: ["project forms approval","RFI workflow","submittal workflow","change order workflow","create level"]
  },
  {
    action: "configure",
    object: "safety approval workflow",
    scope: "project", section: "Safety Setup",
    question: "How do I create and assign a safety inspection approval workflow?",
    answer: "To create one, go to Project Setup → Safety → Create Workflow, click \"Create Workflow\" then \"Create Level\" (choose \"All must approve\" or \"Anyone can approve\" and select approvers). To apply it, go to Project Setup → Safety → Assign Workflow, select the safety work division and package, choose the workflow, and click \"Submit\" (\"Clear\" removes it unless already in progress).",
    tags: ["safety workflow","assign safety workflow","create safety workflow","approval levels"]
  },
  {
    action: "configure",
    object: "quality approval workflow",
    scope: "project", section: "Quality Setup",
    question: "How do I create and assign a quality control approval workflow?",
    answer: "To create one, go to Project Setup → Quality → Create Workflow, click \"Create Workflow\" then \"Create Level\" (choose \"All must approve\" or \"Anyone can approve\" and select approvers). To apply it, go to Project Setup → Quality → Assign Workflow, select the CWA, System, Tag and quality package, choose the workflow, and click \"Submit\".",
    tags: ["quality workflow","assign quality workflow","create quality workflow","quality approval"]
  },
  {
    action: "create",
    object: "safety folders and documents",
    scope: "project", section: "Safety Setup",
    question: "How do I create folders for safety-related documents?",
    answer: "Go to Project Setup → Safety → Safety & Documents, enter a name and click \"+\" to create a folder, then click into the folder to add related documents/files. Each folder supports Share (email to selected users), Print, and Delete (with warning).",
    tags: ["safety documents","safety folders","create folder"]
  },
  {
    action: "configure",
    object: "safety calendar forms",
    scope: "project", section: "Safety Setup",
    question: "How do I set up recurring (scheduled) safety forms?",
    answer: "Go to Project Setup → Safety → Setup Safety Calendar, click \"Create Safety Calendar Category\", name it, choose the safety forms to include, and set the schedule (Start Date/Time, End Date, recurrence frequency). Then click \"Click to make assignments\" on each form to assign it to users — unassigned forms will not appear to end users in Field Works.",
    tags: ["safety calendar","scheduled safety forms","recurrence","safety category"]
  },
  {
    action: "configure",
    object: "project safety forms (unscheduled)",
    scope: "project", section: "Safety Setup",
    question: "How do I set up unscheduled/ad-hoc safety forms for a project?",
    answer: "Go to Project Setup → Safety → Setup Project Safety Forms, click \"Create Safety Form Category\", name it and select the safety forms for that category, then click \"Click to make assignments\" to assign the forms to users (unassigned forms will not show in Field Works). Assigned users can be copied to other forms via the copy button.",
    tags: ["project safety forms","unscheduled safety","safety form category"]
  },
  {
    action: "create",
    object: "quality & documents folder (loop folder)",
    scope: "project", section: "Quality Setup",
    question: "How do I create a Quality & Documents (loop) folder and map work packages to it?",
    answer: "Go to Project Setup → Quality → Quality & Documents, click \"Create Folder\", name it, and click \"Submit\". Inside a folder, use \"Folder Items\" → \"Map Work Packages\" to assign CWA/System/Tag combinations to it, and use the Drawings, Documents, and Photos tabs to attach related files. Each folder tracks completed/in-progress/not-ready form counts.",
    tags: ["quality documents","loop folder","map work packages","quality folder"]
  },
  {
    action: "configure",
    object: "custom project form (Project Forms)",
    scope: "project", section: "Forms",
    question: "How do I create a custom project form log?",
    answer: "Open the project, go to Field Works → Project Forms, click \"Create\" on the selected custom form from the left menu, fill the fields, then click \"Save As Draft\" or \"Submit For Approval\"/\"Submit\". This is distinct from Global Data's Construction Forms setup, which defines the form template itself (fields, sections, approval toggle) rather than individual logs.",
    tags: ["project forms","custom forms","create form log","save as draft"]
  },
  {
    action: "view",
    object: "project overview navigation",
    scope: "project", section: "Overview & Navigation",
    question: "What sub-sections exist under Project Setup?",
    answer: "Project Setup contains: Project Works (WBS/tree, CWA, Activity Sequence, Custom Columns, Other Attributes), Roster (People/Crews), Work Schedule, Quality, Safety, Drawings (Create Workflow, Drawing & OCR Configuration, Drawing Logs), Documents, Cost Estimates, and Forms.",
    tags: ["project setup navigation","project setup sections","project setup overview"]
  }
];

const QA_PROJECTUSERGROUPS = [
  {
    action: "view",
    object: "project users",
    scope: "module", section: "Project Users",
    question: "How do I see which projects and groups a specific user belongs to?",
    answer: "Go to Project User Groups → Project Users. Select a user from the list on the left (searchable by name or email) to see a table of the projects they're on and their group in each. Click a group in the table to see its permissions.",
    tags: ["project users list","user's projects","user group lookup"]
  },
  {
    action: "create",
    object: "standard user",
    scope: "module", section: "Standard Users",
    question: "How do I add a \"standard user\" who is auto-added to every project?",
    answer: "Go to Project User Groups → Standard Users, click \"Add User\", select the user, then pick a standard group (only groups with \"Set as Default\" enabled are shown). That user is then automatically added to the project roster and default group of every existing and future project. Deleting a standard user does not remove them from projects they're already in.",
    tags: ["standard user","add standard user","default project user"]
  },
  {
    action: "create",
    object: "standard group",
    scope: "module", section: "Standard Groups",
    question: "How do I create a permission group that applies to every project by default?",
    answer: "Go to Project User Groups → Standard Groups, click \"Project User Groups\" to create one, enter a name, enable the needed permissions (checkboxes per field), and click \"Save Changes\". Enable \"Set to Default\" so it's automatically added to all existing and future projects (it will show a link icon inside each project's Users and Permissions). Enable \"Restrict Users\" to limit which users can belong to this group across projects — after enabling, select the eligible users, click Submit, then choose which projects the restriction applies to.",
    tags: ["standard group","set to default","restrict users","create permission group"]
  },
  {
    action: "edit",
    object: "standard group propagation",
    scope: "module", section: "Standard Groups",
    question: "What happens to existing projects when I edit a Standard Group?",
    answer: "Editing a Standard Group (that has \"Set to Default\" enabled) prompts a dialog asking which existing projects should receive the updated permissions/users — only the selected projects get the change; others keep their prior configuration. Disabling \"Set to Default\" stops it being applied to new projects but does not change existing projects, which keep functioning independently.",
    tags: ["standard group edit","propagate changes","set to default disable"]
  }
];

const QA_QUALITY = [
  {
    action: "configure",
    object: "quality form template (Level 1/Level 2)",
    scope: "module", section: "Form Templates & Settings",
    question: "How do I set up the fields on a Quality Level 1 or Level 2 form?",
    answer: "First create Quality Work Packages under Global Work Packages → Quality. Then go to Global Data → Quality Forms, choose Quality Level-1 or Quality Level-2, and configure: Add Inspection Items (each gets Yes/No/N/A responses; \"No\" requires the user to specify an issue and priority), then Build Form (Add/Copy/Delete Section, Add/Copy/Delete Field with types like Attachment, Date, Signature, Table, etc., mark fields Required or \"Show on Cards\"), then Setup Trigger Points (raise issue / enter notes on field update, with a Post Rectification Status), and Preview. Click \"Save Changes\" after editing, \"Copy Form\" to duplicate across work packages, or \"Delete Form\" to remove it.",
    tags: ["quality form setup","quality level 1 template","quality level 2 template","inspection items"]
  },
  {
    action: "configure",
    object: "quality level settings (Project Settings)",
    scope: "project", section: "Form Templates & Settings",
    question: "How do I disable Quality Level 2 (single-level quality inspection)?",
    answer: "Go to Project Settings → Quality Logs. By default Arena has two quality inspection levels; if a company only needs one, this is where you configure it. Click \"Save Changes\" to apply.",
    tags: ["quality level settings","single quality level","disable level 2","quality logs settings"]
  },
  {
    action: "configure",
    object: "quality work log template",
    scope: "project", section: "Form Templates & Settings",
    question: "How do I choose which quality logging template a project uses?",
    answer: "Go to Project Settings → Quality Work Logs (Quality Work Log Templates). Choose between the available templates — e.g. \"Work Package to Location/Tags Logging\" (maps work packages to tags) or \"System to Tag Mapping\" (tags shown as status-colored cards) — which changes how the Quality tab appears in Field Works.",
    tags: ["quality work log template","quality template settings","work package to tags"]
  },
  {
    action: "configure",
    object: "quality priority levels (punch lists/restraints)",
    scope: "project", section: "Form Templates & Settings",
    question: "How do I set priority levels for punch lists and restraints?",
    answer: "Go to Project Settings → Punch Lists & Restraints, click \"Add Priority\", enter the name and due hours within which the issue must be resolved, then click \"Add\". Use the Actions column to edit or delete a priority level.",
    tags: ["punch list priority","restraint priority","quality priority settings"]
  },
  {
    action: "submit",
    object: "quality inspection form",
    scope: "project", section: "Field Inspections",
    question: "How do I complete a Level 1 or Level 2 quality inspection in the field?",
    answer: "Go to Field Works → choose a Tree Version → Quality tab. Select the Entity/CWA (or search/filter by location for System-to-Tag templates), open a \"Ready\" item, fill the form (with mapped documents/drawings shown alongside), and click \"Save As Draft\" or \"Submit for Approval\". Level 2 becomes available once Level 1 is approved (or automatically if Level 1 is skipped in settings).",
    tags: ["submit quality form","quality inspection","quality level 1 submission"]
  },
  {
    action: "assign",
    object: "quality package responsible/approval",
    scope: "project", section: "Field Inspections",
    question: "How do I assign who is responsible for a quality package and who approves it?",
    answer: "Go to Project Setup → Works → People, and use \"Quality Package Responsible\" and \"Quality Package Approval\" to assign responsible individuals and configure the approval workflow for each work package.",
    tags: ["quality package responsible","quality package approval","assign quality workflow"]
  },
  {
    action: "approve",
    object: "quality log",
    scope: "project", section: "Approvals & Logs",
    question: "How do I approve or reject a submitted quality log?",
    answer: "Go to Field Works → Quality → Approve Quality Logs. The \"To Be Approved\" tab (visible only to approval-permitted users) shows pending work packages; click a location/tag to open it and approve/reject. Click \"All\" to view every work package's status across CWAs/Systems (color-coded legend at top right).",
    tags: ["approve quality log","reject quality log","quality approval screen"]
  },
  {
    action: "view",
    object: "submitted quality logs",
    scope: "project", section: "Approvals & Logs",
    question: "Where can I find the history of all submitted quality logs?",
    answer: "Go to Field Works → Quality → Submitted Quality Logs. Filter by Level 1/2 and by user, filter by date range, and use \"Download Excel\" to export.",
    tags: ["submitted quality logs","quality history","quality export"]
  },
  {
    action: "track",
    object: "quality workflow issues",
    scope: "project", section: "Approvals & Logs",
    question: "How are rejected quality forms tracked?",
    answer: "Go to Field Works → Quality → Quality Workflow Issues. A rejected quality form creates an issue here with Open/Closed status (closes once re-submitted and approved); supports due dates, assignment, Chat, and \"Download Excel\".",
    tags: ["quality workflow issues","quality form rejected","quality issue tracking"]
  },
  {
    action: "track",
    object: "punch list",
    scope: "project", section: "Punch Lists & Restraints",
    question: "How do I manage a punch list item raised from a quality inspection?",
    answer: "Go to Field Works → Quality → Punch Lists. Each punch list moves Open → Rectify → QC_Verify (click \"Rectify\" then \"QC_Verify\"); assign due dates/users, use Chat for collaboration, filter, and export via \"Download Excel\".",
    tags: ["punch list","quality punch list","rectify punch list","QC verify"]
  },
  {
    action: "track",
    object: "restraint and restraint rectification",
    scope: "project", section: "Punch Lists & Restraints",
    question: "How do I add rectification guidance for a restraint?",
    answer: "Go to Field Works → Quality → Restraint Rectification. Each existing restraint has an Edit button to enter rectification text, which then displays as guidance on the restraint for users. Use \"Download Excel\" to export restraints with rectification text.",
    tags: ["restraint rectification","rectification guidance","restraint edit"]
  },
  {
    action: "create",
    object: "quality & documents (loop) folder",
    scope: "project", section: "Quality & Documents",
    question: "How do I create and organize a Quality & Documents (loop) folder?",
    answer: "Go to Project Setup → Quality → Quality & Documents, click \"Create Folder\", name it, and \"Submit\". Use the search bar to find folders, \"Filters\" to filter by CWA/System/Commodity, and the kebab menu for Edit/Share/Delete/Print. Each folder has four sections: Folder Items (map work packages via \"Map Work Packages\"), Drawings (create sub-folders, add/map drawing files, link to tags), Documents (create/upload/link documents, set up an approval workflow via \"Setup Workflow\"), and Photos (add/edit/delete images).",
    tags: ["quality documents folder","loop folder","create quality folder","map work packages"]
  },
  {
    action: "approve",
    object: "quality document",
    scope: "project", section: "Quality & Documents",
    question: "How do I approve a document uploaded to a Quality & Documents folder?",
    answer: "Documents added to a Quality & Documents folder require approval if a workflow was set up (\"Setup Workflow\" on the document). Use \"Send for Approval\" on the document, then approvers act on it via the \"Approve Documents\" section, where documents needing their review appear.",
    tags: ["approve quality document","document approval workflow","send for approval"]
  },
  {
    action: "export",
    object: "quality data (excel upload)",
    scope: "project", section: "Data Upload",
    question: "How do I bulk-upload quality data and documents via Excel/ZIP?",
    answer: "Go to Data Analytics and Insights → Configurable Analytics → Excel. Use \"People Assignments Excel\" to bulk-assign users to work packages, or \"Upload Quality and Documents\" to upload a ZIP of quality-related drawings/documents. Alternatively, upload drawings directly via Project Setup → Quality → Upload Excel; view all uploaded ZIPs under Project Setup → Quality → Uploaded Files.",
    tags: ["quality excel upload","bulk upload quality","upload zip","people assignments excel"]
  }
];

const QA_SAFETY = [
  {
    action: "configure",
    object: "safety form template",
    scope: "module", section: "Form Templates & Settings",
    question: "How do I set up the fields on a Safety form?",
    answer: "Go to Global Data → Safety Forms. Pre-requisite: create Work Packages under the Safety dropdown in Global Work Packages. Then configure: Create Inspection Items (Yes/No/N/A responses; \"No\" auto-prompts an issue), customize Inspection Item Response text (e.g. Accept/Reject) via each response's edit icon, and build sections/fields (Add Section, Add Field with types like Attachment, Checkbox, Date, Signature, Table, etc.). Set Trigger Points to allow issue-raising per field, then Preview. Save with \"Save Changes\".",
    tags: ["safety form setup","safety inspection items","safety form fields","global data safety forms"]
  },
  {
    action: "configure",
    object: "safety issue priority levels",
    scope: "project", section: "Form Templates & Settings",
    question: "How do I set priority levels for safety issues?",
    answer: "Go to Project Settings → Safety Issues, click \"Add Priority\", enter the name and due hours within which the issue must be resolved, then click \"Add\".",
    tags: ["safety issue priority","safety priority settings","add priority"]
  },
  {
    action: "configure",
    object: "safety calendar forms (scheduled)",
    scope: "project", section: "Scheduling & Assignment",
    question: "How do I schedule a recurring safety form for a project?",
    answer: "Go to Project Setup → Safety → Setup Safety Calendar, click \"Create Safety Calendar Category\", name it, select the safety forms, and set the schedule (Start Date/Time, End Date, recurrence frequency). Click \"Click to make assignments\" on each form to assign users — unassigned forms won't appear to end users in Field Works.",
    tags: ["safety calendar setup","scheduled safety forms","recurring safety inspection"]
  },
  {
    action: "configure",
    object: "project safety forms (unscheduled)",
    scope: "project", section: "Scheduling & Assignment",
    question: "How do I set up an ad-hoc (non-recurring) safety form for a project?",
    answer: "Go to Project Setup → Safety → Setup Project Safety Forms, click \"Create Safety Form Category\", name it and pick the forms, then use \"Click to make assignments\" to assign users to each form (required for it to show in Field Works). Categories can be edited/deleted if there are no dependent logs.",
    tags: ["project safety forms setup","unscheduled safety","ad hoc safety form"]
  },
  {
    action: "create",
    object: "safety folders and documents",
    scope: "project", section: "Documents",
    question: "How do I organize safety-related documents into folders?",
    answer: "Go to Project Setup → Safety → Safety & Documents, enter a folder name and click \"+\". Click into a folder to add documents/files. Folder-level actions: Share (email to selected users), Print (bulk document print), and Delete (with a warning).",
    tags: ["safety documents folder","safety file organization"]
  },
  {
    action: "configure",
    object: "safety approval workflow",
    scope: "project", section: "Approval Workflow",
    question: "How do I create and assign a safety inspection approval workflow?",
    answer: "Create it at Project Setup → Safety → Create Workflow: click \"Create Workflow\", then \"Create Level\" (choose \"All must approve\" or \"Anyone can approve\" and pick approvers). Apply it at Project Setup → Safety → Assign Workflow: select the safety work division and package, choose the workflow, and click \"Submit\" (\"Clear\" removes it unless in progress).",
    tags: ["safety approval workflow","create safety workflow","assign safety workflow"]
  },
  {
    action: "submit",
    object: "safety form (field)",
    scope: "project", section: "Field Submissions",
    question: "How do I fill out a safety form on-site?",
    answer: "Go to Field Works → Safety → Safety Forms (for ad-hoc forms) or Safety Calendar (for scheduled ones). Click \"Create Form\" (or open a scheduled \"Ready\" form), fill it in, then \"Save As Draft\" or \"Submit\"/\"Submit for Approval\". A \"No\" answer on an inspection item can auto-raise a Daily Safety Issue.",
    tags: ["submit safety form","fill safety form","safety inspection field"]
  },
  {
    action: "create",
    object: "safety observation",
    scope: "project", section: "Observations & Issues",
    question: "How do I log a safety observation during a random inspection?",
    answer: "Go to Field Works → Safety → Safety Observations, click \"Add Observation\", enter the details, and \"Submit\". It moves Open → Rectified (click \"Rectify\" to close); supports due dates, assignment, Chat, Follow Up Actions, filters, and \"Download Excel\".",
    tags: ["safety observation","log observation","safety inspection concern"]
  },
  {
    action: "track",
    object: "Daily Safety Issue (DSI)",
    scope: "project", section: "Observations & Issues",
    question: "What is a Daily Safety Issue and how is it created?",
    answer: "A Daily Safety Issue (DSI) is auto-generated when an issue is raised from a project safety form or calendar form. View them at Field Works → Safety → Daily Safety Issues. Each DSI moves Open → Rectified (click \"Rectify\"); supports due dates, assignment, Chat, filters, and \"Download Excel\".",
    tags: ["daily safety issue","DSI","safety issue creation"]
  },
  {
    action: "view",
    object: "completed/submitted safety forms",
    scope: "project", section: "Observations & Issues",
    question: "Where is the repository of all completed safety forms?",
    answer: "Go to Field Works → Safety → Completed Safety Forms. Shows all logs from Safety Forms and Safety Calendar, most recent first; filter by user or date range, export via \"Download Excel\".",
    tags: ["completed safety forms","safety form repository","submitted safety logs"]
  },
  {
    action: "view",
    object: "safety calendar (ready forms)",
    scope: "project", section: "Safety Calendar",
    question: "How do I see which safety forms are due today?",
    answer: "Go to Field Works → Safety → Safety Calendar. \"Ready\" forms (enabled per their scheduled date/time) appear in blue by category; grey means not yet enabled, yellow means in-progress/awaiting approval or has issues.",
    tags: ["safety calendar ready","due safety forms","safety schedule view"]
  }
];

const QA_WORKLOGS = [
  {
    action: "create",
    object: "work log",
    scope: "project", section: "Work Logs",
    question: "How do I record a work log entry?",
    answer: "Go to Field Works → Progress → Work Logs. The available views depend on the configured Work Log Template: Work Package to Tag View, Tag to Work Package View, System to Tag View, or Worklogs in Scheduled View.",
    tags: ["create work log","work log views","record progress"]
  },
  {
    action: "view",
    object: "submitted work logs",
    scope: "project", section: "Submitted Work Logs",
    question: "Where can I see every work log regardless of its status?",
    answer: "Go to Field Works → Progress → Submitted Work Logs. All logs are recorded here by default regardless of status. Filter by a time range (default \"All\") and by user via the Users filter, then export via \"Download Excel\".",
    tags: ["submitted work logs","work log repository","all work logs"]
  },
  {
    action: "view",
    object: "Site Posts",
    scope: "project", section: "Site Posts",
    question: "What is Site Posts?",
    answer: "Site Posts (Field Works → Progress → Work Logs → Site Posts) is Arena's built-in social feed for a project — click \"Create a Post\" to share text, images or video (up to 50MB) visible to all project users, with Like/Comment support.",
    tags: ["site posts","social feed","project updates"]
  }
];

const QA_WORKORDER = [
  {
    action: "create",
    object: "work order",
    scope: "module", section: "Work Orders",
    question: "How do I create a new work order?",
    answer: "Go to Home → Work Order → click the \"Create\" button. Fill in the relevant details, select the Work Order Type (configured in Global Data) from the dropdown, then click Submit. The new work order appears as a card you can click to open.",
    tags: ["new work order","add work order","work order contract","create contract","work order creation"]
  },
  {
    action: "view",
    object: "work order",
    scope: "module", section: "Work Orders",
    question: "How do I open a work order I already created?",
    answer: "On the Work Order Creation page, click the card of the work order you want to open. You can also switch between grid/card view using the view toggle in the top right of the page.",
    tags: ["open work order","view work order","work order card","switch view"]
  },
  {
    action: "define",
    object: "work order profile",
    scope: "module", section: "Profile & Items",
    question: "What is the Work Order Profile tab?",
    answer: "Work Order - Profile is the space to set up a work order's profile details and create items along with forms. It uses the form configured in Global Data for that Work Order Type.",
    tags: ["work order profile","profile tab","work order details","item setup"]
  },
  {
    action: "create",
    object: "work order item",
    scope: "module", section: "Profile & Items",
    question: "How do I add an item inside a work order?",
    answer: "Open the work order's Profile tab and click \"Create Item\". You can create multiple items inside one work order, and each item can be connected to a Project tree or to Issues.",
    tags: ["add item","work order item","create item","link item"]
  },
  {
    action: "link",
    object: "work order item",
    scope: "module", section: "Profile & Items",
    question: "How do I link a work order item to a project tree?",
    answer: "In Work Order - Profile, when linking an item to a tree, select the Project, then select its tree version, and continue through the remaining tree selections.",
    tags: ["link project tree","item to tree","project version","tree linking"]
  },
  {
    action: "link",
    object: "work order item",
    scope: "module", section: "Profile & Items",
    question: "How do I link issues to a work order item?",
    answer: "In Work Order - Profile, when linking with Issues, select the Issue type from the dropdown to see the detailed list of issues, then select one or multiple issues to link to the item.",
    tags: ["link issues","item issues","issue linking","work order issues"]
  },
  {
    action: "assign",
    object: "work order team",
    scope: "module", section: "Team",
    question: "How do I add users to a work order's team?",
    answer: "Go to Work Order - Team, select the \"Users\" tab at the top, multi-select the users you want to add, then click Submit.",
    tags: ["add users","work order team","assign users","team setup"]
  },
  {
    action: "assign",
    object: "work order crew",
    scope: "module", section: "Team",
    question: "How do I add a crew to a work order?",
    answer: "Go to Work Order - Team, select the \"Crews\" tab at the top, multi-select from the crews already created in Global Data, then click Submit.",
    tags: ["add crew","assign crew","work order crew","crews tab"]
  },
  {
    action: "view",
    object: "work order drawing",
    scope: "module", section: "Drawings",
    question: "How do I upload a drawing to a work order?",
    answer: "Go to Work Order - Drawings and click \"Upload Drawing\". Once uploaded, the drawing appears on the same page; you can switch between table view and card view.",
    tags: ["upload drawing","work order drawing","add drawing","drawing tab"]
  },
  {
    action: "edit",
    object: "work order drawing",
    scope: "module", section: "Drawings",
    question: "How do I annotate or delete a work order drawing?",
    answer: "On Work Order - Drawings, open the ellipsis (...) menu on the drawing and choose Edit, Annotate, or Delete. Choose \"Annotate\" to mark changes directly on the drawing file.",
    tags: ["annotate drawing","edit drawing","delete drawing","drawing menu"]
  },
  {
    action: "view",
    object: "work order document",
    scope: "module", section: "Documents",
    question: "Where do I find documents related to a work order's procurement?",
    answer: "Go to Work Order - Documents. This space shows all Procurement documents fetched directly from every Procurement stage; click a folder to open the documents linked to that stage.",
    tags: ["work order documents","procurement documents","document folders","view documents"]
  },
  {
    action: "submit",
    object: "work order email",
    scope: "module", section: "Communication",
    question: "How do I send an email from a work order?",
    answer: "Go to Work Order - Communication and click \"Compose Mail\" to send a new mail. This tab is a mail repository for the work order with Sent, Starred, Drafts, and Trash sections, similar to a standard inbox.",
    tags: ["compose mail","work order email","send mail","communication tab"]
  },
  {
    action: "configure",
    object: "work order status",
    scope: "global", section: "Global Setup",
    question: "How do I configure statuses for work orders and items?",
    answer: "Go to Global Data → Work Order → Work Order Status Configuration. Select the appropriate section on the left, then click \"Add status\" to create a status type (e.g. \"Yet to begin\", \"Completed\"). You can set each status's color using the pencil icon in the Actions column.",
    tags: ["work order status","configure status","add status","status colors","global data work order"]
  },
  {
    action: "create",
    object: "work order type",
    scope: "global", section: "Global Setup",
    question: "How do I create a new Work Order Type?",
    answer: "In Global Data → Work Order → Work Order Types, click \"Create\". In the dialog, enter the name and description for the Work Order type and press Submit. Created types are listed on the Work Order page in Global Data and can be edited via the \"Edit\" option on each card.",
    tags: ["work order type","create type","global data work order types","configure work order type"]
  },
  {
    action: "edit",
    object: "work order type",
    scope: "global", section: "Global Setup",
    question: "How do I edit an existing Work Order Type?",
    answer: "In Global Data → Work Order → Work Order Types, click the name of the Work Order type to open its details, or click \"Edit\" on the Work Order card to modify it.",
    tags: ["edit work order type","modify work order type","global data"]
  },
  {
    action: "define",
    object: "work order timesheet",
    scope: "module", section: "Timesheet",
    question: "What is the Work Order Timesheet tab for?",
    answer: "Work Order - Timesheet is the tab within a work order used to manage crew/vendor timesheet entries for that work order (accessed via the work order's Timesheet tab).",
    tags: ["work order timesheet","timesheet tab","crew timesheet","vendee timesheet"]
  },
  {
    action: "view",
    object: "work order inventory",
    scope: "module", section: "Inventory",
    question: "What is the Work Order Inventory Management tab?",
    answer: "Work Order - Inventory Management is the tab within a work order for tracking inventory associated with that work order.",
    tags: ["work order inventory","inventory management","inventory tab"]
  },
  {
    action: "view",
    object: "work order LOR",
    scope: "module", section: "LORs",
    question: "How do I access Load Out Requests (LORs) from a work order?",
    answer: "Open the work order and go to its \"LORs\" tab (Work Order - LORs) to view Load Out Requests / equipment associated with that work order.",
    tags: ["work order LOR","load out request","equipment tab","LORs"]
  }
];

const QA_PROPOSALMANAGEMENT = [
  {
    action: "create",
    object: "proposal",
    scope: "module", section: "Proposals",
    question: "How do I create a new proposal?",
    answer: "Go to Proposal Management > Proposals and click \"Create\". In the pop-up, enter the Proposal Name, Description, Proposal Type, Proposal Value Estimated, and Business Development Code, then select the required Opportunity (or create a new one if it does not exist). Click \"Submit for Approval\" to create the proposal. The Proposal ID is auto-generated based on the ID Settings.",
    tags: ["new proposal","add proposal","start proposal","proposal creation"]
  },
  {
    action: "edit",
    object: "proposal",
    scope: "module", section: "Proposals",
    question: "How do I edit an existing proposal's details?",
    answer: "In Proposal Management > Proposals, open the Actions menu for the proposal and select \"Edit\". You can modify the Proposal Name, Description, Proposal Type, Opportunity, Estimated Project Value, and Business Development Code.",
    tags: ["update proposal","modify proposal","change proposal details"]
  },
  {
    action: "delete",
    object: "proposal",
    scope: "module", section: "Proposals",
    question: "How do I delete a proposal?",
    answer: "In Proposal Management > Proposals, open the Actions menu for the proposal row and click \"Delete\" to permanently remove the proposal.",
    tags: ["remove proposal","delete bid record"]
  },
  {
    action: "approve",
    object: "proposal",
    scope: "module", section: "Proposals",
    question: "Who can approve or reject a proposal?",
    answer: "The \"Approve\" and \"Reject\" options on a proposal are visible only to users who are part of that proposal's Approval Workflow, configured in Proposal Management Settings.",
    tags: ["approve proposal","reject proposal","proposal approval workflow"]
  },
  {
    action: "track",
    object: "proposal",
    scope: "module", section: "Proposals",
    question: "How can I see the history of changes made to a proposal?",
    answer: "In Proposal Management > Proposals, open the Actions menu and select \"See History\" to view a log of created, edited, updated, and approval workflow status changes.",
    tags: ["proposal audit trail","change log","proposal history"]
  },
  {
    action: "export",
    object: "proposal",
    scope: "module", section: "Proposals",
    question: "Can I bulk create or update proposals using Excel?",
    answer: "Yes. In Proposal Management > Proposals, use the \"Export\" option: \"Download Excel\" exports current proposal data (sheet named by Proposal Type), and \"Upload Excel\" lets you create or update proposals in bulk using the provided sample template.",
    tags: ["excel upload","bulk import proposals","download proposals"]
  },
  {
    action: "filter",
    object: "proposal",
    scope: "module", section: "Proposals",
    question: "How do I filter or search the proposals list?",
    answer: "Use \"Search\" to find proposals by Proposal Name or Proposal ID, or click \"Filters\" to open a pop-up where you can set criteria to narrow down the proposal list. \"Manage Columns\" lets you choose and arrange which columns are visible.",
    tags: ["search proposals","filter proposals","manage columns"]
  },
  {
    action: "track",
    object: "proposal follow up",
    scope: "module", section: "Proposals",
    question: "How do I send reminder emails to a customer about a proposal?",
    answer: "Use the \"Follow Up\" feature on a proposal to send reminder emails to customers. Set a \"Recurrence Type\" (Daily, Weekly, Monthly, or None) to schedule repeated reminders or send a one-time email.",
    tags: ["follow up reminder","customer reminder","recurring email"]
  },
  {
    action: "create",
    object: "bid",
    scope: "module", section: "Bids",
    question: "How do I create a bid within a proposal?",
    answer: "Open the proposal's Bid tab and click \"Create Bid\". Fill in the Bid Name, Description, Proposal, and Bid Type in the pop-up window, then submit. Note: the Bid tab must first be enabled via permissions in Bid Management.",
    tags: ["create bid","new bid","add bid to proposal"]
  },
  {
    action: "export",
    object: "bid",
    scope: "module", section: "Bids",
    question: "Can I export or import bids in bulk?",
    answer: "Yes. In the Bids list, use \"Exports\" for Download Excel (export existing bid data) and Upload Excel (bulk-create bids via Excel upload).",
    tags: ["bulk bids","download bids","upload bids"]
  },
  {
    action: "view",
    object: "bid",
    scope: "module", section: "Bids",
    question: "What views are available for the Bids list?",
    answer: "The Bids list supports Table View, Grid View, and Kanban View. Choose a view and click \"Save Layout\" to keep it as the default.",
    tags: ["bid views","kanban bids","table view"]
  },
  {
    action: "create",
    object: "submission package",
    scope: "module", section: "Submission Packages",
    question: "How do I create a proposal submission package?",
    answer: "On the proposal, click \"Create Submission Package\". This opens a page to pull in data from previous tabs (Profile, Documents, Checklists, Submittals, Attachments), then choose how to send it to the client: Email to Client, Physical (mail), or Client Portal.",
    tags: ["submission package","create submittal package","send proposal to client"]
  },
  {
    action: "configure",
    object: "submission package workflow",
    scope: "module", section: "Submission Packages",
    question: "How do I set up an approval workflow for submission packages?",
    answer: "Go to Proposal Management Settings > Submission Packages > Setup Approval Workflow, click \"Create Level\" to choose approvers, assign the workflow type (all must approve / any one can approve), and add a level description. Use Edit or Delete in Actions to manage levels.",
    tags: ["submission approval workflow","configure workflow levels"]
  },
  {
    action: "track",
    object: "submission package issue",
    scope: "module", section: "Submission Packages",
    question: "What happens when a submission package is rejected?",
    answer: "A rejected submission package log appears in the Workflow Issues tab and cannot move forward until its linked issue is resolved. Use \"Assign To\" to assign the issue to a user with a due date, then click \"Resolve\" once fixed.",
    tags: ["submission package rejected","workflow issues","resolve issue"]
  },
  {
    action: "view",
    object: "submission package log",
    scope: "module", section: "Submission Packages",
    question: "Where can I see the status and history of a sent submission package?",
    answer: "In the Submission Packages Logs tab, use the row menu: \"Download\" retrieves the package, \"History\" shows creation and approval status history, \"Status\" shows/sets the configured status, and \"Delete\" removes the package.",
    tags: ["submission package status","submission package history","download package"]
  },
  {
    action: "create",
    object: "submittal",
    scope: "module", section: "Submittals",
    question: "How do I add a submittal letter to a proposal?",
    answer: "In the proposal's Submittals tab, click \"Create\". Choose \"Create New Letter\" to draft a new template in Google Docs, or \"Import From Global Data\" to reuse a configured template from Proposal Settings, optionally enabling \"Auto Fill Fields\" to populate submittal keys from the proposal profile.",
    tags: ["submittal letter","budgetary letter","create submittal"]
  },
  {
    action: "configure",
    object: "submittal template",
    scope: "module", section: "Settings",
    question: "How do I create a reusable submittal template?",
    answer: "Go to Proposal Management Settings > Submittals and click \"Create Template\", then choose \"Create Submittal Template\" (name only) or \"Upload Submittal Template\" (upload a Word document). Configure merge keys using double curly braces {{ }} format, then use \"Sync\" from the kebab menu to update keys after edits.",
    tags: ["submittal template","upload template","merge keys","sync template"]
  },
  {
    action: "create",
    object: "checklist",
    scope: "module", section: "Checklists",
    question: "How do I add a checklist to a proposal?",
    answer: "In the proposal's Checklists tab, click \"Create Form\", which shows the forms configured in Proposal Settings > Checklists. Fill in the fields and click Submit. Created forms are stored automatically in the Documents tab as a folder.",
    tags: ["proposal checklist","quality checklist","submit checklist"]
  },
  {
    action: "configure",
    object: "checklist template",
    scope: "module", section: "Settings",
    question: "How do I create a new checklist template for proposals?",
    answer: "Go to Proposal Management Settings > Checklists and click \"Create Checklist\". After naming it, click into the checklist to configure its form fields, use \"Preview Form\" to review, then \"Save Changes\".",
    tags: ["checklist template","configure checklist form"]
  },
  {
    action: "define",
    object: "proposal type",
    scope: "global", section: "Settings",
    question: "How do I set up a new proposal type?",
    answer: "Go to Global Data > Company > Proposal Management > Proposal Types and click \"Proposal Type\" (or \"Create\") to open a pop-up for entering the Proposal Type Name and Description. Click into the created type to add and configure form sections and fields, then \"Save Changes\".",
    tags: ["proposal type setup","configure proposal type","add proposal type"]
  },
  {
    action: "define",
    object: "bid type",
    scope: "global", section: "Settings",
    question: "How do I create a bid type?",
    answer: "Go to Proposal Management Settings (or Global Data > Company > Proposal Management) > Bid Types and click \"Bid Type\". Enter a Name, Description, and Estimate Type in the pop-up, then submit.",
    tags: ["bid type","define bid category","estimate type"]
  },
  {
    action: "define",
    object: "delivery method",
    scope: "global", section: "Settings",
    question: "What is the Delivery Method setting for proposals?",
    answer: "Delivery Method defines how a proposal is submitted or sent to the recipient. In Proposal Management Settings > Delivery Method, click \"Add\" to create a new row, or use \"Delete\" to remove one.",
    tags: ["proposal delivery method","submission channel"]
  },
  {
    action: "configure",
    object: "status",
    scope: "global", section: "Settings",
    question: "How do I configure custom statuses for proposals and submission packages?",
    answer: "Go to Proposal Management Settings (or Global Data) > Status Configuration. Click \"Add Status\" to enter a status name and color for either the Proposal or Submission Package tab. Two standard statuses can be set as \"Success\" or \"Failure\" via Edit.",
    tags: ["proposal status","custom status colors","status configuration"]
  },
  {
    action: "configure",
    object: "approval workflow",
    scope: "global", section: "Settings",
    question: "How do I set up the approval workflow for proposals?",
    answer: "Go to Global Data > Company > Proposal Management > Approval Workflow and click \"Create Level\" to select approvers and the workflow type (all must approve, or any one can approve). Multiple levels can be created. Use \"Open Workflow Graph View\" to see the workflow as a tree diagram.",
    tags: ["proposal approval levels","workflow graph","create approval level"]
  },
  {
    action: "configure",
    object: "id settings",
    scope: "global", section: "Settings",
    question: "How do I configure automatic ID generation for proposals?",
    answer: "Go to Global Data > Company > Proposal Management > ID Settings. Choose \"System Default\" for automatic IDs or \"Custom\" to configure separator, serial number, date, month, and year fields, then click \"Save Changes\". Separate ID settings exist for Proposal and Submission Package.",
    tags: ["proposal id format","custom id","auto generated id"]
  },
  {
    action: "assign",
    object: "user permission",
    scope: "global", section: "Settings",
    question: "How do I manage user groups and permissions for Proposal Management?",
    answer: "Go to Proposal Management Settings > Users and Permissions and click \"Add User Group\" to name the group and select permissions, then \"Add Users\" to assign members. Use the kebab menu to Edit or Delete a group.",
    tags: ["proposal user group","permissions setup","add users"]
  },
  {
    action: "define",
    object: "project type",
    scope: "global", section: "Settings",
    question: "How are project types categorized in Proposal Management settings?",
    answer: "Project Types are categorized by Field/Shop, Material, and New/Repair. Click \"Add\" to add a row, edit fields directly (dropdowns for Field/Shop and New/Repair), or use \"Upload Excel\" to bulk create or update project types.",
    tags: ["project type settings","field shop repair","bulk upload project types"]
  },
  {
    action: "view",
    object: "proposal dashboard",
    scope: "module", section: "Dashboard",
    question: "What does the Proposal Management Dashboard show?",
    answer: "Navigate to Proposal Management > My Dashboard. It shows Total Proposals by status (Created, In Progress, Approved/Rejected), an Estimate Success Rate graph, Calendar Events, Issues/Forms/Approvals/Proposals summaries, a To Do List, and Proposal Deadlines based on due dates. Data shown is scoped to the logged-in user unless they are a system admin.",
    tags: ["proposal dashboard","my dashboard","proposal overview"]
  },
  {
    action: "view",
    object: "proposal success rate",
    scope: "module", section: "Analytics & Reports",
    question: "How do I see the success rate of proposals?",
    answer: "Go to the Proposal Success Rate report. It shows two pie charts: \"Success Rate (Qty of Proposals)\" by status count, and \"Success Rate (Currency Value)\" by submitted amount. Use the Proposal Type dropdown to filter and click legend items to toggle statuses.",
    tags: ["success rate report","win rate","proposal analytics"]
  },
  {
    action: "view",
    object: "proposal types analytics",
    scope: "module", section: "Analytics & Reports",
    question: "Where can I see proposal quantity and value broken down by bid type?",
    answer: "The \"Types of Proposals\" report shows two bar graphs: Quantity of proposals and Amount submitted, both broken down by bid type within each proposal type. Adjust the date range and download in Excel, PDF, PPT, or JPEG.",
    tags: ["proposal analytics by bid type","proposal volume report"]
  },
  {
    action: "track",
    object: "to do item",
    scope: "module", section: "To Do",
    question: "How do I create a to-do task for a proposal?",
    answer: "In Proposal Management > To Do, click \"Create To Do List\" and fill in Title, Description, Date, and Time, then submit. Use \"Assign To\" to assign the task to a user, and click the double-tick icon to mark it complete.",
    tags: ["proposal task","to-do list","assign task"]
  },
  {
    action: "track",
    object: "proposal issue",
    scope: "module", section: "Issues",
    question: "How are proposal approval rejections tracked?",
    answer: "When a proposal is rejected by an approver, it appears in the proposal's Issues tab. The proposal cannot proceed until the associated issue is resolved. Use Search (by Issue ID), Filters (Log ID, Raised On, Raised By), and \"Assign To\" to manage it.",
    tags: ["proposal rejection","issue tracking","workflow rejection"]
  },
  {
    action: "link",
    object: "proposal customer",
    scope: "module", section: "Proposals",
    question: "How do I add a new customer directly from a proposal?",
    answer: "In the proposal Profile's Project Location section, use \"Create a Customer\" or \"Create a Customer POC\" to add a new customer or point of contact inline; this also creates a record in the global Customer database.",
    tags: ["add customer","customer poc","create customer from proposal"]
  },
  {
    action: "assign",
    object: "proposal team",
    scope: "module", section: "Proposals",
    question: "How do I add users or crews to a proposal team?",
    answer: "In the proposal's Teams tab, click \"Add User\" to select individuals from the global roster, or \"Add Crew\" to add a crew from Global Data. Use the kebab menu's Delete to remove members.",
    tags: ["proposal team","add user to proposal","add crew"]
  },
  {
    action: "track",
    object: "proposal comment",
    scope: "module", section: "Proposals",
    question: "How do I comment on a proposal and pin it to a report?",
    answer: "In the proposal Profile, click \"Comments\" to add comments and attachments. Use the comment menu to Edit or Delete your own comment, or \"Add to Report\" to pin it for inclusion in the weekly report.",
    tags: ["proposal comments","pin comment","weekly report"]
  },
  {
    action: "submit",
    object: "proposal document",
    scope: "module", section: "Proposals",
    question: "Where are all files related to a proposal stored?",
    answer: "The proposal's Documents tab automatically organizes uploads from Comments, Communication, Checklists, Submittals, Submission Package, and Bids into folders. Use \"New Folder\" to add a custom folder and \"Upload Documents\" to add files.",
    tags: ["proposal documents","document storage","upload files"]
  },
  {
    action: "submit",
    object: "proposal email",
    scope: "module", section: "Proposals",
    question: "Can I send emails to clients directly from a proposal?",
    answer: "Yes. In the proposal's Communication tab, click \"Compose Mail\" to send an email with To, CC, BCC, Subject, Message, and attachments. Sent submission package emails are also stored here, organized into Inbox, Sent, Drafts, Starred, and Trash.",
    tags: ["proposal email","compose mail","client communication"]
  },
  {
    action: "configure",
    object: "proposal calendar event",
    scope: "module", section: "Proposals",
    question: "How do I create a calendar event for a proposal deadline?",
    answer: "In the Proposal Management Calendar, click \"Create Event\" and enter the Title, Date, Time, Category, and Description. Events created here are automatically linked to the Proposal module and can sync with Outlook via Global Data > Marketplace > Microsoft Outlook.",
    tags: ["proposal calendar","create event","outlook sync"]
  }
];

const QA_TENDERMANAGEMENT = [
  {
    action: "create",
    object: "bid",
    scope: "module", section: "Bids",
    question: "How do I create a tender/bid for a proposal?",
    answer: "There is no separate \"Tender\" object in Arena — bids are created within a Proposal. Open the proposal's Bid tab and click \"Create Bid\", then fill in Bid Name, Description, Proposal, and Bid Type. Note: the Bid tab must be enabled via permissions in Bid Management first.",
    tags: ["create tender","new bid","tender creation","bid management"]
  },
  {
    action: "define",
    object: "bid type",
    scope: "global", section: "Bid Types",
    question: "How do I define categories for tenders/bids?",
    answer: "Go to Proposal Management Settings > Bid Types (or Global Data > Company > Proposal Management > Bid Types) and click \"Bid Type\" to enter a Name, Description, and Estimate Type defining how the bid is structured and evaluated.",
    tags: ["tender category","bid type setup","estimate type"]
  },
  {
    action: "search",
    object: "bid",
    scope: "module", section: "Bids",
    question: "How do I find bids linked to a specific proposal?",
    answer: "In the proposal's Bid tab, use the \"Search\" option to search for bids linked to that particular proposal.",
    tags: ["search bids","find tender","bid lookup"]
  },
  {
    action: "export",
    object: "bid",
    scope: "module", section: "Bids",
    question: "Can I bulk create bids from a spreadsheet?",
    answer: "Yes. In the proposal's Bid tab, use \"Exports\" > \"Upload excel\" to create bids via Excel upload, or \"Download Excel\" to export existing bid data.",
    tags: ["bulk create bids","excel upload","download bids"]
  },
  {
    action: "view",
    object: "bid",
    scope: "module", section: "Bids",
    question: "What layout options are available for viewing bids?",
    answer: "The Bids list can be displayed as Table View, Grid View, or Kanban View. Choose a layout and click \"Save layout\" to keep it as your default.",
    tags: ["bid views","kanban view","table view"]
  },
  {
    action: "create",
    object: "rfq",
    scope: "project", section: "RFQ",
    question: "How do I invite vendors to quote (create an RFQ)?",
    answer: "Go to Procurement > RFQ and click \"Create\" to start a new Request for Quotation. Link it to the relevant requisitions (REQ), update quantities and specifications, then select vendors from the pre-configured list. Vendor ratings are shown next to each name to aid selection.",
    tags: ["request for quotation","invite vendors","create rfq","tender invitation"]
  },
  {
    action: "configure",
    object: "vendor instructions",
    scope: "project", section: "RFQ",
    question: "How do I set standard instructions for vendors on an RFQ?",
    answer: "In Procurement > RFQ, click \"Vendor Instructions\" to configure default guidelines, terms, and conditions sent to vendors for consistent communication.",
    tags: ["vendor instructions","rfq terms","tender conditions"]
  },
  {
    action: "track",
    object: "rfq status",
    scope: "project", section: "RFQ",
    question: "How do I track the status of an RFQ sent to vendors?",
    answer: "RFQ status is tracked through a card view in Procurement > RFQ showing stages such as \"Created,\" \"Email Sent to Vendors,\" and \"PO Approved.\" Each card shows key information so you can quickly assess pending actions.",
    tags: ["rfq tracking","tender status","quotation status"]
  },
  {
    action: "submit",
    object: "vendor response",
    scope: "project", section: "Bid Comparison",
    question: "Where do I enter vendor quotes for comparison?",
    answer: "Go to Procurement > Vendor Responses, select the relevant RFQ from the list on the left, and enter each vendor's response including cost and lead time.",
    tags: ["enter vendor quotes","vendor responses","tender bids"]
  },
  {
    action: "view",
    object: "bid comparison",
    scope: "project", section: "Bid Comparison",
    question: "How do I compare vendor bids to select a winner?",
    answer: "After entering vendor responses in Procurement > Vendor Responses, move to the \"Vendor Analysis and Selection\" tab to evaluate and compare vendor responses based on cost, lead time, and other relevant factors.",
    tags: ["compare bids","vendor analysis","select vendor","tender comparison"]
  },
  {
    action: "link",
    object: "bid calendar event",
    scope: "module", section: "Proposals",
    question: "Can bid-related deadlines appear on a calendar?",
    answer: "Yes. Events created within the Proposal Management Calendar can be linked to different modules including Opportunity, Proposal, and Bid Management, so tender/bid deadlines can be tracked alongside proposal events.",
    tags: ["bid deadlines","tender calendar","event linking"]
  }
];

const QA_PROCUREMENT = [
  {
    action: "create",
    object: "requisition",
    scope: "project", section: "Requisitions",
    question: "How do I create a requisition (REQ)?",
    answer: "Go to Procurement > REQ and click \"Create\". Choose the requisition type (Equipment, Material, Equipment Part, or Delivery Service), fill in details and specifications, then click Submit.",
    tags: ["create req","new requisition","request material"]
  },
  {
    action: "assign",
    object: "requisition",
    scope: "project", section: "Requisitions",
    question: "How do I assign a requisition to someone after creating it?",
    answer: "After creating a REQ in Procurement > REQ, use the \"Assign To\" button to assign the requisition to a specific user.",
    tags: ["assign req","requisition owner","delegate requisition"]
  },
  {
    action: "track",
    object: "requisition issue",
    scope: "project", section: "Requisitions",
    question: "Where do I see rejected requisitions?",
    answer: "Raised issues for rejected REQs can be tracked in the REQ module's \"Workflow Issues\" tab.",
    tags: ["rejected req","requisition issues","workflow issues"]
  },
  {
    action: "create",
    object: "requisition from lor",
    scope: "project", section: "Requisitions",
    question: "Can I create a requisition from a rejected Load Out Request?",
    answer: "Yes. In Procurement > REQ, you can create REQs from rejected LORs by clicking \"LOR from REQ\".",
    tags: ["req from lor","load out request requisition"]
  },
  {
    action: "configure",
    object: "requisition form",
    scope: "global", section: "Settings",
    question: "How do I customize the fields on the requisition form?",
    answer: "Go to Procurement Settings > REQ Form and use Inncircles Arena's form builder to create multiple sections with different field types (paragraph, single select, multi-select, tables, etc.).",
    tags: ["req form builder","configure requisition fields"]
  },
  {
    action: "create",
    object: "rfq",
    scope: "project", section: "RFQ",
    question: "How do I create an RFQ from a requisition?",
    answer: "Go to Procurement > RFQ and click \"Create\". Link relevant procurement packages to the corresponding requisitions (REQ), update quantities/specifications, then select vendors from the pre-configured list to request quotes.",
    tags: ["create rfq","request for quotation","link req to rfq"]
  },
  {
    action: "submit",
    object: "vendor response",
    scope: "project", section: "Vendor Responses",
    question: "How do I record a vendor's quote for an RFQ?",
    answer: "Go to Procurement > Vendor Responses, select the RFQ from the list on the left, and enter the vendor's cost and lead time. Then move to \"Vendor Analysis and Selection\" to compare responses.",
    tags: ["vendor quote entry","record vendor response"]
  },
  {
    action: "create",
    object: "purchase order",
    scope: "project", section: "Purchase Orders",
    question: "How do I create a Purchase Order from an RFQ?",
    answer: "Go to Procurement > Purchase Order, select the procurement type tab (Material, Equipment, Equipment Part, or Delivery Service), click \"Create\", select the relevant RFQ, enter quantities/pricing/tax code, then click Submit.",
    tags: ["create po","purchase order from rfq","generate po"]
  },
  {
    action: "create",
    object: "direct purchase order",
    scope: "project", section: "Purchase Orders",
    question: "Can I create a Purchase Order without going through an RFQ?",
    answer: "Yes. Go to Procurement > Direct Purchase Order, select the procurement type tab, click \"Create\", and select the REQ directly (skipping the RFQ step). Enter pricing and lead time, select the tax code in the Preview PO step, then Submit.",
    tags: ["direct po","skip rfq","purchase order without quote"]
  },
  {
    action: "view",
    object: "purchase order",
    scope: "project", section: "Purchase Orders",
    question: "Where can I see all Purchase Orders and their status?",
    answer: "Go to Procurement > Purchase Order Master to view all Purchase Orders along with their current status, history, and linked REQs.",
    tags: ["po master","purchase order list","po status"]
  },
  {
    action: "configure",
    object: "purchase order form",
    scope: "global", section: "Settings",
    question: "How do I configure the Purchase Order form fields?",
    answer: "Go to Procurement Settings > PO Configuration and use the form builder to configure the Purchase Order form separately for Material, Equipment, Equipment Part, and Delivery Service tabs.",
    tags: ["po form configuration","purchase order fields"]
  },
  {
    action: "create",
    object: "delivery receipt",
    scope: "project", section: "Delivery Receipts",
    question: "How do I create a Delivery Receipt for a Purchase Order?",
    answer: "Go to Procurement > Delivery Receipts and click \"Create\". Select the vendor and the associated Purchase Order, fill in receiving quantity and additional info, then click Submit.",
    tags: ["delivery receipt","dr creation","receive goods"]
  },
  {
    action: "configure",
    object: "delivery receipt form",
    scope: "global", section: "Settings",
    question: "How do I configure the Delivery Receipt form?",
    answer: "Go to Procurement Settings > Delivery Request and use the form builder to configure the Delivery Receipt form for Material, Equipment, Equipment Part, and Delivery Service.",
    tags: ["delivery receipt settings","configure delivery form"]
  },
  {
    action: "create",
    object: "invoice",
    scope: "project", section: "Invoices",
    question: "How do I create an invoice for a procured item?",
    answer: "Go to Procurement > Invoices, click \"Create\", choose the vendor, expand to view associated Purchase Orders, and select the relevant one. Enter invoice number, date, payment terms, select items for billing, then enter the subtotal and tax amount before submitting.",
    tags: ["create invoice","procurement billing","invoice from po"]
  },
  {
    action: "configure",
    object: "invoice form",
    scope: "global", section: "Settings",
    question: "How do I configure the Invoice form fields?",
    answer: "Go to Procurement Settings > Invoice and use the form builder to configure the invoice form for Equipment, Material, Equipment Part, and Delivery Service, with multiple sections and field types.",
    tags: ["invoice settings","configure invoice form"]
  },
  {
    action: "create",
    object: "pickup request",
    scope: "project", section: "Pickup Requests",
    question: "How do I create a Pickup Request for procured items?",
    answer: "Go to Procurement > Pickup Request and click \"Create\". Select the Vendor and Purchase Order, fill in the Pickup Date and Address, set the Pickup Request status, then click Submit.",
    tags: ["pickup request","schedule pickup","procurement pickup"]
  },
  {
    action: "configure",
    object: "pickup request form",
    scope: "global", section: "Settings",
    question: "How do I configure the Pickup Request form?",
    answer: "Go to Procurement Settings > Pickup Request and configure the form fields using the form builder, then click \"Save changes\".",
    tags: ["pickup request settings","configure pickup form"]
  },
  {
    action: "view",
    object: "procurement communication",
    scope: "project", section: "Communications",
    question: "Where can I find emails related to procured items?",
    answer: "Go to Procurement > Communications, which is a mail repository where all emails linked to procured items are tracked.",
    tags: ["procurement mail","communication log","procurement emails"]
  },
  {
    action: "configure",
    object: "approval workflow",
    scope: "global", section: "Settings",
    question: "How do I set up approval workflows for procurement documents?",
    answer: "Go to Procurement Settings > Approval Workflow and click \"Create Level\" to build a workflow. You can create multiple levels and choose \"All must approve\" or \"Any one can approve\" for each level. This applies to Requisition forms, Purchase Orders, Invoices, and Pickup Requests.",
    tags: ["procurement approval workflow","create level","po approval"]
  },
  {
    action: "configure",
    object: "id settings",
    scope: "global", section: "Settings",
    question: "How do I configure ID formats for procurement documents?",
    answer: "Go to Procurement > ID Settings, select System Default for auto-generated IDs, or Custom to choose fields and their order, then click \"Save Changes\".",
    tags: ["procurement id format","custom id","auto id"]
  },
  {
    action: "configure",
    object: "issue priority",
    scope: "global", section: "Settings",
    question: "How do I set priority levels for procurement issues?",
    answer: "Go to Procurement Settings > Issues Priority and click \"Add Priority\" to create priority levels along with their Due Hours.",
    tags: ["issue priority","procurement issue sla","due hours"]
  }
];

const QA_TIMEMANAGEMENT = [
  {
    action: "submit",
    object: "timesheet",
    scope: "project", section: "Timesheet Logs",
    question: "How do I log my own work hours?",
    answer: "Go to My Timesheet, select the Company/Project/Work Order/GL Code and the Template (auto-populated from your default setting), pick a Date Range, click \"Add\" to insert a row, fill in phase code/earning code/hours, then click \"Submit for Approval\" (or \"Save as Draft\" to save incomplete data).",
    tags: ["log hours","my timesheet","submit timesheet","enter hours"]
  },
  {
    action: "submit",
    object: "crew timesheet",
    scope: "project", section: "Timesheet Logs",
    question: "How does a supervisor log hours for an entire crew?",
    answer: "Go to My Crew Timesheet, select the Company/Project/Work Order/GL Code and Crew, choose a Template and Date Range, click \"Add\" to add employee rows, fill in hours per phase/earning code, then \"Submit for Approval\". Timesheet settings and a workflow must be configured for the crew first.",
    tags: ["crew timesheet","log crew hours","supervisor timesheet","foreman timesheet"]
  },
  {
    action: "approve",
    object: "timesheet log",
    scope: "project", section: "Timesheet Logs",
    question: "How do I approve or reject a submitted timesheet?",
    answer: "Go to My Timesheet Logs (or My Crew Timesheet Logs), select a submitted log, then use the \"Approve\" or \"Reject\" buttons shown on the right side, optionally adding comments. These buttons only appear for users designated as approvers in the Approval Workflow.",
    tags: ["approve timesheet","reject timesheet","timesheet approval"]
  },
  {
    action: "track",
    object: "timesheet status",
    scope: "project", section: "Timesheet Logs",
    question: "What statuses can a timesheet log have?",
    answer: "A timesheet log can be Draft (incomplete, saved without mandatory fields except Employee), Submitted for Approval, Workflow in Progress (approved at one level, pending another), Completed (approved at all levels, locked), or Rejected (creates an issue for correction).",
    tags: ["timesheet statuses","draft","workflow in progress","completed","rejected"]
  },
  {
    action: "export",
    object: "timesheet log",
    scope: "project", section: "Timesheet Logs",
    question: "What export formats are available for timesheet logs?",
    answer: "From the Export menu in Timesheet Logs, you can download VP Excel (.xlsx), VP CSV, QuickBooks (.iif), or SAP (.csv) formats after selecting date range, log level, crews/users, mode, and earning codes. Only Admin users have access to Export.",
    tags: ["export timesheet","quickbooks export","sap export","csv download"]
  },
  {
    action: "filter",
    object: "timesheet log",
    scope: "project", section: "Timesheet Logs",
    question: "How do I filter timesheet logs by project, crew, or status?",
    answer: "In My Timesheet Logs / My Crew Timesheet Logs, click \"Filters\" to narrow by Log Level Category, Log Level, Crew, Logged By, Mode (Daily/Weekly by Day/Weekly), Status, and Date Range. Use \"Save filters\" to keep a filter set, \"Reset\" to revert, or \"Clear All\" to reset to defaults.",
    tags: ["filter timesheets","timesheet search","log level filter"]
  },
  {
    action: "track",
    object: "timesheet issue",
    scope: "project", section: "Timesheet Issues",
    question: "What happens when a timesheet is rejected?",
    answer: "A rejected timesheet automatically creates an entry in Timesheet Issues with comments and supporting info. The issue stays active until the timesheet is corrected and resubmitted. Use \"Assign To\" to delegate and \"Due Date\" to set a deadline.",
    tags: ["timesheet issue","rejected timesheet","resubmit timesheet"]
  },
  {
    action: "configure",
    object: "approval workflow",
    scope: "global", section: "Settings",
    question: "How do I create an approval workflow for timesheets?",
    answer: "Go to Settings > Timesheet Workflow > Create Workflow, click \"Create Approval Workflow\", name it, then click \"Create Level\" to add approvers by User or by Role, choosing \"All must approve\" or \"Anyone can approve\" for each level.",
    tags: ["timesheet approval workflow","create workflow","approval levels"]
  },
  {
    action: "assign",
    object: "approval workflow",
    scope: "global", section: "Settings",
    question: "How do I assign an approval workflow to a user or crew?",
    answer: "Go to Settings > Timesheet Workflow > Assign Workflow, select a User or Crew, choose the Approval Workflow to apply, and click \"Save Changes\". Use \"Copy Approval Workflow To\" to apply the same workflow to multiple users/crews at once.",
    tags: ["assign timesheet workflow","copy workflow","workflow assignment"]
  },
  {
    action: "configure",
    object: "timesheet mode",
    scope: "global", section: "Settings",
    question: "How do I set whether timesheets are logged Daily, Weekly, or Weekly by Day?",
    answer: "Go to Timesheet Settings > Timesheet Mode. Under \"My Timesheet\" (individual) or \"My Crew Timesheet\" (per crew), select Daily, Weekly by Day, or Weekly, choose a Default Template, and click \"Save Changes\". Use \"Copy To\" to apply the same mode to other users or crews.",
    tags: ["timesheet mode","daily weekly configuration","default template"]
  },
  {
    action: "configure",
    object: "earning code",
    scope: "global", section: "Settings",
    question: "How do I create earning codes for payroll?",
    answer: "Go to Timesheet Settings > Earning Codes, click \"Add\" to insert a row, enter Code, Description, and Short Name, set the Data Type (Hours or Amount), and choose Payroll Hours and/or Project Hours. \"Split Headers\" places the code under Phase Codes in weekly templates.",
    tags: ["earning codes","payroll codes","create earning code"]
  },
  {
    action: "configure",
    object: "timesheet template",
    scope: "global", section: "Settings",
    question: "How do I build a custom timesheet template?",
    answer: "Go to Timesheet Settings > Timesheet Templates, click \"Create\", then open the new template to configure Standard and Configurable fields via \"Add Field\". Choose whether earning codes display as a \"Column\" or \"Split Time Header\", then \"Save Changes\".",
    tags: ["timesheet template builder","configurable fields","custom timesheet"]
  },
  {
    action: "configure",
    object: "payroll locking",
    scope: "global", section: "Settings",
    question: "How do I lock payroll periods to prevent further edits?",
    answer: "Go to Timesheet Settings > Payroll Locking. Choose Daily, Weekly, or Monthly mode. In Weekly mode pick the lock day and time; in Monthly mode choose Start of Month, End of Month, or a Custom date, then set the lock time.",
    tags: ["payroll locking","lock timesheet period","prevent edits"]
  },
  {
    action: "track",
    object: "timesheet reconciliation",
    scope: "project", section: "Reconciliation",
    question: "How do I manually reconcile timesheet data?",
    answer: "Go to Timesheet Reconciliation > Timesheet, choose Daily & Weekly by Day or Weekly mode, click \"Create Log\" and select a date range to view submitted logs, then click the \"Phase code\" button for an employee to reconcile that entry manually.",
    tags: ["manual reconciliation","reconcile timesheet","timesheet accuracy"]
  },
  {
    action: "import",
    object: "gate log reconciliation",
    scope: "project", section: "Reconciliation",
    question: "Can I reconcile timesheets using uploaded gate/access logs?",
    answer: "Yes. Go to Timesheet Reconciliation > Gate Logs, select Daily & Weekly by Day or Weekly mode, then use \"Upload Logs\" with the provided template to upload employee/crew hour verification data. The system validates Employee IDs and creates batches for organized reconciliation.",
    tags: ["gate logs","upload reconciliation","batch reconciliation"]
  },
  {
    action: "view",
    object: "timesheet data summary",
    scope: "project", section: "Analytics & Reports",
    question: "How do I see total logged hours broken down by project, crew, or phase code?",
    answer: "Go to Timesheet Data Summary and switch between the People, Crew, Phase Codes, and Project tabs. Select a date range and log level, then use \"Download Excel\" to export. Toggle \"Submitted\" or \"Approved\" at the top right to filter by log status.",
    tags: ["timesheet summary","hours by project","hours by crew","phase code report"]
  },
  {
    action: "create",
    object: "crew",
    scope: "global", section: "Rosters & Crews",
    question: "How do I create a new crew?",
    answer: "Go to Global Data > Crews and click \"Create\". Enter the Crew Name, choose Supervisors and Foremen from their dropdowns, select Rosters (system and non-system users) for the crew, then click \"Submit\".",
    tags: ["create crew","new crew","global crew setup"]
  },
  {
    action: "create",
    object: "project crew",
    scope: "project", section: "Rosters & Crews",
    question: "How do I add a crew to a specific project?",
    answer: "Go to Project Setup > Roster > Project Crews and click \"Create Crew\" to build one manually, or \"Copy Crews from Global Data\" to import existing crews. Use \"Map Crews to Projects\" to copy a crew to other projects.",
    tags: ["project crew","add crew to project","copy crew"]
  },
  {
    action: "create",
    object: "system user roster",
    scope: "project", section: "Rosters & Crews",
    question: "How do I add a system user to a project roster?",
    answer: "Go to Project Setup > Roster > System User, click \"Add\", and select users from Global Data (Global Data > Users & Permissions > Global Rosters). Selected users appear on the right side of the dialog; click \"Submit\" to add them.",
    tags: ["add system user","project roster","system user assignment"]
  },
  {
    action: "create",
    object: "non-system user roster",
    scope: "project", section: "Rosters & Crews",
    question: "How do I add a temporary (non-system) worker to a project?",
    answer: "Go to Project Setup > Roster > Non System User and click \"Add\" to manually create one, or \"Get Users from Global Data\" to select existing non-system users. Fill required fields and Submit.",
    tags: ["non-system user","temp worker","add temporary user"]
  },
  {
    action: "configure",
    object: "roster custom column",
    scope: "global", section: "Settings",
    question: "How do I add custom fields to the roster tables?",
    answer: "Go to Global Settings > Roster Settings and use \"Configurable Fields\" to add custom columns, choosing a field type (Attachment, Check box, Date, Label, Multi select, Paragraph, Roster, Scribble, Single select, Table, Text box, Time, Signature). Click \"Save Changes\" to apply.",
    tags: ["roster custom fields","configure roster columns","field types"]
  },
  {
    action: "export",
    object: "roster",
    scope: "project", section: "Rosters & Crews",
    question: "Can I bulk upload rosters via Excel?",
    answer: "Yes. On the Roster (System Users or Non-System Users) page, use \"Upload Excel\" to bulk-add roster records, or \"Download Excel\" to export the current roster list.",
    tags: ["bulk upload roster","download roster excel"]
  }
];

const QA_INVENTORYMANAGEMENT = [
  {
    action: "create",
    object: "material",
    scope: "global", section: "Inventory Master",
    question: "How do I add a new material to the inventory?",
    answer: "Go to Inventory Master and click \"Add\". Fill in Material, Quantity, UOM (Unit of Measurement), and Inventory Location, then click \"Submit\" to add it to the master list.",
    tags: ["add material","new inventory item","create material record"]
  },
  {
    action: "edit",
    object: "material quantity",
    scope: "global", section: "Inventory Master",
    question: "How do I add more stock to an existing material without creating a duplicate?",
    answer: "In Inventory Master, click \"Add Quantity\", select the material whose quantity you want to update, and enter the additional amount. The old quantity shows what's available and the new quantity is the amount being added.",
    tags: ["increase stock","add quantity","restock material"]
  },
  {
    action: "import",
    object: "material",
    scope: "global", section: "Inventory Master",
    question: "Can I bulk import materials into the Inventory Master?",
    answer: "Yes. Click \"Upload Excel\" in Inventory Master and use the provided sample template to bulk-add materials in the correct format.",
    tags: ["bulk import materials","upload excel inventory"]
  },
  {
    action: "configure",
    object: "custom column",
    scope: "global", section: "Inventory Master",
    question: "Can I add custom fields to inventory records?",
    answer: "Yes. Click \"Add Custom Column\" in Inventory Master to add a column with a chosen type: Text, Single Select, Multi-select, or Date.",
    tags: ["custom inventory field","add column","inventory customization"]
  },
  {
    action: "define",
    object: "inventory location",
    scope: "global", section: "Inventory Master",
    question: "How do I set up warehouse/inventory locations?",
    answer: "In Inventory Master, open \"Inventory Locations\" and click \"Add Location\" to enter a name and physical location for each material inventory owned by the organization.",
    tags: ["inventory location","warehouse setup","add location"]
  },
  {
    action: "delete",
    object: "material",
    scope: "global", section: "Inventory Master",
    question: "How do I remove a material from the Inventory Master?",
    answer: "Click the red trash can icon next to the material entry in Inventory Master. Deletion is only allowed if the material is not currently in use elsewhere.",
    tags: ["delete material","remove inventory record"]
  },
  {
    action: "export",
    object: "material",
    scope: "global", section: "Inventory Master",
    question: "How do I export the full inventory list?",
    answer: "Click \"Download Excel\" in Inventory Master to extract all material information into an Excel file, useful for records or time-stamped inventory snapshots.",
    tags: ["export inventory","download excel","inventory snapshot"]
  },
  {
    action: "create",
    object: "pickup ticket",
    scope: "project", section: "Pickup Ticket",
    question: "How do I create a Pick Up Ticket to ship material out of inventory?",
    answer: "In Pick Up Ticket, click \"Add\" (top left), fill in the shipment details and add the materials to be shipped, then click \"Submit\". This generates a ticket ID with default status \"RAISED\", which is then sent for approval to the warehouse manager.",
    tags: ["pickup ticket","create shipment order","raise pickup ticket"]
  },
  {
    action: "approve",
    object: "pickup ticket",
    scope: "project", section: "Pickup Ticket",
    question: "How is a Pick Up Ticket approved or rejected?",
    answer: "A raised Pick Up Ticket is sent to the warehouse manager (or whoever holds the relevant permission) for approval. If rejected, the reject button turns red and the ticket stays \"REJECTED\" until modified and resubmitted; once approved, the status changes to \"APPROVED\".",
    tags: ["approve pickup ticket","reject pickup ticket","ticket status"]
  },
  {
    action: "export",
    object: "pickup ticket",
    scope: "project", section: "Pickup Ticket",
    question: "Can I export pickup tickets to Excel?",
    answer: "Yes. Use the \"Download Excel\" button on the Pick Up Ticket screen to export all tickets. \"Filters\" and \"Search\" let you narrow results by ID or status first.",
    tags: ["export pickup tickets","download excel","filter pickup tickets"]
  },
  {
    action: "create",
    object: "ship ticket",
    scope: "project", section: "Ship Ticket",
    question: "How do I create a Ship Ticket for materials leaving the warehouse?",
    answer: "In Ship Ticket, click \"Add\", then select the corresponding Pick Up Ticket number. Material details auto-populate from that pick up ticket. Fill in the remaining details and click \"Submit\" to generate a Ship Ticket ID.",
    tags: ["ship ticket","create shipment","ship materials"]
  },
  {
    action: "view",
    object: "ship ticket",
    scope: "project", section: "Ship Ticket",
    question: "Why can't I add a certain material to a Ship Ticket?",
    answer: "Only material currently in stock is shown for Ship Tickets. If a material is not available in stock, it cannot be added or shipped until it is restocked. Also, only approved pick up tickets appear in the ship ticket dropdown.",
    tags: ["material not available","out of stock","ship ticket restrictions"]
  },
  {
    action: "create",
    object: "return ticket",
    scope: "project", section: "Return Ticket",
    question: "How do I create a Return Ticket for unused or problematic material?",
    answer: "In Return Ticket, click \"Add\", then select the Pick Up Ticket number the return corresponds to. Shipped and already-returned quantities auto-populate. Fill in the remaining fields and click \"Submit\" to generate a Return Ticket ID.",
    tags: ["return ticket","return material","material return process"]
  },
  {
    action: "view",
    object: "return ticket",
    scope: "project", section: "Return Ticket",
    question: "What pick up tickets are eligible for a return?",
    answer: "Only approved pick up tickets that have shipped material will appear in the drop-down when creating a return ticket.",
    tags: ["eligible return","pickup ticket shipped","return eligibility"]
  },
  {
    action: "create",
    object: "load out request",
    scope: "project", section: "Load Out Requests",
    question: "How do I request equipment to be sent to a job site (LOR)?",
    answer: "In Load Out Request, click \"Add\" to open the Request Form. Enter Equipment/Accessory required, Quantity, UOM, Requested By, Required Date, Planned Return Date, Supervisor, and Job ID/Name, then submit. The LOR status becomes \"REQUESTED\".",
    tags: ["load out request","request equipment","create lor"]
  },
  {
    action: "approve",
    object: "load out request",
    scope: "project", section: "Load Out Requests",
    question: "Who approves a Load Out Request and what happens next?",
    answer: "The warehouse manager (or person with equipment management approval permission) sees \"Approve\" and \"Reject\" buttons on a submitted LOR. Approving sets status to \"APPROVED\"; rejecting turns the button red and sets status to \"REJECTED\", allowing the requester to modify and resubmit based on comments.",
    tags: ["approve lor","reject lor","warehouse manager approval"]
  },
  {
    action: "track",
    object: "load out request status",
    scope: "project", section: "Load Out Requests",
    question: "What are all the possible statuses of a Load Out Request?",
    answer: "An LOR can move through: Requested, Approved, Rejected, Check Out, Partial Check Out, Check Out With Issue, Ship In, Partial Ship In, Check In, Partial Check-In, Check In With Issue, Shop In, Partial Closed, and Closed.",
    tags: ["lor lifecycle","lor statuses","load out request stages"]
  },
  {
    action: "track",
    object: "equipment checkout",
    scope: "project", section: "Load Out Requests",
    question: "How does checking out equipment for an LOR work?",
    answer: "After an LOR request is approved, click \"Check Out\" to verify equipment against stock in the Equipment Master and check it out. Fill in Assign ID, Checkout Date, and Signature, then Submit. If not all equipment is checked out at once, status shows \"PARTIAL CHECK OUT\"; once complete, it shows \"CHECKED OUT\".",
    tags: ["equipment check out","lor checkout stage","partial checkout"]
  },
  {
    action: "track",
    object: "equipment check in",
    scope: "project", section: "Load Out Requests",
    question: "How do I check equipment back in after use?",
    answer: "In the LOR's Check In stage, fill in the details for the returning equipment along with a name and signature, then submit. Partial returns show \"PARTIAL CHECK IN\"; once all equipment is checked in, status becomes \"CHECKED IN\". If a Scheduled Equipment Maintenance form is configured, it must be completed and any issues are logged to Equipment Issues.",
    tags: ["equipment check in","lor check in stage","return equipment"]
  },
  {
    action: "track",
    object: "shop in",
    scope: "project", section: "Load Out Requests",
    question: "What does \"Shop In\" mean for a Load Out Request?",
    answer: "Shop In is the final stage where equipment/accessories are moved back into their inventory location (usually the same one they were checked out from). Check the confirmation box, add a signature, and submit to close the LOR (status \"CLOSED\", or \"PARTIAL CLOSED\" if only some equipment has shopped in).",
    tags: ["shop in stage","close lor","return to inventory location"]
  },
  {
    action: "create",
    object: "3rd party lor",
    scope: "project", section: "Load Out Requests",
    question: "How does a 3rd Party Load Out Request differ from an internal one?",
    answer: "A 3rd Party LOR follows the same Request, Check Out, Ship, Check In, and Shop In stages as an internal LOR, but adds a \"Lease Agreement\" stage after Check Out, since equipment is being sent to an external party's job site rather than an internal one.",
    tags: ["3rd party lor","external equipment lease","lease agreement stage"]
  },
  {
    action: "approve",
    object: "lease agreement",
    scope: "project", section: "Load Out Requests",
    question: "How is a Lease Agreement approved for a 3rd Party LOR?",
    answer: "After submitting the Lease Agreement form, click \"Email Agreement for Approval\" to send it to the 3rd party via email. Its status shows \"Waiting for Approval\", then \"Approved (Mail ID)\" once the recipient clicks \"Approve\" in the emailed form (or the equipment must be revised if \"Reject\" is clicked).",
    tags: ["lease agreement approval","email agreement","3rd party approval"]
  },
  {
    action: "track",
    object: "equipment issue",
    scope: "project", section: "Load Out Requests",
    question: "What happens if there's a problem with equipment during checkout or check-in?",
    answer: "If an issue is raised while checking out, a popup asks whether to \"Proceed With Issue\" or \"Change Equipment\"; proceeding sets status to \"Check Out Issue\". During check-in, a warning asks whether to \"Hold the Equipment/Accessory or Not\" — choosing not to hold sets status to \"CHECK IN ISSUE\". All raised issues appear in the Equipment Issues tab.",
    tags: ["equipment issue","check out issue","check in issue","equipment problems"]
  },
  {
    action: "configure",
    object: "lor approval workflow",
    scope: "global", section: "Settings",
    question: "How do I set up approval workflows for LORs?",
    answer: "Go to LOR Workflows and click \"Create Level\" to define a level type (\"All must approve\" or \"Anyone can approve\") and select approvers. A tree/graph view of the workflow is available at the top right corner.",
    tags: ["lor workflow setup","load out request approval","create level"]
  },
  {
    action: "view",
    object: "load out request history",
    scope: "project", section: "Load Out Requests",
    question: "How do I see the full history of actions on an LOR?",
    answer: "Click the kebab menu on an LOR card and select \"See History\" to view Equipment Logs, including requests, check-ins, check-outs, shipments, and Shop In actions, along with who performed them and when.",
    tags: ["lor history","equipment logs","audit trail"]
  },
  {
    action: "filter",
    object: "load out request",
    scope: "project", section: "Load Out Requests",
    question: "How do I filter or search Load Out Requests?",
    answer: "Use the \"Filters\" button to filter LORs by status or user, and the \"Search\" box to narrow results by specific criteria. LORs can be displayed in Grid View or Kanban View.",
    tags: ["filter lor","search lor","lor views"]
  },
  {
    action: "delete",
    object: "load out request",
    scope: "project", section: "Load Out Requests",
    question: "Can I delete a Load Out Request?",
    answer: "An LOR can be deleted only as long as none of the included equipment has been checked out yet.",
    tags: ["delete lor","remove load out request"]
  }
];


// Arena Knowledge Base — structured module content
// Each module: id, name, tile, tagline, sections[]. Each section: heading, html (body), qa[] (question, answer html, tags[])

const MODULES = [
  {
    id: "opportunity",
    qaItems: QA_OPPORTUNITY,
    narrative: [{"heading":"Dashboard","intro":"<p>My Dashboard is the landing screen for Opportunity Management (labeled Leads Management inside a Project) — the personal, KPI-driven home page a business-development user sees the moment they open the module. Rather than dropping you straight into a raw list of records, Arena surfaces the handful of numbers and lists that matter most for managing a pipeline day to day: how many pursuits you're carrying, how much they're collectively worth, which ones need attention because they've gone quiet, and which ones are coming due.</p>\n    <p>The dashboard exists to answer a simple recurring question — \"what does my pipeline look like right now, and what needs my attention today?\" — without requiring you to build a filtered view of the Opportunities list yourself. Every KPI card is clickable or linked to the underlying data, so the dashboard functions as a jumping-off point into the rest of the module as much as a summary of it.</p>\n    <p>Because staleness and due dates are time-sensitive, several of the dashboard's cards are driven by configuration set elsewhere in the module (specifically under Settings), which means the dashboard's behavior changes depending on how an administrator has tuned thresholds for your organization. Understanding those underlying settings — covered in the Settings section — helps you interpret what the dashboard is telling you.</p>","definitions":[{"term":"My Dashboard","definition":"The personal, KPI-driven landing tab of Opportunity Management, opened by default when you enter the module. It shows totals, value, staleness, pipeline funnel shape, your tasks, recent activity, and upcoming due dates in one place, with a Daily/Weekly/Monthly toggle that re-bases every KPI card to that time window."},{"term":"Total Opportunities","definition":"A KPI card showing the count of opportunities you're tracking plus their combined Total Value (₹), along with a trend indicator comparing today's numbers to yesterday's."},{"term":"Total Opportunity Value","definition":"The sum of the Opportunity Value field across every opportunity record in view — a raw, unweighted total of everything in the pipeline."},{"term":"Weighted Opportunity Value","definition":"The sum of opportunity values weighted by win-probability, rather than a raw total. Because not every opportunity in the pipeline is equally likely to close, this KPI gives a probability-adjusted view of how much pipeline value you can realistically expect to convert — a more honest forecasting number than Total Opportunity Value alone."},{"term":"Stale Opportunity","definition":"An opportunity that has crossed the configurable Stale Threshold — a number of days of inactivity defined in Settings → Opportunities Form → Stale Threshold. The dashboard's Stale Opportunities KPI counts how many records currently exceed that threshold, giving you an early warning list of pursuits that risk going cold from neglect."},{"term":"Due This Week","definition":"A KPI card counting opportunities whose Due Date falls within the current week, helping you triage what needs action in the near term rather than scanning the full list for due dates manually."},{"term":"Opportunity Funnel","definition":"A chart on the dashboard visualizing opportunity counts and value broken down by pipeline Stage, giving you an at-a-glance read on where the bulk of your pipeline currently sits (e.g., heavily weighted toward Lead vs. further along in Proposal)."},{"term":"Top 10 Opportunities","definition":"A dashboard widget ranking your ten highest-value opportunities, with its own dedicated + Create Opportunity shortcut so you can add a new high-priority pursuit without leaving the dashboard."},{"term":"Upcoming Opportunity Due Date","definition":"A dashboard list surfacing opportunities that are nearing their due date, distinct from the Due This Week KPI card in that it shows the actual list of upcoming records rather than just a count, and also carries its own + Create shortcut."}],"procedures":[{"title":"Reading pipeline health at a glance","steps":["Open <strong>Opportunity Management</strong> (or <strong>Leads Management</strong> inside a Project) — it opens directly on <strong>My Dashboard</strong>.","Use the <strong>Daily / Weekly / Monthly</strong> toggle at the top of the dashboard to re-base every KPI card to the time window you care about.","Scan the <strong>Total Opportunities</strong>, <strong>Total Opportunity Value</strong>, <strong>Weighted Opportunity Value</strong>, <strong>Due This Week</strong>, and <strong>Stale Opportunities</strong> cards for a top-line read on volume, value, urgency, and pipeline hygiene.","Check the <strong>Opportunity Funnel</strong> chart to see how your pipeline is distributed across Stages."]},{"title":"Finding opportunities that are overdue or coming due soon","steps":["On <strong>My Dashboard</strong>, check the <strong>Due This Week</strong> KPI card for a quick count.","Scroll to the <strong>Upcoming Opportunity Due Date</strong> list to see the actual records approaching their due date.","Alternatively, go to the main <strong>Opportunities</strong> list and filter by <strong>Due Date</strong> for a fully customizable date range instead of the dashboard's fixed \"this week\" window."]},{"title":"Finding your highest-value opportunities","steps":["On <strong>My Dashboard</strong>, locate the <strong>Top 10 Opportunities</strong> widget.","Review the ranked list, sorted by opportunity value from highest to lowest.","Use the widget's own <strong>+ Create Opportunity</strong> shortcut if you want to add a new high-value pursuit directly from this view."]}]},{"heading":"Opportunities","intro":"<p>The Opportunities list (labeled Leads when a construction Project is in context) is the system-of-record table for every pursuit your organization is tracking — from the earliest speculative Lead through to a Closed deal, won or lost. Where My Dashboard gives you a curated summary, Opportunities gives you the full, unfiltered dataset: every record, every field, with complete create/read/update/delete capability and enough configurability (three view modes, 45+ optional columns, saved filters) to let each user or team tailor the view to how they work.</p>\n    <p>This is the operational heart of the module. Business-development staff live here day to day: creating new pursuits as soon as they're identified, updating stage and status as a deal progresses, and tracking the dozens of financial, contact, and timing fields that make up a complete opportunity record. Because a pursuit can take months or years to close, the list is built around long-lived tracking rather than one-off data entry — hence the heavy emphasis on aging fields (Opportunity Age, Inactivity, Days in Current Stage) and probability-weighted value fields that evolve as a deal matures.</p>\n    <p>An opportunity's lifecycle is governed by two linked but distinct concepts: <strong>Stage</strong> (the current phase in the sales pipeline — Lead, Proposal, Closed by default, though stages themselves are configurable) and <strong>Status</strong> (a more granular value scoped to whichever Stage the opportunity is currently in). Every new opportunity starts in the Lead stage and is required to have a Status before it can be saved — a rule that has real operational consequences if Statuses haven't been configured yet for a Stage (see the callout on creating an opportunity below).</p>\n    <p>Because the underlying data model is large, Arena separates \"what you see\" from \"which records show up\": <strong>Filters</strong> controls which rows appear (based on field criteria such as value range or customer), while <strong>Manage Columns</strong> controls which fields are visible and in what order, without changing which records are shown. Keeping this distinction in mind will save you time — if a value looks wrong or missing, first check Manage Columns rather than assuming the data isn't being tracked.</p>","definitions":[{"term":"Stage","definition":"The current phase of an opportunity in the sales pipeline. By default: Lead → Proposal → Closed, though stages are configurable under Settings → Stages & Statuses Configuration. Every new opportunity starts in Lead, and Stage is a required, locked field on the Create Opportunity dialog — you cannot pick a different starting stage."},{"term":"Status","definition":"A required field on every opportunity whose available options depend on which Statuses have been configured for the opportunity's current Stage. If a Stage has zero Statuses configured, the Status dropdown will be empty and you will not be able to save an opportunity in that stage."},{"term":"Table View","definition":"The default Opportunities layout: a spreadsheet-style grid supporting the full Manage Columns feature set. Manage Columns is only available in Table View — it does not appear in Grid or Kanban view."},{"term":"Grid View","definition":"A card-based layout for browsing opportunities, an alternative to the dense Table View for users who prefer a visual, scannable format over a spreadsheet grid."},{"term":"Kanban View","definition":"A board layout with one column per pipeline Stage (Lead, Proposal, Closed by default). Each column header displays the opportunity count for that stage along with its combined Opportunity Value and Forecasted Value totals, making it easy to see where your pipeline is concentrated without opening a chart."},{"term":"Manage Columns","definition":"The Table View toolbar control that exposes the module's full data model — 45+ fields — split across two panes: Column Options (a searchable checkbox list for turning fields on or off) and Column Arrangement (drag-to-reorder, plus an × to remove a column). Reset to Default restores the original column set; Apply commits your changes."},{"term":"Filters vs. Manage Columns","definition":"Two related but distinct controls that are easy to confuse. Filters determines which records/rows are shown, based on field criteria (for example, only opportunities above a certain value). Manage Columns determines which fields/columns are visible and in what order, without changing which records appear at all."},{"term":"Opportunity Value","definition":"The raw dollar (or configured currency) value of the pursuit — the base figure that feeds Total Opportunity Value on the dashboard and the various weighted-value calculations."},{"term":"Go % / Get %","definition":"Two separate percentage fields/columns tracked on Opportunities and in the Forecast Report (e.g., Go% Weighted Value vs. Get% Weighted Value). They function alongside Win Probability and AI Probability as distinct probability/likelihood measures feeding weighted-value calculations. The product does not define a more specific business meaning for each beyond their role in these calculations, so your organization may assign its own convention to what \"Go\" and \"Get\" represent."},{"term":"Win Probability (%)","definition":"A manually-tracked column on an Opportunity representing the likelihood of winning the deal, distinct from AI Probability, which is a system-generated estimate of the same thing."},{"term":"AI Probability","definition":"A system-generated (rather than manually entered) probability estimate for winning an opportunity, tracked as its own column alongside the manually entered Win Probability (%)."},{"term":"Probability (Manual/AI)","definition":"A toggle/flag on an opportunity indicating which of the two probability sources — the manually entered Win Probability or the system-generated AI Probability — is currently in effect for that record's weighted-value calculations."},{"term":"Weighted Value / AI Weighted Value","definition":"Two separate weighted-value calculations correspond to the two probability sources: Weighted Value is based on the manual probability entry, while AI Weighted Value is derived from the AI-generated probability."},{"term":"Opportunity Age","definition":"A tracked field, measured in days, representing how long the opportunity record has existed since creation. Shown in Manage Columns and in the Pipeline Report as \"Opportunity Age (In Days).\""},{"term":"Last Interaction","definition":"The date of the most recent recorded activity on the opportunity. It's the reference point that Inactivity (In Days) counts forward from."},{"term":"Inactivity (In Days)","definition":"The number of days elapsed since an opportunity's Last Interaction. This field feeds the Stale Threshold logic that determines whether an opportunity is flagged as stale on the dashboard."},{"term":"Days in Current Stage","definition":"A field (visible in the Opportunity Aging Report and Pipeline Report) tracking how long an opportunity has remained in its current Stage — used to gauge pipeline velocity and spot deals that are stalling at a particular phase."},{"term":"Stage Threshold","definition":"A per-Stage setting (Stage Threshold (In Days), configured in Settings → Stages & Statuses Configuration) that drives the \"Stage Threshold Notification\" column, flagging opportunities that have lingered in a specific stage longer than expected. This is distinct from Stale Threshold, which applies module-wide based on overall inactivity rather than per-stage dwell time — Stage Threshold operates at the stage scope, Stale Threshold at the whole-opportunity scope."},{"term":"Site Representative / Corporate Lead / Executive Lead","definition":"Three searchable people-picker roles assignable on both Create Opportunity and in Account Assignment, representing three levels of the responsibility chain for a customer account: an on-the-ground Site Representative, a Corporate Lead, and an Executive Lead. When a matching Customer/Market Type combination already exists in Account Assignment, these fields auto-populate rather than requiring manual entry."},{"term":"Market Type / Sub Market Type","definition":"Market Type is the top-level segment an opportunity or Account Assignment record belongs to (e.g., Highway, Residential, Infrastructure, Interiors). Sub Market Type is a more granular classification nested underneath it, tracked as its own field/column."},{"term":"Parent / Child / Standalone","definition":"A relationship flag on the full Opportunity record that lets opportunities be organized hierarchically — for example, a master pursuit with several sub-opportunities beneath it. The record also tracks Child Count and Active Child Count. Child opportunities get their own ID format, configured separately under Settings → ID Settings → Child ID Settings."}],"procedures":[{"title":"Creating a new opportunity","steps":["Go to <strong>Opportunities Management → Opportunities</strong> (or <strong>Leads Management → Leads</strong> inside a Project).","Click <strong>+ Create</strong> in the toolbar.","Under <strong>Details</strong>, enter <strong>Opportunity Name</strong> (required) and optionally pick a <strong>Market Type</strong> (Highway, Residential, Infrastructure, Interiors, etc.).","Under <strong>Status & Value</strong>, note that <strong>Stage</strong> defaults to \"Lead\" and is locked — you cannot change it. <strong>Status</strong> is required, and its available options come entirely from whatever Statuses are configured for the Lead stage.","Under <strong>Contact</strong>, optionally set <strong>Customer Groups</strong>, <strong>Site Representative</strong>, <strong>Corporate Lead</strong>, and <strong>Executive Lead</strong> — these are searchable people-pickers that auto-suggest from existing Account Assignment records.","Click <strong>Submit</strong>."],"note":"Only Opportunity Name and Status are actually required on this dialog — the Contact section fields are all optional, so if Submit is failing, the Contact fields are almost never the cause. The more common blocker: Submit can fail with \"Status is required\" if the Lead stage currently has zero Statuses configured under Settings → Stages & Statuses Configuration. If this happens, an administrator needs to add at least one Status (e.g. \"New\", \"Contacted\", \"Qualified\") to the Lead stage before any new opportunity can be created."},{"title":"Editing fields not present on the Create dialog","steps":["Create the opportunity first using the Create Opportunity dialog (only Opportunity Name and Status are required to get a record saved).","Open the saved record's detail/edit view.","Fill in the remaining fields there — Description, Project Types, Business Development, Business Unit, Opportunity Type, Milestone Template, Sub Market Type, TIC, Opportunity Value, Owner, Owner POC, Customer, Tier, EPC/Engineer, Contracting Entity, Project Locations, Competitors, Assign To, and others — all of which exist on the full record and are visible via Manage Columns and the Pipeline Report, but are simply not exposed on the initial Create dialog."]},{"title":"Editing or deleting an opportunity","steps":["Open the row's <strong>Actions</strong> menu on the Opportunities list.","Choose <strong>Edit</strong> to open the record in an editable form, or <strong>Delete</strong> to remove it.","This is the same row-action pattern (History / Edit / Delete / Notes) used consistently across Customers, Owners, and Competitors, so the behavior should feel familiar once you've used any of those other master lists."]},{"title":"Switching between Table, Grid, and Kanban view","steps":["Use the view-mode toggle in the Opportunities toolbar to switch between <strong>Table</strong>, <strong>Grid</strong>, and <strong>Kanban</strong>.","In <strong>Kanban View</strong>, review each Stage's column header for the opportunity count and its combined Opportunity Value / Forecasted Value totals."],"note":"Manage Columns only appears in Table View. If you don't see the button, you're most likely in Grid or Kanban view — switch back to Table View to customize columns."},{"title":"Customizing and rearranging table columns","steps":["Click <strong>Manage Columns</strong> in the Table View toolbar.","In <strong>Column Options</strong>, use the searchable checkbox list to turn fields on or off.","In <strong>Column Arrangement</strong>, drag a column by its handle to reorder it, or click the × next to a column to remove it.","Click <strong>Apply</strong> to commit your changes, or <strong>Reset to Default</strong> to restore the original column set."]},{"title":"Saving your current view for later","steps":["Configure your desired filters, visible columns, and layout (Table/Grid/Kanban).","Click the <strong>save</strong> icon in the Opportunities toolbar — this persists the filter, column, and layout configuration together as a single saved view."]}]},{"heading":"Customer Interactions","intro":"<p>Customers Interactions is Arena's lightweight CRM layer inside Opportunity Management — the place where you log and review every touchpoint your team has with a customer's contacts, from phone calls to meetings to freeform notes. Where the Opportunities list tracks the deal itself, Customers Interactions tracks the relationship: the ongoing conversation history that supports and informs the pursuit.</p>\n    <p>The screen is organized as a drill-down: you start at a company-level list, click into a specific customer to see its contacts, and click into a specific contact to open a full interaction workspace with dedicated sub-tabs for each interaction type (calls, mail, events, meetings, tasks, comments, notes, and history). This structure mirrors how relationship-building actually works in construction business development — you're rarely interacting with \"a customer\" in the abstract, you're building a relationship with named individuals at that customer.</p>\n    <p>A few of the sub-tabs (Events, Meetings, Task, Comments) integrate directly with your connected calendar (Google or Outlook), which means they require an explicit consent grant before they'll function — a one-time setup step covered below. If you hit a \"Consent Not Granted\" message, that's the fix.</p>","definitions":[{"term":"Customers Interactions","definition":"The CRM-style module tab where you browse customer companies, drill into their individual contacts, and log or review every interaction with those contacts. It sits at Opportunities Management → Customers Interactions."},{"term":"Notes button (customer row)","definition":"A Notes cell/button on each customer's top-level row that opens a \"Customer Form Chat\" side panel — a running notes/chat log tied to the customer as a whole (the company), not to any individual contact. This is distinct from the Notes sub-tab inside a specific contact's interaction workspace."},{"term":"Call Logs","definition":"A sub-tab in the contact interaction workspace for recording phone calls, capturing Call Type, Date, Time, Summary, Tag, and Attachments, with its own + Create button."},{"term":"Mails","definition":"A sub-tab providing an embedded email client (Inbox, Sent, Drafts, Starred, Trash, plus Move and Import Group actions) scoped to that contact."},{"term":"Calendar consent","definition":"A required authorization linking your connected calendar (Google or Outlook) to Arena, granted at My Profile → Settings → Calendar consent. Without it, the Events, Meetings, Task, and Comments sub-tabs on a contact's interaction workspace will show a \"Consent Not Granted\" message instead of functioning."},{"term":"Notes (contact sub-tab)","definition":"A rich note editor inside a contact's interaction workspace, supporting file attachments, for freeform written notes about that specific individual."},{"term":"See History","definition":"A sub-tab in the contact interaction workspace showing a full audit/activity history for that contact — displaying \"No history available\" when there's nothing logged yet."},{"term":"Contact card","definition":"The view you land on after clicking a specific contact under a customer. It surfaces the Contact ID, Primary Phone, and Primary Email for that individual, in addition to exposing the interaction sub-tabs."}],"procedures":[{"title":"Viewing a customer's interaction history","steps":["Go to <strong>Opportunities Management → Customers Interactions</strong>.","Click a row's <strong>Customer Name</strong> to open its list of contacts.","Click a specific <strong>Contact</strong> card to open that person's interaction workspace.","Use the sub-tabs — <strong>Call Logs, Mails, Events, Meetings, Task, Comments, Notes, See History</strong> — to view or log that particular type of interaction."]},{"title":"Logging a call with a customer contact","steps":["Open the contact's interaction workspace.","Go to the <strong>Call Logs</strong> sub-tab.","Click <strong>+ Create</strong> and fill in Call Type, Date, Time, Summary, Tag, and any Attachments."]},{"title":"Writing a note on a customer contact","steps":["Open the contact's interaction workspace.","Go to the <strong>Notes</strong> sub-tab.","Type your note into the rich text editor, optionally attaching a file, then save."]},{"title":"Granting calendar consent to unlock Events, Meetings, Task, and Comments","steps":["Go to <strong>My Profile → Settings → Calendar consent</strong>.","Grant consent for your connected calendar (Google or Outlook).","Return to the contact's interaction workspace — the Events, Meetings, Task, and Comments sub-tabs should now function normally."],"note":"If you see a \"Consent Not Granted\" message on any of these four sub-tabs, this is always the fix — there is no per-tab consent, it's a single grant that unlocks all four."},{"title":"Finding a customer's phone number and email","steps":["Drill into <strong>Customers Interactions → [Customer Name] → [Contact]</strong> — the Contact card shows Contact ID, Primary Phone, and Primary Email.","Alternatively, check the <strong>Contacts Directory</strong> (a Sidebar Shortcut), which also stores Primary/Secondary Email and Phone Number fields for the same contact."]}]},{"heading":"Analytics","intro":"<p>Analytics is the business-intelligence layer of Opportunity Management — four dedicated dashboards that go beyond the personal, single-user view of My Dashboard to give leadership and operations a company-wide read on pipeline performance. Where My Dashboard answers \"what does my pipeline look like,\" Analytics answers broader questions: which business units are converting best, how the pipeline breaks down geographically, and how forecast scenarios compare against reality.</p>\n    <p>Every Analytics sub-tab follows the same interaction pattern — a Filters button to narrow the underlying data set and a Share icon to distribute the dashboard to other stakeholders — which keeps the four dashboards consistent to navigate even though their content differs substantially. This consistency matters because Analytics is typically consumed by people who move quickly between the four views looking for different cuts of the same underlying pipeline data.</p>\n    <p>The four sub-tabs are: <strong>Market & Operations</strong> (project-type and geographic distribution, cycle times, compliance tracking), <strong>Executive Summary</strong> (leadership-facing KPIs and win-rate performance), <strong>Pipeline by BU</strong> (a breakdown by Business Unit), and <strong>Pipeline Intelligence</strong> (AI-driven forecasting views). Together they give every level of the organization — from an individual rep checking a compliance deadline to an executive reviewing quarterly forecasts — a dashboard suited to their vantage point.</p>","definitions":[{"term":"Market & Operations","definition":"An Analytics sub-tab covering Opportunity Project Type (with a Count/Dollar toggle), Geographic Distribution, the Proposal Cycle Time Distribution chart, and the Permit & Insurance Expiry Tracker table."},{"term":"Executive Summary","definition":"The leadership-facing Analytics dashboard, built around five headline KPI cards — Total Opportunity Value, Weighted Forecasted Value, Weighted Forecast This Quarter, Overall Win Rate (%), and Average Deal Size — plus a Scenario Forecast Comparison chart, an Opportunity by Stage Value breakdown, a Top Customers Performance table, and a Team Performance Leadership table."},{"term":"Pipeline by BU","definition":"An Analytics sub-tab that breaks the pipeline down by Business Unit. It includes summary stats (Total Opportunities, Top BU by Volume, Highest Win Rate), several charts (Opportunity Count by BU, Opportunity Value by BU, Pipeline Forecast by BU, Opportunities by BU and Region, Opportunity Stage Mix), and the BU Performance Matrix table (Business Unit, Lead, Proposal, Closed, Total, Win Rate)."},{"term":"Pipeline Intelligence","definition":"An Analytics sub-tab built around AI-driven views: an AI heatmap, a Scenario Forecast Comparison, Opportunity Dynamics by Month, and BD Opportunity Load."},{"term":"Permit & Insurance Expiry Tracker","definition":"A compliance-tracking table appearing on both the Market & Operations and Executive Summary tabs, surfacing upcoming permit and insurance expirations so they don't lapse unnoticed."},{"term":"Proposal Cycle Time Distribution","definition":"A chart on the Market & Operations tab showing which stage of the proposal cycle time distribution an opportunity's turnaround falls into — useful for identifying whether deals are moving through the proposal process at a healthy pace."},{"term":"BU Performance Matrix","definition":"A table on the Pipeline by BU tab cross-referencing each Business Unit against its Lead, Proposal, Closed, and Total counts plus Win Rate — a compact way to compare business unit performance side by side."}],"procedures":[{"title":"Reviewing leadership-facing pipeline KPIs","steps":["Go to <strong>Opportunities Management → Analytics → Executive Summary</strong>.","Review the five headline KPI cards: <strong>Total Opportunity Value, Weighted Forecasted Value, Weighted Forecast This Quarter, Overall Win Rate (%),</strong> and <strong>Average Deal Size</strong>.","Check the <strong>Scenario Forecast Comparison</strong> chart and <strong>Opportunity by Stage Value</strong> breakdown for deeper context.","Review the <strong>Top Customers Performance</strong> and <strong>Team Performance Leadership</strong> tables to see who and what is driving results."]},{"title":"Filtering or sharing any Analytics dashboard","steps":["Open the desired Analytics sub-tab (Market & Operations, Executive Summary, Pipeline by BU, or Pipeline Intelligence).","Click <strong>Filters</strong> to narrow the data shown on that dashboard.","Click the <strong>share</strong> icon to distribute the dashboard to other stakeholders."]},{"title":"Tracking permit and insurance expirations","steps":["Go to either the <strong>Market & Operations</strong> or <strong>Executive Summary</strong> Analytics tab.","Locate the <strong>Permit & Insurance Expiry Tracker</strong> table on that dashboard.","Review upcoming expirations to stay ahead of compliance lapses."]},{"title":"Checking proposal cycle time performance","steps":["Go to <strong>Analytics → Market & Operations</strong>.","Locate the <strong>Proposal Cycle Time Distribution</strong> chart to see which stage an opportunity's proposal cycle time falls into."]}]},{"heading":"Reports","intro":"<p>Reports is the module's library of pre-built, exportable reports — a step beyond Analytics' visual dashboards, aimed at users who need structured, filterable, downloadable data rather than charts. Where Analytics is for reading trends visually, Reports is for extracting a defined data set to share, archive, or feed into another process (a spreadsheet, a leadership deck, a compliance file).</p>\n    <p>Every report in this section shares a consistent toolbar pattern — Search, Sort By, Export, Filters, and Manage Columns — the same pattern used on the main Opportunities list, so once you know how to customize columns there, you already know how to do it here. This consistency is deliberate: reports are essentially pre-filtered, purpose-built views over the same underlying opportunity data model that Opportunities and Analytics also draw from.</p>\n    <p>The module ships seven reports, each suited to a different question: Forecast Report (value and probability modeling), Opportunity Aging Report (staleness and velocity), Outcome Analysis Report (closed-deal retrospectives), Customer Win Rate Report (win rate by customer), Pipeline Report (the single most complete export of the data model), Huddle Report (a BD-representative-scoped snapshot for team meetings), and Pipeline Gantt View (a visual project timeline). Two of these — Huddle Report and Pipeline Gantt View — deviate slightly from the standard pattern by requiring you to set parameters and click Generate rather than simply exporting.</p>","definitions":[{"term":"Forecast Report","definition":"A report covering opportunity value, the various probability measures (Stage/AI/Manual), weighted values, and Go%/Get% — the report to use when you need the full probability-and-value picture for forecasting purposes."},{"term":"Opportunity Aging Report","definition":"A report narrowly focused on staleness and velocity metrics: Days In Current Stage, Days Since Last Activity, Stale Flag, and Aging Status. It's the report to reach for when the question is specifically about how long opportunities have been sitting idle, rather than their financials."},{"term":"Outcome Analysis Report","definition":"A report covering closed date, sales cycle length, and project type — useful for retrospective analysis of deals that have already closed, won or lost."},{"term":"Customer Win Rate Report","definition":"A report showing deals won and lost, win rate percentage, and average cycle days, broken down by customer."},{"term":"Pipeline Report","definition":"The single most complete report in the module — it covers nearly every field on the Opportunity record, including identifiers, financials, dates, contacts, and parent/child hierarchy. Unlike the Opportunity Aging Report, which is scoped narrowly to staleness metrics, the Pipeline Report is the report to use when you need the fullest possible export of opportunity data."},{"term":"Huddle Report","definition":"A report scoped to a specific BD Representative and Date Range, generated on demand via a Generate button rather than the standard Export flow — designed to produce a downloadable snapshot suited to a team huddle or standup meeting."},{"term":"Pipeline Gantt View","definition":"A Gantt-chart timeline visualization of opportunities, with a granularity toggle (Daily / Weekly / Monthly / Quarterly / Yearly) and a date-range picker, alongside Filters and download/save icons — the report to use when you need to see pursuits laid out against a timeline rather than as tabular data."}],"procedures":[{"title":"Running a standard report","steps":["Go to <strong>Opportunities Management → Reports</strong>.","Click the report's name (for example, <strong>Forecast Report</strong>).","Use <strong>Filters</strong> or <strong>Sort By</strong> to narrow the data, then click <strong>Export</strong>.","Use the back arrow next to the report title to return to the reports list."],"note":"Huddle Report and Pipeline Gantt View don't follow this exact pattern — instead of Export, you set parameters and click Generate. See the dedicated procedure for Huddle Report below."},{"title":"Customizing which columns appear in a report","steps":["Open the desired report.","Click <strong>Manage Columns</strong> — the same control used on the main Opportunities list — to add, remove, or reorder columns."]},{"title":"Generating the Huddle Report","steps":["Go to <strong>Reports → Huddle Report</strong>.","Select a <strong>BD Representative</strong> and a <strong>Date Range</strong>.","Optionally use <strong>Save Filters</strong> or <strong>Clear Filters</strong>.","Click <strong>Generate</strong> to produce a downloadable report."]},{"title":"Finding customer win rate","steps":["Go to <strong>Reports → Customer Win Rate Report</strong> for a dedicated report on this metric.","Alternatively, check the <strong>Top Customers Performance</strong> table on the <strong>Executive Summary</strong> Analytics tab for the same information presented alongside other executive KPIs."]}]},{"heading":"Account Assignment","intro":"<p>Account Assignment is the registry that connects a customer account to the internal people responsible for it. Rather than manually re-entering who the Site Representative, Corporate Lead, and Executive Lead are every time you create an opportunity for a given customer, Account Assignment lets you define that responsibility chain once, per Customer and Market Type combination, and have it auto-populate everywhere else in the module that needs it.</p>\n    <p>This distinction matters because it's easy to confuse Account Assignment with the Contacts Directory, but the two serve opposite purposes: Account Assignment is about internal ownership — who on your team owns this relationship — while the Contacts Directory is the external people directory of actual contacts at the customer's or owner's organization. One tracks \"who at our company is responsible,\" the other tracks \"who at their company do we talk to.\"</p>\n    <p>Because the assignment is keyed on Customer plus Market Type (and further refined by Sub Market Type and Tier), a single customer can have different responsibility chains for different market segments — reflecting how larger accounts are often split across multiple business lines internally.</p>","definitions":[{"term":"Account Assignment","definition":"The registry mapping a Customer account to internally responsible personnel — Site Representative, Corporate Lead, and Executive Lead — by market segment and location. It represents internal ownership of the customer relationship, and its columns include Customer Name, Location, State, City, Market/Sub Market Type, Site Representative, Corporate Lead, Executive Lead, Tier, and Actions."},{"term":"Account Assignment vs. Contacts Directory","definition":"Account Assignment maps a Customer account to internal responsible personnel by market segment — it's about internal ownership. The Contacts Directory is the external people directory, listing actual contacts at Customer and Owner organizations. Don't confuse the two: Account Assignment answers \"who on our team owns this,\" the Contacts Directory answers \"who do we talk to over there.\""},{"term":"Auto-fill on Create Opportunity","definition":"When a matching Account Assignment record already exists for a given Customer/Market Type combination, the Site Representative, Corporate Lead, and Executive Lead fields on the Create Opportunity dialog are pre-populated automatically from that record, saving you from re-entering the same assignment on every new opportunity for that customer."}],"procedures":[{"title":"Assigning a customer account to a responsibility chain","steps":["Go to <strong>Opportunities Management → Account Assignment</strong>.","Click <strong>+ Add</strong>.","Search for and select the <strong>Customer Name</strong>.","Choose <strong>Market Type</strong>, <strong>Sub Market Type</strong>, and <strong>Tier</strong>.","Pick the <strong>Site Representative</strong>, <strong>Corporate Lead</strong>, and <strong>Executive Lead</strong>.","Click <strong>Submit</strong>."]}]},{"heading":"Sidebar Shortcuts","intro":"<p>Alongside the module's main tabs, Arena surfaces a row of icon shortcuts — Task, Calendar, Contacts Directory, Customers, Owners, Competitors, and Settings — that give you quick access to supporting master data and personal productivity tools without navigating away from wherever you are in the module. These shortcuts exist because opportunities don't live in isolation: a pursuit needs a customer, a customer needs contacts, deals have competitors, and work needs to be tracked as tasks and scheduled on a calendar. Rather than burying this supporting data several clicks deep, Arena keeps it one click away at all times.</p>\n    <p>Several of these shortcuts maintain master lists that are shared and reused across the module — Customers, Owners, and Competitors, in particular, are foundational reference data that opportunities, Account Assignment, and Customer Interactions all draw from. Understanding the distinctions between related concepts here (Customer vs. Owner, Customer vs. Contact, Contacts Directory vs. Customers Interactions) will help you avoid duplicate or misplaced records as your data grows.</p>\n    <p>The Customers shortcut in particular carries the richest functionality of the group: a full multi-step creation wizard, OCR-based contact scanning, duplicate merging, and the ability to convert a customer into an Owner record — reflecting how central customer data is to the rest of the module.</p>","definitions":[{"term":"Task shortcut","definition":"Opens the module's task list, where every task is always linked to a specific Opportunity. The Add Task form requires Name and Date, with optional Description, Time, and a required Opportunity link."},{"term":"Calendar shortcut","definition":"Opens a full month-view calendar of module-related events — opportunity due dates, meetings, and follow-ups — with a mini date-picker, a My Calendars panel, and a daily Events list for the selected day. Like the Events/Meetings/Task/Comments sub-tabs in Customer Interactions, this requires Calendar consent to function."},{"term":"Contacts Directory","definition":"The master people directory for the entire module — every Customer contact and Owner contact in one place, organized into Contacts (all), Customer Contacts, and Owner Contacts sub-tabs. Each contact record tracks Customer/Owner type and name, Contact ID, Salutation, First/Middle/Last Name, Suffix, Job Title, Primary and Secondary Email, Primary and Work Phone Number, Primary and Secondary Address (Line 1/2, Country, State, City, Zip), Services Provided, and Personal Website."},{"term":"Contacts Directory vs. Customers Interactions","definition":"The Contacts Directory is the master contact list — every person tied to a Customer or Owner, in one searchable place. Customers Interactions is where you drill into a specific customer and log or review interactions (calls, mail, meetings, notes) with those contacts. Think of the Directory as the list of people, and Customers Interactions as the activity log built on top of that list."},{"term":"Customers shortcut","definition":"Opens the master list of customer accounts/companies that can be linked to opportunities. Includes Create Customer (a 3-step wizard), POC OCR (business-card scanning), Merge Duplicates, and Convert Customers to Owners."},{"term":"POC OCR","definition":"An option on the Create Customer split button that lets you scan a business card or document to auto-populate a contact's details, rather than typing them in manually."},{"term":"Owners shortcut","definition":"Opens the master list of project Owner organizations — the client entities that own or commission a construction project. It has its own Create Owner action plus a dedicated Settings shortcut, alongside the usual Search, Export, and Filters."},{"term":"Customer vs. Owner","definition":"A Customer is a customer account/company that can be linked to Opportunities. An Owner is the project Owner organization — the client entity that owns or commissions a project. The two lists can overlap (a Customer can be migrated into an Owner via Convert Customers to Owners), but they are tracked as separate master lists with separate purposes."},{"term":"Customer vs. Contact","definition":"A Customer is the company or account-level record. A Contact is an individual person associated with that Customer (or an Owner), tracked in the Contacts Directory and accessible through Customers Interactions. A single Customer can — and typically does — have multiple Contacts."},{"term":"Competitors shortcut","definition":"Opens the master list of competing firms tracked against your opportunities. The Create Competitor form requires a Competitor Name and a Competitor Type (Direct, Indirect, or Replacement Competitor), with an optional Description. Once created, competitors populate the searchable Competitors field/column on Opportunities."},{"term":"Merge Duplicates","definition":"A button in the Customers toolbar for consolidating two duplicate customer records into one, cleaning up cases where the same company was accidentally entered more than once."},{"term":"Convert Customers to Owners","definition":"A button in the Customers toolbar that migrates a Customer record into an Owner record — the mechanism by which the otherwise-separate Customer and Owner lists can overlap."},{"term":"Add Groups","definition":"A button in the Customers toolbar for organizing multiple customer records together into a group, useful for managing related accounts (such as different divisions of the same parent company) collectively."}],"procedures":[{"title":"Creating a task linked to an opportunity","steps":["Open the <strong>Task</strong> shortcut icon in the module's tab bar.","Click <strong>+ Add Task</strong>.","Fill in <strong>Name</strong> and <strong>Date</strong> (both required), and optionally add a Description and Time.","Search for and link the required <strong>Opportunity</strong>.","Click <strong>Create</strong> (or Cancel to discard)."]},{"title":"Viewing all module-related events on a calendar","steps":["Open the <strong>Calendar</strong> shortcut icon.","Browse the month-view calendar of opportunity due dates, meetings, and follow-ups.","Use the mini date-picker and My Calendars panel to navigate, and check the daily Events list for a selected day's schedule."],"note":"Like the Events, Meetings, Task, and Comments sub-tabs elsewhere in the module, this shortcut needs Calendar consent (My Profile → Settings → Calendar consent) to fully function."},{"title":"Creating a new customer","steps":["Open the <strong>Customers</strong> shortcut and click <strong>Create Customer</strong>.","Step 1 — <strong>Basic Details</strong>: enter Customer Name (required), plus optional Short Name, Alias Name, Phone Number, Email, Fax Number, Url, Group, and Primary/Mailing/Billing Address (use the \"Same as Primary address\" shortcut to save time on Mailing/Billing).","Step 2 — <strong>Locations & Tax Codes</strong>: complete this step as applicable.","Step 3 — <strong>Preview</strong>: review the entered data, then submit."]},{"title":"Editing, deleting, or viewing a customer's history","steps":["Open the customer card's three-dot menu.","Choose <strong>Edit</strong> to open the record in an editable form, <strong>Delete</strong> to remove it, or <strong>History</strong> to view its audit/change history."]},{"title":"Merging duplicate customer records","steps":["Click <strong>Merge Duplicates</strong> in the Customers toolbar.","Follow the prompts to identify and consolidate the duplicate records."]},{"title":"Converting a customer to an owner, or grouping customers","steps":["In the Customers toolbar, click <strong>Convert Customers to Owners</strong> to migrate a customer record into the Owners list.","Or click <strong>Add Groups</strong> to organize multiple customer records together into a group."]},{"title":"Creating a new Owner","steps":["Open the <strong>Owners</strong> shortcut and click <strong>Create Owner</strong>.","Complete the creation form and submit.","To edit or delete an existing Owner later, use the same three-dot menu pattern as Customers and Competitors."]},{"title":"Adding a competitor","steps":["Open the <strong>Competitors</strong> shortcut and click <strong>Create Competitor</strong>.","Enter the <strong>Competitor Name</strong> (required).","Select the <strong>Competitor Type</strong> (required — Direct, Indirect, or Replacement Competitor).","Optionally add a Description.","Click <strong>Submit</strong> (or Cancel to discard)."]}]},{"heading":"Settings","intro":"<p>Settings is the administrative control panel for Opportunity Management — where an administrator configures the pipeline structure, form fields, ID formats, and permissions that shape how everyone else uses the module day to day. Nearly every rule that governs opportunity behavior elsewhere in the module — what Statuses are available at each Stage, when an opportunity is flagged stale, what a custom ID looks like — traces back to a configuration screen here.</p>\n    <p>This section is disproportionately important for troubleshooting: a large share of \"why can't I do X\" questions in Opportunity Management (most commonly, \"why can't I select a Status when creating an opportunity\") are ultimately Settings configuration gaps rather than bugs or permission issues. Understanding what lives in Settings, and how each screen maps to behavior elsewhere in the module, is the fastest way to diagnose and fix these issues.</p>\n    <p>Settings is organized into ten areas: Competitor Form, Stages & Statuses Configuration, Opportunities Form, Expense, ID Settings, Business Development, Project Types, Opportunity Type, Milestone Templates, Customer Relation, and Users and Permissions. Several of these are simple maintained catalogs (lists an admin populates once and leaves largely static), while others — especially Stages & Statuses Configuration and Opportunities Form — directly gate what end users can do on the Create Opportunity dialog.</p>","definitions":[{"term":"Stages & Statuses Configuration","definition":"The screen that defines the entire pipeline structure — the sequence of Stages (Lead → Proposal → Closed by default) and, within each Stage, the list of allowed Statuses. Per stage, you configure a Stage Name, Default Win Probability (%), Stage Threshold (Days), and the Allowed Statuses list. For the Closed stage specifically, each status must additionally be classified as Success or Failure (for example, Won = Success; Lost, Cancelled, No Bid = Failure). This screen also supports Reorder Stages and Add Stages for restructuring the pipeline itself."},{"term":"Opportunities Form","definition":"The screen controlling the Create Opportunity form's field set and staleness behavior. It has three parts: Standard Fields (the built-in fields), Configurable Fields (where custom fields are added), and Stale Threshold (the number of days of inactivity after which an opportunity is flagged \"stale\" for the dashboard's Stale Opportunities KPI)."},{"term":"Expense","definition":"The settings area for tracking pursuit-related spend, with two sub-tabs: Form (Standard Fields — S.No, Expense Type, Item Name, Quantity, Unit Price, Amount, Comments — plus Configurable Fields) and Approval Workflow."},{"term":"ID Settings","definition":"The screen controlling the auto-generated Opportunity ID format. You choose an ID Separator (/, -, or None) and compose the ID from Business Unit, Year, and Serial No./ID components. Child ID Settings configures the ID format for child opportunities separately from top-level ones."},{"term":"Business Development","definition":"A maintained catalog of BD codes and representatives, tracked with Serial Number, VP Business Unit, Description, and Actions columns."},{"term":"Project Types","definition":"A maintained catalog of the project/work-type classifications used elsewhere in the module, tracked by category (such as FIELD or SHOP), material, and status flags."},{"term":"Opportunity Type","definition":"A simple maintained list (Serial Number, Opportunity Type, Actions) — empty by default until an administrator populates it."},{"term":"Milestone Templates","definition":"A settings area with two sub-tabs, Milestone Templates and Master Milestones, each with its own Create button — empty by default until entries are added."},{"term":"Customer Relation","definition":"The screen configuring a Look Back Window (In Days) and an SLA (In Hours), both used for customer-relationship and response-time tracking."},{"term":"Users and Permissions","definition":"The access-control screen for the module. Existing User Groups (for example, Opportunity Manager or Opportunity Estimator) are managed via a three-dot menu offering Permissions and Users management, and Add User Group creates a new group along with its Permissions and Users."}],"procedures":[{"title":"Fixing \"Status is required\" errors when creating an opportunity","steps":["Go to <strong>Settings → Stages & Statuses Configuration</strong>.","Select the <strong>Lead</strong> stage (or whichever stage is affected).","Add at least one Status under that stage's Allowed Statuses (for example, \"New\", \"Contacted\", \"Qualified\").","Return to Create Opportunity — the Status dropdown should now be populated."],"note":"This is the single most common blocker preventing new opportunities from being created: the Status dropdown is driven entirely by whatever Statuses are configured for the opportunity's current Stage, and if a Stage has none configured, the dropdown is empty and the Create Opportunity dialog cannot be submitted."},{"title":"Adding a whole new Stage or reordering the pipeline","steps":["Go to <strong>Settings → Stages & Statuses Configuration</strong>.","Click <strong>Add Stages</strong> to add a new pipeline stage, or <strong>Reorder Stages</strong> to change the order of existing stages."]},{"title":"Setting the Stale Threshold","steps":["Go to <strong>Settings → Opportunities Form</strong>.","Set the <strong>Stale Threshold</strong> field to the number of days of inactivity after which an opportunity should be flagged stale.","This value immediately feeds the dashboard's Stale Opportunities KPI."]},{"title":"Adding a custom field to the Create Opportunity form","steps":["Go to <strong>Settings → Opportunities Form → Configurable Fields</strong>.","Add the custom field there.","Reference the <strong>Standard Fields</strong> tab in the same section if you need to check what's already built in before adding a duplicate custom field."]},{"title":"Configuring the Opportunity ID format","steps":["Go to <strong>Settings → ID Settings</strong>.","Choose an ID Separator (<code>/</code>, <code>-</code>, or None).","Compose the ID from Business Unit, Year, and Serial No./ID components.","Configure <strong>Child ID Settings</strong> separately if your organization uses parent/child opportunity hierarchies."]},{"title":"Managing user access to Opportunity Management","steps":["Go to <strong>Settings → Users and Permissions</strong>.","To modify an existing group (e.g. Opportunity Manager, Opportunity Estimator), use its three-dot menu to manage Permissions and Users.","To create a new group, click <strong>Add User Group</strong> and configure its Permissions and Users."]}]},{"heading":"Comparisons & Miscellaneous","intro":"<p>This section collects the conceptual clarifications that don't belong to any single screen but come up repeatedly as users get oriented in Opportunity Management — most notably, the module's dual identity as both \"Opportunities Management\" and \"Leads Management.\" Understanding these naming and scoping questions early prevents confusion later, especially for users who move between the company-wide Home view and individual construction Projects.</p>\n    <p>The recurring theme across this section is that several apparent differences in the product are purely contextual or terminological rather than functional: Opportunities and Leads are the same records under different labels, and a blocked Create Opportunity form is almost always traceable back to the same root cause (a missing Status configuration) rather than a new, distinct problem. Keeping these clarifications in mind will help you troubleshoot faster and avoid treating cosmetic differences as functional ones.</p>","definitions":[{"term":"Opportunities Management vs. Leads Management","definition":"A per-context terminology setting, not two different modules. When opened from Home with no project selected, the module is labeled Opportunities Management with an Opportunities tab. When opened while a construction Project is in context, it's labeled Leads Management with a Leads tab and a project badge next to the Arena logo. The screens, fields, and functionality are identical either way — only the label changes."},{"term":"Module scope","definition":"Opportunity Management is not tied to any single construction project — it is company-wide. It covers a personal dashboard, the opportunity list/board, a customer-interaction CRM log, analytics, reports, and account assignment across the entire business, regardless of which context (Home or a specific Project) you happened to open it from."},{"term":"Opportunities vs. Leads (terminology)","definition":"There is no functional difference. \"Opportunity\" and \"Lead\" are two labels for the same underlying module and the same records, chosen based on where you opened it from: Opportunities from Home with no project selected, Leads with a construction Project in context."}],"procedures":[{"title":"Diagnosing a blocked Create Opportunity form","steps":["Check whether the required <strong>Status</strong> field is empty — this is almost always the actual blocker.","If Status is empty, go to <strong>Settings → Stages & Statuses Configuration</strong> and confirm the current Stage (usually Lead) has at least one Status configured.","Remember that the Contact section fields (Customer Groups, Site Representative, Corporate Lead, Executive Lead) are all optional — they are not what's preventing submission, even if they appear unfilled."]},{"title":"Populating empty catalog lists","steps":["If <strong>Settings → Opportunity Type</strong> or <strong>Settings → Milestone Templates</strong> appear empty, this is expected default behavior, not an error — no entries have been added yet.","An administrator should add entries manually: directly for Opportunity Type, or via the <strong>Create</strong> button for Milestone Templates (under either the Milestone Templates or Master Milestones sub-tab)."]}]}],
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
    narrative: [{"heading":"Asset Master","intro":"<p>Asset Master (also labeled Equipment Master in the module breadcrumb) is the master registry of every piece of equipment your organization tracks — what it is, where it currently sits, whether it's available, and its full check-in/check-out history. It's the single source of truth that the rest of Equipment Management builds on: maintenance schedules reference equipment listed here, Load Out Requests pull from this inventory, and Asset Issues and inspections are all logged against specific records in this registry.</p>\n    <p>Asset Master separates equipment into three sub-tabs — Company Owned Asset, Company Owned Accessory, and 3rd Party Asset — reflecting three meaningfully different categories of tracked items. Company-owned assets are the core equipment fleet your organization actually owns. Accessories are attachments or consumables that belong to and support a piece of equipment, tracked separately because they have their own lifecycle even though they're always linked back to a parent asset. 3rd Party Assets are items owned by or leased from an outside party, tracked alongside the specialized Lease Agreement workflow used when equipment moves in or out under a formal lease rather than an internal transfer.</p>\n    <p>Every asset carries a live status that reflects exactly where it is in its lifecycle at any given moment — available in inventory, checked out to a job, awaiting shipment, or leased externally — shown as color-coded chips above the grid. Because these statuses drive so much of the workflow logic elsewhere in the module (for instance, you cannot delete equipment that's currently checked out), understanding what each status chip means is foundational to using the rest of Equipment Management correctly.</p>","definitions":[{"term":"Asset Master (Equipment Master)","definition":"The master registry of all owned and leased equipment and accessories, tracking availability, current location, check-in/out history, planned vs. actual return dates, and maintenance records. It's organized into three sub-tabs: Company Owned Asset, Company Owned Accessory, and 3rd Party Asset."},{"term":"Company Owned Asset vs. 3rd Party Asset","definition":"Company Owned Asset tracks equipment the company itself owns outright. 3rd Party Asset tracks equipment or accessories that belong to, or are leased from, an outside party, and is used together with the 3rd Party LOR / Lease Agreement workflow when that equipment moves in or out under a formal lease."},{"term":"Asset vs. Accessory","definition":"Assets are the equipment items themselves, tracked on the Company Owned Asset sub-tab. Accessories are attachments or consumables linked to a piece of equipment, tracked separately on the Company Owned Accessory sub-tab — which includes a Related Assets column linking each accessory back to the equipment it belongs to."},{"term":"Equipment Log","definition":"The complete audit trail for a single equipment item, opened via the history icon on its row. It lists every request, check-in, check-out, shipment, and shop-in event involving that item, along with who performed each action and when."},{"term":"Status chips","definition":"Colored, clickable chips displayed above the Asset Master grid showing live counts of equipment in each state: Ready to Rent (available — the default status for newly created equipment), On Rent – Project (checked out to an internal job), Pending Shipment (checked out and awaiting shipment), On Rent – Customer (leased out to a 3rd party), and Checked In (returned). Clicking any chip filters the grid down to just that status."},{"term":"Current Location","definition":"A dropdown field on each equipment record, drawing from the list of configured Inventory Locations, indicating where that item physically sits right now. It's editable through the same Add/Edit Asset form used to update any other field on the record."},{"term":"Inventory Locations","definition":"The maintained list of physical locations equipment can be assigned to, managed from its own panel within Asset Master (Add Location to create a new one)."},{"term":"Planned Return Date","definition":"The date equipment was expected back, set at request or checkout time. It's the reference point that Overdue Days is measured against."},{"term":"Actual Return Date","definition":"The date equipment was actually checked in — as opposed to Planned Return Date, which records only the original expectation."},{"term":"Overdue Days","definition":"The number of days an item is overdue relative to its Planned Return Date, calculated only when no Actual Return Date has been logged yet. Once the item is checked in, Actual Return Date replaces the need for this calculation."},{"term":"Maintenance Records icon","definition":"A row-level icon in Asset Master that opens that item's maintenance history. It only appears for assets that have scheduled maintenance configured — items without a maintenance package won't show this icon. The same information is also visible in the grid's Maintenance Records column."},{"term":"Add Custom Column","definition":"A toolbar control letting you extend the Asset Master grid with organization-specific fields, of type Text, Single Select, Multi-select, or Date — useful for tracking data points the standard schema doesn't already cover."}],"procedures":[{"title":"Adding a new piece of equipment","steps":["Go to <strong>Home → Asset Management</strong>, and make sure <strong>Asset Master → Company Owned Asset</strong> is selected.","Click <strong>+ Asset</strong>.","In the <strong>Add Asset</strong> modal, fill in <strong>Asset Name</strong>, <strong>Asset ID</strong>, <strong>Asset Description</strong>, <strong>Replacement Value</strong>, and <strong>Current Location</strong> — all required.","Optionally fill in Manufacturer, Model, and Model Year, and attach an image or supporting files.","Click <strong>Submit</strong> — the new asset appears in the grid with status <strong>Ready to Rent</strong>."]},{"title":"Adding a new accessory","steps":["Switch to the <strong>Company Owned Accessory</strong> sub-tab.","Click <strong>+ Accessory</strong> — this is the same toolbar button as + Asset, but it changes label on this sub-tab.","Fill in the accessory details (equivalent to the asset fields) and click Submit."]},{"title":"Editing an equipment record","steps":["Locate the row in Asset Master, using Search or Filters if needed.","Click the <strong>edit</strong> (pencil) icon on that row.","Update the fields in the pre-filled form and click <strong>Submit</strong>."]},{"title":"Changing an equipment's current location","steps":["Click the <strong>edit</strong> (pencil) icon on the equipment's row to open the Add/Edit Asset form.","Update the <strong>Current Location</strong> dropdown to the correct Inventory Location.","Click Submit."]},{"title":"Adding a new inventory location","steps":["Click <strong>Inventory Locations</strong> within Asset Master.","Click <strong>Add Location</strong>.","Fill in the location name and physical address/location."]},{"title":"Checking an equipment item's full history","steps":["Click the <strong>history</strong> icon on the item's row in Asset Master.","Review the resulting Equipment Log: every request, check-in, check-out, shipment, and shop-in event, with who performed it and when."]},{"title":"Viewing maintenance records for a specific asset","steps":["Look for the <strong>Maintenance Records</strong> icon on that equipment's row — it's only shown for assets with scheduled maintenance.","Alternatively, check the <strong>Maintenance Records</strong> column directly in the grid."]},{"title":"Deleting or retiring an equipment item","steps":["Click the red <strong>delete</strong> icon on the item's row.","If the icon is disabled, the equipment is currently checked out or otherwise in use elsewhere — check it in through the Load Out Request flow (Check In, then Shop In) before deleting."],"note":"Delete is only enabled once equipment is not currently checked out. This is a deliberate safeguard against deleting equipment that's actively deployed to a job site or leased to a 3rd party."},{"title":"Exporting or filtering the equipment list","steps":["Click <strong>Export</strong> to extract the inventory list to Excel.","Click <strong>Filters</strong> to open the filter panel, and filter by Status, Location, Loadout Request, Checkout By, Check By, or Received By.","Click Submit to apply the filter, the Save icon to persist it for reuse, or Clear to remove an active filter."]},{"title":"Switching views or adding a custom column","steps":["Use the view-mode toggle (grid/card icon and table icon) near the top of the screen to switch between Grid View and Table View.","To add a custom field, click <strong>Add Custom Column</strong> and choose a type: Text, Single Select, Multi-select, or Date."]}]},{"heading":"Asset Setup","intro":"<p>Asset Setup (also referred to as Equipment Setup) is where administrators define recurring maintenance obligations for equipment — grouping items together into a maintenance package that bundles which equipment needs attention, what forms need to be filled out, how often, and who's responsible. Rather than manually reminding field crews to inspect or service equipment, a properly configured maintenance package automates that entire cadence, surfacing the right form to the right person at the right time.</p>\n    <p>The screen is built around a four-step wizard, launched via Create Maintenance Package, that walks you through listing the equipment covered, identifying which forms apply, setting the schedule, and assigning the crew responsible. This structure matters because the four pieces are genuinely independent decisions — the same form might apply to different equipment on different schedules, and different crews might be responsible for different packages — so Arena separates them into discrete wizard steps rather than one large form.</p>\n    <p>A particularly important design choice is the Recurrence Type setting in the Prepare Schedule step: maintenance can be triggered either on a fixed calendar cadence (Daily or Weekly) or dynamically, as part of the equipment's own checkout or check-in step inside the Load Out Request flow. This second option — Check Out or Check In recurrence — is what powers the maintenance-gating behavior you'll encounter later in the Load Out Request workflow, where you may be required to complete a maintenance form before equipment can leave or return to inventory.</p>","definitions":[{"term":"Maintenance Package","definition":"A configured bundle, created via the Create Maintenance Package wizard, that groups a set of equipment together with the maintenance forms that apply to them and the schedule on which those forms should be completed. It is the mechanism that drives both scheduled field inspections and, when configured with Check Out/Check In recurrence, the maintenance gates inside the Load Out Request flow."},{"term":"List Equipment (wizard step 1)","definition":"The first step of the Create Maintenance Package wizard: name the package and description, then use Add Equipment to select which items or accessories it covers."},{"term":"Identify Forms (wizard step 2)","definition":"The second wizard step: use Add Form to choose from centrally-configured maintenance forms (built in the Maintenance Builder under Global Data & Setup) that should be attached to this package."},{"term":"Prepare Schedule (wizard step 3)","definition":"The third wizard step, where you set the package's Recurrence Type, Start/End dates, and Time."},{"term":"Assign Crew (wizard step 4)","definition":"The final wizard step: select the individual users or whole crews responsible for this maintenance package. Once assigned, the resulting schedule appears on each assignee's personal calendar and becomes fillable at the scheduled time."},{"term":"Recurrence Type","definition":"The setting, chosen in the Prepare Schedule step, that determines how a maintenance form gets triggered. Daily and Weekly recurrence trigger the form on a fixed calendar cadence at a specific date and time. Check Out and Check In recurrence instead trigger the form automatically as part of the equipment's checkout or check-in step within the Load Out Request flow, rather than on any fixed schedule — meaning the form appears exactly when that equipment is being moved, not on a calendar date."},{"term":"Equipment Setup – Maintenance Logs","definition":"A closely related admin screen that follows the identical four-step pattern (List Items / Identify Forms / Prepare Schedule / Assign Crew) as Asset Setup, but adds a parallel Utilization tab — letting you schedule utilization logs on the same cadence-driven basis that maintenance logs use."}],"procedures":[{"title":"Setting up a recurring maintenance schedule","steps":["Go to <strong>Asset Setup</strong> and click <strong>Create Maintenance Package</strong>.","Enter a Package Name and Description, then Submit.","In <strong>List Equipment</strong>, use Add Equipment to select the items covered by this package.","In <strong>Identify Forms</strong>, use Add Form, tick the required forms, and Submit.","In <strong>Prepare Schedule</strong>, choose the Recurrence Type and set Start/End dates and Time.","In <strong>Assign Crew</strong>, select the responsible individuals or crews and Save."]},{"title":"Choosing between calendar-based and checkout/check-in-based recurrence","steps":["In the <strong>Prepare Schedule</strong> step, decide whether the maintenance should happen on a fixed calendar cadence or in step with equipment movement.","Choose <strong>Daily</strong> or <strong>Weekly</strong> if the form should trigger on a specific date and time regardless of whether the equipment is moving.","Choose <strong>Check Out</strong> or <strong>Check In</strong> if the form should instead trigger automatically as part of that specific stage of the Load Out Request flow."]},{"title":"Assigning a maintenance schedule to specific people","steps":["In the <strong>Assign Crew</strong> step of the Create Maintenance Package wizard, select individual users or entire Crews responsible for the maintenance.","Once saved, the schedule appears automatically on each assignee's personal calendar and becomes fillable at the scheduled time."]}]},{"heading":"Field Inspections","intro":"<p>Field Inspections is where the maintenance packages configured in Asset Setup actually get executed — the screen field crews use day to day to complete scheduled forms, log unplanned inspections, and manage photographic documentation of equipment condition. It's organized into three tabs — Maintenance, Utilization, and Equipment Photos — each covering a different flavor of on-the-ground equipment tracking.</p>\n    <p>Both Maintenance and Utilization share the same underlying interaction model: a calendar view for scheduled entries generated automatically by a maintenance package, and a list view for ad-hoc entries created manually whenever something needs recording outside of any pre-set schedule. This dual structure reflects a real operational need — most inspections happen on a predictable cadence, but crews also need the ability to log something unplanned, like a mid-shift equipment failure, without waiting for the next scheduled slot.</p>\n    <p>A key mechanism woven throughout this screen is the trigger point: certain fields on a maintenance form are configured (in the Maintenance Builder) to let the person filling out the form raise an issue directly from that field if a checkpoint fails. This is what connects Field Inspections to Asset Issues — a failed check during a routine inspection doesn't just sit in the completed form, it automatically becomes a tracked issue that someone can be assigned to resolve.</p>","definitions":[{"term":"Field Inspections","definition":"The screen where field crews perform and record maintenance activity and manage equipment photos, organized into three tabs: Maintenance, Utilization, and Equipment Photos."},{"term":"Maintenance tab","definition":"Logs maintenance and inspection activity, either on a Calendar (scheduled, generated by a maintenance package) or via a list/ad-hoc tab (Create Form, for unplanned inspections)."},{"term":"Utilization tab","definition":"Structurally identical to the Maintenance tab — calendar-driven scheduled entries plus ad-hoc list entries — but scoped to logging ad-hoc utilization entries rather than maintenance/inspection activity."},{"term":"Equipment Maintenance Calendar color legend","definition":"The color coding used on the Maintenance calendar view: Grey means not due, Blue means ready to fill, Amber means in progress or an issue has been raised, and Green means submitted/complete."},{"term":"Equipment Photos tab","definition":"A dedicated tab for managing photographic documentation of equipment. Select an item from the left-hand list, click Add, then Upload File to attach one or more images, optionally annotate them with the built-in markup tools, and Save."},{"term":"Trigger point","definition":"A checkbox configured per field in the maintenance form builder (under Setup Trigger Points) that lets an end-user raise an issue or note directly from that field if the checkpoint fails during an inspection. Any issue raised this way is logged automatically to Asset Issues, without requiring a separate manual step to create the issue record."},{"term":"Scheduled vs. ad-hoc inspection","definition":"A scheduled form is generated automatically by a maintenance package's Prepare Schedule settings (Daily, Weekly, Check Out, or Check In) and appears on the Equipment Maintenance Calendar at the appropriate time. An ad-hoc inspection is instead created manually at any time via Create Form on the list tab, with no tie to any pre-set schedule — useful for capturing something unplanned."}],"procedures":[{"title":"Logging a scheduled maintenance activity","steps":["Go to <strong>Field Inspections → Maintenance</strong> and switch to <strong>Calendar</strong>.","Pick the due date — forms are shown color-coded (Blue means ready to fill).","Open the form, fill in the required fields, and Submit — the form turns Green once complete.","If a check fails, raise an <strong>issue</strong> directly from that field — it's logged to Asset Issues automatically, with no separate step needed."]},{"title":"Logging an ad-hoc (unplanned) inspection","steps":["Go to <strong>Field Inspections → Maintenance</strong> (or Utilization) and switch to the list/ad-hoc tab.","Select the relevant form category from the left-hand list.","Click <strong>Create Form</strong>, complete the fields, and Submit — it appears as a new card with Download, Share, Print, and Chat available."]},{"title":"Editing a maintenance form after it's been submitted","steps":["Click the card for the submitted form to re-open it for review or editing.","Use the card's Download, Share, Print, and Chat options for collaborative notes alongside the edit."]},{"title":"Uploading equipment photos","steps":["Go to <strong>Field Inspections → Equipment Photos</strong>.","Select the equipment or accessory from the left-hand list.","Click <strong>Add</strong>, then Upload File to select one or more images.","Optionally annotate using the built-in markup tools, then click <strong>Save</strong>."]},{"title":"Viewing, annotating, or deleting an equipment photo","steps":["Click \"Click to View\" on a photo to open the viewer, which supports next/previous navigation.","Use the annotation tools below the image to mark it up, then click <strong>Save</strong> to persist the markup.","Use the kebab (⋮) menu in the viewer to <strong>Delete</strong> the photo."]}]},{"heading":"Asset Issues","intro":"<p>Asset Issues is the central log for problems raised against equipment — most commonly generated automatically when a trigger-point check fails during a maintenance form, a field inspection, or a Load Out Request check-out/check-in stage. Rather than a problem getting noted informally and potentially forgotten, Arena routes it into a single, trackable record with an owner, a due date, and a defined resolution path.</p>\n    <p>The screen defaults to a card view (with a table view available as an alternative) and is built around a simple lifecycle: an issue is raised, optionally discussed via Chat, and eventually marked Rectified once the underlying problem is fixed. For issues that require more formal remediation — labor, cost, parts — a Work Order can be spun up directly from the issue, connecting equipment problem-tracking to the broader work-order/cost-tracking machinery elsewhere in Arena.</p>\n    <p>Asset Issues is closely related to, but distinct from, Non Conformance Reports, covered in the next section. Both share the same UI patterns (cards, Rectify, Chat, Assign To/Due Date, Create Work Order), but they differ in how they originate: Asset Issues are almost always system-raised from a failed check, while NCRs are manually created to formally document a non-conformance event.</p>","definitions":[{"term":"Asset Issues (Equipment Issues)","definition":"The central log of issues raised during maintenance forms, field inspections, or Load Out Request check-out/check-in stages. Presented as cards by default, with a table view toggle available."},{"term":"Rectify","definition":"The action that marks an Asset Issue as resolved. Clicking Rectify sets the issue's status to Rectified and re-opens the linked maintenance form so it can be completed or resubmitted — Rectify on an Asset Issue is not just a status change, it actively unblocks the form that the issue interrupted."},{"term":"Create Work Order (from an issue)","definition":"A button on an issue (or NCR) card that spins up a formal Work Order directly from that record, used when the remediation requires tracked labor or cost rather than a quick fix."},{"term":"Asset Issue vs. Non-Conformance Report","definition":"Asset Issues are typically raised automatically from a failed trigger-point check during a maintenance form, inspection, or an LOR check-out/check-in stage. NCRs, by contrast, are created manually (via + Add on the Non Conformance Report tab) to formally document a non-conformance event. Both use the same card/table view, Rectify workflow, Chat, Assign To/Due Date fields, and Create Work Order pattern, but they remain separate, independently tracked record types."},{"term":"Header counters","definition":"Summary totals shown at the top of the Asset Issues (and NCR) tab: total issues (or NCRs), how many have been raised, and how many have been rectified — a quick health check on outstanding equipment problems without opening individual records."}],"procedures":[{"title":"Resolving an equipment issue","steps":["Go to <strong>Asset Issues</strong> and locate the issue using Search or Filters.","Review the issue's details, and add notes in <strong>Chat</strong> if collaborating with others on the fix.","Once the underlying problem is fixed, click <strong>Rectify</strong> — the status becomes Rectified and the linked form re-opens for completion.","If formal remediation tracking is needed (labor, cost, parts), click <strong>Create Work Order</strong> from the issue."]},{"title":"Deleting, exporting, or changing the view for issues","steps":["Use the kebab (⋮) menu on an issue card to <strong>Delete</strong> it.","Click <strong>Export</strong> to download all issue records to Excel.","Use the table view toggle in the top-right to switch away from the default card view."]},{"title":"Understanding where a trigger-point issue ends up","steps":["If you raised an issue from a failing field on a maintenance form during an inspection, no additional step is needed to log it.","The issue is automatically routed to the <strong>Asset Issues</strong> tab, where it can be reviewed, assigned, and eventually marked Rectified."]}]},{"heading":"Non Conformance Report","intro":"<p>Non Conformance Report (NCR) is the tab for formally documenting a non-conformance event — a deviation from expected standards or process that someone needs to intentionally flag, rather than one the system caught automatically through a failed trigger-point check. Where Asset Issues are almost always system-generated, an NCR is a deliberate, manually initiated record: someone observed something wrong and chose to formally document it.</p>\n    <p>Structurally, NCRs mirror Asset Issues closely — the same card layout, the same Assign To/Due Date pattern, the same Chat panel for documenting remediation steps, and the same Rectify action to close things out. This consistency is intentional: whether a problem was caught by an automated check or flagged manually by a person, the resolution workflow should feel the same to whoever is responsible for fixing it.</p>\n    <p>The one meaningful difference between the two record types shows up in what Rectify actually does. On an Asset Issue, Rectify re-opens the linked maintenance form for completion, because the issue interrupted an in-progress form. An NCR isn't tied to an in-progress form in the same way, so Rectify on an NCR simply closes the report out as resolved, with no equivalent form-reopening behavior.</p>","definitions":[{"term":"Non Conformance Report (NCR)","definition":"A manually created record documenting a non-conformance event, raised via + Add on the Non Conformance Report tab — distinct from Asset Issues, which are almost always system-raised from a failed trigger-point check."},{"term":"Rectify (on an NCR)","definition":"Marks the NCR as Rectified, closing the report out as resolved. Unlike Rectify on an Asset Issue, there is no equivalent form-reopening behavior — an NCR isn't tied to an in-progress maintenance form, so closing it is simpler."},{"term":"Rectify: Issue vs. NCR","definition":"Functionally similar in that both set the record's status to Rectified. On an Asset Issue, Rectify additionally re-enables the associated maintenance form so it can be completed or resubmitted. On an NCR, Rectify simply closes the report, with no linked form to reopen."}],"procedures":[{"title":"Raising and closing a Non-Conformance Report","steps":["Go to <strong>Non Conformance Report</strong> and click <strong>+ Add</strong>.","Fill in the NCR details and submit.","Assign an owner via <strong>Assign To</strong> and set a <strong>Due Date</strong>.","Use <strong>Chat</strong> to document remediation steps as they happen.","Once the issue is corrected, click <strong>Rectify</strong> to close the report out."]}]},{"heading":"Load Out Request","intro":"<p>Load Out Request (LOR) is the formal, staged workflow that governs every movement of equipment out of inventory — whether to an internal job site or on lease to a 3rd party — and its eventual return. It exists because equipment is a shared, finite, valuable resource: without a controlled process, there would be no reliable way to know what's currently deployed, who has it, when it's due back, or whether it passed a required safety check before leaving the warehouse.</p>\n    <p>Arena implements two parallel flows that share almost all of their structure: <strong>LOR Internal Job</strong>, for equipment going to one of your own job sites, and <strong>3rd Party LOR</strong>, for equipment leased out to (or in from) an external party. Both flows move through the same core stages — Request, Approval, Check Out, Ship, Check In, and Shop In — and both can be viewed as a Grid or a Kanban board. The 3rd Party flow differs in exactly two ways: its Request form omits Job Name/Job Location (there's no internal job involved), and it inserts an extra Lease Agreement stage between Check Out and Ship, where both parties sign a legal document — optionally with a digital signature via Adobe Acrobat Sign — before the equipment can proceed further.</p>\n    <p>A defining characteristic of the LOR lifecycle is that nearly every stage supports partial fulfillment: a single request can cover multiple line items, and those items can be checked out, shipped, or checked in across multiple separate actions rather than all at once. This is why you'll frequently see \"Partial\" statuses (Partial Check Out, Partial Ship In, Partial Check In, Partial Closed) — they're not errors, they're the expected in-between state whenever some but not all items on a request have completed a given stage. The status only becomes the \"full\" version once every item on the LOR has cleared that stage.</p>\n    <p>The LOR flow also integrates tightly with the maintenance system covered earlier: if a piece of equipment's maintenance package has a Check Out or Check In recurrence type, a maintenance form is automatically inserted into that exact stage of the LOR flow, and a failed check surfaces a decision point (Proceed With Issue vs. Change Equipment on checkout; Hold the Equipment or Not on check-in) rather than silently letting the equipment move. Finally, approval of an LOR is governed by a separately configurable approval chain (LOR - Workflows), so who needs to sign off on a request is itself a piece of admin configuration rather than a fixed rule.</p>","definitions":[{"term":"Load Out Request (LOR)","definition":"The formal staged workflow for moving equipment out of inventory to a job site, or on lease to a 3rd party, and back again. It exists in two parallel forms — LOR Internal Job and 3rd Party LOR — each viewable in Grid or Kanban layout."},{"term":"LOR Internal Job vs. 3rd Party LOR","definition":"Both flows share the same core stages (Request, Approval, Check Out, Ship, Check In, Shop In, Preview). The 3rd Party LOR's Request form omits Job Name/Job Location, since there's no internal job involved, and it inserts an extra Lease Agreement stage after Check Out and before Ship, where both parties sign a legal document before the equipment can proceed to shipment."},{"term":"LOR Request form fields","definition":"Equipment or Accessory required, Quantity, UOM, Requested By, Required Date, Planned Return Date, Supervisor, and Job ID/Job Name — with Job ID/Job Name omitted specifically on 3rd Party LOR requests."},{"term":"REQUESTED / APPROVED / Rejected","definition":"The initial approval states of an LOR. Submitting the Request form sets status to REQUESTED. The approver then sees Approve and Reject buttons — Approve sets status to APPROVED and removes the buttons; Reject turns the button red, sets status to Rejected, and lets the requester revise using the approver's comments before resubmitting. Once approved, the Approve/Reject buttons disappear entirely — they only appear while a request is awaiting a decision."},{"term":"Check Out","definition":"The LOR stage where warehouse staff verify equipment against Equipment Master stock and record Assign ID, Checkout Date, and Signature per item. This stage supports partial fulfillment: PARTIAL CHECK OUT applies when only some requested items have been checked out, and the status upgrades to CHECKED OUT once every item is done."},{"term":"Check Out Issue","definition":"A status that occurs when a Scheduled Equipment Maintenance form tied to the Check Out stage fails a check. A confirmation dialog then offers two options: Proceed With Issue (continue the checkout anyway, setting status to Check Out Issue and marking the item \"ID – Has Issue\") or Change Equipment (swap in a different item instead)."},{"term":"Lease Agreement","definition":"A stage unique to the 3rd Party LOR flow, inserted between Check Out and Ship. It captures equipment details and replacement value, requires both parties to sign, and is sent for approval via Email Agreement for Approval. Status moves from Waiting for Approval to Approved (Mail ID); the recipient gets a View Form link with Approve/Reject options, optionally e-signed through the Adobe Acrobat Sign integration."},{"term":"Ship","definition":"The stage recording shipment details and signature as equipment heads to the job site. Supports partial fulfillment (PARTIAL SHIP IN for some items shipped, SHIPPED once all are). A Delivery Request can be created directly from this stage (or from Check-in) if transport is needed — this automatically creates a Requisition (REQ) and kicks off the RFQ process."},{"term":"Check In","definition":"The stage where returning items are ticked off and a name and signature are recorded, as equipment comes back from the field. Supports partial fulfillment (PARTIAL CHECK IN, upgrading to CHECKED IN once complete). If a tied maintenance form finds an issue, a \"Hold the Equipment/Accessory or Not\" prompt appears: answering No proceeds with the check-in anyway, setting status to CHECK IN ISSUE (logged to Asset Issues); answering Yes blocks the check-in entirely until the issue is fixed."},{"term":"Shop In","definition":"The final LOR stage, confirming the equipment has been physically placed back into its inventory location, capturing a signature and Submit. Only after Shop In does the LOR reach CLOSED (or PARTIAL CLOSED if some items are still pending)."},{"term":"Check In vs. Shop In","definition":"Check In records that equipment has returned from the field (ticking off returning items, capturing name and signature). Shop In is the subsequent, final confirmation that the equipment has been physically placed back in its inventory location — only Shop In actually closes the LOR."},{"term":"PARTIAL CLOSED vs. CLOSED","definition":"CLOSED means every item on the LOR has completed Shop In. PARTIAL CLOSED means only some items have been shopped in so far — the remaining items still need to complete that final stage before the LOR fully closes."},{"term":"Preview","definition":"A tab on an LOR record showing the full collected set of forms generated across its lifecycle — Request, Check Out, Ship, Check In, and Shop In — in one place, useful for a complete review of everything filed against that request."},{"term":"Full LOR status list","definition":"Requested, Approved, Rejected, Check Out, Partial Check Out, Check Out With Issue, Ship In, Partial Ship In, Check In, Partial Check-In, Check In With Issue, Shop In, Partial Closed, Closed."},{"term":"Delivery Request","definition":"A transport/delivery request that can be created directly from the Ship page or the Check-in page when equipment needs to be physically moved by a third party. Creating one automatically generates a Requisition (REQ) and starts the RFQ (request-for-quote) process."},{"term":"Roster field","definition":"A field on an LOR stage letting you select the acting user's name and designation at that stage. It only becomes active once an Assign ID has already been chosen for that item."},{"term":"LOR card","definition":"The summary tile representing an LOR in Grid view, showing the selected Equipment/Accessory, Required-by Date, Created By, Workflow Level, and current Status/ID. A view toggle in the top-right of the tab switches between Grid View and Kanban View for both LOR Internal Job and 3rd Party LOR."},{"term":"LOR per-record actions","definition":"Each LOR provides Download (a PDF of the current stage's form) and Print; Share (send to other system users via System Default, Outlook, or Gmail); Documents (store/download all related files, and bundle all equipment's documents into a single file); and Mail (compose an email via Gmail or Outlook, depending on Global Settings → Mail Settings)."},{"term":"LOR - Workflows","definition":"A separate configuration screen for defining the approval chain(s) used by LOR and 3rd Party LOR requests. Create Level lets you add a new approval level, choosing between \"All must approve\" and \"Anyone can approve,\" and selecting which users act as approvers at that level. A tree/graph view icon visualizes the resulting workflow structure."},{"term":"All must approve vs. Anyone can approve","definition":"Two approval-level types configurable in LOR - Workflows. \"All must approve\" requires every approver assigned to that level to sign off before the LOR advances. \"Anyone can approve\" lets a single approver at that level clear it on behalf of everyone."},{"term":"Maintenance form gating","definition":"The behavior where a piece of equipment cannot be checked out or checked in without first completing a maintenance form, because that equipment's maintenance package has a Recurrence Type of Check Out or Check In — meaning the form is triggered automatically at that exact step of the LOR flow, rather than on a calendar date, and must be completed before the step can proceed."}],"procedures":[{"title":"Raising an internal Load Out Request","steps":["Go to <strong>Load Out Request</strong> (Internal Job view) and click <strong>Add</strong>.","Fill in Equipment/Accessory, Quantity, UOM, Requested By, Required Date, Planned Return Date, Supervisor, and Job ID/Name.","Submit — status becomes <strong>REQUESTED</strong>. Wait for it to be <strong>Approved</strong>.","Warehouse staff perform <strong>Check Out</strong> (Assign ID, Checkout Date, Signature) per item.","Perform <strong>Ship</strong> to send the equipment to the job site.","On return, perform <strong>Check In</strong> per item.","Perform <strong>Shop In</strong> to return the equipment to inventory — the LOR reaches <strong>CLOSED</strong>."]},{"title":"Raising a 3rd-party lease Load Out Request","steps":["Go to <strong>Load Out Request</strong>, switch to the 3rd Party view, and click <strong>Add</strong>.","Fill in the Request form (no Job Name/Location needed) and get it <strong>Approved</strong>.","<strong>Check Out</strong> the equipment.","Complete the <strong>Lease Agreement</strong> and click <strong>Email Agreement for Approval</strong>.","Once the 3rd party approves — optionally e-signing via Adobe Sign — proceed to <strong>Ship</strong>.","On return, perform <strong>Check In</strong>, then <strong>Shop In</strong> to close the LOR."]},{"title":"Approving or rejecting a Load Out Request","steps":["Once a request is submitted (status REQUESTED), open it as the warehouse manager or designated approver.","Click <strong>Approve</strong> to set status to APPROVED, or <strong>Reject</strong> to set status to Rejected.","If rejected, the requester should review your comments, revise the request, and resubmit."],"note":"The Approve/Reject buttons disappear entirely once a decision has been made — they only appear while the request is in REQUESTED status."},{"title":"Handling a failed maintenance check during checkout","steps":["If a Scheduled Equipment Maintenance form tied to the Check Out stage fails a check, a confirmation dialog appears.","Choose <strong>Proceed With Issue</strong> to continue the checkout anyway — status becomes Check Out Issue and the item is marked \"ID – Has Issue.\"","Or choose <strong>Change Equipment</strong> to swap in a different item instead and avoid checking out the flagged one."]},{"title":"Requesting delivery/transport for equipment","steps":["From the <strong>Ship</strong> page (or the <strong>Check-in</strong> page), look for the option to create a <strong>Delivery Request</strong>.","Submit it — this automatically creates a Requisition (REQ) and starts the RFQ process for sourcing transport."]},{"title":"Responding to a blocked check-in","steps":["If a maintenance form tied to the Check In stage finds an issue, you'll see a \"Hold the Equipment/Accessory or Not\" prompt.","Answer <strong>No</strong> to proceed with the check-in anyway — status becomes CHECK IN ISSUE and it's logged to Asset Issues.","Answer <strong>Yes</strong> to block the check-in until the issue is fixed."]},{"title":"Viewing the full history of a Load Out Request","steps":["Click the kebab (⋮) menu on the LOR card.","Select <strong>See History</strong> to open the full Equipment Log of requests, check-ins, check-outs, shipments, and shop-ins, including who performed each action and when."]},{"title":"Deleting a Load Out Request","steps":["Click the kebab (⋮) menu on the LOR card.","Select <strong>Delete</strong>."],"note":"Delete is only available while no equipment on the LOR has yet been checked out. Once any item has been checked out, the Delete option disappears — you'll need to work the request through to its conclusion instead of removing it."},{"title":"Assigning a Load Out Request to another user","steps":["Use the <strong>Assign to</strong> field on the LOR.","Select one or more users, and grant each either View or Edit permission."]},{"title":"Configuring an LOR approval workflow","steps":["Go to <strong>LOR - Workflows</strong>.","Click <strong>Create Level</strong>.","In the pop-up, choose the level type — \"All must approve\" or \"Anyone can approve\".","Pick the approvers for that level."],"note":"Editing an existing, already-live workflow shows a warning: changes affect all forms/documents already linked to that workflow, not just future requests — so edit live approval chains carefully."},{"title":"Visualizing an LOR approval workflow","steps":["Go to <strong>LOR - Workflows</strong>.","Click the tree/graph view icon in the top right to see a visual diagram of the workflow structure."]}]},{"heading":"Global Data & Setup","intro":"<p>Global Data & Setup covers the shared configuration that Equipment Management depends on but that lives conceptually one level above the module's own tabs — most importantly, the Maintenance Builder used to design every maintenance and inspection form referenced throughout Asset Setup, Field Inspections, and the Load Out Request flow, and the Adobe Acrobat Sign integration used to legally execute 3rd Party Lease Agreements.</p>\n    <p>The Maintenance Builder (also referred to as Equipment Maintenance Forms) is the source of every form that gets attached to a maintenance package. Rather than being fixed or predefined, forms are built section by section with a flexible library of field types, and any field can be marked as a trigger point so that a failed check during actual use raises an issue automatically. This is worth understanding even if you never touch the builder yourself, because it explains where the structure of every maintenance form you fill out in the field actually comes from.</p>\n    <p>The Adobe Acrobat Sign integration, meanwhile, exists specifically to give the 3rd Party LOR flow a legally binding way to close out a Lease Agreement — letting an external signer affix a real e-signature rather than simply clicking an in-app Approve button. It's a narrow but important piece of infrastructure that turns an internal approval click into something with legal weight when equipment is actually leaving your control to an outside party.</p>\n    <p>Finally, it's worth clarifying a naming quirk you'll encounter across the product: \"Equipment Management,\" \"Asset Management,\" and \"Equipment Master\" all refer to the exact same module — they're simply different labels used in different places (the Home hub tile, the module breadcrumb, and general documentation, respectively).</p>","definitions":[{"term":"Maintenance Builder (Equipment Maintenance Forms)","definition":"The Global Data screen for building and editing the maintenance/inspection form templates used throughout the module. Forms are structured with Add Section (with a trash icon to delete a section) and populated with Add Field, choosing from a library of field types."},{"term":"Form field types","definition":"The available field types in the Maintenance Builder: Attachment, Check box, Date, Label, Multi select, Paragraph, Roster, Scribble (signature/print name), Single select, Table (with configurable rows/columns), Text box (the default type), Time, and Signature."},{"term":"Setup Trigger Points","definition":"A configuration step in the Maintenance Builder where you tick which fields should let end-users raise an issue directly from that field if the checkpoint fails during an inspection. This is what connects the form builder to the automatic issue-routing behavior seen throughout Field Inspections and Load Out Request."},{"term":"Preview (form builder)","definition":"A button in the Maintenance Builder that shows the form exactly as end-users will see it, including company branding — useful for verifying a form's layout and content before publishing it for use."},{"term":"Adobe Acrobat Sign integration","definition":"An integration letting a 3rd-party signer affix a legally binding e-signature to a 3rd-Party LOR Lease Agreement, as part of approving it, rather than simply clicking Approve/Reject in-app. Once configured, the Lease Agreement emailed to the 3rd party in the LOR flow can be digitally signed through this integration as part of their approval."},{"term":"Equipment Management vs. Asset Management vs. Equipment Master","definition":"All three names refer to the same module. \"Asset Management\" is the name shown on the Home hub tile; \"Equipment Master\" is the label used in the module's own breadcrumb; \"Equipment Management\" is the name used in the underlying documentation. Day-to-day, the UI itself mostly favors \"Asset\" in its labels — Asset Master, Asset Setup, Asset Issues, + Asset."}],"procedures":[{"title":"Building or editing a maintenance/inspection form template","steps":["Go to <strong>Global Data → Maintenance Builder</strong> (also called Equipment Maintenance Forms) and click <strong>Create Form</strong>.","Click <strong>Add Section</strong> to structure the form into logical groupings (use the trash icon to delete a section if needed).","Click <strong>Add Field</strong> and choose a field type: Attachment, Check box, Date, Label, Multi select, Paragraph, Roster, Scribble, Single select, Table, Text box, Time, or Signature.","Use <strong>Setup Trigger Points</strong> to tick which fields should let end-users raise an issue if that checkpoint fails.","Click <strong>Preview</strong> to see the form exactly as end-users will, including company branding.","Click <strong>Save Changes</strong>."]},{"title":"Using Adobe Sign in the 3rd Party LOR flow","steps":["Ensure the Adobe Acrobat Sign integration is set up for your organization.","In the 3rd Party LOR flow, once equipment has been checked out, complete the Lease Agreement and send it via Email Agreement for Approval.","The 3rd party can then digitally sign the agreement through the Adobe Sign integration as part of their approval, rather than only clicking Approve."]}]}],
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
    narrative: [{"heading":"Company & Business Units","intro":"<p>Global Data is Arena's company-wide administration layer: everything defined here — vendors, tax rules, naming conventions, permissions, and so on — is inherited by every project a company creates afterward, so nothing has to be re-entered project by project. The <strong>Company</strong> screen sits at the very top of that hierarchy. It stores the company's own legal and business profile, the information that appears on generated documents, forms, and outgoing communications: legal name, registered address, contact details, tax identifiers, and the company logo.</p><p>Beyond the primary company profile, this area also handles two closely related but distinct concerns. <strong>Subsidiaries</strong> lets a parent company register additional related company profiles, useful for holding companies or multi-entity organizations that run several legally distinct businesses through one Arena account. <strong>Business Units</strong> is a much simpler registry — a flat list of internal divisions or departments (identified by a short code and description) used purely for categorizing operations and reporting, without any of the legal/tax detail that the Company profile carries.</p>","definitions":[{"term":"Company Details","definition":"The tab holding the company's core legal/business profile: name, ID, address, contact person, phone, email, and optional tax identifiers (PAN Number, GST IN), plus the company logo used on generated documents."},{"term":"SSO Clients","definition":"A section within Company Details for configuring enterprise single sign-on providers via Add SSO Provider."},{"term":"Subsidiary","definition":"A secondary company profile registered under the parent company, managed from its own tab with search and list/grid view options."},{"term":"Business Unit","definition":"A simple record — Code and Description — representing an internal division or department, used to categorize company operations and reporting."}],"procedures":[{"title":"Update the company profile","steps":["Go to <strong>Global Data → Company</strong> tile → <strong>Company Details</strong> tab.","Click <strong>Upload Company Logo</strong> to set the brand logo used across generated documents.","Fill in or update the required fields: Company Name, ID, Address, City, State, Zip, Contact Person details, Company Email/Phone, and optionally PAN/GST.","To configure SSO, click <strong>Add SSO Provider</strong> under SSO Clients and complete the provider's setup.","Click <strong>Submit</strong> to save."]},{"title":"Add a business unit","steps":["Go to <strong>Global Data → Business Units</strong> and click <strong>Add</strong>.","Enter a Code and Description.","Click Submit."]}]},{"heading":"Owners","intro":"<p>The <strong>Owners</strong> screen is the master directory of every client or owner entity that commissions work — the same list you draw from whenever you create a new Project and need to assign it an Owner. Keeping this as a single, centrally maintained registry (rather than letting each project define its own client records) means an owner's contact details, tax codes, and linked locations only need to be entered once and stay consistent everywhere that owner is referenced.</p><p>Because different companies organize their client relationships with different levels of granularity — some work directly with a flat list of owners, others need to group owners under categories or sub-categories (for example, government vs. private clients, or by region) — Owners supports a configurable hierarchy depth. This is set once via the Owner Settings gear and applies company-wide, so it's worth deciding early, since Level 1 is the default and simplest option and moving to a deeper hierarchy later means recategorizing existing records.</p>","definitions":[{"term":"Owner","definition":"The client/owner entity that commissions a project; a master record containing the owner's basic details, addresses, linked locations, and tax codes."},{"term":"Create Owner (split button)","definition":"The action button on the Owners screen offering two paths: Create Owner (the standard multi-step wizard) or POC OCR (OCR-assisted document intake for owner data)."},{"term":"Owner Settings / hierarchy levels","definition":"A company-wide configuration choosing how many levels Owners are divided into: Level 1 (Owner only, the default), Level 2 (Category > Owner), or Level 3 (Category > SubCategory > Owner)."},{"term":"Link Locations","definition":"A step in the Create Owner wizard for associating one or more company Locations with the owner, including marking one as the Default."}],"procedures":[{"title":"Create a new Owner record","steps":["Go to <strong>Global Data → Owners</strong> tile → <strong>Create Owner</strong> (split button) → <strong>Create Owner</strong>.","<strong>Step 1 – Basic Details:</strong> enter Owner Name* (required), Short Name, Alias Name, Phone Number*, Email*, Fax Number, and Url; expand and fill Primary Address, optionally checking <strong>Same as Primary address</strong> for Mailing/Billing Address.","<strong>Step 2 – Locations & Tax Codes:</strong> click <strong>Link Locations</strong> to associate company Locations (with a Default flag), and click <strong>Add</strong> under Tax Codes to attach Tax Group/Tax Class/Tax Code combinations.","<strong>Step 3 – Preview:</strong> review all entered data.","Click <strong>Submit</strong> to create the Owner."],"note":"To bulk-create Owners, use Export, which also exposes Download/Upload Excel options with a template."},{"title":"Configure Owner hierarchy levels","steps":["On the Owners tile, click the <strong>Settings</strong> gear icon (top right).","In \"Owner Settings,\" choose Level 1, Level 2, or Level 3 depending on how granular owner categorization should be company-wide."]}]},{"heading":"Locations & Tax","intro":"<p>Locations is the central registry of physical addresses used throughout Arena — anywhere the system needs a real-world place, whether that's a material delivery destination, an address linked to an Owner, or a site for jurisdictional tax assignment. Storing locations once, centrally, avoids the same address being retyped (and potentially mistyped) across multiple owners, vendors, and work orders.</p><p><strong>Tax Configuration</strong> lives alongside Locations because tax jurisdiction is so often tied to where work happens. It defines the company's tax structure as a two-level hierarchy: <strong>Tax Groups</strong> (like &quot;GST 18&quot;) each contain one or more individual <strong>Tax Codes</strong> with their own percentages (such as CGST, SGST, ITC, or Freight). This structure is then referenced — not duplicated — by Owners, Locations, Vendors, and Work Orders wherever a tax calculation applies, so a change to a tax percentage in one place propagates everywhere that code is used.</p>","definitions":[{"term":"Location","definition":"A registered physical address (also referred to as a Delivery Location in older documentation) with fields for name, address, zip, city, and state, plus required Tax Codes."},{"term":"Tax Group","definition":"A named container for related Tax Codes (e.g. \"GST 18\", \"GST 111\")."},{"term":"Tax Code","definition":"An individual tax rate entry (e.g. CGST, SGST, ITC, Freight) belonging to a Tax Group, with its own Tax Percentage."}],"procedures":[{"title":"Add a new company delivery location","steps":["Go to <strong>Global Data → Locations</strong> tile → <strong>Create</strong>.","In the \"Add Location\" dialog, fill in Location Name*, Address*, Zip Code, City, and State.","Under <strong>Tax Codes*</strong>, click <strong>Add</strong> to attach one or more Tax Group/Tax Class/Tax Code entries.","Click <strong>Submit</strong>."],"note":"Bulk location setup is also possible via Excel import from this screen's Export/Upload options."},{"title":"Set up tax groups and tax codes","steps":["Go to <strong>Global Data → Tax Configuration</strong> → <strong>Add Tax Group</strong>, enter the Group name, and click <strong>Submit</strong>.","Select the new group in the left panel, then click <strong>Add Tax Code</strong> → enter Tax Code* and Tax Percentage* → <strong>Submit</strong>.","Repeat for each code belonging to that group (e.g. CGST, SGST, ITC, Freight).","Use <strong>Upload Excel</strong> / <strong>Download Excel</strong> to bulk manage tax codes."]}]},{"heading":"Vendors & Subcontractors","intro":"<p>Vendors is the company-wide directory of the external material and equipment suppliers a company works with, and it's used far beyond Global Data itself — Procurement and Work Orders both draw on this same list. Because different companies work with dozens or hundreds of vendors across very different trades, Vendors supports categorization (with the same optional multi-level hierarchy pattern used by Owners), plus preferred/blocked status and a per-vendor rate card so procurement decisions can be made with pricing already on hand rather than requested fresh each time.</p><p>Every vendor record carries two important sub-areas. The <strong>Rate Card</strong> stores the vendor's costs for materials and equipment (with Daily/Weekly/Monthly rate options), which is what lets estimates and work orders pull real pricing instead of guesswork — and it can be bulk-updated via an Excel template rather than edited row by row. The <strong>Ratings Form</strong> is a company-wide, form-builder-style questionnaire used to formally evaluate vendor performance (on criteria like Safety or Quality) — this template is shared across all vendors, so scores are comparable vendor to vendor.</p><p><strong>Sub Contractors</strong> is a parallel, separate registry for subcontracted labor and trade-partner companies, distinguished from Vendors in that it tracks trade partners rather than material/equipment suppliers. Because subcontractors often need to prove compliance credentials (ISO certifications, safety licenses, CIDB registration, and similar), that tracking is handled either through configurable attachment-type fields on the subcontractor's own record (via Settings → Sub Contractor Settings) or, for broader company-wide compliance tracking, through the separate Compliance Hub.</p>","definitions":[{"term":"Vendor","definition":"An external material or equipment supplier, registered with profile details, contact persons, and a Rate Card, used by Procurement, Work Orders, and other modules company-wide."},{"term":"Vendor categories","definition":"A left-panel hierarchy (e.g. Equipment Vendors, Material Vendors, Cement Vendors, General, Eco category) for organizing vendors, expandable into sub-categories via Create Category."},{"term":"Rate Card","definition":"A vendor's Materials and Equipment cost tables (Cost Code, Name, UOM Group, UOM, Type, and editable Rate columns), bulk-updatable via Upload Logs using an Excel template with Daily/Weekly/Monthly rate columns."},{"term":"Ratings Form","definition":"A form-builder for vendor evaluation, combining a Standard field (\"Vendor Rating\") with Custom fields (e.g. Safety, Quality), each configurable with a weight/value, Required toggle, Show on card toggle, and field type."},{"term":"Sub Contractor","definition":"A registered subcontracted labor/trade-partner company, tracked in a registry parallel to Vendors, organized via Add Groups."},{"term":"Sub Contractor Settings (compliance fields)","definition":"Configurable attachment-type fields (e.g. ISO 9001, CIDB) that subcontractors must upload as part of their profile, defined at Global Data → Settings → Sub Contractor Settings."},{"term":"Owner-style Settings hierarchy","definition":"Vendors uses the same Level 1/2/3 category hierarchy pattern as Owners, configured via the Settings gear on the Vendors screen."}],"procedures":[{"title":"Add a new vendor","steps":["Go to <strong>Global Data → Vendors</strong> tile → <strong>Register Vendor</strong>.","Upload a profile picture (optional), then fill Vendor ID*, Company Name*, First Name*, Last Name*.","Click <strong>Add</strong> in the contact table to add one or more contact persons with their details.","Fill Username*, Phone Number* (with country code + extension), and Email*.","Choose a <strong>Select Sign Label</strong> (e.g. Initials) and fill Initials* — used as the digital signature label on approved documents; optionally toggle <strong>Enable Security Key Authentication</strong>.","Optionally fill Vendor Title, Address, and Licence Number.","Click <strong>Submit</strong>."]},{"title":"Set up a vendor's rate card","steps":["Open the vendor's card from the <strong>Vendors</strong> tile.","Go to the <strong>Rate Card</strong> tab and choose <strong>Materials</strong> or <strong>Equipment</strong>.","Click <strong>Upload Logs</strong>, download the Excel template, fill in Daily/Weekly/Monthly rates per item, and upload the completed file — or edit the <strong>Rate</strong> field inline per row."]},{"title":"Configure the vendor rating form","steps":["Go to the <strong>Vendors</strong> tile → <strong>Ratings Form</strong> tab.","Click <strong>Add field</strong> to add a new custom rating criterion (e.g. \"Safety\").","Set its weight/value, toggle <strong>Required</strong> and/or <strong>Show on card</strong> as needed, and choose its type via <strong>Choose Type</strong> (e.g. Rating).","Click <strong>Save Changes</strong>."]},{"title":"Register a subcontractor","steps":["Go to <strong>Global Data → Sub Contractors</strong> tile → <strong>Register Sub Contractor</strong>.","Complete the registration form (name, contact, ID) and submit.","Use <strong>Add Groups</strong> to organize subcontractors into categories, similar to Vendor categories."]},{"title":"Track vendor/subcontractor certifications (ISO, safety licenses)","steps":["Go to <strong>Global Data → Settings → Sub Contractor Settings</strong> to define which certification fields (e.g. ISO 9001, CIDB) subcontractors must upload.","Alternatively, for company-wide compliance items, go to <strong>Global Data → Compliance Hub → Compliance Directory → Create</strong> to define the requirement (Name, Category, Renewal Frequency, Evidence Type), then track status under <strong>My Company Compliance</strong>."]}]},{"heading":"Work Order Management","intro":"<p>Work Order Management configures the templates and categorization used to raise Work Orders across every project — covering Equipment, Material, and Service work — and hosts the reusable library of Work Order Contracts that projects draw from. A work order is, in effect, a mini-project of its own once opened: an individual record carries tabs for Team, Timesheets, Equipment, Inventory, Procurement, Expense, Schedule, Communication, Documents, and Drawings, so all the activity and cost tied to a specific piece of contracted or dispatched work stays organized under one roof.</p><p>Before any work order contract can be created, the company needs at least one <strong>Work Order Type</strong> defined — this simple classification (Service, Equipment, or Material) determines what kind of work the contract represents and shapes which fields and tabs are relevant. Access to Work Orders is controlled separately through this module's own Users and Permissions screen, letting a company restrict who can create, view, or act on work orders independent of broader company-wide permission groups.</p>","definitions":[{"term":"Work Order Type","definition":"A classification (Service, Equipment, or Material) that every Work Order Contract must specify, defined with just a Name and Description."},{"term":"Work Order Contract","definition":"A reusable template/record for a piece of work-order-driven work, with a Name, Description, and Work Order Type, expandable with Item Details, Team, Timesheets, Equipment, Inventory, Procurement, Expense, Schedule, Communication, Documents, and Drawings tabs."},{"term":"Work Order Status","definition":"A dropdown on an individual Work Order Contract record tracking its current lifecycle state."},{"term":"Item Details / Create Items","definition":"A panel on a Work Order Contract's Profile tab for defining the specific items covered by the contract."},{"term":"Users and Permissions (Work Order Management)","definition":"A dedicated \"Users Groups\" screen scoping which user groups can access or act on Work Orders."}],"procedures":[{"title":"Create a Work Order Type","steps":["Go to <strong>Global Data → Work Order Management</strong> → <strong>Settings</strong> gear → <strong>Work Order Types</strong>.","Click <strong>Work Order Type</strong>, enter a Name* and Description, and click <strong>Submit</strong>."]},{"title":"Create a Work Order Contract template","steps":["Go to <strong>Work Order Management</strong> → <strong>Create</strong>.","Enter Name*, Description, and select a <strong>Work Order Type*</strong> (Service/Equipment/Material).","Submit, then open the new record to configure its Profile fields, add Items via <strong>Create Items</strong>, and configure Expense forms under the <strong>Expense</strong> tab."]}]},{"heading":"Construction Types","intro":"<p>Every project in Arena is tagged with a <strong>Construction Type</strong> — a category like Infrastructure, Residential, or Roads that describes the kind of work being built — and this classification does more than label the project: it scopes the entire work-breakdown-structure library the project will use. The <strong>Construction Types</strong> tile is the simple master list of these category names, but the real configuration work happens in the separate <strong>Construction Type</strong> tab, a ten-step pipeline for building out everything from location hierarchies down to how quantities get measured, all scoped to whichever Construction Type is selected from its dropdown.</p><p>This ten-step pipeline is arguably the deepest and most structurally important configuration in all of Global Data, because it defines the vocabulary and logic every project of that type inherits: the physical location hierarchy (Global Work Areas), the actual catalog of work (Global Work Packages, organized under Activities), the order work must happen in (Activity Sequence Templates), how materials and labor map onto that work for estimation, what everything is called (Naming Framework), interoperability with Primavera P6, bulk data loading, extensible metadata, and finally linking the right forms and measurement templates to each work package. Because a Construction Type's configuration is expensive to build from scratch, the <strong>Copy</strong> action on the Construction Types tile lets a company clone an existing type's entire setup into a new named type rather than starting over — and once any project actually uses a Construction Type, that type can no longer be edited or deleted, since doing so would retroactively change the meaning of live project data.</p>","definitions":[{"term":"Construction Types (tile)","definition":"The master list of construction project categories (e.g. Infrastructure, Flyover, Residential, Electrical and Instrumentation, Roads, Commercial Project, Tunnel) that every project is tagged with at creation. A type cannot be edited or deleted once projects exist using it."},{"term":"Construction Type (pipeline tab)","definition":"A separate top-level tab (next to \"Company\") presenting a 10-step configuration pipeline for building the full work-breakdown-structure library for a selected Construction Type."},{"term":"Global Work Areas","definition":"Step 1 of the pipeline: the physical/organizational location hierarchy of a project site as a three-tier nested structure (Tier 1 → Tier 2 → Tier 3, e.g. Tower → Floor → Room), configured via Entity Types, Super Location Types, and Location Types sub-tabs."},{"term":"Global Work Packages","definition":"Step 2 of the pipeline: the first-level library of construction work content — Activities (major work divisions like Excavation, Backfilling, Shuttering, Concreting) each containing many Work Packages, scoped across Progress, Quality, and Safety product lines."},{"term":"Activity Sequence Templates","definition":"Step 3 of the pipeline: dependency graphs (WBS templates) capturing the logical order of Work Packages, driving schedule and progress logic. Mapping Work Packages to Work Locations is a prerequisite for Progress tracking."},{"term":"Material and Labor Estimation Templates","definition":"Step 4 of the pipeline: four mapping cards — Map Materials to Activity, Map Labor to Activity, Map Materials to Work Package, Map Labor to Work Package — used for cost/productivity estimation."},{"term":"Naming Framework (Construction Type)","definition":"Step 5 of the pipeline: a table of Activity Sequence Level rows (Tree Version, Entity, Super Location, Location, Activity, Work Package, Sub Activity, and more) with editable Custom Name and Short Name columns; changes relabel that concept everywhere in the app for this construction type."},{"term":"P6 Activity Codes","definition":"Step 6 of the pipeline: Primavera P6 activity codes used to categorize/classify project activities for schedule interoperability with P6."},{"term":"Data Migration (Construction Type)","definition":"Step 7 of the pipeline: bulk-loads historical/master data from Excel into the construction type's structures (Master Data, Global Work Packages, Locations Type Work Packages, Global Sequence Model, etc.), appending to existing data rather than overwriting it."},{"term":"Metadata (Construction Type)","definition":"Step 8 of the pipeline: custom Metadata fields added globally to extend the standard data model."},{"term":"Work Package Linked Forms","definition":"Step 9 of the pipeline: associates specific forms (Progress/Quality/Safety/etc.) with individual Work Packages so the correct form appears when work is logged in the field."},{"term":"Work Package Measurement Template Linking","definition":"Step 10 of the pipeline: links a Measurement Template to a Work Package so quantity take-off math is automatically available when recording progress against it."}],"procedures":[{"title":"Configure which construction categories are available when creating a project","steps":["Go to <strong>Global Data → Construction Types</strong> tile.","Click <strong>Create</strong> to add a new type, or <strong>Copy</strong> an existing type to clone its full setup into a new one.","Optionally mark one type as <strong>Set as Default</strong>."]},{"title":"Bulk-load historical data into a Construction Type","steps":["Go to <strong>Global Data → Construction Type</strong> tab → <strong>Step 7 (Data Migration)</strong>.","For each section (Master Data, Global Work Packages, Locations Type Work Packages, Global Sequence Model, etc.), click the <strong>Template</strong> link to download the correctly-formatted Excel file.","Fill it in and drag it into the upload zone."],"note":"Existing data is preserved — new rows are appended, not overwritten."}]},{"heading":"Users & Permissions","intro":"<p>Users & Permissions is the company's full identity and access-control system: who can log in, what roster-style data is tracked about each person, and what each user or group is allowed to do inside Arena. It's organized around four related but distinct views. <strong>User Accounts</strong> is the login-level directory — actual Arena user accounts, split between Active and Inactive. <strong>Global Rosters</strong> is a much richer, HR-style table that includes both system users and <strong>non-system users</strong> — a distinction worth understanding: non-system users represent temporary or outside workers (e.g. day laborers, subcontractor staff) who need to be tracked for timesheets and crew assignment but who don't get a full Arena login of their own.</p><p><strong>Global Permission</strong> and <strong>User Permission</strong> then handle access control at two different levels of granularity. Global Permission works at the group level — creating named groups like Super Admin, Foreman, or Project Manager, each with its own set of module/action rights, so that adding a person to a group is enough to grant them everything that group allows. User Permission, by contrast, lets an admin override or supplement an individual's access independently of their group memberships, for the cases where someone needs slightly different rights than their role would otherwise imply.</p><p>Deleting a user is deliberately non-destructive: removing someone from Active Users doesn't erase their record, it moves them to Inactive Users, from which they can later be reactivated (which resends them a registration/password-reset email). This protects historical data — timesheets, approvals, and audit trails tied to that person — from disappearing just because their access was revoked. <strong>Crews</strong>, finally, groups roster members (both system and non-system) into named work teams with a designated Supervisor and Foreman, which is what Field Works and Productivity Logs use for crew-based logging and assignment.</p>","definitions":[{"term":"User Accounts (Active / Inactive)","definition":"The login-level user directory, split into Active Users (can log in) and Inactive Users (retained but cannot log in; can be reactivated)."},{"term":"Signature field (user registration)","definition":"A field on the user-registration form supporting three input modes: Initials, Sign (a scribble pad), or Upload."},{"term":"Global Rosters","definition":"An HR-style directory (Roster ID, Name, Group No., Last Login, Email, Default Indirect Phase Code, Address, Designation, Skills, etc.), split into System User, Non System User, and Non System Inactive User sub-tabs."},{"term":"Non-system user","definition":"A worker tracked in the Global Roster (for timesheets, crew assignment, etc.) who does not have a full Arena login."},{"term":"Global Permission","definition":"Group-level access control: named permission groups (e.g. Super Admin, Global Data Admin, Foreman, Supervisor, Project Manager) each configured with Permissions and Users."},{"term":"Fetch Templates","definition":"An action on Global Permission that imports Arena's standard prebuilt permission groups."},{"term":"User Permission","definition":"Individual-level permission overrides, independent of group-level grants, viewable per user alongside their Basic Details and Group memberships."},{"term":"Crew","definition":"A named work group of Roster members (system and non-system) with a designated Supervisor and Foreman, used for labor tracking, timesheets, and work assignment."}],"procedures":[{"title":"Register a new user or employee","steps":["Go to <strong>Global Data → Users & Permissions</strong> → <strong>User Accounts</strong> → <strong>Active Users</strong> tab.","Click <strong>Register User</strong> and fill in the required details (name, contact, email, password/signature).","Click <strong>Submit</strong>. Use <strong>Notify User</strong> to email them their login/setup instructions."]},{"title":"Bulk-import users via Excel","steps":["Go to <strong>Users & Permissions → Active Users</strong> tab.","Click <strong>Download Sample Excel</strong> and fill in one row per user (use correct country codes for phone numbers).","Click <strong>Upload Excel</strong> and select the completed file."],"note":"Arena creates the accounts and emails each new user automatically."},{"title":"Set up permissions for a group of users","steps":["Go to <strong>Global Data → Users & Permissions</strong> → <strong>Global Permission</strong> tab.","Click <strong>Add User Group</strong>, name it, then click its <strong>Permissions</strong> button and select the allowed modules/actions.","Click its <strong>Users</strong> button to add members — they inherit the group's permissions.","Optionally use <strong>Fetch Templates</strong> to start from one of Arena's standard permission templates (e.g. Super Admin)."]},{"title":"Add a non-system (temporary) worker to the global roster","steps":["Go to <strong>Users & Permissions</strong> → <strong>Global Rosters</strong> → <strong>Non System User</strong> → <strong>Add Non System Roster</strong>.","Fill in worker details (name, designation, skills, experience, group number, etc.) and click Submit.","Use <strong>Export All Users</strong> to download the full roster, or <strong>Add Role</strong> to assign a role to selected rosters."]},{"title":"Create a crew","steps":["Go to <strong>Global Data → Crews</strong> tile → <strong>Create</strong>.","Enter the Crew Name.","Select a <strong>Supervisor</strong> and a <strong>Foreman</strong> from the dropdown (these people must already exist in Global Rosters).","Select <strong>Rosters</strong> — check the individual roster members (system and non-system) who belong to this crew.","Click <strong>Submit</strong>."]}]},{"heading":"UOM & Phase Codes","intro":"<p>UOM, Phasecode & GL Codes is Arena's shared reference-data library for quantity, cost, and accounting classification, consumed by Estimating, Work Orders, Procurement, and Cost modules alike. It brings together four related but separate concepts. <strong>Units of Measure (UOMs)</strong> are the actual units things are counted in — Kg, Litres, Sqm, and so on — and grouping them into <strong>UOM Groups</strong> (Area, Length, Mass, Volume, Weight) is what enables automatic <strong>UOM Conversions</strong> between compatible units, a read-only table generated from the conversion factors you define at the group level.</p><p><strong>Phase Codes</strong> classify cost and activity type across the company — tagged as Direct, Indirect, Non-Productive, or Change Order, and further associated with one or more Cost Types (Material, Labor, Equipment, Subcontractors, Other Expenses). This is the same Phase Code table that Productivity Logs, Cost Breakdown Structures, and Bid Templates all reference, which is why getting phase codes set up correctly here has ripple effects across the rest of the system. <strong>Repair Types</strong> and <strong>GL Codes</strong> round out this area with simpler, single-purpose lists: Repair Types classify equipment/work-order repairs, and GL Codes support general-ledger/accounting integration.</p>","definitions":[{"term":"UOM (Unit of Measure)","definition":"A single unit name (e.g. Kg, Lbs, Cum, Litres, Sqm, Rm) available for use throughout Arena."},{"term":"UOM Group","definition":"A category (e.g. Area, Length, Mass, Volume, Weight) grouping multiple compatible UOMs together."},{"term":"UOM Conversions","definition":"A read-only table of every conversion factor defined across all UOM Groups (e.g. \"Kg → 2.2 → Lbs\")."},{"term":"Phase Code","definition":"A cost/activity classification with a Phase Code Type (Direct / Indirect / Non-Productive / Change Order) and one or more associated Cost Types (Material, Labor, Equipment, Subcontractors, Other Expenses)."},{"term":"Repair Type","definition":"A simple classification (Repair Type, Description) used to categorize equipment/work-order repairs."},{"term":"GL Code","definition":"A simple record (Code, Description) supporting general-ledger/accounting integration."}],"procedures":[{"title":"Add a new unit of measure and group it","steps":["Go to <strong>Global Data → UOM, Phasecode & GL Codes</strong> tile → <strong>UOMs</strong> tab.","Click <strong>Add UOM</strong>, type the unit name (e.g. \"Tonne\"), and save.","To make it convertible with other units, go to <strong>UOM Groups</strong>, add it to (or create) a group, and enter the conversion factor(s)."],"note":"The new factors then appear read-only under UOM Conversions."},{"title":"Add a Phase Code","steps":["Go to the <strong>Phase Codes</strong> tab and click <strong>Add</strong>.","Enter the Phase Code and its Description, choose its Phase Code Type (Direct/Indirect/Non-Productive/Change Order), and select which Cost Types apply (Material/Labor/Equipment/Subcontractors/Other Expenses).","Save."],"note":"Bulk create/update is also available via Excel Upload, which supports a Create Mode and an Update Mode."}]},{"heading":"Settings","intro":"<p>Settings is Global Data's catch-all configuration hub — a large left-hand navigation of company-wide preferences that don't belong to any one functional tile, from currency and date formats to mail routing, holidays, and keyboard shortcuts. Rather than scattering these choices across the modules they affect, Arena centralizes them here so an admin has one place to check when something needs to change company-wide.</p><p>A handful of these screens are worth calling out specifically because they follow a recurring builder pattern also seen elsewhere in Global Data (Owner, Customer, Roster): a fixed set of Standard Fields plus an extensible list of Configurable Fields, each addable via Add Field with a chosen data type, a Required toggle, and a Show on cards toggle. This pattern shows up for Roster Settings, the Owner registration form, and Sub Contractor Settings (notably used there for certification attachments like ISO 9001 or CIDB). Two Naming Framework screens exist and are easy to confuse: the Global Settings version here renames Procurement/Inventory/Roster/Cost terminology company-wide, while a separate, per-Construction-Type Naming Framework (Step 5 of the Construction Type pipeline) renames Activity/Work-Package/Location terms scoped to one construction type. Finally, note that a couple of documented items — Test Emails and Enable AWP (Advanced Work Packaging) — were not observed in the live navigation during review, suggesting they may be feature-flagged per company or plan.</p>","definitions":[{"term":"Roster Settings","definition":"Configuration for the fields shown on roster records: fixed Standard Fields plus admin-added Configurable Fields (types include Text Box, Attachment, Check Box, Date, Label, Multi Select, Paragraph, Roster-lookup, Scribble, Single Select, Table, Time, Signature)."},{"term":"Owner (Settings)","definition":"The same Standard Fields + Add Field builder pattern, applied to the Owner registration form — this drives the fields seen in the Owners \"Create Owner\" wizard."},{"term":"Currency","definition":"A single company-wide dropdown (Indian Rupee, USD, EUR, GBP, JPY, CHF) setting the currency symbol/format used throughout Arena."},{"term":"Global Date Format","definition":"A company-wide choice between MM-DD-YYYY and DD-MM-YYYY."},{"term":"Mail Settings","definition":"A per-module table (LOR, Procurement, Opportunities, Work Order, Proposal Management, Arena Communications, Expense Tracker, RFI, Transmittal, Tender Management, Capital Management, Submittal, Change Order, Delay Form, Other Forms) choosing Gmail or Outlook routing for that module's emails."},{"term":"Naming Framework (Global Settings)","definition":"A large table renaming Procurement/Inventory/Roster/Cost terminology (Project, Inventory Master, Pickup Ticket, Load Out Request, Vendor, Purchase Order, Opportunity, Customer, Phase Code, Estimate, and more) company-wide, distinct from the per-Construction-Type Naming Framework."},{"term":"Sub Contractor Settings","definition":"Standard Fields plus a Configurable Fields builder supporting certification/compliance attachments (CIDB, ISO 9001, ISO 45001, ISO 14001, Safety and Health Assessment, Electrical Contractor License), each toggleable as Required and typed as Attachment."},{"term":"Enable AWP (Advanced Work Packaging)","definition":"A documented toggle intended to show/hide the AWP menu for all users; not observed in the live Settings navigation during review, and may be feature-gated per plan."}],"procedures":[{"title":"Change the company's currency","steps":["Go to <strong>Global Data → Settings → Currency</strong> (left nav).","Choose the desired currency from the dropdown.","Click <strong>Save Changes</strong>."]},{"title":"Change the global date format","steps":["Go to <strong>Settings → Global Date Format</strong>.","Select <strong>MM-DD-YYYY</strong> or <strong>DD-MM-YYYY</strong>.","Click <strong>Save Changes</strong>."]},{"title":"Route a module's emails through Outlook instead of Gmail","steps":["Go to <strong>Settings → Mail Settings</strong>.","Find the module row (e.g. Work Order) and click the <strong>Outlook</strong> radio button in that row."],"note":"The change saves immediately per row. Make sure Outlook has been connected first via Marketplace."},{"title":"Rename terminology used throughout the app","steps":["For Activity/Work-Package/Location-hierarchy terms scoped to one construction type, go to <strong>Global Data → Construction Type</strong> tab → <strong>Step 5 (Naming Framework)</strong>.","For Procurement/Inventory/Roster/Cost terms company-wide, go to <strong>Global Data → Settings → Naming Framework</strong>.","In either screen, edit the <strong>Custom Name</strong> (and optionally <strong>Short Name</strong>) column next to the term you want to relabel, then save."]}]},{"heading":"Forms & Quickapps","intro":"<p>This area houses Arena's template library for standard construction documents and workflow forms, organized by functional domain across tabs like Construction Forms, Work Order Forms, Procurement, Inventory Forms, Project Forms, Drawing Management Forms, Cost, and Invoice Forms. Rather than every project designing its own RFI or Change Order layout from scratch, a form type's field-by-field structure is built once here as a <strong>Template</strong>, and every project then simply selects from the available templates when a form of that type is raised.</p><p><strong>Document Management</strong>, despite sitting in the same general area, solves a different problem: it defines the standard <strong>folder structure</strong> a new project's document/drawing space starts with (for example, an FEL-1 template might pre-create Civil, Mechanical, Structural, Architectural, Instrumentation, and Process Controls folders). This gives every project the same predictable taxonomy on day one instead of each project team inventing their own filing scheme. <strong>Quickapps</strong>, meanwhile, addresses a more ad-hoc need: it lets a company build lightweight custom mini-apps (&quot;Quick Apps&quot;) for field data capture that doesn't fit neatly into Arena's standard form types, and separately hosts <strong>Standard Tables</strong> — simple reusable reference tables shared across projects.</p>","definitions":[{"term":"Construction Forms (tab)","definition":"Cards for RFI, Submittals, Change Orders, Meeting Minutes, Delay Form, Request For Information, and Transmittals, each configurable via its own Templates screen."},{"term":"Template (form)","definition":"A named, field-by-field layout for a specific form type, built via Create Template; selectable whenever that form type is raised on a project."},{"term":"Document Management (templates)","definition":"Predefined folder-structure templates (e.g. FEL-1, FEL-2, FEL-3, Detailed Engineering) applied to new projects so every project starts with a consistent folder taxonomy."},{"term":"Standard Tables","definition":"A grid of named, reusable reference tables (e.g. Arena, Drawing Status, Sample) shared across projects."},{"term":"Quick Apps","definition":"Custom, lightweight mini-apps for ad-hoc field data capture (e.g. Bid or Estimate Log, Subcontractor Bid Proposal, Observation Report, Non-Conformance Report, Completion Notice, Storage Inspections, Variance Request)."}],"procedures":[{"title":"Create a new RFI template","steps":["Go to <strong>Global Data → Forms</strong> → <strong>Construction Forms</strong> tab → click <strong>RFI</strong>.","Click <strong>Create Template</strong>.","Build the form layout (sections/fields) as needed and save."],"note":"The new template becomes available for selection whenever an RFI is raised on a project."},{"title":"Create a reusable folder structure for project documents","steps":["Go to <strong>Global Data → Document Management</strong> → <strong>Create Template</strong>, and name it (e.g. \"FEL-1\").","Select the template, then click <strong>New Folder</strong> repeatedly to build out the folder hierarchy (e.g. Civil, Mechanical, Structural).","Apply this template when setting up a new project's document space."]},{"title":"Create a Quick App","steps":["Go to <strong>Global Data → Quickapps</strong> → <strong>Quick Apps</strong> tab → <strong>Create</strong>.","Name the app and design its data-capture fields.","Save — the Quick App becomes available from the mobile/field app or relevant project screen."]},{"title":"Create a Standard Table","steps":["Go to <strong>Quickapps</strong> → <strong>Standard Tables</strong> tab → <strong>Add</strong>.","Define the table's name and columns.","Save — the table can then be reused/referenced across projects."]}]},{"heading":"Notifications","intro":"<p>Global Notifications configures which system events trigger notifications, on which channels — Mail, Web, or Mobile — and for which groups of users, at the company level (as opposed to notification settings scoped to a single project). Rather than a flat list of every notifiable event, Arena organizes them into <strong>Event Groups</strong> by functional area (Inventory Management, Equipment Management, Opportunity Management, Timesheet Management, Procurement, Work Order, and more), which makes it manageable to configure notification behavior for a whole functional area at once instead of event by event.</p><p>Each group can be assigned its own set of recipient Users, decoupling &quot;who gets notified&quot; from &quot;what triggers it.&quot; If a company's notification needs change, <strong>Get Standard Event Groups</strong> can reseed Arena's default groups, and the standalone <strong>Events</strong> tab gives a flat, module-agnostic view of every configurable event with a company-wide <strong>Reset to Standard</strong> option.</p>","definitions":[{"term":"Event Group","definition":"A named collection of related notification events (e.g. Inventory Management, Work Order, Bid Management), each with its own Notifications and Users configuration."},{"term":"Add Event Groups","definition":"Creates a new custom event group beyond Arena's standard ones."},{"term":"Get Standard Event Groups","definition":"Reseeds Arena's default event groups, with a confirmation prompt before proceeding."},{"term":"Events tab","definition":"The master, module-agnostic list of every configurable event, with Mail/Web/Mobile toggle columns and a Reset to Standard button."}],"procedures":[{"title":"Set up notification rules (e.g. email alerts for low inventory)","steps":["Go to <strong>Global Data → Notifications</strong> → <strong>Event Groups</strong>.","Click <strong>Notifications</strong> on the relevant group (e.g. Inventory Management).","Expand the module section, find the specific event (e.g. \"Minimum Stock Reached\"), and toggle <strong>Mail</strong>, <strong>Web</strong>, and/or <strong>Mobile</strong> on."]},{"title":"Create a custom notification group","steps":["Go to <strong>Notifications</strong> → <strong>Event Groups</strong> → <strong>Add Event Groups</strong>.","Name the group, then use its <strong>Notifications</strong> button to select which events feed into it and on which channels.","Use its <strong>Users</strong> button to add the people who should receive these notifications."]}]},{"heading":"Marketplace & Staged Tables","intro":"<p>Marketplace is the company-wide integrations hub connecting Arena to third-party services — Microsoft OneDrive, Sharepoint, Outlook, Calendar, and Users, Adobe Sign, Trimble Viewpoint, Google Maps, Zoom Info, and IFS. Most integrations follow the same pattern: an admin grants organization-wide OAuth consent once (using a company-domain email — personal accounts cannot connect), and every user benefits without individually authorizing anything themselves. Individual users can still optionally connect their own mailbox later via My Profile → Settings for finer-grained routing; until they do, mail/calendar/document actions on their behalf simply fall back to routing through the Admin Account.</p><p><strong>Trimble Viewpoint</strong> is more involved than the Microsoft integrations, since it's a full ERP connection rather than a simple OAuth login: it requires connection credentials, per-module Table Name/Schema Name mapping, and — once configured — each module gets linked to a Stage and Primary Key column, feeding directly into <strong>Staged Tables</strong>. Staged Tables is the operational counterpart to Marketplace's setup screens: it's the landing zone where data synced in from an external ERP or accounting system (Trimble Viewpoint, Soft Tech) sits before being mapped and promoted into native Arena records. This staging step exists so that incoming external data can be reviewed, column-mapped, and validated before it becomes a permanent Arena record — either on a recurring schedule via Auto Sync Criteria, or promoted immediately in bulk.</p>","definitions":[{"term":"Marketplace","definition":"The grid of third-party integration cards (Microsoft OneDrive, Sharepoint, Outlook, Users, Calendar, Adobe Sign, Trimble Viewpoint, Google Maps, Inn Clock Consent, Zoom Info, IFS)."},{"term":"Org-wide consent","definition":"The pattern most Microsoft integrations use: an admin signs in once with a company-domain email to grant consent on behalf of the whole organization."},{"term":"Trimble Viewpoint connection","definition":"An ERP integration requiring connection credentials (Test Connection and Save), then per-module Table Name/Schema Name mapping (Save Configuration), after which each module gets a Link button tying it to a Stage and Primary Key column."},{"term":"Staged Tables","definition":"The landing zone for data synced from an external system (e.g. Trimble Viewpoint, Soft Tech) before it is mapped and promoted into native Arena records, organized per system with a left nav of stageable entities (Users, Projects, Crews, Phase Codes, Customers, Vendors, Owners, and more)."},{"term":"Map Attributes","definition":"The action mapping each staged/external column to its native Arena field, with an option to update the mapping after future syncs."},{"term":"Auto Sync Criteria","definition":"An hours-based recurring sync interval configured per staged entity."},{"term":"Bulk Create Arena Records","definition":"Promotes all currently staged rows for an entity into real Arena records at once, with a confirmation prompt."}],"procedures":[{"title":"Connect Arena to Microsoft Outlook for email","steps":["Go to <strong>Global Data → Marketplace</strong> → <strong>Microsoft Outlook</strong>.","Click <strong>Sign in with Microsoft</strong> and grant organization-wide consent (must use a company-domain email, not personal).","Go to <strong>Settings → Mail Settings</strong> and switch the relevant modules (e.g. Work Order) to <strong>Outlook</strong>."]},{"title":"Sync external users into Arena via Staged Tables","steps":["Connect the source system first: <strong>Global Data → Marketplace</strong> → e.g. Trimble Viewpoint → enter credentials → <strong>Test Connection and Save</strong> → map Table/Schema per module → <strong>Save Configuration</strong>.","Go to <strong>Global Data → Staged Tables</strong> → select the system tab (e.g. View Point) → select <strong>Users</strong> in the left nav.","Click <strong>Map Attributes</strong> and map each external column to the matching Arena field.","Optionally set <strong>Auto Sync Criteria</strong> for a recurring schedule, or click <strong>Bulk Create Arena Records</strong> to promote all currently staged rows immediately."]}]},{"heading":"Customer Settings","intro":"<p>Customer (Opportunity Customer Settings) configures the data model behind the customer/lead-management side of the Opportunities and Proposal pipeline. It defines what information is captured about a Customer and their individual Contacts — using the same Standard Fields + Configurable Fields builder pattern found elsewhere in Global Data — and, importantly, sets up a formal multi-level <strong>Approval Workflow</strong> that customer and opportunity records can be routed through before they're finalized. This gives sales and business-development processes the same kind of structured sign-off that Arena applies to safety, quality, and forms elsewhere in the product.</p>","definitions":[{"term":"Customer (Standard/Configurable Fields)","definition":"The customer data model — Standard Fields (Customer ID, Customer Name, Short Name, Alias Name, addresses, Email, Phone, Fax, URL, Tax Codes, Locations) plus admin-added Configurable Fields."},{"term":"Contact","definition":"The settings for individual customer contacts, mirroring the Vendor contact-table pattern."},{"term":"Approval Workflow (Customer)","definition":"A table of approval Levels (Level, Level Description, Approvers, Workflow Type) defining a multi-step sign-off chain for customer/opportunity records."}],"procedures":[{"title":"Add an approval level for customer records","steps":["Go to <strong>Global Data → Customer</strong> tile → <strong>Approval Workflow</strong> tab → <strong>Create Level</strong>.","Name/describe the level, assign Approvers, and choose the Workflow Type.","Save — subsequent opportunity/customer approvals will route through this chain in order."]}]},{"heading":"Cost & Bid Templates","intro":"<p>This area defines the company's cost classification taxonomy and reusable cost structures used across estimating, budgeting, and cost tracking. <strong>Cost Type</strong> starts with a fixed set of system categories (Material, Equipment, Labor, Unit Rate, Sub Contractor) but lets a company extend it with custom types — BOQ's, Freight Charges, Fuel & Gas — for costs that don't map cleanly onto the built-in categories. <strong>Cost Breakdown Structure (CBS)</strong> builds on top of Phase Codes (the same table shared with UOM/Phasecode & GL Codes) to assemble named, reusable templates that represent how a project's costs should be organized, with one template markable as the company Default so new projects have a sensible starting point.</p><p><strong>Bid Templates</strong> serves a related but separate purpose: it's a master catalog of estimate/bid line items — an Item Description paired with its Unit of Measure — that bid and estimate forms can pull from directly. The goal is consistency: rather than every estimator typing their own description for &quot;Ready Mix Concrete, M25 grade,&quot; everyone selects from the same standardized catalog, keeping bids comparable across projects and estimators.</p>","definitions":[{"term":"Cost Type","definition":"A cost classification — fixed system types (Material, Equipment, Labor, Unit Rate, Sub Contractor) plus custom types added via Add Type."},{"term":"Cost Breakdown Structure (CBS)","definition":"A named, reusable structure for organizing project costs, built from Phase Codes, with one template markable as Default."},{"term":"Bid Templates","definition":"A master catalog of estimate/bid line items (Item Description + UOM Group + UOM) that bid/estimate forms can pull from for consistency across the company."}],"procedures":[{"title":"Add a custom cost category","steps":["Go to <strong>Global Data → Cost</strong> → <strong>Cost Type</strong> tab → <strong>Add Type</strong>.","Enter the name (e.g. \"Freight Charges\") and a description, then submit."]},{"title":"Set up a Cost Breakdown Structure (CBS) template","steps":["Go to <strong>Global Data → Cost</strong> → <strong>Cost Breakdown Structure</strong> tab → <strong>Templates</strong> → <strong>Add Template</strong>.","Name it and build its structure using the available Phase Codes (managed under the Phase Codes side-list on the same screen, or under UOM/Phasecode & GL Codes).","Optionally mark it as the company's Default CBS template."]},{"title":"Add a bid line item","steps":["Go to <strong>Global Data → Bid Templates</strong> → <strong>Add Item</strong>.","Enter the Item Description and choose its UOM Group and UOM.","Submit."],"note":"For bulk loading, use Download Sample Excel, fill it in, then Upload Excel."}]},{"heading":"Compliance Hub","intro":"<p>Compliance Hub tracks the company's required compliance documentation — licenses, certifications, insurance, and similar items — through a simple two-step model: first define what's required, then track actual status against that requirement. The <strong>Compliance Directory</strong> is where a requirement is defined (its name, category, how often it needs renewal, and what evidence must be provided), while <strong>My Company Compliance</strong> shows the company's real submitted records measured against those defined requirements. Splitting definition from tracked status this way means the same requirement can be checked against multiple time periods or renewal cycles without redefining it each time, and status chips (Met, Expired, Expiring Soon, Missing) give an at-a-glance read on where the company stands.</p>","definitions":[{"term":"Compliance Directory","definition":"Defines the types of compliance required — Compliance Name, Description, Category/Type, Renewal Frequency, Renewal Period, Evidence Type, and Required Evidence (a file upload)."},{"term":"My Company Compliance","definition":"The company's actual submitted/tracked compliance records against the Directory's defined requirements, including a Source column."},{"term":"Status chips (Met / Expired / Expiring Soon / Missing)","definition":"Counter chips summarizing how many compliance items fall into each status."}],"procedures":[{"title":"Define a new compliance requirement","steps":["Go to <strong>Global Data → Compliance Hub</strong> → <strong>Compliance Directory</strong> → <strong>Create</strong>.","Fill in Compliance Name*, Description, Category/Type*, Renewal Frequency and Period (if periodic renewal applies), Evidence Type*, and upload the Required Evidence template/sample.","Submit — this requirement is now tracked (and can show as Missing/Expiring/Expired) under <strong>My Company Compliance</strong>."]}]},{"heading":"Measurement Templates","intro":"<p>Measurement Templates defines reusable quantity take-off formulas — for example, Length × Breadth × Depth × Count — that eliminate manual arithmetic when a field team logs progress. Rather than someone in the field calculating a volume or area by hand and typing in the result, a Measurement Template lets them enter the raw dimensions and have Arena compute the quantity automatically, reducing both effort and the chance of calculation errors. Once built, a template becomes genuinely useful only after it's linked to a Work Package (via Step 10 of the Construction Type pipeline), which is what makes the calculator actually appear when someone logs progress against that work package in the field.</p>","definitions":[{"term":"Measurement Template","definition":"A reusable quantity take-off formula (e.g. Length × Breadth × Depth × Count) with named Parameters and a Formula expression referencing them, downloadable/manageable via Download Excel."},{"term":"Parameters","definition":"The named variables (e.g. L, B, D, Nos) a Measurement Template's formula references, added via a + button."},{"term":"Formula","definition":"A free-text expression referencing a template's parameters by position (e.g. [1]*[2]*[3]*[4], or the helper example [1] * [3] or [1] * [2] / [3])."}],"procedures":[{"title":"Build a quantity take-off formula for progress tracking","steps":["Go to <strong>Global Data → Measurement Templates</strong> → <strong>Add Template</strong>.","Enter a Template ID* and Template Name* (e.g. \"LBD\").","Under <strong>Parameters</strong>, add each variable the formula needs (e.g. L, B, D, Nos), clicking + after each.","Enter the <strong>Formula</strong> referencing the parameters (e.g. <code>(L)*(B)*(D)*(Nos)</code>).","Click <strong>Submit</strong>."],"note":"Later, link this template to a Work Package via the Construction Type pipeline's Step 10 (Work Package Measurement Template Linking)."}]}],
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
    narrative: [{"heading":"Home Page","intro":"<p>The Home page is the first screen you land on after logging into Arena, and it's designed to orient you immediately rather than drop you into a menu. It surfaces a weather report in the top-left corner (once you allow location access), a horizontal tab of every project you have access to along with its progress percentage, and a set of module tiles — Time Management, Equipment Management, Inventory Management, and others — scoped to whatever permissions your account has been granted. If your account only has \"Projects\" permission, Arena skips Home entirely and takes you straight to the Projects page instead.</p><p>The Home page is also the jumping-off point into individual project detail. Clicking a project's progress card in the horizontal tab takes you to that project's Project Desk, which is where the more refined, project-specific insights live. Home itself is deliberately a wide-angle view — a snapshot across everything you're involved in — while Project Desk is where you zoom into one project at a time.</p><p>Because the tiles and modules shown on Home are permission-driven, not everyone sees the same Home page. If a tile you expect — Time Management or Equipment Management, for example — is missing, that's not a bug; it means your account hasn't been granted access to that module, and the fix is to contact your project or system administrator rather than to look for a hidden setting on your own account.</p>","definitions":[{"term":"Home Page","definition":"The landing screen shown immediately after login, displaying a weather report, a horizontal tab of accessible projects with progress percentages, and permission-based module tiles (Time Management, Equipment Management, Inventory Management, Projects). Users with only \"Projects\" permission are routed to the Projects page instead of Home."},{"term":"Project Desk","definition":"The detailed, project-specific view reached by clicking a project's progress card from the Home page's horizontal project tab."},{"term":"Module tile","definition":"A clickable panel on the Home page representing a module (e.g. Time Management, Equipment Management, Inventory Management). Visibility of each tile depends on the permissions assigned to your account."}],"procedures":[{"title":"Navigate to a project's detail view from Home","steps":["On the Home page, locate the project in the horizontal project tab.","Click on that project's progress card.","You are taken to that project's <strong>Project Desk</strong> for a more refined view of project insights."]},{"title":"Resolve a missing module tile","steps":["Check which tiles currently appear on your Home page (Time Management, Equipment Management, Inventory Management, Projects).","If a module you need is missing, contact your project or system administrator to request access."],"note":"Module visibility on Home is entirely permission-driven — there is no user-side setting to reveal a hidden module tile."}]},{"heading":"User Registration","intro":"<p>User Registration is how new people are brought into Arena as system users — it's the administrative process of creating an account, not something an end user does for themselves by signing up. Registration happens centrally, under Global Data's Company section, in the Users and Permissions tab, which reflects that user creation in Arena is an administrative act tied to a company's account roster rather than an open self-registration flow.</p><p>Registering a user is more than just capturing a name and email. The registration form also captures how that person will sign documents electronically going forward — by typing initials, drawing a signature on a scribble pad, or uploading an existing signature image — because signatures are used elsewhere in Arena wherever a form or approval needs to be signed off. Getting this set correctly at registration time avoids having to configure it separately later.</p><p>Once a user is registered, they don't already have a password — Arena emails them a welcome registration link (either automatically on submission, or triggered manually via \"Notify User\") that they use to set their own password for the first time. This same \"Notify User\" mechanism doubles as the path for resending a password reset to an existing user: rather than a separate self-service \"forgot password\" flow, an administrator resending the registration email is how an existing user's password gets reset in practice.</p><p>For companies onboarding many people at once, Arena supports bulk registration via an Excel template — download the sample, fill it in, and upload it — with every user created this way automatically receiving the same welcome registration email as someone registered individually. And because a user roster naturally grows and changes, Arena provides search, export, and edit/delete tools scoped to Active Users, while deleted users move to an Inactive Users list rather than being permanently erased — preserving history while cutting off login access.</p>","definitions":[{"term":"Users and Permissions","definition":"The tab under Global Data's Company section where users are registered, edited, searched, exported, and where permission groups are ultimately tied back to."},{"term":"Signature (registration)","definition":"A field on the user registration form with three setup methods: \"Initials\" (typed), \"Sign\" (a scribble/drawing pad), or \"Upload\" (an image file of an existing signature)."},{"term":"Notify User","definition":"An action on a registered user's card that emails them a welcome registration link. Used both to trigger the very first password setup for a new user, and to resend that same link as a de facto password reset for an existing user."},{"term":"Active Users","definition":"The list of user accounts that are created and currently able to log in to Arena. This is where registration, search, export, and edit/delete actions are performed."},{"term":"Inactive Users","definition":"The list of user accounts that have been deleted/deactivated from Active Users. Inactive accounts no longer have login access, but their record is preserved rather than permanently deleted."},{"term":"Bulk registration (Excel)","definition":"A method of registering many users at once by downloading a sample Excel template from Active Users, filling it in, and uploading it. All users created this way automatically receive welcome registration emails."}],"procedures":[{"title":"Register a new user","steps":["Go to <strong>Global Data &gt; Company &gt; Users and Permissions</strong>.","Click <strong>Register User</strong>.","Fill in the required fields: name, email, contact number with country code, etc.","Set a signature method: <strong>Initials</strong>, <strong>Sign</strong> (scribble pad), or <strong>Upload</strong> (signature image).","Click <strong>Submit</strong> to create the user card."]},{"title":"Let a new user set their password","steps":["After registering the user, click <strong>Notify User</strong> (or rely on the system's auto-send on submit).","The user receives a welcome registration email.","The user follows the link in that email to set their own password."]},{"title":"Resend a password-reset email to an existing user","steps":["Go to <strong>Users &amp; Permissions &gt; Active Users</strong>.","Find the user's row/card.","Use the <strong>Notify User</strong> option to resend the registration email, which the user can use to reset their password."]},{"title":"Register many users at once","steps":["Go to <strong>Users &amp; Permissions &gt; Active Users</strong>.","Click <strong>Download Sample</strong> to get the Excel template.","Fill in the template with each user's details.","Click <strong>Upload Excel</strong> to bulk-create the users."],"note":"All users created this way automatically receive welcome registration emails."},{"title":"Edit or delete a registered user","steps":["In <strong>Users &amp; Permissions &gt; Active Users</strong>, locate the user's card or table row.","Use the kebab (3-dot) menu, or the Action column's edit/delete icons."],"note":"Deleting a user moves their account to Inactive Users rather than permanently removing it."},{"title":"Find a specific user","steps":["In <strong>Users &amp; Permissions &gt; Active Users</strong>, use the Search bar next to the Register User button.","Search by first name, last name, employee ID, contact number, or email."]},{"title":"Download a list of all registered users","steps":["In <strong>Users &amp; Permissions &gt; Active Users</strong>, click <strong>Export</strong> or <strong>Download Excel</strong>."]}]},{"heading":"Permissions & Groups","intro":"<p>Permissions in Arena are organized around roles, called user groups, rather than being assigned to individuals one setting at a time. A user group is created for a project, given a name, and then configured with a specific set of rights per module — after which individual users are added to that group and inherit its permissions. This role-based approach is what makes permission management scalable: instead of configuring forty individual users, an administrator configures a handful of roles and assigns people to them.</p><p>Each module a role can touch supports a graduated set of rights: Assign To (which restricts visibility and action to only the specifically assigned user), View, Create, Edit, Delete, Download, Print, and an Admin right that acts as a master switch covering everything else. This granularity matters in construction workflows where, for example, a subcontractor's crew might need to view and create records in a module but should never be able to delete them, while a project manager needs full Admin rights across the board. Before setting these per-module rights, the role card requires toggling \"Roll Back\" first — a necessary first step in configuring any role's permissions.</p><p>Because many companies run structurally similar projects, Arena lets you copy an entire user group's configuration to other projects at once rather than rebuilding the same role from scratch every time a new project starts, which keeps permission structures consistent across a portfolio without repetitive manual setup.</p>","definitions":[{"term":"User Group","definition":"A named role created on a project's Permissions screen, to which per-module rights are assigned and to which individual users are then added."},{"term":"Roll Back toggle","definition":"A toggle on a role card that must be enabled before per-module permission rights can be configured for that role."},{"term":"Assign To (permission)","definition":"A permission level restricting view, create, edit, and delete rights on a module to only the user(s) specifically assigned to that record."},{"term":"Admin (permission)","definition":"A master permission level for a module that covers View, Create, Edit, Delete, Download, and Print all at once."},{"term":"Copy User Groups to Projects","definition":"An action on the Permissions screen that copies a user group's full configuration to one or more other selected projects, avoiding the need to rebuild the same role manually on each project."}],"procedures":[{"title":"Create a permission/user group for a project","steps":["Go to the project's <strong>Permissions</strong> screen.","Click the <strong>User Group</strong> button.","Enter a name for the group in the pop-up.","Confirm to create it as a new role card."]},{"title":"Configure permission levels for a role","steps":["On the role's card, toggle <strong>Roll Back</strong> first.","For each module, set the desired rights: Assign To, View, Create, Edit, Delete, Download, Print, or Admin."],"note":"Admin is a master permission covering all of the other rights for that module."},{"title":"Assign users to a permission/role group","steps":["On the role's card in the Permissions screen, click the <strong>Users</strong> button.","Select which users belong to that role/permission group."]},{"title":"Copy a user group's permissions to other projects","steps":["On the Permissions screen, click <strong>Copy User Groups to Projects</strong>.","In the pop-up, select which projects should receive a copy of that user group's setup."]}]},{"heading":"Notifications","intro":"<p>Notifications control how Arena alerts users when something relevant happens — a submission, an approval, a status change — and Arena splits this configuration into two distinct scopes: project-level and global. Project-level Notifications, configured within a specific project's settings, govern alerts for events happening inside that project only. Global Notifications, configured under Global Data, govern company-wide alerts instead. These two scopes are kept separate on purpose and don't overlap in the interface: project-level notifications you configure will not show up in the Global Notifications screen, so if you're looking for a specific alert setting, you need to know which scope it actually belongs to.</p><p>Within a project's Notifications area, the Events tab is where the real granularity lives — each trackable event can be independently toggled for delivery via Email, Web, and/or Mobile, and the wording of the notification itself can be customized rather than left as a generic system message. For companies with a lot of distinct events, Notifications also supports Event Groups, which bundle related events together; rather than building groups from scratch, Arena offers a one-click option to auto-create its own default set of standard event groups as a starting point.</p>","definitions":[{"term":"Project Notifications","definition":"Notification configuration scoped to a single project, found under that project's settings, controlling alerts for events specific to it."},{"term":"Global Notifications","definition":"Notification configuration scoped to the entire company, found under Global Data. Project-level notifications do not appear here — the two scopes are kept separate."},{"term":"Events tab (Notifications)","definition":"The tab within a project's Notifications screen where individual events can be toggled for Email, Web, and/or Mobile delivery, and where the notification's message wording can be customized via the message icon."},{"term":"Event Group","definition":"A named grouping of related notification events, created manually via \"Add Event Group\" or generated automatically using \"Get Standard Event Groups\" to apply Arena's default groupings."}],"procedures":[{"title":"Set up which notifications users receive for a project","steps":["Go to the project's <strong>Notifications</strong> screen.","Select the <strong>Events</strong> tab.","Toggle the Email, Web, and/or Mobile icon on each event to control how that notification is delivered.","Click the message icon on an event to customize its wording."]},{"title":"Create a new notification event group","steps":["Go to <strong>Notifications &gt; Event Groups</strong>.","Click <strong>Add Event Group</strong> and enter a name in the pop-up.","Alternatively, click <strong>Get Standard Event Groups</strong> to auto-create Arena's default event groups."]}]},{"heading":"Company & Global Data Setup","intro":"<p>Company & Global Data Setup covers the foundational, company-wide configuration that everything else in Arena is built on top of. Company Details, under Global Data, is where you record the company's name, logo, address, and contact information — a one-time setup task whose effects ripple everywhere, since this information auto-populates forms and appears in other places across the application rather than needing to be re-entered per document. It's also editable at any time by returning to the same Company tab, so a change in address or a rebrand doesn't mean reconfiguring anything downstream.</p><p>Global Data itself is broader than just company details — it's the general setup space for construction-specific data that needs to exist before projects can be run against it: work areas, work packages, activity sequences, and BYO (Build Your Own) project forms. Critically, this data is organized per Construction Type, which you select from a dropdown before entering any data; everything you configure under a given Construction Type becomes available to every project that uses that same type, which is what lets an organization standardize its operational scaffolding across many projects of the same kind rather than configuring each project individually from scratch.</p><p>Because Global Work Areas, Global Work Packages, and Activity Sequence Templates build on each other, Arena expects them to be set up in a specific order: first Global Work Areas, then Global Work Packages, and finally Activity Sequence Templates. Following this sequence matters because later steps reference the structures created in earlier ones — trying to configure Activity Sequence Templates before Work Packages exist means it would have nothing to sequence.</p>","definitions":[{"term":"Company Details","definition":"The Global Data screen for entering the company's name, logo, address, and contact information. This data auto-populates forms and other places across Arena, and can be edited later from the same tab."},{"term":"Global Data","definition":"The setup space for construction-specific data — work areas, work packages, activity sequences, and BYO (Build Your Own) project forms — organized per Construction Type. Data entered here is available to every project using the selected Construction Type."},{"term":"Construction Type","definition":"A dropdown selection in Global Data that scopes which projects a given piece of setup data applies to. All projects sharing a Construction Type see the same Global Data configuration for it."},{"term":"Global Work Areas / Global Work Packages / Activity Sequence Templates","definition":"The three ordered setup steps within a Construction Type in Global Data: Step 1 defines Global Work Areas, Step 2 defines Global Work Packages, and Step 3 defines Activity Sequence Templates, each building on the one before it."}],"procedures":[{"title":"Set up company name, logo, and address","steps":["Go to <strong>Global Data &gt; Company</strong> (Company Details).","Enter the company's name, logo, address, and contact information.","Click <strong>Submit</strong>."],"note":"This information auto-populates forms and other places across Arena. Return to the same Company tab any time to edit it later."},{"title":"Set up Global Data for a Construction Type","steps":["Go to <strong>Global Data</strong>.","Select a Construction Type from the dropdown.","Complete <strong>Step 1: Global Work Areas</strong>.","Complete <strong>Step 2: Global Work Packages</strong>.","Complete <strong>Step 3: Activity Sequence Templates</strong>."],"note":"All projects using that Construction Type will see the data entered here — configure it once per Construction Type, not once per project."}]},{"heading":"Support","intro":"<p>Support is the built-in path for getting help directly from within Arena, without needing to leave the application to find contact information. It's positioned in the top-right of the navigation bar alongside Notifications and Downloads, which puts it within easy reach no matter what screen you're on — a deliberate placement, since support requests often come up in the middle of trying to complete some other task.</p><p>The in-app Support panel is meant for describing what you were trying to do and what went wrong, which gives the support team the context they need without a back-and-forth to establish basics. That said, Arena also provides a direct fallback: emailing support@inncircles.com with your company name and a description of the issue works if the Support icon isn't visible to you for some reason, or if you need a faster turnaround than the in-app panel typically provides.</p>","definitions":[{"term":"Support panel","definition":"An in-app panel opened via the headset icon in the top-right of the navigation bar (next to Notifications and Downloads), used to describe an issue and submit it directly to support."}],"procedures":[{"title":"Raise a support ticket","steps":["Click the <strong>Support</strong> icon (headset icon, top-right of the navigation bar next to Notifications and Downloads).","Describe what you were trying to do.","Submit the ticket."],"note":"If you don't see the Support icon, or need a faster response, email support@inncircles.com directly with your company name and a description of the issue."}]}],
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
    narrative: [{"heading":"Outlook Integration","intro":"<p>Arena Calendar is not a standalone scheduling tool that lives only inside Arena — it is designed to mirror the calendar your team already keeps in Microsoft Outlook. Before any events can appear, someone has to establish a trust relationship between Arena and your organization's Microsoft 365 tenant (or an individual user's Microsoft account). This section covers that setup work: granting consent, connecting accounts, and knowing which level of connection you need.</p><p>There are two distinct ways to establish this connection, and understanding the difference matters. An <strong>admin-wide connection</strong>, granted once in Global Data → Marketplace, lets every user in the organization use the integration without each person having to sign in separately. A <strong>personal connection</strong>, granted from My Profile → Settings, links a single user's own Outlook mailbox and calendar and does not depend on admin action. Most organizations set up the admin-wide connection first so the feature is available company-wide, and only fall back to personal consent for edge cases (for example, a user on a different Microsoft tenant).</p><p>Because Arena Calendar depends entirely on this Microsoft connection, any calendar sync issue almost always traces back to consent: either it was never granted, it was granted to the wrong account, or it was revoked. Knowing where to look — Global Data → Marketplace for the org-wide state, My Profile → Settings → Calendar Consent for an individual's state — is the first troubleshooting step before assuming a bug in Arena itself.</p>","definitions":[{"term":"Admin Consent","definition":"A one-time authorization granted by an administrator in Global Data → Marketplace that connects Arena to the organization's Microsoft account and, when the organization-wide consent box is checked, extends that connection to every user without requiring them to sign in individually."},{"term":"Calendar Consent","definition":"The personal, per-user equivalent of admin consent, granted from My Profile → Settings → Calendar Consent, that links an individual user's own Microsoft account to Arena Calendar."},{"term":"Marketplace","definition":"The Global Data screen where organization-wide third-party integrations, including the Microsoft Calendar Integration, are connected, reconnected, or revoked."}],"procedures":[{"title":"Connect Arena to Outlook Calendar as an admin","steps":["Go to <strong>Global Data → Marketplace</strong>.","Click <strong>Sign in with Microsoft</strong> to begin granting Outlook consent.","Sign in with your Microsoft credentials.","On the <strong>Permissions Requested</strong> page, check the box to consent on behalf of the organization.","Confirm — this step is what allows every user in the organization to access the integration without individually consenting."],"note":"Skipping the organization-wide consent checkbox means only the signed-in admin's account is connected; every other user would need to grant their own personal consent instead."},{"title":"Revoke or change the connected Microsoft account","steps":["Go to <strong>Global Data → Marketplace</strong> and locate the Microsoft integration.","Click <strong>Revoke Consent</strong> to disconnect the currently linked account.","Click <strong>Sign in with Microsoft</strong> again and authenticate with the new account to grant fresh consent."]},{"title":"Connect your personal Outlook calendar","steps":["Go to <strong>My Profile → Settings → Calendar Consent</strong>.","Click <strong>Sign in with Microsoft</strong>.","Add your Microsoft account credentials to complete the connection."],"note":"Use this path if your organization hasn't set up admin-wide consent, or if you need to connect a Microsoft account different from the one used for admin consent."}]},{"heading":"Events","intro":"<p>Once the Outlook connection is live, the Events area of Arena Calendar is where the day-to-day scheduling work happens: creating meetings, deadlines, and reminders, and — uniquely to Arena — tying those events directly to the module they relate to. This is what distinguishes Arena Calendar from a plain Outlook view: an event isn't just a block of time, it can be a first-class reference point for a specific opportunity, proposal, project task, or any other record in the system.</p><p>Events support flexible visibility through Categories. When you create an event, you choose whether it applies to yourself (a personal or primary calendar event), a specific group, or multiple selections at once. This categorization is configured ahead of time so that only relevant, pre-approved categories show up as choices when someone creates an event, keeping the list manageable rather than a free-for-all of ad hoc labels.</p><p>The ability to map an event to a module also has downstream value: once mapped, users can filter or search their calendar by module, making it possible to answer questions like \"what meetings are scheduled this week related to Opportunity X\" directly from the calendar rather than hunting through separate module screens.</p>","definitions":[{"term":"Category","definition":"The classification chosen when creating an event — multi-select, Group, or Primary Calendar — that determines who the event applies to. Only categories enabled in Configure Categories are available as options."},{"term":"Configure Categories","definition":"The setup step that controls which category options appear when a user creates a calendar event, keeping the category list limited to organization-approved choices."},{"term":"Module Mapping (Calendar)","definition":"The association of a calendar event with a specific Arena module (such as an opportunity or project), which then allows that event to be filtered or surfaced from within the context of that module."}],"procedures":[{"title":"Create a calendar event","steps":["In Arena Calendar, click <strong>Create Event</strong>.","Choose a <strong>Category</strong> — multi-select, Group, or Primary Calendar.","Fill in the remaining event details and save."],"note":"Only categories that have been enabled in Configure Categories will appear as selectable options here."},{"title":"Edit or delete a calendar event","steps":["Open the event you want to change directly from the Arena Calendar view.","Make your edits, or choose to delete the event, from within the open event."]},{"title":"Link an event to a module","steps":["While creating or editing an event, map it to the relevant Arena <strong>Module</strong>.","Save the event.","Afterward, use module-based filtering in the calendar to view only events tied to that module."]}]},{"heading":"Sync & Groups","intro":"<p>Arena Calendar is a two-way mirror of Outlook, not a one-directional import. Events you create natively in your Outlook calendar automatically flow into Arena — you don't need to manually re-create your existing meetings once the connection is established. This automatic sync is what makes Arena Calendar useful day-to-day rather than becoming a second calendar you have to maintain separately from the one your team already lives in.</p><p>Beyond individual events, Arena also understands Outlook Groups — the distribution-list-style groups many organizations use for teams, departments, or project cohorts. These aren't imported through the Calendar module itself, but through Arena Communications' Import Groups feature, where each Outlook group gets mapped to an Arena module. Once that mapping exists, those groups also become visible inside Arena Calendar, tying the group's context (and by extension, its members' shared scheduling) back to the relevant part of the product.</p><p>This cross-module behavior is a good example of how Arena's Outlook integrations are built as a shared layer: the Microsoft connection is established once, and both Calendar and Communications draw on it, with Communications acting as the entry point for group-level mapping that Calendar then reflects.</p>","definitions":[{"term":"Outlook Sync","definition":"The automatic, ongoing synchronization that brings events created directly in a connected Outlook calendar into Arena Calendar without manual re-entry."},{"term":"Imported Outlook Group","definition":"An Outlook distribution or team group that has been imported and mapped to an Arena module via Communications → Import Groups, after which it also appears within Arena Calendar."}],"procedures":[]},{"heading":"Permissions","intro":"<p>Access to Arena Calendar's admin-level features is controlled the same way most administrative capabilities in Arena are: through a specific permission toggle inside a user group's configuration, rather than a blanket \"is this person an admin\" flag. This matters most in the scenario where a user has not personally connected their own Outlook account — in that case, whether they can still rely on the organization-wide admin consent depends entirely on this one permission.</p><p>Understanding this permission is important for admins rolling out the Calendar module broadly: if users report that they can't access calendar features despite the organization having granted admin consent in Marketplace, the fix is very likely to check their user group's Calendar Management permission rather than to re-check the Microsoft integration itself.</p>","definitions":[{"term":"Calendar Management Permission","definition":"A permission found at Global Data → Users & Permissions → User Group → Permissions → General → Calendar Management. When enabled for a user's group, it lets that user rely on the organization's admin-wide Outlook consent (granted in Global Data → Marketplace) even if they have not personally granted their own calendar consent."}],"procedures":[{"title":"Grant a user access to admin calendar consent","steps":["Go to <strong>Global Data → Users & Permissions → User Group</strong>.","Open the relevant user group and go to <strong>Permissions → General</strong>.","Enable <strong>Calendar Management</strong>.","Save the change — users in this group can now use the admin-wide Marketplace consent even without granting personal consent."]}]}],
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
    narrative: [{"heading":"Outlook Setup","intro":"<p>Arena Communications brings your team's Outlook mailbox into Arena, so that project-related email doesn't live in a separate silo from the rest of your project data. Like Arena Calendar, it depends entirely on a Microsoft integration being established first — no mail will sync, and no mail can be sent from within Arena, until that consent is in place.</p><p>Arena supports the same two consent models here as it does for Calendar: an administrator can grant organization-wide consent through Global Data → Marketplace (paired with the correct admin permission for the communication module), or an individual user can bypass admin involvement entirely and grant their own consent from My Profile → Settings → Outlook Management Consent. This flexibility means a single power user or department can start using Communications even before a company-wide rollout is approved.</p><p>Because Communications and Calendar share the same underlying Microsoft connection mechanism, admins troubleshooting one often need to check the other — but each module has its own consent screen and its own permission gate, so granting access to one does not automatically grant access to the other.</p>","definitions":[{"term":"Outlook Consent (Communications)","definition":"Authorization that connects a mailbox to Arena Communications, either granted organization-wide by an admin in Global Data → Marketplace, or individually by a user in My Profile → Settings → Outlook Management Consent."},{"term":"Admin Permission for Communication Module","definition":"A permission that, combined with admin-granted Outlook consent in Marketplace, allows a user to use Arena Communications without personally granting their own consent."}],"procedures":[{"title":"Enable Outlook integration for Arena Communications","steps":["As an admin, go to <strong>Global Data → Marketplace</strong> and grant Outlook consent for the organization.","Ensure the target user has the admin permission for the communication module assigned to their user group.","Alternatively, skip admin involvement entirely: have the individual user go to <strong>My Profile → Settings → Outlook Management Consent</strong> and grant their own consent directly."],"note":"The individual consent path is useful for piloting Communications with a single user or team before committing to an organization-wide rollout."}]},{"heading":"Inbox & Mail","intro":"<p>Once connected, Arena Communications behaves like a familiar email client embedded inside Arena, organized into the standard folder structure most users already expect: Inbox, Sent, Drafts, Saved, and Trash. This design choice is deliberate — it minimizes the learning curve for a feature that could otherwise feel like an unnecessary duplicate of Outlook itself. The value isn't in reinventing email, it's in keeping project-relevant correspondence visible alongside the project data it concerns.</p><p>Composing and sending mail works the same way it would in any inbox: a single \"Compose mail\" entry point at the top of the screen opens a new message. What makes this more than a mirror of Outlook is covered in the Module Mapping section below — the ability to tie any given email to a specific record inside Arena.</p>","definitions":[{"term":"Inbox","definition":"The folder showing mail received into the connected mailbox."},{"term":"Sent","definition":"The folder showing mail the user has sent from Arena Communications."},{"term":"Drafts","definition":"The folder holding messages that have been started but not yet sent."},{"term":"Saved","definition":"The folder holding starred or flagged mail for quick reference."},{"term":"Trash","definition":"The folder holding deleted mail."}],"procedures":[{"title":"Send an email from Arena Communications","steps":["Go to <strong>Home → Communications</strong>.","Click <strong>Compose mail</strong> at the top of the screen.","Fill in the recipient, subject, and body, then send."]}]},{"heading":"Module Mapping","intro":"<p>Module Mapping is the feature that elevates Arena Communications above a plain webmail client: it lets you tie an email — or an entire imported Outlook group — to a specific place in Arena's data model, such as an Opportunity, a Proposal, or a Bid Management record. Instead of forwarding an email thread into a CRM or manually summarizing correspondence for a teammate, you map the message directly, and it becomes part of that record's history.</p><p>This works at two levels. At the individual message level, any email you compose can be mapped directly to the module record it concerns. At the group level, entire Outlook Groups — the distribution lists your organization already uses in Microsoft 365 — can be imported once and mapped to a module, so ongoing traffic tied to that group has an obvious home in Arena. The ribbon at the top of the Communications screen, which lists every module, is the mechanism for filtering mail down to only what's relevant to a particular part of the business, turning what would otherwise be a single flat inbox into something closer to a set of module-specific mail views.</p><p>This same group-import mechanism is also what feeds Arena Calendar's group visibility (see the Calendar module's Sync & Groups section) — mapping a group here has effects beyond Communications alone.</p>","definitions":[{"term":"Module Mapping (Communications)","definition":"The association of an individual email with a specific Arena module record (e.g. an Opportunity, Proposal, or Bid Management entry), making that email part of the record's history."},{"term":"Import Groups","definition":"A feature in Communications that opens a pop-up listing your Outlook groups alongside a Module dropdown, letting you map each imported group to an Arena module."},{"term":"Communications Ribbon","definition":"The row at the top of the Communications screen listing all Arena modules, used to filter the mailbox down to messages mapped to a specific module."}],"procedures":[{"title":"Filter emails by module","steps":["Open <strong>Home → Communications</strong>.","Use the ribbon at the top, which lists every module.","Select a module to filter the mailbox to only mail mapped to it."]},{"title":"Import Outlook groups into Communications","steps":["In Communications, open <strong>Import Groups</strong>.","In the pop-up, review your available Outlook groups.","For each group you want to bring in, choose the target Arena module from the <strong>Module</strong> dropdown.","Confirm the import."],"note":"Groups mapped here also become visible inside Arena Calendar."},{"title":"Link an email to a module record","steps":["Compose or open the relevant email in Arena Communications.","Map the email to the module it concerns — for example Opportunity, Proposal, or Bid Management.","Save or send — the email now appears as part of that record's associated correspondence."]}]}],
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
    narrative: [{"heading":"Form Templates","intro":"<p>Before any RFI, Submittal, Change Order, or Meeting Minutes can be raised inside a project, the shape of that form has to exist somewhere — what fields it captures, which fields are mandatory, and whether it requires an approval workflow at all. That configuration lives in Global Data → Forms, entirely separate from any individual project. This separation is intentional: it means every project in the organization starts from the same standardized RFI or Submittal structure, rather than each project team inventing its own version of the form from scratch.</p><p>Templates are built from two kinds of fields. Standard Fields are the ones Arena ships with the form type — their presence is locked in place, but you can still toggle whether each one is Required. Configurable Fields are ones you add yourself, using Add Section and Add Field, choosing from a wide library of field types (Attachment, Checkbox, Date, Label, Multi select, Paragraph, Roster, Scribble, Single select, Table, Text box, Time, and Signature) to match exactly what your organization needs captured. This flexibility is what lets the same underlying Construction Forms engine serve very different documentation needs — an RFI might need a simple text response, while a Submittal might need attachments and a signature.</p><p>Two additional toggles shape how a form behaves once it's in use. Trigger Points let end-users raise issues or notes tied to a specific field as they fill the form out, catching problems at the point of entry rather than after submission. The Approval Work Toggle (available on every form type except Meeting Minutes, which doesn't use the same approval concept) determines whether submissions need to move through a sign-off chain at all — but note that toggling this on only says an approval process should exist; the actual levels and approvers for that process are configured separately, per project, in Project Setup → Forms → Approval Workflow. The Connected Services Toggle, meanwhile, lets a form cross-reference other forms or tree elements, useful when an RFI and a related drawing issue need to stay linked.</p>","definitions":[{"term":"Construction Form Template","definition":"The Global Data-level configuration (under Global Data → Forms) defining the fields, sections, and behavior of RFIs, Submittals, Change Orders, and Meeting Minutes, applied uniformly to every project."},{"term":"Standard Fields","definition":"The built-in fields Arena provides for a given form type. Their presence can't be removed, but each can be toggled Required or optional."},{"term":"Configurable Fields","definition":"Custom fields an admin adds to a form template via Add Section / Add Field, choosing a field type such as Attachment, Checkbox, Date, Label, Multi select, Paragraph, Roster, Scribble, Single select, Table, Text box, Time, or Signature."},{"term":"Trigger Points","definition":"A setting that lets end-users raise an issue or note tied to a specific field while filling out a form."},{"term":"Approval Work Toggle","definition":"A per-form-type switch (available on all form types except Meeting Minutes) controlling whether submissions require an approval workflow. The workflow's actual levels and approvers are configured separately, per project, in Project Setup → Forms → Approval Workflow."},{"term":"Connected Services Toggle","definition":"A setting that allows a form to be cross-linked to other forms or to tree elements (CWA/System/Tag) elsewhere in the project."}],"procedures":[{"title":"Configure a construction form template","steps":["Go to <strong>Global Data → Forms</strong>.","Select the form type you want to configure (RFI, Submittal, Change Order, or Meeting Minutes).","Under <strong>Standard Fields</strong>, toggle <strong>Required</strong> on any fields that must be filled in.","Under <strong>Configurable Fields</strong>, use <strong>Add Section</strong> and <strong>Add Field</strong> to build out custom fields, selecting the appropriate field type for each.","Set <strong>Trigger Points</strong> on any fields where end-users should be able to raise issues or notes.","Preview the form to confirm it looks and behaves as expected.","Toggle <strong>Approval Work Toggle</strong> on if this form type should require sign-off (not applicable to Meeting Minutes).","Toggle <strong>Connected Services Toggle</strong> on if this form should be cross-linkable to other forms or tree elements.","Save the template."],"note":"This is a Global Data configuration, not a per-project one. The actual approval workflow — how many levels, who approves — is set separately in each project under Project Setup → Forms → Approval Workflow."}]},{"heading":"RFI","intro":"<p>An RFI, or Request For Information, is the formal mechanism for asking a question about a construction document, drawing, or specification when something is ambiguous or missing, and getting a documented, trackable answer. Construction projects generate hundreds of these over their lifecycle, and losing track of an open question can cause real schedule and cost impact — which is why Arena treats RFIs as structured, ID-tracked records rather than informal emails.</p><p>Inside a specific project, RFIs live under Field Works → Progress, reflecting that raising and answering an RFI is day-to-day execution work, distinct from the template configuration covered above. Every RFI created here follows the exact field structure and approval rules that were set up for the RFI template in Global Data, ensuring consistency across every project even though the day-to-day usage happens locally.</p>","definitions":[{"term":"RFI (Request For Information)","definition":"A project-level record used to formally ask and document a question about project documentation, tracked through creation, submission, and approval."}],"procedures":[{"title":"Raise an RFI inside a project","steps":["Open the project and go to <strong>Field Works → Progress → RFIs</strong>.","Click <strong>Create</strong>.","Fill in the RFI form as configured by the admin.","Click <strong>Save As Draft</strong> to hold it for later, or <strong>Submit for Approval</strong> to send it into the approval chain."],"note":"Each RFI receives a unique auto-generated ID. Approvers see Approve/Reject actions at their assigned level of the workflow."}]},{"heading":"Submittals","intro":"<p>A Submittal is the record a contractor uses to present a product, material, shop drawing, or method for the design team's review and approval before it's used on-site — a foundational quality-control checkpoint in construction. Because a rejected or delayed Submittal can hold up procurement or fabrication, tracking its status precisely, with a clear audit trail of who reviewed it and when, is essential.</p><p>Like RFIs, Submittals are created and tracked at the project level under Field Works → Progress, using the field structure defined by the Submittal template in Global Data → Forms.</p>","definitions":[{"term":"Submittal","definition":"A project-level record documenting a product, material, or method submitted for design-team review and approval, tracked from draft through approval or rejection."}],"procedures":[{"title":"Create a Submittal inside a project","steps":["Open the project and go to <strong>Field Works → Progress → Submittals</strong>.","Click <strong>Create</strong>.","Complete the Submittal form.","Click <strong>Save As Draft</strong> or <strong>Submit for Approval</strong>."],"note":"Each Submittal log gets an auto-generated ID and shows Approve/Reject actions to the users configured as approvers."}]},{"heading":"Change Orders","intro":"<p>A Change Order documents a formally agreed modification to the scope, cost, or schedule of a project — one of the most consequential document types in construction because it directly affects the contract itself. Beyond the standard create/submit/approve lifecycle shared with RFIs and Submittals, Change Orders in Arena carry extra routing and collaboration tools reflecting how much cross-team coordination a scope change typically demands: explicit assignment, due dates, and a full suite of communication actions attached to each record.</p><p>This richer toolset — Chat, Follow Up Actions, History, Download, Share, Print, and Compose Mail — means a Change Order doesn't just sit as a static form; it becomes a working record that different stakeholders can act on and leave a trace within, without needing to leave Arena to coordinate by email or phone.</p>","definitions":[{"term":"Change Order","definition":"A project-level record documenting an approved modification to project scope, cost, or schedule, supporting assignment, due dates, and a set of collaboration actions."},{"term":"Assign To / Due Date","definition":"Fields on a Change Order used to route it to a responsible person and set an expected resolution date."},{"term":"Follow Up Actions","definition":"A tracked list of action items associated with a Change Order, used to manage next steps after it's raised."}],"procedures":[{"title":"Create a Change Order inside a project","steps":["Open the project and go to <strong>Field Works → Progress → Change Orders</strong>.","Click <strong>Create</strong>.","Fill in the form, including <strong>Assign To</strong> and <strong>Due Date</strong> to route it appropriately.","Click <strong>Save As Draft</strong> or <strong>Submit for Approval</strong>.","Use the <strong>Chat</strong>, <strong>Follow Up Actions</strong>, <strong>History</strong>, <strong>Download</strong>, <strong>Share</strong>, <strong>Print</strong>, or <strong>Compose Mail</strong> actions as needed to manage and communicate around the Change Order."]}]},{"heading":"Meeting Minutes","intro":"<p>Meeting Minutes is the form type used to capture what was discussed and decided in a project meeting, and — more importantly for accountability — what happens next. Unlike RFIs, Submittals, and Change Orders, Meeting Minutes doesn't use an approval workflow (it's excluded from the Approval Work Toggle entirely), because its purpose isn't sign-off but record-keeping and follow-through.</p><p>The distinguishing feature of Meeting Minutes in Arena is its Actions tab: every commitment or task that comes out of a meeting can be logged as a discrete action item with its own status, assignee, and due date, turning what would otherwise be a static document into a lightweight task tracker tied directly to that meeting's record.</p>","definitions":[{"term":"Meeting Minutes","definition":"A project-level record capturing the discussion and outcomes of a project meeting, created without an approval workflow."},{"term":"Actions Tab","definition":"The section of a Meeting Minutes record used to track individual follow-up items, each with its own status, assignee, and due date."}],"procedures":[{"title":"Log meeting minutes inside a project","steps":["Open the project and go to <strong>Field Works → Progress → Meeting Minutes → Forms</strong>.","Click <strong>Create</strong>.","Fill in the meeting details.","Click <strong>Save As Draft</strong> or <strong>Submit</strong>.","Track follow-up work in the <strong>Actions</strong> tab, where each action item has its own status, assignee, and due date."]}]}],
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
    narrative: [{"heading":"Cost Estimate","intro":"<p>Cost Management is where a project's financial baseline gets built: a structured, itemized estimate of everything the project is expected to cost, broken out by category so it can be reviewed, tracked, and compared against actuals later. This lives under Project Setup because, like the WBS/tree structure and drawings, it's foundational configuration work done once a project is set up, rather than day-to-day field activity.</p><p>An estimate starts life as a category — a way of grouping the costs before line items are added. Once a category is created, the line items themselves are entered under tabs for Material, Labor, Equipment, Sub-Contractor, and Other Expenses, giving you a consistent structure regardless of what kind of cost you're recording. Rather than forcing manual entry for every line, Arena also lets you pull material costs directly from Global Data — your organization's shared master list of materials and pricing — using \"Keep existing and update with new materials\" to merge new data in, or \"Replace all with Global Data\" to start clean. Custom columns can be added on top of the standard structure when a project needs to track something the default table doesn't capture. Whatever calculation logic underlies the table (unit costs, markups, etc.) is controlled through the Settings button, which links out to the shared Productivity Settings used elsewhere in the project.</p><p>All of this line-item detail rolls up automatically: the running total is calculated and shown read-only at the top right of the screen as you build the estimate, so you always know the current total without needing to run a separate report.</p>","definitions":[{"term":"Estimate Category","definition":"The initial grouping created when starting a new cost estimate, used to organize line items before they're entered."},{"term":"Cost Estimate Line Items","definition":"The individual cost entries recorded under the Material, Labor, Equipment, Sub-Contractor, or Other Expenses tabs of a cost estimate."},{"term":"Get Materials from Global Data","definition":"A feature that pulls material line items from the organization's shared Global Data material list into a project's cost estimate, either merging (\"Keep existing and update with new materials\") or overwriting (\"Replace all with Global Data\") the existing rows."},{"term":"Add Custom Columns","definition":"A feature allowing extra fields to be added to a cost estimate table beyond its standard columns."},{"term":"Productivity Settings","definition":"Shared configuration, accessed via the Settings button on the Cost Estimate screen, that controls how estimate tables calculate totals across Material, Labor, Equipment, and other tabs."}],"procedures":[{"title":"Create a cost estimate","steps":["Go to <strong>Project Setup → Cost Estimate → Create</strong>.","Select an <strong>Estimate Category</strong>.","Click <strong>Create Estimate</strong>."]},{"title":"Add material, labor, or equipment costs to an estimate","steps":["Go to <strong>Project Setup → Cost Estimate → Cost Estimates</strong>.","Select the <strong>Material</strong> (or <strong>Labor</strong>, <strong>Equipment</strong>, <strong>Sub-Contractor</strong>, <strong>Other Expenses</strong>) tab.","To add a field not in the standard table, use <strong>Add Custom Columns</strong>.","To pull items from the shared material list, use <strong>Get Materials from Global Data</strong> and choose <strong>Keep existing and update with new materials</strong> or <strong>Replace all with Global Data</strong>.","To add a single new line manually, use <strong>Add Material</strong>."],"note":"Totals calculate automatically and appear read-only at the top right. Table layout and calculation behavior are controlled via the Settings button, which links to Productivity Settings."}]},{"heading":"Estimate Summary","intro":"<p>Once an estimate has line items across Material, Labor, Equipment, Sub-Contractor, and Other Expenses, project stakeholders need a single place to see the whole financial picture without digging through each tab individually. Estimate Summary is exactly that: a consolidated, view-only rollup of every documented cost on the project. Because it's read-only, it functions as a reporting and review screen rather than an editing surface — the actual numbers are still changed back on the individual cost tabs.</p><p>This distinction between editing (Cost Estimates tabs) and reviewing (Estimate Summary) mirrors a pattern found elsewhere in Arena: detailed entry happens in one place, and a simplified, protected view exists for anyone who just needs the total picture — a project manager checking overall budget health, for instance, without needing edit access to line items.</p>","definitions":[{"term":"Estimate Summary","definition":"A view-only screen under Project Setup → Cost Estimate that shows the rolled-up total of all documented costs across materials, labor, equipment, sub-contractor, and other expenses."}],"procedures":[{"title":"View the total documented project cost","steps":["Go to <strong>Project Setup → Cost Estimate → Estimate Summary</strong>.","Review the consolidated totals across all cost categories."],"note":"This screen is view-only; edit line items from their respective tabs on the Cost Estimates screen."}]},{"heading":"Approval Workflow","intro":"<p>Cost data feeding into timesheets and quantity tracksheets typically needs sign-off before it's considered final — a foreman's logged hours, for example, shouldn't automatically count toward payroll or billing without someone with authority confirming it. The Workflow sub-tab under Cost Estimate is where that sign-off process gets defined, independent of the estimate line items themselves.</p><p>A workflow is built as a sequence of levels, and each level can require either unanimous or single-approver sign-off. This flexibility lets an organization match its approval process to how much scrutiny a given cost type actually needs: a low-stakes timesheet might only need one approver, while a high-value quantity tracksheet might require every named approver at a level to sign off before it can proceed.</p>","definitions":[{"term":"Approval Workflow (Cost Estimate)","definition":"A configurable, multi-level approval process governing timesheets or quantity tracksheets tied to a project's cost estimate, defined under Project Setup → Cost Estimate → Workflow."},{"term":"Level","definition":"A single stage in an approval workflow, with its own set of designated approvers and an approval rule (all-must-approve or anyone-can-approve)."}],"procedures":[{"title":"Set up an approval process for timesheets or tracksheets","steps":["Go to <strong>Project Setup → Cost Estimate → Workflow</strong>.","Select the feature you're configuring approval for.","Click <strong>Create Level</strong>.","Choose <strong>All must approve</strong> or <strong>Anyone can approve</strong> for that level.","Select the approvers assigned to that level.","Repeat to add additional levels as needed."]}]}],
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
    narrative: [{"heading":"Cost Estimate","intro":"<p>The Cost Estimate screen is where a project's anticipated spending gets built up from the ground, category by category, before any work begins. Rather than asking you to enter one lump-sum budget, Arena breaks the estimate into the five cost types that make up virtually any construction budget — Material, Labor, Equipment, Sub-Contractor, and Other Expenses — each with its own tab and its own line-item table. This structure means your estimate isn't just a number, it's a living breakdown you can drill into, adjust, and later compare against actuals type by type.</p><p>Every one of the five tabs works the same way, which keeps the learning curve flat regardless of which cost type you're populating: you can add a line item from scratch, pull existing entries in from Global Data (Arena's shared catalog of materials, labor rates, equipment, and so on), or extend the table itself with custom columns to capture information specific to your project. The consistency across tabs also means that once your team learns how to build out the Material tab, they already know how to build out Labor, Equipment, Sub-Contractor, and Other Expenses.</p><p>Before you start entering numbers, it's worth checking the Productivity Settings, reachable via the Settings button in the top right of the screen. This single setting controls the calculation logic behind estimates across all five tabs at once, so getting it right first avoids having to re-derive totals after the fact. Note that this Settings button only appears for users whose permissions include viewing or editing productivity settings — if you don't see it, your estimate will still use whatever productivity configuration is already in place, you just won't be able to change it.</p>","definitions":[{"term":"Cost Estimate","definition":"The project-scope screen (under Project Setup) where anticipated costs are built up across Material, Labor, Equipment, Sub-Contractor, and Other Expenses tabs."},{"term":"Estimate Category","definition":"The classification chosen when first creating a cost estimate, which frames how the estimate is organized."},{"term":"Get Materials from Global Data","definition":"An action on the Material tab's table that pulls existing material records from Arena's shared Global Data catalog into the project's estimate, offering a choice between \"Keep existing and update with new materials\" (which merges incoming records with what's already there) and \"Replace all with Global Data\" (which erases the current rows and replaces them entirely with Global Data's materials)."},{"term":"Add Custom Columns","definition":"A table action, available on every cost-type tab, for adding a new column to capture project-specific data beyond the tab's default fields."},{"term":"Productivity Settings","definition":"A configuration panel opened via the Settings button in the top right of the Cost Estimate screen, controlling how cost estimates are calculated across Material, Labor, Equipment, and the other tabs. Visible only to users whose permissions allow viewing or editing productivity settings."}],"procedures":[{"title":"Create a new cost estimate","steps":["Go to <strong>Project Setup → Cost Estimate</strong>.","Select the <strong>Estimate Category</strong>.","Click <strong>Create Estimate</strong>."]},{"title":"Record estimated material costs","steps":["In <strong>Cost Estimate</strong>, select the <strong>Material</strong> tab.","Use <strong>Add Material</strong> to add a new material line from scratch.","Alternatively, use <strong>Get Materials from Global Data</strong> to pull materials in from Global Data — choosing either <strong>Keep existing and update with new materials</strong> to merge, or <strong>Replace all with Global Data</strong> to erase existing rows and replace them entirely.","Use <strong>Add Custom Columns</strong> to capture any project-specific fields the default table doesn't cover.","The total material cost recalculates automatically and displays in the top right of the table."],"note":"\"Replace all with Global Data\" is destructive to whatever material rows already exist in the estimate — use \"Keep existing and update with new materials\" if you want to preserve manual entries."},{"title":"Record labor, equipment, sub-contractor, or other expense costs","steps":["In <strong>Cost Estimate</strong>, select the <strong>Labor</strong>, <strong>Equipment</strong>, <strong>Sub-Contractor</strong>, or <strong>Other Expenses</strong> tab as needed.","Each tab follows the same process as Material: use <strong>Add Custom Columns</strong>, pull entries from <strong>Global Data</strong>, or add a new line manually."]},{"title":"Change how cost estimates are calculated","steps":["Click the <strong>Settings</strong> button in the top right corner of the Cost Estimate screen to open <strong>Productivity Settings</strong>.","Choose how estimates should be calculated. This setting applies across the Material, Labor, Equipment, and other estimate tabs at once."],"note":"The Settings button is only visible if your user permissions allow viewing or editing productivity settings."}]},{"heading":"Estimate Summary","intro":"<p>Once an estimate has been built out across its five cost-type tabs, you need a single place to see the whole picture rolled up — that's what Estimate Summary provides. It's a deliberately view-only page: rather than letting you edit numbers here, Arena keeps editing confined to the individual cost-type tabs and treats the summary purely as a reporting surface, which avoids the risk of someone adjusting a rolled-up total that doesn't trace back to an actual line item. If a total looks wrong, the fix always happens back in Material, Labor, Equipment, Sub-Contractor, or Other Expenses, not on the summary page itself.</p>","definitions":[{"term":"Estimate Summary","definition":"A view-only page showing all costs documented via the Cost Estimate tabs, rolled up across Material, Labor, Equipment, Sub-Contractor, and Other Expenses."}],"procedures":[{"title":"View a summary of all project costs","steps":["Go to <strong>Cost Estimate → Summary</strong>.","Review the consolidated view of all costs recorded across the Material, Labor, Equipment, Sub-Contractor, and Other Expenses tabs."],"note":"This page is view-only — to change a total, edit the underlying line items on the relevant cost-type tab."}]},{"heading":"Cost Tracking by Type","intro":"<p>Where Estimate Summary gives you the rolled-up total, Cost Tracking (By Cost Types) gives you the comparison that actually drives decisions during construction: estimated cost versus actual cost, broken out by cost type. This is the page you'd check to answer a question like \"are we overrunning on labor even though materials are tracking to plan?\" — because it keeps each cost type's estimate-versus-actual comparison separate rather than blending everything into one number, it's far easier to spot exactly where a budget is drifting and act on it before the gap widens.</p>","definitions":[{"term":"Cost Tracking (By Cost Types)","definition":"A page listing the estimated and actual costs for each cost type (Material, Labor, Equipment, Sub-Contractor, Other Expenses), allowing side-by-side comparison to spot overruns or savings by category."}],"procedures":[{"title":"See costs broken down by cost type","steps":["Go to <strong>Cost Estimate → Cost Tracking (By Cost Types)</strong>.","Review the estimated and actual costs listed for each cost type to identify where spending is tracking to plan or diverging from it."]}]},{"heading":"Approval Workflow","intro":"<p>Cost estimates don't operate in isolation from the timesheets and quantity tracksheets that record actual work performed — those records typically need their own sign-off before they can count toward actual costs, and that sign-off is governed by an approval workflow you configure specifically for Cost Estimate. As with other approval workflows in Arena, you build this out as one or more levels, each requiring either unanimous or single approval from its assigned approvers, which lets you scale the rigor of sign-off to match how much scrutiny a given project needs.</p><p>Because a workflow, once created, becomes attached to real submitted forms and documents, changing its structure later is treated as a meaningful, disruptive action rather than a routine edit — Arena will warn you before you modify an existing workflow's levels, specifically because that change ripples out to everything already linked to it. This is worth keeping in mind if you're tempted to tweak a workflow \"just slightly\" mid-project: even a small change can alter how already-submitted timesheets or tracksheets are (or were) approved.</p>","definitions":[{"term":"Cost Estimate Workflow","definition":"An approval workflow, configured under Project Setup → Cost Estimate → Workflow, that governs sign-off for Timesheets or Quantity Tracksheets tied to the project's cost estimate."},{"term":"All must approve","definition":"A workflow level type requiring every assigned approver at that level to approve before the workflow advances."},{"term":"Anyone can approve","definition":"A workflow level type requiring only one of the assigned approvers to approve for the workflow to advance."}],"procedures":[{"title":"Set up an approval workflow for cost estimates","steps":["Go to <strong>Project Setup → Cost Estimate → Workflow</strong>.","Select the feature the workflow applies to: <strong>Timesheets</strong> or <strong>Quantity Tracksheets</strong>.","Click <strong>Create Level</strong> to add an approval level.","Choose the level type — <strong>All must approve</strong> or <strong>Anyone can approve</strong> — and select the approvers for that level.","Repeat to add additional levels as needed."],"note":"Modifying the levels of an existing workflow triggers a warning, because the change affects all forms or documents already linked to that workflow — review carefully before confirming an edit to a live workflow."}]}],
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
    narrative: [{"heading":"Documents","intro":"<p>Every construction project accumulates a large volume of general reference material that doesn't neatly belong to any single workflow record — contracts, specifications, correspondence archives, permits, insurance certificates, and similar files. Document Management provides the dedicated place for that material inside a project: a Documents area under Project Setup where these files can be stored and organized independently of the more specialized document handling found in other modules.</p><p>It's worth being clear about what Document Management is not: it isn't the same as the document handling inside Quality (Project Setup → Quality → Quality & Documents), which is purpose-built for quality-specific documentation tied to inspections and forms. Document Management is the general-purpose counterpart — the catch-all project file store that other modules, including Quality, can link back to when they need to reference a stored document rather than duplicating it.</p><p>Because this is a foundational, low-friction area of the product, Arena's own published documentation for the screen's day-to-day mechanics (folder structures, upload flows, permission granularity, etc.) had not been written up in detail at the time this guide was compiled. What is established is where the feature lives and its relationship to the rest of Project Setup — treat this as the general storage layer beneath more specialized document features elsewhere in the product.</p>","definitions":[{"term":"Document Management","definition":"A Project Setup screen for storing and organizing a project's general documents, distinct from the specialized Quality & Documents area inside the Quality module."},{"term":"Quality & Documents","definition":"A related but separate document-handling area found inside Project Setup → Quality, used specifically for quality-related documentation rather than general project files."}],"procedures":[{"title":"Access project documents","steps":["Open the project and go to <strong>Project Setup → Documents</strong>."],"note":"Detailed step-by-step documentation for this screen's internal workflow was not published at the time of writing. For quality-specific document handling, see Project Setup → Quality → Quality & Documents instead."}]}],
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
    narrative: [{"heading":"Drawing Packages","intro":"<p>Construction projects can generate hundreds or thousands of individual drawing sheets across disciplines — architectural, structural, mechanical, electrical, and more — and without organization, finding the right sheet quickly becomes impossible. Drawing Packages are Arena's answer: folders that group related drawings together, each built on a Drawing Training template that governs how labels are extracted from drawings uploaded into it.</p><p>Creating a package is the entry point to the entire Drawing Management module. Once a package exists, it becomes the container you upload individual drawing sheets into, and every drawing inside inherits the OCR training template chosen at the package level, which is what allows Arena to automatically read metadata like sheet number, title, and revision straight off the drawing image instead of requiring manual data entry for every single sheet.</p><p>The upload step itself offers two paths depending on how much trust you place in the automated extraction: Auto Label Upload, which uses OCR against the package's trained template to pull labels automatically, or Write Label Manually, for cases where a drawing doesn't match the trained format closely enough for OCR to be reliable. Whichever path you take, drawings can be reviewed and submitted one at a time or all together, and once submitted they appear in a table that links out to each drawing's own dedicated page — the drawing page — where annotation, revisions, and sharing happen.</p>","definitions":[{"term":"Drawing Package","definition":"A folder-like container (created under Project Setup → Drawings → Drawing Packages) that groups related drawings and is associated with a specific Drawing Training template for label extraction."},{"term":"Drawing Log","definition":"An individual uploaded drawing entry inside a Drawing Package, appearing as a row in the package's table and linking to its own Drawing Page."},{"term":"Auto Label Upload","definition":"An upload option that uses OCR, guided by the package's trained template, to automatically extract label data (such as sheet number and title) from an uploaded drawing."},{"term":"Write Label Manually","definition":"An upload option where the uploader enters a drawing's label data by hand instead of relying on OCR extraction."}],"procedures":[{"title":"Create a drawing package","steps":["Go to <strong>Project Setup → Drawings → Drawing Packages</strong>.","Click <strong>Create Drawing Package</strong>.","Enter the package details, including which training template it should use.","Click <strong>Submit</strong>."],"note":"Use the kebab (3-dot) menu on a package to Edit or Delete it later. Click into a package to view or upload its Drawing Logs."},{"title":"Upload a drawing into a package","steps":["Open the target <strong>Drawing Package</strong>.","Click <strong>Upload Drawing</strong> and select a PDF or image file.","Choose <strong>Auto Label Upload</strong> to extract labels via OCR from the trained template, or <strong>Write Label Manually</strong> to enter labels by hand.","Click <strong>Review & Submit</strong> to submit a drawing individually, or <strong>Submit All</strong> to submit every pending drawing at once."],"note":"Uploaded drawings appear in the package's table, each linking to its own Drawing Page."}]},{"heading":"Annotations & Revisions","intro":"<p>A drawing rarely stays static once uploaded — teams need to mark up issues directly on the sheet, discuss specific points on it, and track how it changes across revisions as design evolves. This section of Drawing Management covers both of those needs: in-place annotation and commenting on a single drawing, and formal revision tracking as new versions of that drawing are issued.</p><p>Annotation happens on the drawing page itself, in an edit mode entered via Edit Drawing (sometimes labeled Comments), which unlocks markup tools. The Comment tool pins a note to an exact point on the drawing, and the Threads toggle lets you show or hide those pinned comment locations so the drawing can be viewed either cluttered with active discussion or clean for a quick look. A more powerful tool, Drop, goes beyond commentary — it links an actual project form, such as an RFI, to a specific point on the drawing, giving that form spatial context that pure text can't provide, and connecting Drawing Management directly to Construction Forms.</p><p>Revisions are handled separately from annotation. Create Revision uploads a new version of an existing drawing, and Arena tracks the relationship between versions rather than treating each upload as a disconnected file. The Revisions action on a drawing log opens a dedicated compare screen where minor and major changes are highlighted with color coding, and a direct Compare view lets you place two versions side by side. One subtlety worth understanding: every drawing package has a master (reference) drawing, and if that master is deleted, Arena doesn't leave the package without a reference — the next drawing in line automatically becomes the new master.</p>","definitions":[{"term":"Edit Drawing / Comments Mode","definition":"The mode entered from a drawing page that unlocks annotation tools for marking up the drawing."},{"term":"Comment Tool","definition":"An annotation tool that pins a comment to a specific point on a drawing."},{"term":"Threads Toggle","definition":"A control that shows or hides the locations of pinned comments on a drawing."},{"term":"Drop Tool","definition":"An annotation tool that links a project form (such as an RFI) to a specific point on a drawing, giving the form spatial context."},{"term":"Create Revision","definition":"The action used to upload a new version of an existing drawing, preserving its relationship to prior versions."},{"term":"Master (Reference) Drawing","definition":"The primary version of a drawing used as the baseline for comparison. If deleted, the next drawing in the package automatically becomes the new master."},{"term":"Compare","definition":"A view that places the existing and revised versions of a drawing side by side for direct comparison."}],"procedures":[{"title":"Annotate or comment on a drawing","steps":["Open the drawing's page.","Click <strong>Edit Drawing</strong> (or <strong>Comments</strong>) to enter edit mode.","Use the <strong>Comment</strong> tool to pin a comment to a specific point on the drawing.","Toggle <strong>Threads</strong> to show or hide comment locations as needed.","Use the <strong>Drop</strong> tool to link a project form, such as an RFI, to a point on the drawing.","Click <strong>Save</strong> or <strong>Save Changes</strong> to keep your edits."]},{"title":"Create a new revision of a drawing","steps":["Open the drawing you want to revise.","Click <strong>Create Revision</strong> and upload the new version.","From the drawing log, use the <strong>Revisions</strong> action to open the revision compare screen and review minor/major changes by color code.","Use <strong>Compare</strong> to view the existing and revised drawings side by side."],"note":"If the master (reference) drawing is deleted, the next drawing in the package automatically becomes the new master."}]},{"heading":"Linking & Sharing","intro":"<p>Drawings rarely exist in isolation from the rest of a project's structure — a specific sheet is usually relevant to a particular CWA, System, or Tag in the project's work breakdown, and stakeholders outside the immediate drawing workflow often need a copy of the sheet in hand. This section covers both connecting drawings to that broader project structure and getting copies of drawings out to the people who need them.</p><p>Linking a drawing to tree elements — the project's CWA, System, and Tag hierarchy — is what makes a drawing discoverable from within the work itself. Once a drawing is mapped to a tree element, it surfaces automatically in the corresponding work logs or quality forms, meaning a field worker filling out a quality form for a given tag doesn't need to separately go hunting for the relevant sheet; the connection has already been made. This is one of several places in Arena where a single link action makes a record visible across multiple otherwise-separate modules.</p><p>Beyond linking, every drawing log carries a set of output actions under its Actions menu: Download for the latest version, Share to send it to selected registered users (which opens a mail composer), Print to send it to a connected printer, and Edit for adjusting metadata. For situations touching many drawings at once — say, an entire package needs its approval workflow reassigned — Edit Bulk Drawings applies changes like labels or approval workflows across multiple drawings in a single operation rather than one at a time.</p>","definitions":[{"term":"Link (Drawing to Tree Elements)","definition":"An action on a drawing log that opens a dialog to map the drawing to the project's tree elements (CWA, System, Tags), making the drawing visible in corresponding work logs or quality forms once mapped."},{"term":"Share","definition":"An action that lets you select registered users to send a drawing to, opening a mail pop-up to compose and send it."},{"term":"Edit Bulk Drawings","definition":"A feature for modifying labels or approval workflows across multiple drawings simultaneously, rather than editing each one individually."}],"procedures":[{"title":"Link a drawing to project tree elements","steps":["On the drawing log, click the <strong>Link</strong> action (link icon).","In the dialog, review the project's tree elements — CWA, System, Tags.","Select the elements this drawing should be mapped to.","Confirm the mapping."],"note":"Once mapped, the drawing becomes visible in the corresponding work logs or quality forms for reference."},{"title":"Share, print, or download a drawing","steps":["On the drawing log, open the <strong>Actions</strong> menu.","Choose <strong>Download</strong> to get the latest version's file.","Choose <strong>Share</strong> to select registered users and send the drawing via the mail composer.","Choose <strong>Print</strong> to send it to a connected printer.","Choose <strong>Edit</strong> to modify the drawing's metadata."],"note":"Use Edit Bulk Drawings to modify labels or approval workflows across multiple drawings at once."}]},{"heading":"OCR Training","intro":"<p>The automatic label extraction used by Auto Label Upload doesn't happen by magic — it depends on a Drawing Training template that has been taught, sheet by sheet, where to look for specific pieces of information. OCR Training is the module where that teaching happens, under Project Setup → Drawings → Drawing Training, and it's what makes uploading dozens of drawings from the same set fast rather than tedious.</p><p>Building a template is a four-step process. First, you upload a sample drawing representative of the sheets this template will process. Second, you create labels — both standard fields and configurable ones — choosing a field type for each (Text box, Date, Signature, or the special Training Category type used specifically for fields the OCR engine should extract). Third, in the actual OCR Training step, you go label by label and mark its position on the sample drawing, specifying whether that position is Horizontal or Vertical, effectively teaching the system exactly where on the page to look for that piece of data. Finally, a Preview Table step lets you review the complete configuration before it's put into production use.</p><p>Investing the time to build an accurate training template pays off across every subsequent drawing uploaded into a package that uses it — the alternative, writing labels manually for every single sheet, doesn't scale on a project with hundreds of drawings.</p>","definitions":[{"term":"Drawing Training Template","definition":"A configuration (built under Project Setup → Drawings → Drawing Training) that teaches Arena's OCR engine where to find specific label data on a class of drawings, used by Drawing Packages for Auto Label Upload."},{"term":"Training Category","definition":"A field type used when creating labels in a training template, specifically for fields that should be extracted via OCR."},{"term":"OCR Training Step","definition":"The step in template creation where each label is selected and its position — Horizontal or Vertical — is marked on the sample drawing."}],"procedures":[{"title":"Train OCR labels on a drawing template","steps":["Go to <strong>Project Setup → Drawings → Drawing Training</strong>.","Click <strong>Create Training Template</strong> and enter a name and description.","<strong>Step 1 — Upload Sample Drawing:</strong> upload a representative drawing to train against.","<strong>Step 2 — Create Labels:</strong> add standard and configurable labels, choosing a field type for each (Text box, Date, Signature, or Training Category for OCR-marked fields).","<strong>Step 3 — OCR Training:</strong> select each label in turn and mark its Horizontal or Vertical position on the sample drawing.","<strong>Step 4 — Preview Table:</strong> review the complete template configuration before finalizing."]}]},{"heading":"Approval Workflow","intro":"<p>Like other document-heavy modules in Arena, drawings often need formal sign-off before they're considered released or approved for construction use. Drawing Management has its own dedicated approval workflow, separate from — though structurally similar to — the approval workflows found in Cost Estimate and Productivity Logs, letting each project define exactly who needs to review and approve drawing submissions before they're finalized.</p><p>The structure follows the same level-based pattern used throughout Arena: you build a workflow as a sequence of levels, and each level specifies whether it needs unanimous approval from every assigned approver or just one of them. This consistency across modules means once you understand how to configure an approval workflow in one part of Arena, the same mental model carries over to Drawing Management.</p>","definitions":[{"term":"Drawing Approval Workflow","definition":"A project-specific, level-based approval process for drawing submissions, configured under Project Setup → Drawings → Create Approval Workflow."}],"procedures":[{"title":"Create an approval workflow for drawing logs","steps":["Go to <strong>Project Setup → Drawings → Create Approval Workflow</strong>.","Click <strong>Create Approval Workflow</strong>.","Click <strong>Create Level</strong>.","Choose <strong>All must approve</strong> or <strong>Anyone can approve</strong> for that level.","Select the approvers for that level.","Repeat to add further levels as needed."]}]},{"heading":"Workflow Issues","intro":"<p>When a drawing is rejected at any point in its approval workflow, that rejection can't just disappear as a dead-end status — someone needs to know about it, act on it, and track it to resolution. Arena automates this by auto-creating a Drawing Workflow Issue the moment a rejection happens at any approval level, surfacing it in a dedicated location: Field Works → Drawing Management → Drawing Workflow Issues.</p><p>Placing this in Field Works rather than Project Setup reflects what kind of work it represents — this is active, day-to-day follow-up work (fixing and resubmitting a rejected drawing), not configuration. The Issues screen is built for exactly that kind of operational tracking: searchable by ID or status, filterable by due date or assignment, with Chat for discussion, a Download Excel export for reporting, and a toggle between table and card views depending on how the team prefers to scan open issues.</p>","definitions":[{"term":"Drawing Workflow Issue","definition":"A record automatically created in Field Works → Drawing Management → Drawing Workflow Issues whenever a drawing is rejected at any level of its approval workflow."}],"procedures":[{"title":"Track a rejected drawing","steps":["Go to <strong>Field Works → Drawing Management → Drawing Workflow Issues</strong>.","Search by ID or status, or filter by due date and assignment, to locate the relevant issue.","Use <strong>Chat</strong> to discuss the issue with relevant stakeholders.","Use <strong>Download Excel</strong> to export the current view, or toggle between table and card view as preferred."],"note":"A Drawing Workflow Issue is created automatically — you do not create it manually. It appears as soon as a drawing is rejected at any approval level."}]}],
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
    narrative: [{"heading":"Overview & Navigation","intro":"<p>Field Works is where a project's day-to-day execution actually happens in Arena. If Project Setup is where you configure structure, templates, and workflows ahead of time, Field Works is where field teams and site staff log the real work against that structure every day: progress, quality inspections, safety checks, drawing issues, and quick ad-hoc data capture. Everything in Field Works reads from the configuration built in Project Setup and Global Data — a work package, form template, or approval workflow has to exist there before anyone can act on it here.</p><p>Field Works is organized into five sub-areas, each addressing a different slice of execution: <strong>Progress</strong> (productivity logs, work logs, site posts, and construction forms like RFIs, Submittals, Change Orders, and Meeting Minutes), <strong>Quality</strong> (inspection forms, approvals, punch lists, and restraints), <strong>Safety</strong> (observations, scheduled and unscheduled safety forms, and incident tracking), <strong>Drawing Management</strong> (field-facing drawing issue tracking), and <strong>Arena Quick Apps</strong> (lightweight custom utility apps). Knowing which of these five areas a task belongs to is usually the fastest way to find the right screen.</p>","definitions":[{"term":"Field Works → Progress","definition":"The sub-area containing Productivity Logs, Work Logs, Site Posts, and Construction Forms (RFIs, Submittals, Change Orders, Meeting Minutes, and their associated Form/Workflow Issues)."},{"term":"Field Works → Drawing Management","definition":"The sub-area surfacing Drawing Workflow Issues — issues automatically raised when a drawing is rejected at any approval level."},{"term":"Field Works → Quality","definition":"The sub-area covering Quality Level 1/Level 2 inspection forms, Approve/Submitted Quality Logs, Quality Workflow Issues, Punch Lists, and Restraints."},{"term":"Field Works → Safety","definition":"The sub-area covering Safety Forms, Safety Calendar, Safety Observations, Daily Safety Issues, and Completed Safety Forms."},{"term":"Field Works → Arena Quick Apps","definition":"A Field Works entry point for lightweight, quick utility apps within a project. Detailed documentation for this sub-area was not available at the time of writing."}],"procedures":[{"title":"Locate a Field Works screen","steps":["Open the relevant project.","For progress logs, RFIs, submittals, change orders, meeting minutes, or work logs, go to <strong>Field Works → Progress</strong>.","For drawing-related field issues, go to <strong>Field Works → Drawing Management</strong>.","For inspections and quality tracking, go to <strong>Field Works → Quality</strong>.","For safety forms and observations, go to <strong>Field Works → Safety</strong>."]}]},{"heading":"Productivity Logs","intro":"<p>Productivity Logs is how labor time and completed quantities get captured against the cost structure of a project. Every hour worked and every unit of work completed needs to be tied to a Phase Code (and, depending on configuration, to a location or work package), both so the project can track productivity and so that cost tracking downstream reflects real labor spend. Rather than a single free-form timesheet, Arena splits this into a structured flow: choose which phase codes are in scope, log hours and quantities against them, then route the entries through review and approval.</p><p>Because rejected entries are common in practice (wrong phase code, missing quantity, a typo in hours), Arena treats rejection as a first-class event: a rejected log automatically becomes a tracked issue rather than silently disappearing, so the person who logged it knows exactly what to fix and by when. Data Summary then rolls all of this up into three views — Timesheets, Quantities, and Labor Units — giving supervisors and project managers a fast read on where time and effort are going without digging through individual logs.</p>","definitions":[{"term":"Phase Code","definition":"The cost/activity classification that hours and quantities are logged against (defined company-wide in Global Data, categorized as Direct, Indirect, Non-Productive, or Change Order)."},{"term":"Set Phase Codes","definition":"The first step of creating a productivity log — choosing which phase codes will be available to log against for the selected date range."},{"term":"Add Employee / Add Crew / Clone Log","definition":"The three ways to populate a productivity log: fill a row per individual employee, log per member of a selected crew, or duplicate an existing log as a starting point."},{"term":"Log Time / Log Quantity","definition":"The two tabs of the productivity log entry flow — hours first, then the quantities achieved."},{"term":"Timesheets tab vs Quantities tab (review)","definition":"In the Logs review screen, Indirect/Non-Productive phase codes are approved or rejected from the Timesheets tab, while Direct/Change Order phase codes are approved or rejected from the Quantities tab."},{"term":"Approval Workflow (Productivity Logs)","definition":"A configurable chain of approval levels, each set to All Must Approve or Anyone Can Approve, with named approvers, that a submitted log is routed through."},{"term":"Data Summary","definition":"A reporting screen with three tabs — Timesheets (hours by employee/crew), Quantities (quantity achieved by Phase Code/Location), and Labor Units (ratio of submitted hours to submitted quantities) — each exportable to Excel for a chosen date range."},{"term":"Productivity Log Issues","definition":"Records automatically generated when an Approver/Admin rejects a productivity log, including the rejection comments; the admin/approver can assign the issue to a user with a due date."},{"term":"Logging Type","definition":"A Project Settings option determining whether productivity logs are created by Phase Code or by Level 3 (filtering phase codes by location instead)."}],"procedures":[{"title":"Create a productivity log","steps":["Open the project and go to <strong>Field Works → Progress → Productivity Logs → Create</strong>.","Click <strong>Set Phase Codes</strong> to pick the phase codes to log against, and choose the date range.","Click <strong>Create Log</strong>, then choose <strong>Add Employee</strong> (fills a row for hours/quantities per Phase Code/CWA/System/Commodity), <strong>Add Crew</strong> (select a crew and log per member), or <strong>Clone Log</strong> (duplicate an existing log).","After completing <strong>Log Time</strong>, click <strong>Next</strong> to move to the <strong>Log Quantity</strong> tab, then submit."]},{"title":"Review, approve, or reject productivity logs","steps":["Go to <strong>Field Works → Progress → Productivity Logs → Logs</strong>.","Admins/Approvers see all logs with Approve/Reject buttons — for Direct/Change Order phase codes, act from the <strong>Quantities</strong> tab; for Indirect/Non-Productive phase codes, act from the <strong>Timesheets</strong> tab.","Use <strong>Download Excel</strong> to export logs, or the kebab menu to delete a log."],"note":"Regular (non-approver) users only see their own logs, without Approve/Reject buttons."},{"title":"Configure a review/approval workflow for productivity logs","steps":["Go to <strong>Field Works → Progress → Productivity Logs → Approval Workflow</strong>.","Click <strong>Create Level</strong>, enter a description, choose <strong>All Must Approve</strong> or <strong>Anyone Can Approve</strong>, and select approvers from the search list.","Use the Edit or Delete action buttons on a level to manage it, and click the workflow tree diagram to view the full approval chart."]},{"title":"Review the productivity data summary","steps":["Go to <strong>Field Works → Progress → Productivity Logs → Data Summary</strong>.","Choose the <strong>Timesheets</strong>, <strong>Quantities</strong>, or <strong>Labor Units</strong> tab.","Use each tab's <strong>Download Excel</strong> option to export for the selected date range."]},{"title":"Track rejected productivity logs as issues","steps":["Go to <strong>Field Works → Progress → Productivity Logs → Issues</strong>.","Review issues auto-generated on rejection, including the approver's comments.","Use search, status filters, and <strong>Download Excel</strong> (with an option to include images) to manage them."]},{"title":"Configure the logging type and fields for productivity logs","steps":["Go to <strong>Project Settings → Productivity Log Settings</strong>.","Choose the Logging Type: <strong>Create Productivity Logs By Phase Code</strong> or <strong>Create Productivity Logs By Level 3s</strong> (filters phase codes by location instead).","Configure the standard and custom fields shown in the Timesheets and Quantity tabs."]}]},{"heading":"RFI","intro":"<p>An RFI (Request For Information) is the formal mechanism for a project team to ask a question — typically of a designer, engineer, or owner — when something in the drawings, specs, or scope is unclear or needs clarification before work can proceed. Arena treats RFIs as structured, trackable forms rather than emails, so every question, its answer, and its approval status stay attached to the project record and are auditable later.</p><p>Like the other construction forms in Field Works, an RFI can be saved as a draft while it's being drafted, then formally submitted, at which point it becomes visible to whoever is configured as an approver and is assigned a permanent ID. Once live, RFIs support rich collaboration — chat threads with images and video, linking to related forms and drawings, and full email/print/share actions — recognizing that resolving an RFI is often a multi-person conversation, not a single form submission.</p>","definitions":[{"term":"Save As Draft","definition":"Stores an in-progress RFI (or other construction form) without submitting it for approval; drafts are visibly tagged \"Draft\"."},{"term":"Submit For Approval","definition":"Finalizes and routes the RFI into its configured approval workflow, generating a permanent ID and exposing Approve/Reject buttons to the assigned approvers."},{"term":"Follow Up Actions","definition":"A view of items connected to an RFI — other forms, drawings, issues, or tree elements — that were cross-linked to it."},{"term":"See History","definition":"The full audit trail of an RFI's actions and status changes."},{"term":"Chat (on a form card)","definition":"A collaboration thread attached to the RFI card supporting notes, images, and video."}],"procedures":[{"title":"Create an RFI","steps":["Open the project and go to <strong>Field Works → Progress → RFIs</strong>.","Click <strong>Create</strong> and fill in the RFI form.","Click <strong>Save As Draft</strong> to hold it for later, or <strong>Submit For Approval</strong> if an approval workflow is configured."]},{"title":"Approve or reject a submitted RFI","steps":["Open <strong>Field Works → Progress → RFIs</strong>.","If you are configured as an approver in the RFI's workflow, use the <strong>Approve</strong> or <strong>Reject</strong> buttons shown on the submitted RFI card.","Check the approval level and current status shown on the card before acting."]},{"title":"Use follow-up, history, and sharing actions on an RFI","steps":["On an RFI card or form, use <strong>Follow Up Actions</strong> to view connected forms, drawings, issues, or tree elements.","Use <strong>See History</strong> for the full audit trail.","Use <strong>Download</strong> (PDF), <strong>Share</strong> (email to other users), <strong>Print</strong>, <strong>Compose Mail</strong>, and <strong>See All Email Threads</strong> as needed.","Use the <strong>Chat</strong> button for notes, images, and video collaboration.","Use <strong>Download Excel</strong> to export all RFI logs at once."]}]},{"heading":"Submittals","intro":"<p>Submittals are the formal documents a contractor sends to an owner or design team for review and approval — product data, shop drawings, samples, and similar deliverables that must be confirmed as meeting the project's specifications before installation or procurement proceeds. Like RFIs, Submittals in Arena are structured forms tied to whatever field layout the project admin has configured, and they follow the same draft-then-submit-then-approve lifecycle used throughout Field Works, which keeps the review process consistent no matter which type of form is being handled.</p>","definitions":[{"term":"Submittal log","definition":"An individual submittal record created against the project's configured Submittal form, auto-assigned an ID once submitted."}],"procedures":[{"title":"Create a Submittal log","steps":["Open the project and go to <strong>Field Works → Progress → Submittals</strong>.","Click <strong>Create</strong> and fill in the Submittal form as configured by the project admin.","Click <strong>Save As Draft</strong> or <strong>Submit For Approval</strong>."],"note":"Approvers see Approve/Reject buttons once the log reaches their assigned approval level."}]},{"heading":"Change Orders","intro":"<p>A Change Order records a formal modification to the original scope, cost, or schedule of a project — work added, removed, or changed after the contract was signed. Because change orders directly affect cost and schedule, they need clear ownership and a paper trail: who requested it, who is responsible for actioning it, and by when. Arena's Change Order form reuses the same submission and collaboration mechanics as RFIs, but adds explicit assignment and due-date fields so a change order doesn't stall without an accountable owner.</p>","definitions":[{"term":"Assign To / Due Date (Change Order)","definition":"Fields used to route responsibility for actioning a change order to a specific person by a specific date."}],"procedures":[{"title":"Create a Change Order log","steps":["Open the project and go to <strong>Field Works → Progress → Change Orders</strong>.","Click <strong>Create</strong> and fill in the Change Order form.","Click <strong>Save As Draft</strong> or <strong>Submit for Approval</strong>.","Use <strong>Assign To</strong> and <strong>Due Date</strong> to route responsibility."],"note":"Chat, Follow Up Actions, History, Download, Share, Print, and Compose Mail work the same way as they do on RFIs."}]},{"heading":"Meeting Minutes","intro":"<p>Meeting Minutes captures what was discussed and decided in a project meeting, and — critically — turns the resulting to-dos into trackable action items rather than letting them live only in a text summary. This closes a common gap in construction project management, where decisions made in a meeting often get lost unless someone actively tracks follow-through; Arena ties each action item to a status, one or more assignees, and a due date so it can be checked later.</p>","definitions":[{"term":"Actions tab (Meeting Minutes)","definition":"A view — available within a single meeting or across all meetings — of the action items raised during meetings, each with a status, assignee(s), and due date."}],"procedures":[{"title":"Record meeting minutes","steps":["Open the project and go to <strong>Field Works → Progress → Meeting Minutes → Forms</strong> tab.","Click <strong>Create</strong>, fill in the meeting details, and click <strong>Save As Draft</strong> or <strong>Submit</strong>.","Use the <strong>Actions</strong> tab to track action items raised in the meeting.","Use Download, Share, Print, and the built-in chat to collaborate on the minutes."],"note":"Draft meeting minutes are visibly tagged \"Draft\" until submitted."}]},{"heading":"Form Templates","intro":"<p>Form Templates is where the actual layout — sections, fields, and behavior — of RFI, Submittal, Change Order, and Meeting Minutes forms is defined. This configuration lives in Global Data rather than inside any one project, which is deliberate: it means every project uses the same field-level structure for a given form type, and a change to the template (adding a required field, for example) applies company-wide the next time someone creates that form. What varies per project is only whether approval is required and who the approvers are, which is configured separately in Project Setup → Forms.</p><p>Two toggles here shape how a form behaves in ways that aren't obvious from the fields alone. The Approval Work Toggle determines whether the form needs any sign-off at all (it's unavailable for Meeting Minutes, which never require approval). The Connected Services Toggle enables cross-linking — for example, letting a user raise a Change Order directly from an open RFI, preserving the relationship between the two records.</p>","definitions":[{"term":"Standard Fields","definition":"The fixed, built-in fields on a construction form; they cannot be removed but can be toggled Required."},{"term":"Configurable Fields","definition":"Additional fields an admin can add to a form template via Add Section/Add Field, with types including Attachment, Checkbox, Date, Multi/Single select, Table, and Signature."},{"term":"Approval Work Toggle","definition":"A per-template switch that determines whether submissions of that form type require an approval workflow. Not available for Meeting Minutes."},{"term":"Connected Services Toggle","definition":"A per-template switch that allows cross-linking between form types — for example, raising a Change Order directly from an RFI."}],"procedures":[{"title":"Configure the fields and sections for RFI, Submittal, Change Order, or Meeting Minutes forms","steps":["Go to <strong>Global Data → Construction Forms</strong> and select the form type: RFI, Submittal, Change Order, or Meeting Minutes.","Toggle any <strong>Standard Field</strong> as Required if needed (Standard Fields themselves are locked and cannot be removed).","Use <strong>Add Section</strong>/<strong>Add Field</strong> to add Configurable Fields, choosing the appropriate type (Attachment, Checkbox, Date, Multi/Single select, Table, Signature, etc.).","Toggle <strong>Approval Work Toggle</strong> if this form type should require an approval workflow (not available for Meeting Minutes).","Toggle <strong>Connected Services Toggle</strong> if this form type should allow cross-linking to other forms (e.g. raising a Change Order from an RFI).","Click <strong>Save Changes</strong>."],"note":"This configures the shared template used by every project. The per-project approval workflow itself (who approves, how many levels) is set separately in Project Setup → Forms → Approval Workflow."}]},{"heading":"Form Issues","intro":"<p>Not every problem with a submitted form is the same kind of problem, and Arena distinguishes between two of them. A <strong>Form Issue</strong> arises from the content of the form itself — something flagged wrong within one of its fields, independent of any approval step. A <strong>Form Workflow Issue</strong>, by contrast, exists specifically because the form's approval workflow rejected it. Keeping these separate makes it easier to tell, at a glance, whether a form has a content problem that needs fixing or a process problem that needs re-approval.</p>","definitions":[{"term":"Form Issues","definition":"Issues raised directly from a form's fields, tagged with the originating Form Type, that move through an Open → Rectified lifecycle."},{"term":"Form Workflow Issues","definition":"Issues automatically created when a form's approval workflow rejects it, moving through an Open → Closed lifecycle that closes once the form is re-submitted and approved."}],"procedures":[{"title":"Find issues raised on project forms","steps":["Go to <strong>Field Works → Progress → Issues</strong>.","Check <strong>Form Issues</strong> for problems raised directly from a form's fields (Open → Rectified).","Check <strong>Form Workflow Issues</strong> for problems caused by an approval-workflow rejection (Open → Closed once re-submitted and approved)."]}]},{"heading":"Work Logs & Site Posts","intro":"<p>This section covers two different things that both live under Progress but serve different purposes. <strong>Work Logs</strong> is the structured mechanism for recording actual progress against the project's work structure — following whichever Work Log Template the project has configured (Work Package to Tag, Tag to Work Package, System to Tag, or a Scheduled view) — with every submission permanently retained in Submitted Work Logs regardless of its status, for later audit or reporting.</p><p><strong>Site Posts</strong>, by contrast, is Arena's lightweight internal social feed for the project team: a place to share updates, photos, or short videos that don't need to go through a formal form, with likes and threaded comments. It exists to give field teams a low-friction way to keep everyone informed day-to-day, alongside — not instead of — the formal logging that Work Logs and the construction forms provide.</p>","definitions":[{"term":"Work Log Template","definition":"The configured pattern used to record progress: Work Package to Tag, Tag to Work Package, System to Tag, or a Scheduled view."},{"term":"Submitted Work Logs","definition":"The full repository of every work log regardless of status, filterable by date range and by user, exportable via Download Excel."},{"term":"Site Posts","definition":"Arena's internal social feed for a project, supporting text, image, and video posts (up to 50MB) visible to all project users, with Like and one-level-deep reply comments."}],"procedures":[{"title":"Record and review work logs","steps":["Go to <strong>Field Works → Progress → Work Logs</strong> to record progress via the project's configured Work Log Template.","Go to <strong>Submitted Work Logs</strong> to see the full repository of all logs, filterable by date range and by user, with a <strong>Download Excel</strong> export."]},{"title":"Post and browse Site Posts","steps":["Go to <strong>Field Works → Progress → Work Logs → Site Posts</strong>.","Click <strong>Create a Post</strong> to share updates, images, or videos (up to 50MB) visible to all project users.","Use the people search or date-range filters to browse existing posts.","Use Like and Comment (with one level of reply) to interact with posts."]}]},{"heading":"Quality","intro":"<p>Quality is where inspections get performed and tracked in the field, built on a two-level structure: Level 1 inspections must generally clear before Level 2 becomes available (unless the project has configured Level 1 to be skippable), reflecting a typical construction quality-control pattern of a first-pass check followed by a more thorough verification. Which items are ready for inspection, and how they're found, depends on the project's Work Log Template — either navigating by Work Package to a Location/Tag, or by mapping a System directly to a Tag.</p><p>Beyond the basic inspection forms, Quality includes three related but distinct tracking mechanisms worth telling apart. <strong>Quality Workflow Issues</strong> are created automatically whenever a quality form's approval is rejected — a process failure. <strong>Punch Lists</strong> are created when an issue is raised from within a quality form itself, and represent a defect that needs physical rectification and re-verification (Open → Rectify → QC_Verify). <strong>Restraints</strong> are a broader concept — physical, legal, or contractual blockers unrelated to any single form — that follow the same Open → Rectify → QC_Verify lifecycle but exist as their own tracked item with rectification guidance defined separately.</p>","definitions":[{"term":"Quality Level 1 / Level 2","definition":"The two-stage inspection structure; Level 2 forms generally only become available once Level 1 for that item is approved, unless Project Settings → Quality Logs is configured to allow skipping Level 1."},{"term":"Work Package to Location/Tags Logging","definition":"One of two navigation patterns for finding what's ready to inspect: select an Entity/CWA, then a Work Package, then a Ready item."},{"term":"System to Tag Mapping","definition":"The alternative navigation pattern for finding what's ready to inspect: select a tag, then a quality package."},{"term":"Approve Quality Logs","definition":"The review screen (visible only to users with approval permissions) where pending quality forms are approved or rejected; its default \"To Be Approved\" tab shows only items awaiting the current user's approval, while \"All\" shows every work package's status across all CWAs/Systems."},{"term":"Submitted Quality Logs","definition":"The full history of quality logs, filterable by Level 1/2, by user, and by date range, exportable via Download Excel."},{"term":"Quality Workflow Issue","definition":"A record automatically created when a quality form's approval workflow rejects it; moves Open → Closed once the form is re-submitted and approved. Supports due dates, assignment, Chat, and Download Excel."},{"term":"Punch List","definition":"A record automatically created when an issue is raised from within a quality form; moves through Open → Rectify → QC_Verify. Supports due dates, assignment, Chat, filters, and Download Excel."},{"term":"Restraint","definition":"A physical, legal, or contractual blocker logged independently of any single form; moves through Open → Rectify → QC_Verify, with rectification guidance for each restraint type configured at the Restraint Rectification screen."}],"procedures":[{"title":"Complete a quality inspection form on-site","steps":["Go to <strong>Field Works</strong>, choose a Tree Version, then open the <strong>Quality</strong> tab.","Depending on the project's Work Log Template, either use <strong>Work Package to Location/Tags Logging</strong> (select an Entity/CWA, then a Work Package, then a Ready item), or <strong>System to Tag Mapping</strong> (select a tag, then a quality package).","Fill in the form, then click <strong>Save As Draft</strong> or <strong>Submit for Approval</strong>."],"note":"Level 1 must be approved (or explicitly configured to be skippable in Project Settings → Quality Logs) before Level 2 becomes available."},{"title":"Approve submitted quality logs","steps":["Go to <strong>Field Works → Quality → Approve Quality Logs</strong>.","In the default <strong>To Be Approved</strong> tab, click a location/tag to open its pending work packages and approve or reject them.","Click <strong>All</strong> to see every work package and its status across all CWAs/Systems."],"note":"This screen and its Approve/Reject actions are only visible to users with approval permissions."},{"title":"Review the full history of quality logs","steps":["Go to <strong>Field Works → Quality → Submitted Quality Logs</strong>.","Filter by Quality Level 1/2 and by user via the dropdowns, and by date range via Filters/calendar.","Use <strong>Download Excel</strong> to export the filtered or full set of logs."]},{"title":"Track a rejected quality form as a workflow issue","steps":["Go to <strong>Field Works → Quality → Quality Workflow Issues</strong> (populated automatically on rejection).","Track it through Open/Closed status — it closes once the form is re-submitted and approved.","Use due dates, assignee, Chat, and Download Excel as needed."]},{"title":"Track a Punch List item","steps":["Go to <strong>Field Works → Quality → Punch Lists</strong> to view items created when an issue is raised from a quality form.","Click <strong>Rectify</strong> once the defect is fixed, then <strong>QC_Verify</strong> to progress it to closure.","Use due dates, assignee, Chat, filters, and Download Excel as needed."]},{"title":"Raise and track a restraint","steps":["Go to <strong>Field Works → Quality → Restraints</strong>, click <strong>Add Restraint</strong>, fill in the form, and submit.","Progress it through Open → Rectify → QC_Verify by clicking <strong>Rectify</strong> then <strong>QC_Verify</strong>.","Add rectification guidance for a restraint type at the <strong>Restraint Rectification</strong> screen.","Use due dates, assignment, Chat, filters, and Download Excel as needed."]}]},{"heading":"Safety","intro":"<p>Safety in Field Works covers both proactive and reactive safety activity. On the proactive side, field staff log <strong>Safety Observations</strong> at any time and complete <strong>Safety Forms</strong> that are either scheduled (via the Safety Calendar) or unscheduled/ad-hoc. On the reactive side, if any of these forms surfaces a failed checkpoint, Arena can automatically escalate it into a <strong>Daily Safety Issue (DSI)</strong>, ensuring a flagged hazard doesn't just sit inside a completed form where it might be missed.</p><p>The Safety Calendar's color coding is worth understanding on sight: blue means a form is in the Ready state and due per its schedule, grey means the form isn't yet enabled, and yellow means the form is In Progress — either awaiting approval or carrying an open issue. Completed Safety Forms then serves as the single retrospective view across both calendar-driven and unscheduled safety forms, useful for audits or spot-checking compliance over time.</p>","definitions":[{"term":"Safety Observation","definition":"A field-logged safety note that moves through an Open → Rectified lifecycle, with due date, assignee, Chat, and Download Excel support."},{"term":"Safety Calendar","definition":"The view of scheduled safety forms, color-coded by state: blue (Ready, due per schedule), grey (not yet enabled), yellow (In Progress — awaiting approval or with open issues)."},{"term":"Daily Safety Issue (DSI)","definition":"An issue automatically created from a project safety form or calendar form (e.g. from a failed/\"No\" checkpoint), tracked Open → Rectified with due date, assignee, Chat, and Download Excel support."},{"term":"Completed Safety Forms","definition":"The full repository of submitted logs from both Safety Forms and Safety Calendar Forms, most recent first, filterable by user or date range."},{"term":"Safety Forms (unscheduled)","definition":"Ad-hoc safety forms organized by category, filled out on demand rather than on a schedule."}],"procedures":[{"title":"Log a safety observation","steps":["Go to <strong>Field Works → Safety → Safety Observations</strong>.","Click <strong>Add Observation</strong>, fill in the details, and click <strong>Submit</strong>.","Click <strong>Rectify</strong> to close the observation once addressed."]},{"title":"Complete a scheduled safety form via the Safety Calendar","steps":["Go to <strong>Field Works → Safety → Safety Calendar</strong>.","Open a form shown in blue (Ready, grouped by category per its scheduled date/time).","Fill in the form, then click <strong>Save As Draft</strong> or <strong>Submit</strong>/<strong>Submit for Approval</strong>."],"note":"Grey forms are not yet enabled; yellow forms are In Progress, awaiting approval or with open issues."},{"title":"Fill out and submit an unscheduled safety form","steps":["Go to <strong>Field Works → Safety → Safety Forms</strong>.","Expand a category in the left menu and click <strong>Create Form</strong>.","Fill it in, then click <strong>Save As Draft</strong> or <strong>Submit</strong>/<strong>Submit for Approval</strong>."],"note":"Each submitted card supports Chat (images/text/video up to 5MB) plus Follow Up Actions/History/Download/Share/Print/Compose Mail/Email Threads. A checkpoint answered \"No\" can automatically raise a Daily Safety Issue."},{"title":"Review Daily Safety Issues","steps":["Go to <strong>Field Works → Safety → Daily Safety Issues</strong> to view issues auto-raised from safety forms or the calendar.","Click <strong>Rectify</strong> to close a DSI once resolved.","Use due dates, assignee, Chat, filters, and Download Excel as needed."]},{"title":"Review the full repository of completed safety forms","steps":["Go to <strong>Field Works → Safety → Completed Safety Forms</strong>.","Filter by user or by date range.","Use <strong>Download Excel</strong> to export."]}]},{"heading":"Drawing Management","intro":"<p>Field Works' Drawing Management is intentionally narrow in scope: it exists specifically to surface drawings that failed approval somewhere in the review chain, so field teams can immediately see which sheets are not yet cleared for use. Rather than duplicating the full drawing library and revision tools (which live in Project Setup), this screen is a focused issue queue that keeps rejected-drawing follow-up visible to the people working on-site.</p>","definitions":[{"term":"Drawing Workflow Issues","definition":"Cards automatically created whenever a drawing is rejected at any approval level, searchable by ID/status and supporting due dates, assignment, Chat, filters, Download Excel, and a table/card view toggle."}],"procedures":[{"title":"Track drawing rejections in the field","steps":["Go to <strong>Field Works → Drawing Management → Drawing Workflow Issues</strong>.","Search by ID or status, or use Filters to narrow the list.","Assign a due date and owner, use Chat to collaborate, and toggle between table and card view as preferred.","Use <strong>Download Excel</strong> to export the list."]}]}],
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
    narrative: [{"heading":"Events","intro":"<p>Arena generates a constant stream of system activity — approvals, rejections, assignments, submissions — across every module in a project, and without a notification layer, users would have to log in and check screens manually to find out anything changed. The Events tab is where the messaging behind each of those triggers is defined and customized. Every event is pre-defined by Arena itself (you don't create new events here, only edit how existing ones communicate), and each one can be delivered through three channels: Email, Web, and Mobile, shown as separate icons you can open individually.</p><p>Customizing an event's message template matters because generic system text rarely fits every organization's tone or workflow context — a company might want its RFI-rejection email to reference a specific internal escalation process, for instance. Because these templates can drift over time as different admins tweak them, Arena provides a safety net: Reset to Standard reverts every template back to Arena's defaults in one action, with a confirmation warning since this is a destructive, all-templates-at-once operation.</p><p>This module sits at project scope, meaning notification behavior can be tuned per project rather than being locked to a single global configuration — useful when different projects have different stakeholder communication needs.</p>","definitions":[{"term":"Notification Event","definition":"A pre-defined system trigger (such as an approval or rejection) that can send a message via Email, Web, or Mobile, each with its own editable message template."},{"term":"Reset to Standard","definition":"An action on the Events tab that reverts all notification templates back to Arena's default text, presented with a confirmation warning due to its scope."}],"procedures":[{"title":"Customize a notification event's message","steps":["Go to <strong>Notifications → Events</strong> tab.","Find the event you want to customize and click its <strong>Email</strong>, <strong>Web</strong>, or <strong>Mobile</strong> icon.","Edit the message template as needed and save."],"note":"Use Reset to Standard to revert all templates back to Arena's defaults — this affects every event's templates at once and shows a confirmation warning before proceeding."}]},{"heading":"Event Groups","intro":"<p>Editing individual event templates only controls what a notification says — it doesn't determine who actually receives it. That's the job of Event Groups: bundles of events paired with the specific users who should be alerted when any event in that bundle fires. Without this layer, every user would either get every notification or none, neither of which scales for a project team with different roles and different concerns.</p><p>Arena gives you two ways to build these groups. Get Standard Event Groups creates Arena's own recommended default groupings in one click — a fast starting point, though it only works cleanly the first time; running it again after groups already exist will overwrite any existing group with the same name, which is why it comes with its own warning. Alternatively, Add Event Group lets you build a fully custom group from scratch. Whichever path you take, each group exposes two buttons for configuration — Notifications, to choose which events belong to the group, and Users, to choose who's on the receiving end — meaning the group is really just the intersection of a set of events and a set of people, and only that intersection of people gets notified when those events occur.</p>","definitions":[{"term":"Event Group","definition":"A named bundle mapping a set of notification events to a set of users, so that only those users are notified when any event in the group fires."},{"term":"Get Standard Event Groups","definition":"An action that creates Arena's default event groups. If groups already exist, running it again overwrites any same-named groups, with a warning shown first."},{"term":"Add Event Group","definition":"An action for creating a fully custom event group rather than using Arena's standard defaults."}],"procedures":[{"title":"Group notification events and assign them to users","steps":["Go to <strong>Notifications → Event Groups</strong> tab.","To use Arena's recommended defaults, click <strong>Get Standard Event Groups</strong> (only recommended if no groups exist yet, since re-running it overwrites same-named groups).","To build your own, click <strong>Add Event Group</strong> and name it.","On the group, click <strong>Notifications</strong> to choose which events belong to this group.","Click <strong>Users</strong> to choose which users should receive notifications for this group's events."],"note":"Only the users mapped to a group receive notifications for the events in that group — mapping an event without mapping users to the group means no one is notified."}]}],
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
    narrative: [{"heading":"Indirect Staff","intro":"<p>Not everyone connected to a project performs direct, billable field work — supervisory, administrative, and support staff still need to be recognized as part of the project roster even though their time isn't tracked the same way as a tradesperson pouring concrete or running conduit. Project Indirect Staff is where that distinction is made at the project level: a specific screen for adding system users to a project in this indirect capacity.</p><p>This connects to the broader productivity and timesheet tracking elsewhere in Arena (see Productivity Logs), where indirect and non-productive phase codes are handled differently from direct labor — the classification made here is what feeds that downstream distinction. Because the users being added already exist as system users (created and managed centrally, not within this screen), Project Indirect Staff is purely an assignment action: picking existing people and attaching them to this specific project's roster.</p>","definitions":[{"term":"Project Indirect Staff","definition":"System users assigned to a project's roster in a non-direct-labor capacity, distinct from crew members whose hours are tracked as direct productivity."}],"procedures":[{"title":"Add indirect staff to a project","steps":["Open the project and go to <strong>Project Setup → People/Roster → Project Indirect Staff</strong>.","Select the system users you want to add.","Click <strong>Submit</strong> to assign them as indirect staff for the project."]}]},{"heading":"Project Crews","intro":"<p>Field work in construction is almost always organized around crews rather than individuals — a group of people working together under a supervisor and foreman, often on a specific trade or task. Project Crews is where these groupings are defined at the project level, giving productivity logging, work assignment, and scheduling a natural unit to organize around rather than tracking every person separately.</p><p>Arena gives you three ways to populate a project's crews, reflecting that crew composition is rarely built entirely from scratch for every project. You can create a crew directly within the project, naming it and assigning a supervisor, foreman, and searchable list of member users. Alternatively, if your organization already maintains standard crews centrally, Copy Crews from Global Data imports those existing definitions rather than re-creating them. And when a crew that already exists in one project should also work on another, Map Crews to Projects copies that crew across without rebuilding it — useful for multi-site organizations moving the same team between jobs.</p>","definitions":[{"term":"Project Crew","definition":"A group of users, led by a supervisor and foreman, organized as a work unit within a specific project."},{"term":"Copy Crews from Global Data","definition":"An action that imports crew definitions already maintained in Global Data → Crews into the current project, instead of building them from scratch."},{"term":"Map Crews to Projects","definition":"An action that copies a crew from the current project into one or more other projects."}],"procedures":[{"title":"Create a crew within a project","steps":["Open the project and go to <strong>Project Setup → People/Roster → Project Crews</strong>.","Click <strong>Create Crew</strong>.","Enter the crew name.","Select a supervisor and foreman.","Search for and select the users to include in the crew.","Click <strong>Submit</strong>."],"note":"Alternatively, use Copy Crews from Global Data to import existing company-wide crews, or Map Crews to Projects to copy a crew from this project into other projects."}]},{"heading":"Assign People","intro":"<p>Defining crews and rostering staff establishes who is available to work on a project, but it doesn't by itself say who is responsible for which part of the work. The Assign People screen (sometimes called the \"People\" screen) closes that gap by mapping users and teams directly onto the project's work breakdown structure — down to the level of an individual Work Package within a CWA → System → Tag hierarchy.</p><p>This granularity matters because construction work is subdivided precisely for accountability: a work package represents a specific, trackable scope of work, and knowing exactly who's assigned to it is what makes downstream productivity logging, quality inspection routing, and progress reporting meaningful. Rather than repeating this assignment work for every similar work package, Copy Users To and Copy Teams To let you bulk-apply the same people to multiple selected work packages in one action. And because assignment itself can be sensitive enough to require sign-off in some organizations, the Approval link lets you attach an approval workflow to the assignment process itself.</p>","definitions":[{"term":"Assign People (\"People\" Screen)","definition":"The screen under Project Setup → Project Works used to assign users and teams from the project roster to specific Work Packages within the CWA → System → Tag structure."},{"term":"Copy Users To / Copy Teams To","definition":"Bulk actions that apply the same user or team assignment across multiple selected work packages at once."}],"procedures":[{"title":"Assign users or teams to project work packages","steps":["Go to <strong>Project Setup → Project Works → Assign People</strong>.","Navigate the hierarchy: <strong>CWA → System → Tag → Work Package</strong>.","Assign users or teams from the project roster to the selected work package.","Click <strong>Save Changes</strong>.","To apply the same assignment elsewhere, use <strong>Copy Users To</strong> or <strong>Copy Teams To</strong> and select additional work packages.","Use the <strong>Approval</strong> link to set an approval workflow for this assignment process, if required."]}]}],
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
    narrative: [{"heading":"User Groups","intro":"<p>Every project needs a way to control who can see and do what — a site engineer shouldn't have the same access as a project director, and a subcontractor's visibility should be narrower still. Permissions is the project-scope screen where that access model is built, and User Groups (also thought of as roles) are its fundamental building block: a named container of permissions and rights that users are then assigned into.</p><p>Creating a group is deliberately simple — just a name — because the real configuration work happens afterward, on the group's card, where permission rights and member users are attached (covered in the following sections). Once groups exist, they need to be maintained over time: renamed as organizational terminology shifts, duplicated when a new role is a close variant of an existing one, or deleted when no longer needed. Arena handles all three from the same kebab (3-dot) menu on a role's card — Edit for renaming, Copy for duplicating a group's users and permissions into a new named group (a fast way to build a similar-but-not-identical role without starting over), and Delete, which carries a confirmation warning since removing a role affects everyone assigned to it.</p>","definitions":[{"term":"User Group (Role)","definition":"A named container of permissions and member users, created on a project's Permissions screen and used to control per-module access."},{"term":"Copy (Role)","definition":"An action that duplicates an existing role's users and permission configuration into a new, separately named group."}],"procedures":[{"title":"Create a new role or permission group in a project","steps":["Open the project's <strong>Permissions</strong> screen.","Click the <strong>User Group</strong> button.","Enter a name for the new user group in the pop-up and confirm."]},{"title":"Rename, duplicate, or delete a permission role","steps":["On the role's card, open the kebab (3-dot) menu.","Choose <strong>Edit</strong> to rename the group.","Choose <strong>Copy</strong> to duplicate the group's users and permissions into a new named group.","Choose <strong>Delete</strong> to remove the group — a confirmation warning appears before it's removed."]},{"title":"Add users to a permission group","steps":["On the role's card, click <strong>Users</strong>.","From the list, select which users should have this role's configured permissions and rights."]}]},{"heading":"Permission Rights","intro":"<p>Once a role exists, the next question is exactly what that role can do — and Arena breaks this down at a per-module level rather than as a single blanket access flag. This granularity is what lets one role see and edit Cost Estimates while only viewing Drawing Management, and a different role do the reverse.</p><p>Configuration starts with a master switch, Roll Back, which must be turned on for a given module before that module's specific rights become active for the role. Once enabled, the individual rights available are: Assign To, a uniquely restrictive right where only the person the record is specifically assigned to can view, create, edit, or delete it; View, for read-only access; Create, for adding new records; Edit, for updating without deleting; Delete; Download, for exporting to Excel; Print; and Admin, a shortcut that grants every one of the above rights for that module in a single toggle rather than checking each box individually.</p>","definitions":[{"term":"Roll Back Toggle","definition":"A per-module switch on a role's Permissions card that must be enabled before that module's specific rights (View, Create, Edit, etc.) take effect."},{"term":"Assign To (Right)","definition":"A permission right restricting view/create/edit/delete access on a record to only the user it is specifically assigned to."},{"term":"Admin (Right)","definition":"A permission right that grants all available rights (Assign To, View, Create, Edit, Delete, Download, Print) for a module in one toggle."}],"procedures":[{"title":"Configure module permissions for a role","steps":["On the role's card, click <strong>Permissions</strong>.","Turn on <strong>Roll Back</strong> for the module you want to configure.","Choose from the available rights: <strong>Assign To</strong>, <strong>View</strong>, <strong>Create</strong>, <strong>Edit</strong>, <strong>Delete</strong>, <strong>Download</strong>, <strong>Print</strong>.","Alternatively, toggle <strong>Admin</strong> to grant all of the above rights for that module at once."]}]},{"heading":"Copy to Projects","intro":"<p>Building a well-tuned permission structure for one project takes real effort, and re-doing that same work manually for every new project would be wasteful — especially in organizations that run many similar projects with the same role structures. Copy User Groups to Projects solves this by letting you take a group you've already configured (with all its rights and, implicitly, its structure) and apply it to other projects in one action.</p><p>This is distinct from the Global Data-level Standard Groups feature (see Project User Groups), which automatically propagates default groups to every project. Copy to Projects is a manual, one-time, admin-initiated action for pushing a specific group to specific target projects — useful for the case where you want to replicate a role selectively rather than making it a permanent organization-wide default.</p>","definitions":[{"term":"Copy User Groups to Projects","definition":"An action on the Permissions screen that copies a configured user group into one or more selected target projects, avoiding the need to rebuild it from scratch."}],"procedures":[{"title":"Copy a user group's permissions to other projects","steps":["On the Permissions screen, click <strong>Copy User Groups to Projects</strong>.","In the pop-up, select the target projects to copy the user group(s) to.","Confirm to complete the copy."]}]}],
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
    narrative: [{"heading":"Create Logs","intro":"<p>Productivity Logs is where the actual labor and output of a construction project gets recorded — hours worked and quantities completed, tied to the phase codes that define how work is categorized for costing and scheduling purposes. This is arguably the most operationally important screen in the module, since every downstream approval, summary report, and cost comparison depends on accurate data entered here first.</p><p>Before logging anything, you choose which phase codes are in scope using Set Phase Codes and select the date range the log covers, narrowing the entry screen to only what's relevant for that period. From there, Create Log lets you add rows for either an individual — Add Employee — or an entire crew at once via Add Crew, or, if a very similar log was already submitted previously, Clone Log duplicates it as a starting point rather than requiring re-entry from scratch. The workflow then proceeds in two stages: first entering the hours/assignment data, then clicking Next to move into the Log Quantity tab, where actual quantities completed are recorded against each phase code, with a specific checkbox — Activity 100% Complete — for marking a scope of work as finished. Only once both stages are filled in is the log ready for submission.</p>","definitions":[{"term":"Set Phase Codes","definition":"A step in creating a productivity log where you choose which phase codes will be logged against for a given entry."},{"term":"Clone Log","definition":"An action that duplicates a previously submitted productivity log as a starting point for a new one, instead of building it from scratch."},{"term":"Log Quantity Tab","definition":"The second stage of productivity log creation, reached after entering employee/crew hours, where actual quantities completed are recorded against each phase code."},{"term":"Activity 100% Complete","definition":"A checkbox in the Log Quantity tab used to mark that a given scope of work has been fully completed."}],"procedures":[{"title":"Log hours or quantities for a crew or employee","steps":["Go to <strong>Field Works → Progress → Productivity Logs → Create</strong>.","Click <strong>Set Phase Codes</strong> to choose which phase codes to log.","Select the date range for the log.","Click <strong>Create Log</strong>, then <strong>Add Employee</strong> or <strong>Add Crew</strong> — or use <strong>Clone Log</strong> to duplicate a prior log.","Fill in the row(s) for hours or assignment.","Click <strong>Next</strong> to move to the <strong>Log Quantity</strong> tab.","Enter quantities completed, checking <strong>Activity 100% Complete</strong> for any finished scope of work.","Submit the log."]}]},{"heading":"Approve Logs","intro":"<p>Once field staff submit productivity logs, those entries need to be reviewed before they're treated as final — hours and quantities feed directly into cost tracking and payroll-adjacent processes, so unchecked errors here can ripple outward. The Logs screen (Field Works → Progress → Productivity Logs → Logs) is where admins and designated approvers perform that review.</p><p>The review interface is split by the kind of phase code involved, reflecting that direct production work and administrative/non-productive time are reviewed differently: the Quantities tab handles Direct and Change Order phase codes, where the concern is verifying completed work against claimed quantities, while the Timesheets tab handles Indirect and Non-Productive phase codes, where the concern is simply confirming hours. Approvers see Approve/Reject actions directly in whichever tab is relevant to the log they're reviewing.</p>","definitions":[{"term":"Quantities Tab (Approve Logs)","definition":"The review tab for Direct and Change Order phase code entries, where approvers verify completed quantities."},{"term":"Timesheets Tab (Approve Logs)","definition":"The review tab for Indirect and Non-Productive phase code entries, where approvers confirm logged hours."}],"procedures":[{"title":"Approve productivity logs submitted by field staff","steps":["Go to <strong>Field Works → Progress → Productivity Logs → Logs</strong>.","For Direct or Change Order phase codes, review entries in the <strong>Quantities</strong> tab.","For Indirect or Non-Productive phase codes, review entries in the <strong>Timesheets</strong> tab.","Click <strong>Approve</strong> or <strong>Reject</strong> on each entry as appropriate."],"note":"Only admins and designated approvers see the Approve/Reject actions."}]},{"heading":"Approval Workflow","intro":"<p>Rather than hard-coding who reviews productivity logs, Arena lets each project define its own review structure through a dedicated Approval Workflow screen, consistent with the level-based approach used across other Arena modules like Cost Estimate and Drawing Management. This is what determines who shows up with Approve/Reject buttons on the Logs screen described above.</p><p>Each level in the workflow can be configured as either requiring every assigned approver to sign off (All Must Approve) or allowing just one of them to clear it (Anyone Can Approve), and a description can be attached to each level to clarify its purpose — useful when a workflow has multiple levels representing different stages of review, such as a foreman's initial check followed by a project manager's final sign-off.</p>","definitions":[{"term":"Productivity Approval Workflow","definition":"A project-specific, level-based review process configured under Field Works → Progress → Productivity Logs → Approval Workflow, determining who can approve or reject submitted logs."}],"procedures":[{"title":"Set up review levels for productivity logs","steps":["Go to <strong>Field Works → Progress → Productivity Logs → Approval Workflow</strong>.","Click <strong>Create Level</strong>.","Choose <strong>All Must Approve</strong> or <strong>Anyone Can Approve</strong>.","Enter a description for the level.","Select the approvers for that level.","Repeat to add additional levels as needed."]}]},{"heading":"Data Summary","intro":"<p>Individual logs are useful for day-to-day tracking, but project managers and executives typically need the aggregated picture — total hours worked, total quantities completed, and how efficiently labor is converting into output across the whole project. Data Summary provides exactly that rollup, organized into three complementary views rather than a single undifferentiated report.</p><p>Timesheets summarizes hours by employee or crew, answering \"who worked how much.\" Quantities summarizes completed quantity by phase code or location, answering \"how much got done, and where.\" Labor Units is the most analytically useful of the three: it expresses the ratio of hours to quantity, which is the core productivity metric used to judge whether work is progressing efficiently or falling behind expected rates. Each of the three tabs supports Download Excel for a chosen date range, making this screen as much a reporting export tool as an on-screen dashboard.</p>","definitions":[{"term":"Timesheets (Data Summary)","definition":"A Data Summary tab showing aggregated hours by employee or crew."},{"term":"Quantities (Data Summary)","definition":"A Data Summary tab showing aggregated completed quantity by phase code or location."},{"term":"Labor Units","definition":"A Data Summary tab showing the ratio of hours to quantity — the core productivity efficiency metric used to assess whether work is on pace."}],"procedures":[{"title":"View aggregated productivity data across the project","steps":["Go to <strong>Field Works → Progress → Productivity Logs → Data Summary</strong>.","Select the <strong>Timesheets</strong> tab to see hours by employee or crew.","Select the <strong>Quantities</strong> tab to see quantity by phase code or location.","Select the <strong>Labor Units</strong> tab to see the hours-to-quantity ratio.","Use <strong>Download Excel</strong> on any tab to export the data for the selected date range."]}]},{"heading":"Issues","intro":"<p>A rejected productivity log isn't simply discarded — it needs to be flagged, explained, and tracked until it's corrected and resubmitted. The Issues screen is where that follow-up work happens, and like similar rejection-tracking screens elsewhere in Arena (such as Drawing Workflow Issues), the issue record itself is created automatically rather than by hand, the moment a log is rejected.</p><p>Each auto-generated issue carries the approver's or admin's comments explaining why the log was rejected, giving the person responsible for fixing it clear guidance rather than a bare rejection with no context. From there, issues can be assigned to a specific person with a due date, ensuring the corrective action doesn't stall indefinitely, and the screen supports search and a Download Excel export for anyone tracking overall rejection trends across the project.</p>","definitions":[{"term":"Productivity Log Issue","definition":"A record auto-generated in Field Works → Progress → Productivity Logs → Issues whenever a productivity log is rejected, carrying the approver's or admin's rejection comments."}],"procedures":[{"title":"Track and resolve a rejected productivity log","steps":["Go to <strong>Field Works → Progress → Productivity Logs → Issues</strong>.","Locate the issue, searching if needed, and review the approver's or admin's comments explaining the rejection.","Assign the issue to the responsible person with a due date.","Use <strong>Download Excel</strong> to export issues for broader tracking."],"note":"The issue is generated automatically upon rejection — there's no manual step to create it."}]}],
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
    narrative: [{"heading":"Forms Branding","intro":"<p>Every RFI, Submittal, Change Order, and other document generated by Arena's Construction Forms eventually gets viewed, printed, or shared outside the platform — and when it does, its visual presentation reflects on the organization that issued it. Forms Branding is the simple but important setting that ensures consistency there: a single brand color, chosen once, applied automatically across every form in the application rather than needing to be set form-by-form.</p><p>This lives in Project Settings rather than Global Data because branding can reasonably differ by project — a joint venture or a project run under a client's own branding requirements might need a different color than the organization's default. Keeping this setting at the project level accommodates that without requiring a global override.</p>","definitions":[{"term":"Forms Color Template","definition":"A single brand color, chosen per project under Project Settings → Forms, that is applied across the visual presentation of all forms generated within that project."}],"procedures":[{"title":"Set the brand color used across all forms in a project","steps":["Go to <strong>Project Settings → Forms</strong>.","Select the organization's brand color from the dropdown.","Click <strong>Save Changes</strong>."],"note":"This color is applied across all forms generated in the application for this project."}]},{"heading":"Look & Feel","intro":"<p>Look & Feel controls the application's visual theme — specifically, whether it renders in Light or Dark mode. This is a personal-comfort and readability setting rather than an organizational branding one, which is reflected in an important technical detail: it's device-specific. Choosing Dark mode on your laptop doesn't carry that preference over to your phone or a different computer — each device retains its own independently configured setting.</p><p>Understanding this scoping matters when troubleshooting: if a user reports that Dark mode \"isn't sticking,\" the likely explanation isn't a bug, but that they configured it on one device and are now looking at a different one where the setting was never applied.</p>","definitions":[{"term":"Look & Feel","definition":"A Project Settings screen for choosing the application's Light or Dark display mode. The setting is device-specific rather than tied to the user account across all devices."}],"procedures":[{"title":"Switch the application to dark mode","steps":["Go to <strong>Project Settings → Look & Feel</strong>.","Choose <strong>Light</strong> or <strong>Dark</strong> mode.","Click <strong>Save Changes</strong>."],"note":"This setting is device-specific — it only applies to the device where it was configured, not to your account across every device."}]},{"heading":"Productivity Settings","intro":"<p>Productivity Log Settings determines the structural rules that Productivity Logs (see that module for day-to-day usage) operates under for a given project — most importantly, how logged work is categorized in the first place. This is foundational configuration that should be settled early in a project's life, since changing the logging structure after significant data has already been entered can create inconsistency between older and newer logs.</p><p>The central choice here is the Logging Type: whether productivity should be tracked By Phase Code or By Level 3s, reflecting that different organizations and project types organize their work breakdown differently. Beyond that top-level choice, this screen also lets you configure the specific fields shown on the Timesheets and Quantity tabs within Productivity Logs — both the standard fields Arena provides and any additional configurable fields your project needs to capture.</p>","definitions":[{"term":"Logging Type","definition":"The top-level configuration choice in Productivity Log Settings determining whether productivity is tracked by Phase Code or by Level 3s."},{"term":"Productivity Log Settings","definition":"A Project Settings screen controlling the Logging Type and the standard/configurable fields shown on the Timesheets and Quantity tabs of the Productivity Logs module."}],"procedures":[{"title":"Configure how productivity logs are created","steps":["Go to <strong>Project Settings → Productivity Log Settings</strong>.","Choose the <strong>Logging Type</strong>: <strong>Create Productivity Logs By Phase Code</strong> or <strong>By Level 3s</strong>.","Configure the <strong>Timesheets</strong> and <strong>Quantity</strong> tab fields, including any custom configurable fields needed.","Save your changes."]}]}],
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
    narrative: [{"heading":"WBS / Tree Structure","intro":"<p>Every project in Arena is built on a three-tier work structure: <strong>CWA</strong> (Construction Work Area) at the top, <strong>System</strong> in the middle, and <strong>Tag/Location</strong> at the bottom. This structure — collectively called the <strong>Tree</strong> or <strong>WBS</strong> (Work Breakdown Structure) — is the skeleton that every other Field Works and Project Setup screen hangs off of: activity sequences, work packages, quantities, quality inspections, safety assignments, and cost estimates are all ultimately logged against a node in this tree.</p><p>The tree isn't invented from scratch inside each project. Global Data defines the reusable master skeleton — the generic entity types, activity libraries, and sequence templates for a given Construction Type — and Project Setup is where that skeleton is instantiated, customized, and populated with real project data as a <strong>Tree Version</strong>. A single project can contain multiple Tree Versions, which is how Arena supports sub-projects or parallel work breakdowns within one overall project.</p><p>Once the tree exists, this section is also where you configure how progress against it gets measured (percentage-based or effort-based), attach budgeted quantities/hours to individual work packages, add project-specific custom columns to the tree data, and assign the sequence in which work packages must be executed at each tag or location.</p>","definitions":[{"term":"CWA (Construction Work Area)","definition":"The tier-1 layer of a project's work structure. A project can have multiple CWAs, and a CWA cannot be deleted while one or more Systems (tier-2) are still linked to it."},{"term":"System","definition":"The tier-2 layer of the work structure, nested under a CWA."},{"term":"Tag / Location","definition":"The tier-3 layer of the work structure, nested under a System — the most granular point at which work packages, quantities, and inspections are actually logged."},{"term":"Tree Version","definition":"A project-specific instance of the work-breakdown structure, built from the base skeleton defined in Global Data. A project can hold more than one Tree Version, useful for sub-projects or parallel work breakdowns."},{"term":"Activity Sequence","definition":"The ordered list of work packages that must be completed, in order, at a given tag/location. Sequences are pre-defined per tag type in Global Data and then mapped onto actual tags in a project."},{"term":"Percentage Based measurement","definition":"A progress-measurement method where each activity and each work package within it is assigned a percentage weightage; weightages within a group must sum to 100%."},{"term":"Effort Based measurement","definition":"A progress-measurement method where man-hours are assigned instead of percentage weightages."},{"term":"Custom Column","definition":"A project-defined extra column added to the tree data (CWA → System → Tag level) to capture information Arena doesn't track by default."},{"term":"Other Attributes","definition":"Per-work-package fields — Budgeted Hours, Budgeted Quantity, Estimated Quantity, Planned Start/End Date, Forecasted End Date, Client End Date, and Skyline End Date — used for budget and schedule tracking against that work package."}],"procedures":[{"title":"Create a Tree Version","steps":["Open the project and go to <strong>Project Setup → Project Works → Tree Version(s)</strong>.","Click <strong>Create</strong>.","Choose <strong>Create Tree Version</strong> to enter the name, description, and assigned people manually, or choose <strong>Upload Tree Version Data</strong> to work from a spreadsheet.","For the upload path, download the sample Excel template, fill in Tree Version, Activity Sequence, User assignment, and Other Attributes data, then upload it, choosing a <strong>Global</strong> or <strong>Local</strong> sequence type."],"note":"The base skeleton structure comes from Global Data; the Tree Version is what you build from it for this specific project."},{"title":"Edit or delete a Tree Version","steps":["In <strong>Project Setup → Project Works → Tree Version</strong>, click the edit (pencil) icon on the tree version card, change the fields, and click <strong>Submit</strong>.","To delete a tree version, open its ellipsis (kebab) menu and click <strong>Delete</strong>."]},{"title":"Create a Construction Work Area (CWA)","steps":["Go to <strong>Project Setup → Project Works → Create CWA</strong>.","Click <strong>Create</strong>, enter the CWA name, and click <strong>Submit</strong>."],"note":"A CWA cannot be deleted if one or more Systems are still linked to it."},{"title":"Choose and apply a progress measurement method","steps":["Go to <strong>Project Settings → Project Work Measurement</strong> and choose <strong>Percentage Based</strong> or <strong>Effort Based</strong> for the project.","To assign the actual weightages, go to <strong>Project Setup → Project Works → Measurement Methods</strong>, choose the <strong>Progress</strong> or <strong>Quality</strong> tab.","Click <strong>Assign</strong> on an activity, then <strong>View & Edit Work Packages</strong> to set weightages (or man-hours) at the individual work-package level."],"note":"Under Percentage Based, weightages within any group must sum to 100%."},{"title":"Add a custom column to the project tree","steps":["Go to <strong>Project Setup → Project Works → Custom Columns</strong>.","Click <strong>Add Custom Column</strong>, enter the column name and type, then click <strong>Submit</strong>.","Use <strong>Export</strong> to download the tree data (including the new column) as Excel.","Use the <strong>Edit</strong>/<strong>Delete</strong> options in the column header to modify or remove a custom column later."]},{"title":"Assign or modify an activity sequence for a tag","steps":["Go to <strong>Project Setup → Project Works → Assign Activity Sequence</strong>.","For a tag that already has a sequence pre-defined in Global Data, click <strong>Add New Mappings</strong>, select the sequence, and click <strong>Submit</strong>.","To customize the sequence, drag and drop work packages to reorder them, or add/delete packages directly.","Use <strong>Copy The Same For</strong> to apply the sequence to a set of selected tags, or <strong>Copy The Same For Project</strong> to apply it to every unmapped tag of the same type across the whole project."]},{"title":"Set budgeted quantity/hours for a work package","steps":["Go to <strong>Project Setup → Project Works → Other Attributes (Qty | Hrs)</strong>.","Select a <strong>CWA → System</strong>.","Enter Budgeted Hours, Budgeted Quantity, Estimated Quantity, Planned Start/End Date, Forecasted End Date, Client End Date, and Skyline End Date for each work package."]}]},{"heading":"Roster & People","intro":"<p>The Roster & People area is where a project's workforce gets organized and connected to the work structure. While Global Data maintains the company-wide directory of users, non-system workers, and crews, Roster & People in Project Setup is where you pull the relevant subset of that directory onto this specific project, group them into project crews, and assign both individuals and crews down to the work-package level.</p><p>This matters because most day-to-day Field Works activity — logging productivity, submitting quality or safety forms, being routed an approval — depends on a user being correctly placed on the project roster and, in many cases, tied to the specific CWA/System/Tag/Work Package they're responsible for. Getting the roster and assignments right up front avoids people being unable to find or act on the work packages they're supposed to be working on.</p>","definitions":[{"term":"Project Crew","definition":"A named group of roster members, with a designated supervisor and foreman, scoped to a single project — either built manually or copied in from Global Data's company-wide Crews list."},{"term":"Project Indirect Staff","definition":"System users who work for the project but are not directly involved in field execution (e.g. project managers, admins) — tracked separately from the field crews doing hands-on work."},{"term":"Assign People (screen)","definition":"The screen where users or teams from the project roster are attached to a specific CWA → System → Tag → Work Package combination, defining who is responsible for that work."}],"procedures":[{"title":"Assign people to a work package","steps":["Go to <strong>Project Setup → Project Works → Assign People</strong> (the \"People\" screen).","Select the <strong>CWA → System → Tag → Work Package</strong> you want to staff.","Assign users or teams pulled from the project's roster, then click <strong>Save Changes</strong>.","Use <strong>Copy Users To</strong> or <strong>Copy Teams To</strong> to apply the same assignment to multiple selected work packages at once.","Use the <strong>Approval</strong> option if this assignment needs to go through a sign-off workflow."]},{"title":"Create or import a project crew","steps":["Go to <strong>Project Setup → People/Roster → Project Crews</strong>.","Click <strong>Create Crew</strong> to build one manually — enter the crew name and select a Supervisor, Foreman, and member users.","Alternatively, click <strong>Copy Crews from Global Data</strong> to import one or more existing crews already defined in Global Data → Crews.","Use <strong>Map Crews to Projects</strong> to copy a crew from this project into other projects."]},{"title":"Add Project Indirect Staff","steps":["Go to the <strong>Project Indirect Staff</strong> screen.","Select the users to add.","Click <strong>Submit</strong> to assign them as indirect staff on the project."]}]},{"heading":"Cost Estimate","intro":"<p>Cost Estimate is the project's budgeting workspace: the place where you build up a detailed estimate of what the project will cost across materials, labor, equipment, sub-contractors, and other expenses, before or alongside execution. It gives project teams and stakeholders a structured, itemized view of budget that can be compared against actuals as work progresses (via the Cost Tracking module elsewhere in Arena).</p><p>Rather than forcing every project to build its cost structure from nothing, estimates can pull material and rate data directly from Global Data's shared libraries (vendor rate cards, cost types, UOMs), so the numbers used across projects stay consistent. Once line items are entered, totals roll up automatically, and — because approvals on cost data often need sign-off — a dedicated workflow lets you require review before timesheets or quantity tracksheets are accepted.</p>","definitions":[{"term":"Estimate Category","definition":"The classification chosen when creating a cost estimate, used to organize different types of estimates on a project."},{"term":"Estimate Summary","definition":"A view-only page showing the rolled-up totals of all documented project costs across materials, labor, equipment, sub-contractor, and other-expense line items."},{"term":"Get Materials from Global Data","definition":"An import action on the cost estimate that pulls material/rate line items from the company-wide Global Data library, with a choice between keep-and-update (merge) or replace-all."}],"procedures":[{"title":"Create a cost estimate","steps":["Go to <strong>Project Setup → Cost Estimate → Create</strong>.","Select an <strong>Estimate Category</strong> and click <strong>Create Estimate</strong>.","In the Material, Labor, Equipment, Sub-Contractor, or Other Expenses tabs, use <strong>Add Custom Columns</strong> to capture extra data, <strong>Get Materials from Global Data</strong> to import existing line items (keep-and-update or replace-all), or <strong>Add Material</strong> to add line items manually.","Totals calculate automatically as line items are added."]},{"title":"Review the overall cost summary","steps":["Go to <strong>Project Setup → Cost Estimate → Estimate Summary</strong> to see the rolled-up view of all documented costs across every category."],"note":"Estimate Summary is view-only — edits are made from the underlying Material/Labor/Equipment/Sub-Contractor/Other Expenses tabs."},{"title":"Set up an approval workflow for timesheets or quantity tracksheets","steps":["Go to <strong>Project Setup → Cost Estimate → Workflow</strong>.","Select the feature to govern: <strong>Timesheets</strong> or <strong>Quantity Tracksheets</strong>.","Click <strong>Create Level</strong>, choose <strong>All Must Approve</strong> or <strong>Anyone Can Approve</strong>, and select the approvers for that level."]}]},{"heading":"Drawings","intro":"<p>The Drawings area manages the full lifecycle of construction drawings on a project: uploading them, labeling and organizing them into packages, revising them over time, and routing them through approval. Drawings are a heavily-referenced document type in construction — teams need to find the right sheet quickly, compare revisions, and know which version is current — so Arena builds in OCR-assisted labeling and structured revision tracking rather than treating drawings as generic file attachments.</p><p>A distinctive feature here is <strong>Drawing Training</strong>: rather than manually typing metadata for every drawing sheet, you train Arena once on where key fields (sheet number, discipline, revision, etc.) sit on a sample drawing, and it can then auto-extract those same fields from every subsequent upload using OCR. This is paired with a formal approval workflow, so a drawing doesn't become the project's reference version until it clears whatever sign-off levels the project requires.</p>","definitions":[{"term":"Drawing Training Template","definition":"A reusable OCR configuration that teaches Arena where specific labels (fields) are positioned on a drawing sheet, so future uploads of that drawing type can be auto-labeled instead of labeled by hand."},{"term":"Auto Label Upload","definition":"An upload mode that uses OCR and a trained template to automatically extract label values from a drawing, instead of the uploader entering them manually."},{"term":"Drawing Package","definition":"A named container of related drawings on a project, created against a specific Drawing Training Template, holding the Drawing Logs for that set of sheets."},{"term":"Create Revision","definition":"The action used to upload a new version of an existing drawing, preserving the prior version(s) for comparison."},{"term":"Revisions (compare)","definition":"A view, accessed from a drawing log's Actions menu, that shows color-coded differences between two versions of the same drawing."}],"procedures":[{"title":"Set up OCR training for a drawing type","steps":["Go to <strong>Project Setup → Drawings → Drawing Training</strong>.","Click <strong>Create Training Template</strong>, name it, and click <strong>Submit</strong>.","<strong>Step 1 – Upload Sample Drawing:</strong> upload a representative drawing sheet.","<strong>Step 2 – Create Labels:</strong> define the standard and configurable fields to extract (types include Checkbox, Date, Text box, Single/Multi select, Signature, or a special \"Training Category\" type used for OCR).","<strong>Step 3 – OCR Training:</strong> select each label and mark its position (horizontal/vertical) on the sample drawing.","<strong>Step 4 – Preview Table:</strong> review all the configured labels before finishing."]},{"title":"Create a drawing package and upload drawings","steps":["Go to <strong>Project Setup → Drawings → Drawing Packages</strong>.","Click <strong>Create Drawing Package</strong>, fill in the package details plus the training template to use, and click <strong>Submit</strong>.","Open the package to view its <strong>Drawing Logs</strong>, then click <strong>Upload Drawing</strong> (PDF or image files accepted).","Choose <strong>Auto Label Upload</strong> (OCR extraction using the training template) or <strong>Write Label Manually</strong>.","Click <strong>Review & Submit</strong> for a single drawing, or <strong>Submit All</strong> to finish a batch."]},{"title":"Annotate, revise, or compare drawing versions","steps":["Open a drawing from Drawing Packages or Drawing Logs.","Click <strong>Edit Drawing</strong> (or <strong>Comments</strong>) to enter annotation mode, then click <strong>Save</strong>/<strong>Save Changes</strong> when done.","Use <strong>Create Revision</strong> to upload a new version of the drawing.","From a drawing log's <strong>Actions</strong> menu, use <strong>Revisions</strong> to see color-coded diffs against a prior version, or <strong>Compare</strong>, <strong>Download</strong>, <strong>Share</strong>, <strong>Edit</strong>, <strong>Link</strong> (to map the drawing to a CWA/System/Tag), and <strong>Delete</strong>."]},{"title":"Create an approval workflow for drawings","steps":["Go to <strong>Project Setup → Drawings → Create Approval Workflow</strong>.","Click <strong>Create Approval Workflow</strong>, then <strong>Create Level</strong> to add each approval level.","For each level, choose <strong>All must approve</strong> or <strong>Anyone can approve</strong> and select the approvers."]}]},{"heading":"Forms","intro":"<p>The Forms area in Project Setup governs how construction and custom forms behave on this specific project — most importantly, whether submissions require a formal sign-off before they're considered final. This is deliberately kept separate from the form's actual field layout: the sections, fields, and data types of an RFI, Submittal, Change Order, or Meeting Minutes form are all defined once in Global Data's Construction Forms library and shared by every project, but whether that form needs approval, and by whom, is a per-project decision made here.</p><p>This split matters in practice: a company might want the exact same RFI template everywhere, but a smaller project might route RFIs through a single approver while a larger one requires two levels. Project Forms extends the same idea to fully custom forms the company has built beyond the standard construction-document types.</p>","definitions":[{"term":"Approval Workflow (project forms)","definition":"A per-project, per-form-type sequence of approval levels (RFI, Submittal, Change Order, or a custom form) that submissions must pass through. It only takes effect if the corresponding form template's Approval Work Toggle is switched on in Global Data."},{"term":"Project Forms","definition":"The area (under Field Works) where individual logs of a company's custom forms are created and submitted, as distinct from Global Data's Construction Forms setup, which defines the template itself."}],"procedures":[{"title":"Set up an approval workflow for RFIs, Submittals, Change Orders, or a custom form","steps":["Go to <strong>Project Setup → Forms → Approval Workflow</strong>.","Select the form type: <strong>RFI</strong>, <strong>Submittal</strong>, <strong>Change Order</strong>, or a custom form.","Click <strong>Create Level</strong>, choose <strong>All must approve</strong> or <strong>Anyone can approve</strong>, and select the approvers for that level."],"note":"This workflow only applies if the form type's Approval Work Toggle is set to Active in its Global Data form template."},{"title":"Create a custom project form log","steps":["Open the project and go to <strong>Field Works → Project Forms</strong>.","Select the custom form from the left menu and click <strong>Create</strong>.","Fill in the fields, then click <strong>Save As Draft</strong> or <strong>Submit For Approval</strong>/<strong>Submit</strong>."],"note":"This creates individual logs against a form; the template itself (fields, sections, approval toggle) is defined separately in Global Data's Construction Forms setup."}]},{"heading":"Safety Setup","intro":"<p>Safety Setup is where a project's safety program is configured before any inspection actually happens in the field. It covers three related but distinct concerns: defining the approval chain that safety inspection results must pass through, organizing supporting safety documents into folders, and scheduling which safety forms are due, when, and to whom.</p><p>The distinction between a <strong>calendar</strong> form and a plain <strong>project safety form</strong> matters for how field crews experience Safety in Field Works. Calendar forms are recurring and scheduled (e.g. a daily toolbox talk), and they simply won't appear to a user unless they're both scheduled and explicitly assigned. Project safety forms are unscheduled/ad-hoc, grouped into categories, and likewise only visible to users who've been assigned to them. Getting the assignment step right in both cases is what actually makes a form appear for field users — creating the form alone is not enough.</p>","definitions":[{"term":"Safety Workflow","definition":"An approval chain built from one or more levels (each All-must-approve or Anyone-can-approve, with named approvers) that a safety inspection result is routed through."},{"term":"Assign Workflow (Safety)","definition":"The step that attaches a previously created Safety Workflow to a specific safety work division and package; \"Clear\" removes the assignment unless it's already in progress."},{"term":"Safety & Documents (folder)","definition":"A folder structure for storing safety-related documents and files on a project, each folder supporting Share, Print, and Delete."},{"term":"Safety Calendar Category","definition":"A named group of recurring safety forms with a defined schedule (start date/time, end date, recurrence frequency); forms only appear to end users once explicitly assigned within the category."},{"term":"Project Safety Form Category","definition":"A named group of unscheduled/ad-hoc safety forms; like calendar forms, these only appear in Field Works once assigned to specific users."}],"procedures":[{"title":"Create and assign a safety approval workflow","steps":["To create a workflow, go to <strong>Project Setup → Safety → Create Workflow</strong>, click <strong>Create Workflow</strong>, then <strong>Create Level</strong> — choose <strong>All must approve</strong> or <strong>Anyone can approve</strong> and select the approvers.","To apply the workflow, go to <strong>Project Setup → Safety → Assign Workflow</strong>, select the safety work division and package, choose the workflow, and click <strong>Submit</strong>.","Use <strong>Clear</strong> to remove an assigned workflow, unless it is already in progress."]},{"title":"Create folders for safety documents","steps":["Go to <strong>Project Setup → Safety → Safety & Documents</strong>.","Enter a folder name and click <strong>+</strong> to create it.","Click into the folder to add related documents/files.","Use <strong>Share</strong> to email the folder's contents to selected users, <strong>Print</strong>, or <strong>Delete</strong> (a warning is shown before deletion)."]},{"title":"Set up recurring (scheduled) safety forms","steps":["Go to <strong>Project Setup → Safety → Setup Safety Calendar</strong>.","Click <strong>Create Safety Calendar Category</strong>, name it, and choose the safety forms to include.","Set the schedule: Start Date/Time, End Date, and recurrence frequency.","Click <strong>Click to make assignments</strong> on each form to assign it to specific users."],"note":"Unassigned forms will not appear to end users in Field Works, even if scheduled."},{"title":"Set up unscheduled/ad-hoc safety forms","steps":["Go to <strong>Project Setup → Safety → Setup Project Safety Forms</strong>.","Click <strong>Create Safety Form Category</strong>, name it, and select the safety forms to include.","Click <strong>Click to make assignments</strong> to assign the forms to users.","Use the copy button to apply the same assigned users to other forms."],"note":"As with calendar forms, unassigned forms will not show up in Field Works."}]},{"heading":"Quality Setup","intro":"<p>Quality Setup mirrors Safety Setup's structure but for quality control: it defines the approval workflow quality inspections must pass through, and it introduces a document/photo organization concept specific to quality — the <strong>Quality & Documents folder</strong>, sometimes referred to as a &quot;loop&quot; folder. Because quality inspections are usually tied to a physical location or system rather than a schedule, these folders are mapped directly onto work packages (CWA/System/Tag combinations) rather than assigned to users on a calendar.</p><p>This gives a project team a single place to see, for a given loop or system, how many quality forms are complete, in progress, or not yet ready — alongside the drawings, documents, and photos relevant to that scope of work.</p>","definitions":[{"term":"Quality Workflow","definition":"An approval chain (one or more levels, each All-must-approve or Anyone-can-approve, with named approvers) that a quality inspection result is routed through."},{"term":"Assign Workflow (Quality)","definition":"The step that attaches a Quality Workflow to a specific CWA, System, Tag, and quality package."},{"term":"Quality & Documents folder (loop folder)","definition":"A folder used to group quality documentation for a defined scope of work. Work packages are mapped into it via Folder Items → Map Work Packages, and it tracks completed/in-progress/not-ready form counts alongside its Drawings, Documents, and Photos tabs."}],"procedures":[{"title":"Create and assign a quality control approval workflow","steps":["To create a workflow, go to <strong>Project Setup → Quality → Create Workflow</strong>, click <strong>Create Workflow</strong>, then <strong>Create Level</strong> — choose <strong>All must approve</strong> or <strong>Anyone can approve</strong> and select the approvers.","To apply the workflow, go to <strong>Project Setup → Quality → Assign Workflow</strong>, select the CWA, System, Tag, and quality package, choose the workflow, and click <strong>Submit</strong>."]},{"title":"Create a Quality & Documents (loop) folder and map work packages","steps":["Go to <strong>Project Setup → Quality → Quality & Documents</strong>.","Click <strong>Create Folder</strong>, name it, and click <strong>Submit</strong>.","Open the folder and use <strong>Folder Items → Map Work Packages</strong> to assign CWA/System/Tag combinations to it.","Use the folder's Drawings, Documents, and Photos tabs to attach related files."],"note":"Each folder displays a running count of completed, in-progress, and not-ready forms for the mapped scope."}]},{"heading":"Overview & Navigation","intro":"<p>Project Setup groups together everything needed to configure a single project's structure and workflows before (and during) execution: the work-breakdown tree, roster, schedule, quality and safety configuration, drawing management, cost estimating, and forms. Understanding its sub-sections at a glance helps you find the right screen quickly rather than hunting through the sidebar.</p>","definitions":[{"term":"Project Works","definition":"The sub-section covering the WBS/tree, CWA creation, Activity Sequence assignment, Custom Columns, and Other Attributes."},{"term":"Roster","definition":"The sub-section covering People/Crews assignment for the project."},{"term":"Work Schedule","definition":"The sub-section covering the project's schedule."},{"term":"Documents","definition":"The sub-section for general project document storage, separate from Drawings."}],"procedures":[]}],
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
    narrative: [{"heading":"Project Users","intro":"<p>As an organization runs more projects, the same people end up spread across many of them, often with different roles or permission groups on each — someone might be a project manager on one job and only a viewer on another. Project Users is the lookup screen that answers the otherwise-tedious question of \"where does this person have access, and what is their role there,\" without needing to check every project individually.</p><p>The interface is built around a searchable list of users on the left; picking one populates a table on the right showing every project they belong to and their group within each. Rather than leaving group names as opaque labels, clicking a group directly in that table reveals its actual configured permissions — letting an admin verify not just that a user has a role, but exactly what that role lets them do, all without leaving this screen.</p>","definitions":[{"term":"Project Users Lookup","definition":"A screen under Project User Groups → Project Users that lets you select a user and see every project they belong to along with their assigned group in each."}],"procedures":[{"title":"See which projects and groups a user belongs to","steps":["Go to <strong>Project User Groups → Project Users</strong>.","Search for and select a user from the list on the left (searchable by name or email).","Review the table on the right showing the projects they're on and their group in each.","Click a group in the table to see its configured permissions."]}]},{"heading":"Standard Users","intro":"<p>Certain people in an organization — a compliance officer, a senior executive, an IT administrator — reasonably need to be present on every project without anyone remembering to add them manually each time a new project is created. Standard Users solves exactly this: designate someone as a standard user once, and Arena automatically adds them to the roster and default group of every existing project, and every future one too.</p><p>Only groups that have been marked Set as Default are eligible to be chosen as the standard group for one of these users — this is the mechanism that also connects Standard Users to Standard Groups (covered next): a standard user is really just a person permanently bound to a default group across the entire project portfolio. One behavior worth remembering: removing someone from Standard Users stops them from being added to new projects going forward, but it does not retroactively remove them from projects they were already added to — those memberships persist independently once created.</p>","definitions":[{"term":"Standard User","definition":"A user designated to be automatically added to the roster and default group of every existing and future project, configured under Project User Groups → Standard Users."}],"procedures":[{"title":"Add a standard user who is auto-added to every project","steps":["Go to <strong>Project User Groups → Standard Users</strong>.","Click <strong>Add User</strong>.","Select the user to designate as standard.","Pick a standard group for them — only groups with <strong>Set as Default</strong> enabled will be shown.","Confirm — the user is now automatically added to the roster and default group of every existing and future project."],"note":"Deleting a standard user does not remove them from projects they're already part of; it only stops future automatic additions."}]},{"heading":"Standard Groups","intro":"<p>Standard Groups is the company-wide counterpart to per-project Permissions (see the Permissions module): instead of building a permission group inside one project, you build it once here and choose whether it should propagate everywhere automatically. This is the mechanism that eliminates the need to manually recreate a common role — say, \"Site Supervisor\" — in every single project an organization runs.</p><p>Creating a group here works much like it does at the project level: name it, then enable the specific permission checkboxes it should grant. The feature that makes it \"standard\" is Set to Default — enabling this causes the group to automatically attach itself to every existing and future project, visibly marked inside each project's Users and Permissions screen with a link icon showing its origin as a centrally managed group rather than a locally created one. A second, independent toggle, Restrict Users, adds a layer of control over who is even eligible to be placed into this group across the organization: once enabled, you choose the eligible users, then choose which specific projects the restriction applies to, preventing the group from being freely assigned to just anyone on every project.</p><p>Because a Standard Group is live across potentially dozens of projects at once, editing one carries real consequences — which the next definition (see \"Standard Group Propagation\") explains in more detail. In short: Arena does not silently push every edit everywhere. Editing a group with Set to Default enabled always prompts a dialog asking exactly which existing projects should receive the change, so you retain control project-by-project even for a company-wide role. Disabling Set to Default going forward stops new projects from picking the group up automatically, but doesn't touch any project that already has it — those keep functioning with their existing configuration, untouched by the toggle change.</p>","definitions":[{"term":"Standard Group","definition":"A permission group defined once under Project User Groups → Standard Groups that can be configured to automatically apply to every existing and future project."},{"term":"Set to Default","definition":"A toggle on a Standard Group causing it to be automatically added to all existing and future projects, shown with a link icon inside each project's Users and Permissions screen."},{"term":"Restrict Users","definition":"A toggle on a Standard Group limiting which users are eligible to belong to it, and on which specific projects that restriction applies."},{"term":"Standard Group Propagation","definition":"The behavior when editing a Standard Group with Set to Default enabled: a dialog asks which existing projects should receive the updated configuration, so changes are applied only to selected projects rather than silently everywhere."}],"procedures":[{"title":"Create a permission group that applies to every project by default","steps":["Go to <strong>Project User Groups → Standard Groups</strong>.","Click <strong>Project User Groups</strong> to create a new group.","Enter a name for the group.","Enable the needed permission checkboxes per field.","Click <strong>Save Changes</strong>.","Enable <strong>Set to Default</strong> so it's automatically added to all existing and future projects.","Optionally, enable <strong>Restrict Users</strong>, select the eligible users, click Submit, then choose which projects the restriction applies to."]},{"title":"Edit an existing Standard Group","steps":["Open the Standard Group you want to change under <strong>Project User Groups → Standard Groups</strong>.","Make your changes to permissions or users.","If the group has <strong>Set to Default</strong> enabled, a dialog will ask which existing projects should receive the updated permissions/users.","Select the projects that should receive the change, or none if you only want it applied going forward."],"note":"Only the projects you select in the dialog get the update; others keep their prior configuration. Disabling Set to Default stops future projects from picking the group up but does not change any project that already has it."}]}],
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
    narrative: [{"heading":"Form Templates & Settings","intro":"<p>Every quality inspection that gets filled out in the field starts life here, as a form template. Quality in Arena runs on a two-tier inspection model — Level 1 and Level 2 — and both levels are built from the same template designer in Global Data. Rather than hard-coding a fixed checklist, Arena lets your quality team define exactly which inspection items matter for each type of work, what evidence is required when something fails, and how that failure should be escalated. This is the configuration layer that everything downstream (field inspections, approvals, punch lists) depends on, so it's typically owned by a quality manager or admin rather than site staff.</p><p>Because inspection needs vary so much by trade and by company, the template designer is deliberately granular: you don't just list questions, you also control field types, which fields are mandatory, which show up as a summary on the log's card view, and what happens the moment an inspector marks something as failing. Project Settings then layers a small number of project-wide choices on top of the global templates — most importantly, whether a project even uses the second inspection level at all, and which work-log template style the Field Works Quality tab should present to users.</p><p>Getting this configuration right up front avoids a lot of rework later: because logs already submitted are linked to the workflow and form version they were created under, changing a template or a workflow after the fact can affect historical records, not just future ones.</p>","definitions":[{"term":"Quality Work Package","definition":"A grouping of quality inspection scope (e.g. a trade, system, or discipline) that must be created under Global Work Packages → Quality before you can attach a Level 1 or Level 2 form to it. Work packages are the anchor that ties a form template, a field inspection, and an approval workflow together."},{"term":"Level 1 / Level 2 inspection","definition":"Arena's default two-tier quality inspection model. Level 1 is the initial inspection; Level 2 is a secondary, typically more senior, inspection that becomes available only after Level 1 has been approved (unless a project has been configured to skip Level 1 approval and jump straight into Level 2 availability)."},{"term":"Inspection Item","definition":"A single checklist question on a quality form, answered Yes, No, or N/A. Answering \"No\" is treated as a failure signal — it forces the inspector to record what the issue was and how urgent it is, which is what feeds the Punch Lists, Restraints, and Workflow Issues screens later."},{"term":"Trigger Point","definition":"A rule attached to a specific field that fires an action — raising an issue or requiring a note — the moment that field is updated in a particular way. Trigger points are how a form goes from being a static questionnaire to something that actively surfaces problems as they're entered, and they also define the Post Rectification Status an item moves to once it's fixed."},{"term":"Quality Level Settings","definition":"A Project Settings option (under Quality Logs) that lets a company that only needs a single round of inspection disable Level 2 entirely for a given project, simplifying the workflow for lower-risk work."},{"term":"Quality Work Log Template","definition":"A project-level choice of how the Quality tab in Field Works is organized and displayed — either \"Work Package to Location/Tags Logging\" (which maps work packages onto physical locations or tags) or \"System to Tag Mapping\" (which renders tags as status-colored cards). This is purely a presentation/navigation choice and doesn't change the underlying form content."},{"term":"Priority Level","definition":"A named severity tier (e.g. Critical, High, Low) configured under Project Settings → Punch Lists & Restraints, each carrying a due-hours value that sets the clock on how quickly an issue at that priority must be resolved."}],"procedures":[{"title":"Build a Quality Level 1 or Level 2 form template","steps":["Before touching the form designer, create the relevant <strong>Quality Work Packages</strong> under <strong>Global Work Packages → Quality</strong> — every template must be attached to a work package.","Go to <strong>Global Data → Quality Forms</strong> and choose either <strong>Quality Level-1</strong> or <strong>Quality Level-2</strong>.","Under <strong>Add Inspection Items</strong>, add each checklist question. Every item is answered Yes / No / N/A, and a \"No\" answer will require the inspector to specify an issue and a priority.","Move to <strong>Build Form</strong> to lay out the rest of the form: use <strong>Add Section</strong> / <strong>Copy Section</strong> / <strong>Delete Section</strong> to structure it, and <strong>Add Field</strong> / <strong>Copy Field</strong> / <strong>Delete Field</strong> to populate each section with fields such as Attachment, Date, Signature, or Table. Mark individual fields <strong>Required</strong> or flag them to <strong>Show on Cards</strong> so they surface in summary views.","Configure <strong>Setup Trigger Points</strong> to decide which field updates should raise an issue or force a note, and set the <strong>Post Rectification Status</strong> each triggered item should move to once resolved.","Use <strong>Preview</strong> to check the form exactly as an inspector in the field will see it.","Click <strong>Save Changes</strong> to commit your edits. Use <strong>Copy Form</strong> to reuse this template across other work packages instead of rebuilding it, or <strong>Delete Form</strong> to remove a template you no longer need."],"note":"Because Level 2 forms and their approvals key off Level 1, plan the two levels together rather than building Level 1 in isolation."},{"title":"Turn off the second inspection level for a project","steps":["Go to <strong>Project Settings → Quality Logs</strong>.","By default a project runs both Level 1 and Level 2 inspections; toggle this setting if the project only needs a single inspection pass.","Click <strong>Save Changes</strong> to apply it."]},{"title":"Choose the project's quality work log template","steps":["Go to <strong>Project Settings → Quality Work Logs</strong>.","Pick between the available <strong>Quality Work Log Templates</strong> — <strong>Work Package to Location/Tags Logging</strong> maps work packages onto tags/locations, while <strong>System to Tag Mapping</strong> displays tags as status-colored cards.","Save the change; this determines how the Quality tab under Field Works is laid out for everyone on the project."]},{"title":"Set priority levels for punch lists and restraints","steps":["Go to <strong>Project Settings → Punch Lists & Restraints</strong>.","Click <strong>Add Priority</strong>, enter a name and the due hours within which an issue at that priority must be resolved, then click <strong>Add</strong>.","Use the <strong>Actions</strong> column next to any existing priority level to edit or delete it."]}]},{"heading":"Field Inspections","intro":"<p>This is where the templates configured in Global Data actually get used: site staff and quality inspectors fill out Level 1 and Level 2 forms against real locations, components, or work areas from inside Field Works. The Quality tab in Field Works is the operational front end of the module — it's organized around whichever tree version and work log template the project has been configured with, so day-to-day users don't need to think about Global Data at all, only about which item is ready to inspect next.</p><p>Responsibility and approval routing for a work package are set up separately from the form content itself, under Project Setup → Works → People. This separation matters: the same form template can be reused across many work packages, each with its own responsible party and its own approval chain, so a company doesn't need to duplicate templates just to change who signs off on the work.</p>","definitions":[{"term":"Tree Version","definition":"The structural breakdown (by location, system, or work area) that a project's Field Works screens are organized around. Selecting a tree version in the Quality tab determines which entities/CWAs are available to inspect."},{"term":"Entity / CWA","definition":"The specific location, component, or work area being inspected within the selected tree version. For projects using the System-to-Tag template, this is found via search/filter by location instead of by browsing the tree directly."},{"term":"Quality Package Responsible","definition":"The person assigned, per work package, as accountable for completing the quality inspection — configured in Project Setup → Works → People, separately from the form template itself."},{"term":"Quality Package Approval","definition":"The approval workflow configuration attached to a work package, also set under Project Setup → Works → People, defining who signs off once an inspection is submitted."}],"procedures":[{"title":"Complete a Level 1 or Level 2 quality inspection in the field","steps":["Go to <strong>Field Works → [Tree Version] → Quality tab</strong>.","Select the <strong>Entity/CWA</strong> to inspect — or, if the project uses a System-to-Tag template, search or filter by location instead.","Open an item marked <strong>Ready</strong>. The form appears alongside any documents or drawings that have been mapped to it, so the inspector has the relevant reference material in view while answering.","Fill in the form's inspection items and fields.","Click <strong>Save As Draft</strong> to keep working on it later, or <strong>Submit for Approval</strong> to send it into the approval workflow."],"note":"Level 2 only becomes available once Level 1 has been approved — unless the project has been configured to skip Level 1's approval step, in which case Level 2 opens automatically."},{"title":"Assign who is responsible for a quality package and who approves it","steps":["Go to <strong>Project Setup → Works → People</strong>.","Use <strong>Quality Package Responsible</strong> to assign the individual accountable for that work package's inspections.","Use <strong>Quality Package Approval</strong> to configure the approval workflow that applies to that same work package."]}]},{"heading":"Approvals & Logs","intro":"<p>Once an inspection is submitted, it doesn't just disappear into an archive — it moves into an approval and audit trail that gives supervisors visibility into what's pending, what's been done, and what went wrong. This section covers the three screens that make up that trail: the live approval queue, the historical record of everything ever submitted, and the issue tracker that catches anything a reviewer rejected.</p><p>These three views are deliberately separated by purpose rather than merged into one inbox. Approve Quality Logs is a working queue for people with sign-off authority; Submitted Quality Logs is a reporting/audit view for anyone who needs the full history; and Quality Workflow Issues exists specifically to make rejections visible and trackable rather than letting them get lost after a reviewer sends a form back.</p>","definitions":[{"term":"To Be Approved tab","definition":"A filtered view inside Approve Quality Logs, visible only to users with approval permission, that lists work packages awaiting a decision."},{"term":"Quality Workflow Issue","definition":"A tracked issue automatically created whenever a submitted quality form is rejected. It carries an Open/Closed status, closing only once the form has been corrected, re-submitted, and approved."}],"procedures":[{"title":"Approve or reject a submitted quality log","steps":["Go to <strong>Field Works → Quality → Approve Quality Logs</strong>.","Open the <strong>To Be Approved</strong> tab (only visible if you have approval permission) to see pending work packages.","Click a location or tag to open the submitted log and approve or reject it.","Click <strong>All</strong> to see every work package's status across CWAs/Systems at once, using the color-coded legend in the top right to interpret status at a glance."]},{"title":"Review the history of all submitted quality logs","steps":["Go to <strong>Field Works → Quality → Submitted Quality Logs</strong>.","Filter the list by <strong>Level 1</strong> or <strong>Level 2</strong>, by user, or by a date range to narrow down what you're looking for.","Click <strong>Download Excel</strong> to export the filtered results for reporting or offline review."]},{"title":"Track rejected quality forms as workflow issues","steps":["Go to <strong>Field Works → Quality → Quality Workflow Issues</strong>.","Any quality form a reviewer rejects automatically appears here as an issue with <strong>Open</strong> status.","Assign the issue, set a due date, and use <strong>Chat</strong> to collaborate on resolving it.","The issue automatically closes once the underlying form is corrected, re-submitted, and approved.","Use <strong>Download Excel</strong> to export the issue log."]}]},{"heading":"Punch Lists & Restraints","intro":"<p>Not every quality problem is a simple pass/fail on a form — some issues need to be tracked as discrete, closable work items with their own lifecycle, assignment, and verification step. That's what punch lists and restraints are for. A punch list item is typically raised directly out of a failed inspection response and needs to be physically fixed and then re-verified by quality control before it's considered closed. A restraint, by contrast, is a known constraint or blocker on a piece of work, and what this screen adds is a place to attach rectification guidance so anyone encountering that restraint knows exactly what to do about it.</p><p>Both features exist to make sure a \"No\" answer or a flagged constraint doesn't just sit in a form somewhere — it becomes a tracked, assignable, exportable item that someone owns until it's resolved.</p>","definitions":[{"term":"Punch List item","definition":"A defect or deficiency raised from a quality inspection, tracked through a three-stage lifecycle: Open, then Rectify (work has been done to fix it), then QC_Verify (quality control has confirmed the fix)."},{"term":"Restraint","definition":"A recorded constraint on a piece of work that can carry rectification guidance — instructions on what needs to happen to clear the restraint — attached via an Edit action on the restraint's record."},{"term":"Restraint Rectification","definition":"The specific screen and workflow for attaching guidance text to a restraint, which then displays to users encountering that restraint as instructions for how to address it."}],"procedures":[{"title":"Manage a punch list item raised from a quality inspection","steps":["Go to <strong>Field Works → Quality → Punch Lists</strong>.","Each item starts in the <strong>Open</strong> state. Once the underlying defect has been fixed, click <strong>Rectify</strong> to move it forward.","Once the fix has been checked, click <strong>QC_Verify</strong> to close it out.","Along the way, assign due dates and users, use <strong>Chat</strong> to collaborate, and filter the list as needed.","Use <strong>Download Excel</strong> to export the punch list."]},{"title":"Add rectification guidance for a restraint","steps":["Go to <strong>Field Works → Quality → Restraint Rectification</strong>.","Find the existing restraint you want to annotate and click its <strong>Edit</strong> button.","Enter the rectification text — this becomes the guidance shown to users who encounter the restraint.","Use <strong>Download Excel</strong> to export restraints along with their rectification text."]}]},{"heading":"Quality & Documents","intro":"<p>Quality inspections rarely stand alone — they're almost always backed by drawings, specs, photos, and approval documents that prove the work meets requirements. The Quality & Documents area (also referred to as the \"loop\" folder structure) gives quality teams a dedicated, organized place to keep that supporting material, scoped and searchable independently of the general project document library. Each folder can be filtered by CWA, System, or Commodity, which keeps large projects navigable instead of turning into one flat, unsearchable file drop.</p><p>Inside a folder, content is split into four purpose-built sections rather than one generic file list: Folder Items ties the folder back to specific work packages, Drawings and Documents hold the actual reference and evidentiary files (with documents optionally routed through their own approval workflow), and Photos captures visual evidence. This structure means a single folder can serve as the complete quality record for a scope of work — the drawings it was built to, the documents that approve it, and the photographic proof it was executed correctly.</p>","definitions":[{"term":"Quality & Documents folder (\"loop\" folder)","definition":"A named, filterable container under Project Setup → Quality → Quality & Documents used to organize drawings, documents, and photos relevant to a scope of quality work, with support for edit, share, delete, and print actions from a kebab menu."},{"term":"Folder Items","definition":"The section of a Quality & Documents folder where work packages are mapped into the folder via Map Work Packages, linking the folder's content back to specific scopes of work."},{"term":"Drawings (within a folder)","definition":"A section for creating sub-folders and adding or mapping drawing files, including linking specific drawings to tags."},{"term":"Documents (within a folder)","definition":"A section for creating, uploading, and linking documents, with the option to attach an approval workflow via Setup Workflow."},{"term":"Photos (within a folder)","definition":"A section for adding, editing, and deleting images associated with the folder."}],"procedures":[{"title":"Create and organize a Quality & Documents folder","steps":["Go to <strong>Project Setup → Quality → Quality & Documents</strong> and click <strong>Create Folder</strong>.","Name the folder and click <strong>Submit</strong>.","Use the search bar to locate existing folders, and <strong>Filters</strong> to narrow the list by CWA, System, or Commodity.","Use the kebab menu on a folder for <strong>Edit</strong>, <strong>Share</strong>, <strong>Delete</strong>, or <strong>Print</strong>.","Inside a folder, use <strong>Folder Items</strong> to map work packages via <strong>Map Work Packages</strong>, <strong>Drawings</strong> to create sub-folders and add or link drawing files to tags, <strong>Documents</strong> to create, upload, or link documents (and set up an approval workflow via <strong>Setup Workflow</strong>), and <strong>Photos</strong> to add, edit, or delete images."]},{"title":"Approve a document uploaded to a Quality & Documents folder","steps":["Open the document inside its Quality & Documents folder. If it requires sign-off, a workflow must first be attached via <strong>Setup Workflow</strong>.","Click <strong>Send for Approval</strong> on the document to push it into the workflow.","Approvers then act on it from the <strong>Approve Documents</strong> section, where any document awaiting their review appears."]}]},{"heading":"Data Upload","intro":"<p>For projects with a large volume of existing quality drawings, documents, or people-to-work-package assignments, filling everything in one record at a time isn't practical. The Data Upload capabilities let a project bring in that data in bulk, either through Arena's Data Analytics and Insights area for broader configurable uploads, or directly from within the Quality module's own Project Setup screens for quality-specific files. This is typically a one-time or occasional activity — done at project kickoff, or when a large batch of new drawings needs to be loaded — rather than a routine daily task.</p>","definitions":[{"term":"People Assignments Excel","definition":"An Excel-based bulk upload, found under Data Analytics and Insights → Configurable Analytics → Excel, used to assign many users to work packages at once instead of doing it one by one."},{"term":"Upload Quality and Documents","definition":"An upload option in the same Configurable Analytics → Excel area that accepts a ZIP file containing quality-related drawings and documents, loading them in bulk."},{"term":"Uploaded Files (Quality)","definition":"The Project Setup → Quality → Uploaded Files screen, where every ZIP uploaded via the Quality module's own Upload Excel option can be reviewed after the fact."}],"procedures":[{"title":"Bulk-upload quality data and documents","steps":["For people-to-work-package assignments or ZIP-based drawing/document uploads, go to <strong>Data Analytics and Insights → Configurable Analytics → Excel</strong>.","Use <strong>People Assignments Excel</strong> to bulk-assign users to work packages, or <strong>Upload Quality and Documents</strong> to upload a ZIP of quality-related drawings and documents.","Alternatively, upload drawings directly from within the module via <strong>Project Setup → Quality → Upload Excel</strong>.","Review everything you've uploaded this way under <strong>Project Setup → Quality → Uploaded Files</strong>."]}]}],
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
    narrative: [{"heading":"Form Templates & Settings","intro":"<p>Safety inspections in Arena are built on the same template-driven approach as the rest of the platform: rather than shipping one fixed safety checklist, the system gives a safety manager or admin full control over what a form asks, how it reacts when something is wrong, and how urgently a flagged issue needs to be addressed. This configuration happens in Global Data and Project Settings, well before anyone in the field ever opens a form, and it's what makes the same core template usable across very different projects and safety programs.</p><p>The design philosophy here mirrors Quality's: inspection items are simple Yes/No/N/A questions, but a \"No\" answer is never just recorded and forgotten — it's wired, through trigger points, to automatically raise an issue that someone has to act on. Because this auto-escalation is so central to how Safety works, most of the setup effort goes into getting the inspection items, their response wording, and their trigger points right, so that a failing answer in the field reliably turns into a tracked action rather than a buried checkbox.</p><p>Priority levels, configured separately at the project level, give that escalation a sense of urgency: rather than every safety issue being treated the same, each one inherits a priority with an associated due-hours window, so supervisors know at a glance which flagged issues need attention in the next hour versus the next few days.</p>","definitions":[{"term":"Safety Work Package","definition":"The prerequisite grouping, created under the Safety dropdown in Global Work Packages, that a safety form template must be attached to before it can be configured in Global Data → Safety Forms."},{"term":"Inspection Item","definition":"A Yes/No/N/A checklist question on a safety form. A \"No\" response auto-prompts the inspector to raise an issue, tying form content directly into Arena's issue-tracking screens."},{"term":"Inspection Item Response text","definition":"Customizable wording for an inspection item's possible answers (for example, relabeling Yes/No as Accept/Reject) configured via the edit icon on each response, so the form's language can match how your safety team actually talks about compliance."},{"term":"Trigger Point","definition":"A rule attached to a form field that allows issue-raising when that field is answered a certain way, connecting form input directly to Arena's Daily Safety Issue and Observation tracking."},{"term":"Safety Issue Priority","definition":"A named severity tier configured under Project Settings → Safety Issues, each with a due-hours value defining how quickly an issue at that priority level must be resolved."}],"procedures":[{"title":"Build a Safety form template","steps":["Before configuring the form, create the relevant <strong>Work Packages</strong> under the <strong>Safety</strong> dropdown in <strong>Global Work Packages</strong> — this is a prerequisite.","Go to <strong>Global Data → Safety Forms</strong>.","Under <strong>Create Inspection Items</strong>, add your checklist questions, each answered Yes/No/N/A; a \"No\" answer will automatically prompt the inspector to raise an issue.","Customize the wording of each response (for example, Accept/Reject instead of Yes/No) using the edit icon on that response.","Build out the rest of the form using <strong>Add Section</strong> and <strong>Add Field</strong>, choosing from field types such as Attachment, Checkbox, Date, Signature, or Table.","Configure <strong>Trigger Points</strong> to control which fields are allowed to raise an issue when answered a certain way.","Use <strong>Preview</strong> to check the form as it will appear to an inspector.","Click <strong>Save Changes</strong> to commit the template."]},{"title":"Set priority levels for safety issues","steps":["Go to <strong>Project Settings → Safety Issues</strong>.","Click <strong>Add Priority</strong>, enter a name and the due hours within which an issue at that priority must be resolved.","Click <strong>Add</strong> to save the new priority level."]}]},{"heading":"Scheduling & Assignment","intro":"<p>Safety work happens on two different rhythms, and Arena models both of them explicitly rather than forcing everything into one calendar. Some inspections are routine and recurring — a daily toolbox talk, a weekly equipment check — and belong on a schedule. Others are one-off and situational, triggered by a specific event or need, and shouldn't clutter a recurring calendar. The Safety Calendar handles the first case; Project Safety Forms handles the second.</p><p>Both paths share one critical rule that's easy to miss when setting up a project: creating a category and attaching forms to it is not enough on its own. Until you explicitly assign users to a form via \"Click to make assignments,\" that form will not show up for anyone in Field Works, scheduled or not. This assignment step is what actually puts a form in front of the people expected to fill it out, so it's worth double-checking after any new category is created, especially when onboarding a new project or a new subcontractor crew.</p>","definitions":[{"term":"Safety Calendar Category","definition":"A named grouping of scheduled safety forms, created under Project Setup → Safety → Setup Safety Calendar, that bundles which forms apply and on what recurring schedule (start date/time, end date, frequency)."},{"term":"Project Safety Form Category","definition":"The equivalent grouping for ad-hoc, non-recurring safety forms, created under Project Setup → Safety → Setup Project Safety Forms."},{"term":"Click to make assignments","definition":"The action, required on every safety form category (scheduled or unscheduled), that assigns specific users to a form. A form with no assignments will not appear in Field Works for anyone."}],"procedures":[{"title":"Schedule a recurring safety form for a project","steps":["Go to <strong>Project Setup → Safety → Setup Safety Calendar</strong>.","Click <strong>Create Safety Calendar Category</strong> and name it.","Select which safety forms belong in this category.","Set the schedule: <strong>Start Date/Time</strong>, <strong>End Date</strong>, and the recurrence frequency.","Click <strong>Click to make assignments</strong> on each form to assign the users responsible for completing it."],"note":"Unassigned forms will not appear to end users in Field Works, even if the schedule is active — assignment is mandatory, not optional."},{"title":"Set up an ad-hoc (non-recurring) safety form","steps":["Go to <strong>Project Setup → Safety → Setup Project Safety Forms</strong>.","Click <strong>Create Safety Form Category</strong>, name it, and pick the forms that belong to it.","Use <strong>Click to make assignments</strong> to assign users to each form — again, required for the form to show up in Field Works."],"note":"Categories can be edited or deleted, but only if they have no dependent logs already recorded against them."}]},{"heading":"Documents","intro":"<p>Safety programs generate their own body of supporting paperwork — method statements, certifications, toolbox-talk records, permits — that needs a home separate from general project documents. The Safety & Documents area gives each project a lightweight, folder-based library purpose-built for this material, with the basic file-management actions (share, print, delete) available at the folder level so a safety officer can distribute or archive an entire folder's worth of documents at once rather than one file at a time.</p>","definitions":[{"term":"Safety & Documents folder","definition":"A named folder under Project Setup → Safety → Safety & Documents used to hold safety-related files, supporting folder-level Share, Print, and Delete actions."}],"procedures":[{"title":"Organize safety-related documents into folders","steps":["Go to <strong>Project Setup → Safety → Safety & Documents</strong>.","Enter a folder name and click <strong>+</strong> to create it.","Click into the folder to add documents or files.","Use the folder-level actions as needed: <strong>Share</strong> to email the folder's contents to selected users, <strong>Print</strong> to bulk-print its documents, or <strong>Delete</strong> to remove it (a warning is shown before deletion completes)."]}]},{"heading":"Approval Workflow","intro":"<p>Safety sign-off is a two-part setup: first you define the workflow itself — how many approval levels it has and who sits at each level — and then you separately decide which combination of safety division and work package that workflow actually governs. Splitting definition from assignment this way means a company can build a small library of standard approval workflows (say, a light one for routine forms and a stricter multi-level one for high-risk work) and reuse them across many divisions and packages without redefining the approval logic each time.</p>","definitions":[{"term":"All must approve","definition":"An approval level type requiring every approver assigned to that level to sign off before the workflow can advance."},{"term":"Anyone can approve","definition":"An approval level type requiring only one of the assigned approvers to sign off for the workflow to advance."},{"term":"Assign Workflow","definition":"The screen (Project Setup → Safety → Assign Workflow) where a previously created workflow is applied to a specific safety work division and package."}],"procedures":[{"title":"Create a safety inspection approval workflow","steps":["Go to <strong>Project Setup → Safety → Create Workflow</strong> and click <strong>Create Workflow</strong>.","Click <strong>Create Level</strong> to add an approval level, choosing either <strong>All must approve</strong> or <strong>Anyone can approve</strong>, and select the approvers for that level.","Repeat to add further levels as needed."]},{"title":"Assign a workflow to a safety division and package","steps":["Go to <strong>Project Setup → Safety → Assign Workflow</strong>.","Select the safety work division and package the workflow should apply to.","Choose the workflow to assign, then click <strong>Submit</strong>.","Use <strong>Clear</strong> to remove an assigned workflow, unless it is already in progress."]}]},{"heading":"Field Submissions","intro":"<p>This is the point of use for everything configured above: a person on site opens the appropriate safety form and fills it out. Arena routes users to one of two entry points depending on the form's type — Safety Forms for ad-hoc submissions, or Safety Calendar for scheduled ones — which keeps the two workflows visually and operationally distinct even though the underlying form-filling experience is the same.</p><p>The most consequential moment in a field submission is a \"No\" answer on an inspection item, because depending on how the form's trigger points were configured, that single response can automatically generate a Daily Safety Issue without any extra action from the inspector. This is what makes Safety proactive rather than just a record-keeping exercise: a hazard identified during a routine form fill-out becomes a tracked issue in the same motion.</p>","definitions":[],"procedures":[{"title":"Fill out a safety form on-site","steps":["Go to <strong>Field Works → Safety → Safety Forms</strong> for ad-hoc forms, or <strong>Safety Calendar</strong> for scheduled ones.","For ad-hoc forms, click <strong>Create Form</strong>. For scheduled forms, open a form marked <strong>Ready</strong>.","Fill in the form.","Click <strong>Save As Draft</strong> to continue later, or <strong>Submit</strong> / <strong>Submit for Approval</strong> to finalize it."],"note":"A \"No\" answer on an inspection item can automatically raise a Daily Safety Issue, depending on the form's configured trigger points."}]},{"heading":"Observations & Issues","intro":"<p>Beyond scheduled and ad-hoc forms, Arena gives safety staff a way to capture problems that don't originate from a checklist at all — things noticed during a walk-around or a random spot inspection. That's what Safety Observations are for. Meanwhile, Daily Safety Issues capture the automated side: anything an inspection form's trigger points flagged on its own. Both feed into the same kind of lightweight tracked-item lifecycle used elsewhere in Arena (Open through to a resolved state), with assignment, due dates, and chat so the people who need to close them out can collaborate directly on the item rather than over email.</p><p>Completed Safety Forms rounds this section out as the single place to see the accumulated output of both the Safety Forms and Safety Calendar screens — effectively the audit trail for \"what got submitted, by whom, and when\" across the whole safety program.</p>","definitions":[{"term":"Safety Observation","definition":"A manually logged concern or hazard noted during a random or informal inspection, not tied to a specific scheduled or ad-hoc form. Moves from Open to Rectified once addressed."},{"term":"Daily Safety Issue (DSI)","definition":"An issue automatically generated when an inspection item on a project safety form or calendar form is answered in a way that triggers an issue. DSIs move from Open to Rectified and support due dates, assignment, chat, filters, and export."},{"term":"Completed Safety Forms","definition":"The consolidated repository of every submitted log from both Safety Forms and Safety Calendar, sorted most-recent-first, filterable by user or date range."}],"procedures":[{"title":"Log a safety observation during a random inspection","steps":["Go to <strong>Field Works → Safety → Safety Observations</strong> and click <strong>Add Observation</strong>.","Enter the observation details and click <strong>Submit</strong>.","The observation starts as <strong>Open</strong>; click <strong>Rectify</strong> once it has been addressed to close it out.","Along the way, set due dates, assign it to a user, use <strong>Chat</strong>, and log <strong>Follow Up Actions</strong> as needed.","Filter the list and use <strong>Download Excel</strong> to export."]},{"title":"Track and resolve a Daily Safety Issue","steps":["Go to <strong>Field Works → Safety → Daily Safety Issues</strong> to view issues that were auto-generated from project safety or calendar forms.","Click <strong>Rectify</strong> on an issue once it has been resolved, moving it from Open to Rectified.","Use due dates, assignment, Chat, and filters to manage the issue, and <strong>Download Excel</strong> to export."]},{"title":"Find the repository of all completed safety forms","steps":["Go to <strong>Field Works → Safety → Completed Safety Forms</strong>.","The list shows logs from both Safety Forms and Safety Calendar, most recent first.","Filter by user or by date range, and use <strong>Download Excel</strong> to export."]}]},{"heading":"Safety Calendar","intro":"<p>While Setup Safety Calendar (under Project Setup) is where categories and schedules are defined, the Safety Calendar under Field Works is the day-to-day operational view that tells a user what's actually due right now. Its color coding is designed to answer a single question at a glance — \"what needs my attention today\" — without requiring anyone to cross-reference a separate schedule.</p>","definitions":[{"term":"Ready (blue)","definition":"A scheduled safety form that has become available because its scheduled date/time has arrived, grouped by category."},{"term":"Grey","definition":"A scheduled safety form that is not yet enabled — its scheduled time hasn't arrived."},{"term":"Yellow","definition":"A scheduled safety form that is in-progress, awaiting approval, or has open issues attached to it."}],"procedures":[{"title":"Check which safety forms are due today","steps":["Go to <strong>Field Works → Safety → Safety Calendar</strong>.","Look for forms shown in <strong>blue</strong> — these are marked <strong>Ready</strong> because their scheduled date/time has arrived, grouped by category.","Forms in <strong>grey</strong> are not yet enabled; forms in <strong>yellow</strong> are in-progress, awaiting approval, or have issues that need attention."]}]}],
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
    narrative: [{"heading":"Work Logs","intro":"<p>Work Logs is the day-to-day record of what happened on site — the raw progress entries that document work performed, distinct from the more structured, phase-code-driven data captured in Productivity Logs. Where Productivity Logs is fundamentally about hours and quantities for costing purposes, Work Logs is about narrating and documenting progress against the project's actual work structure.</p><p>What makes this screen flexible is that it doesn't force a single fixed view of the work. Depending on which Work Log Template has been configured for the project, the available entry views change: Work Package to Tag View and Tag to Work Package View present the same underlying data from opposite directions through the work breakdown hierarchy, System to Tag View organizes by system rather than work package, and Worklogs in Scheduled View ties entries to the project schedule instead. This means the same feature can be tuned to match how a given project or organization prefers to think about its own structure, rather than imposing one rigid layout on everyone.</p>","definitions":[{"term":"Work Log Template","definition":"Project-level configuration that determines which view (Work Package to Tag, Tag to Work Package, System to Tag, or Worklogs in Scheduled View) is used for entering work logs."},{"term":"Work Package to Tag View / Tag to Work Package View","definition":"Two Work Log entry views presenting the same work breakdown hierarchy from opposite directions."},{"term":"System to Tag View","definition":"A Work Log entry view organized by system rather than by work package."},{"term":"Worklogs in Scheduled View","definition":"A Work Log entry view that ties log entries to the project's schedule."}],"procedures":[{"title":"Record a work log entry","steps":["Go to <strong>Field Works → Progress → Work Logs</strong>.","Use whichever view is available based on the project's configured Work Log Template: <strong>Work Package to Tag View</strong>, <strong>Tag to Work Package View</strong>, <strong>System to Tag View</strong>, or <strong>Worklogs in Scheduled View</strong>.","Enter the progress details for the relevant work item."]}]},{"heading":"Submitted Work Logs","intro":"<p>Once entries have been recorded across whichever view a project uses, there needs to be a single place to see everything that's been logged, regardless of what status it's in — draft, submitted, or otherwise. Submitted Work Logs is that repository: every work log recorded on the project shows up here by default, making it the go-to screen for a project manager or auditor who wants the complete picture rather than a filtered slice.</p><p>To make that complete picture usable at scale, the screen supports filtering by time range (defaulting to \"All,\" i.e. no time restriction) and by a specific user, letting you narrow from the full history down to, say, one person's logs over the last month. A Download Excel export is available for taking that filtered view outside Arena for reporting or record-keeping purposes.</p>","definitions":[{"term":"Submitted Work Logs","definition":"A repository screen under Field Works → Progress showing every work log recorded on a project regardless of status, with filters for time range and user."}],"procedures":[{"title":"See every work log regardless of status","steps":["Go to <strong>Field Works → Progress → Submitted Work Logs</strong>.","Optionally filter by a time range (defaults to <strong>All</strong>).","Optionally filter by the <strong>Users</strong> filter to narrow to a specific person.","Use <strong>Download Excel</strong> to export the current view."]}]},{"heading":"Site Posts","intro":"<p>Not everything worth sharing on a project fits neatly into a formal log, RFI, or report — a photo of a milestone being reached, a quick update on site conditions, a short video walkthrough. Site Posts is Arena's answer to that informal communication need: a built-in social feed scoped to a single project, sitting inside Work Logs alongside the more formal progress-tracking screens.</p><p>The mechanics mirror what users already expect from consumer social platforms, which is the point — low friction, familiar interaction. Anyone on the project can Create a Post containing text, images, or video (up to 50MB), and it's visible to every user on that project, with Like and Comment support for the kind of lightweight engagement that keeps a distributed field and office team feeling connected without needing a formal update meeting.</p>","definitions":[{"term":"Site Posts","definition":"A built-in, project-scoped social feed (found at Field Works → Progress → Work Logs → Site Posts) for sharing text, images, or video updates visible to all project users, with Like and Comment support."}],"procedures":[{"title":"Share an update via Site Posts","steps":["Go to <strong>Field Works → Progress → Work Logs → Site Posts</strong>.","Click <strong>Create a Post</strong>.","Add text, images, or a video (up to 50MB).","Publish — the post becomes visible to all project users, who can Like or Comment on it."]}]}],
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
    narrative: [{"heading":"Work Orders","intro":"<p>The Work Order module is where operational work order contracts are created and lived in day to day. A work order is a distinct kind of record from a full project — it represents a discrete scope of operational work (a repair, a service contract, a defined task assignment) that needs its own profile, team, drawings, documents, and tracking, without necessarily carrying the full overhead of a construction project record. This page is where all of those work orders are created and where you land to open one you've already started.</p><p>Every work order is created against a Work Order Type, which is configured separately in Global Data and determines the shape of the form and defaults the work order draws from. This separation matters: the Work Order module (covered in this guide) is where individual contracts are managed operationally, while Global Data's Work Order area (see Global Setup below) is where the underlying types and statuses those contracts use are defined. You don't redefine what a \"Type\" means every time you create a work order — you pick from types an administrator has already set up.</p><p>Once created, a work order is represented as a card, and clicking into that card is how you reach all of its component tabs: Profile, Team, Drawings, Documents, Communication, Inventory, LORs, and Timesheet. Arena also lets you switch between a grid and card view when browsing the list of work orders, which is useful once the list grows beyond a handful of active contracts.</p>","definitions":[{"term":"Work Order","definition":"An operational contract record covering a discrete scope of work, created from a Work Order Type and managed through its own set of tabs (Profile, Team, Drawings, Documents, Communication, Inventory, LORs, Timesheet)."},{"term":"Work Order Type","definition":"A configuration, defined in Global Data, that determines the form and defaults a work order uses. Selected from a dropdown at creation time."}],"procedures":[{"title":"Create a new work order","steps":["Go to <strong>Home &gt; Work Order</strong>.","Click the <strong>Create</strong> button.","Fill in the relevant details.","Select the Work Order Type (configured in Global Data) from the dropdown.","Click <strong>Submit</strong>."],"note":"The new work order appears as a card you can click to open."},{"title":"Open an existing work order","steps":["On the Work Order Creation page, click the card of the work order you want to open."],"note":"Use the view toggle in the top right of the page to switch between grid and card view when browsing the list."}]},{"heading":"Profile & Items","intro":"<p>Work Order - Profile is where a work order's core details are set up and where items — the actual units of scope within the contract — are created. It is the closest thing a work order has to a \"body,\" using the form that was configured in Global Data for that work order's Type, so different types of work orders can capture different information relevant to their specific kind of work.</p><p>A single work order isn't necessarily one indivisible piece of work — it can contain multiple items, each of which can be linked either to a project tree or to one or more issues. Linking to a project tree ties an item to a specific position within a project's structure (selecting the project, then its tree version, then continuing through the remaining tree selections), which is useful when the work order's scope maps directly onto planned project work. Linking to issues instead connects the item to problems that have already been logged and categorized by issue type, which fits work orders raised in response to something that went wrong rather than planned scope.</p>","definitions":[{"term":"Work Order Profile","definition":"The tab where a work order's profile details are configured and items are created, using the form set up in Global Data for that work order's Type."},{"term":"Work Order Item","definition":"A unit of scope within a work order. A work order can contain multiple items, and each item can be linked to a project tree or to one or more issues."}],"procedures":[{"title":"Add an item to a work order","steps":["Open the work order's <strong>Profile</strong> tab.","Click <strong>Create Item</strong>."],"note":"You can create multiple items inside one work order, and each can be connected to a Project tree or to Issues."},{"title":"Link a work order item to a project tree","steps":["In Work Order - Profile, when linking an item to a tree, select the Project.","Select its tree version.","Continue through the remaining tree selections."]},{"title":"Link issues to a work order item","steps":["In Work Order - Profile, when linking with Issues, select the Issue type from the dropdown to see the detailed list of issues.","Select one or multiple issues to link to the item."]}]},{"heading":"Team","intro":"<p>Work Order - Team determines who is staffed to carry out a work order — both individual users and whole crews. Separating these into two tabs reflects how construction labor is actually assigned: some work orders need specific named individuals (a project manager, an inspector), while others need an entire crew pulled from crews already defined in Global Data. Assigning a team here is what makes the work order's staffing explicit and gives those people visibility into and access to that work order's tabs.</p>","definitions":[{"term":"Work Order Team","definition":"The set of users and/or crews assigned to a work order, managed via the Users and Crews tabs on the Team screen."}],"procedures":[{"title":"Add users to a work order's team","steps":["Go to <strong>Work Order &gt; Team</strong>.","Select the <strong>Users</strong> tab at the top.","Multi-select the users you want to add.","Click <strong>Submit</strong>."]},{"title":"Add a crew to a work order","steps":["Go to <strong>Work Order &gt; Team</strong>.","Select the <strong>Crews</strong> tab at the top.","Multi-select from the crews already created in Global Data.","Click <strong>Submit</strong>."]}]},{"heading":"Drawings","intro":"<p>Work Order - Drawings holds the drawing files associated with a work order's scope of work — plans, sketches, or reference drawings that the team executing the work needs to consult. Beyond just storing files, this tab supports marking up drawings directly, which matters on active work orders where field conditions or scope changes need to be communicated visually rather than just described in text.</p>","definitions":[{"term":"Annotate (Drawings)","definition":"An action available from a drawing's menu that lets you mark changes directly on the drawing file, rather than editing the underlying document."}],"procedures":[{"title":"Upload a drawing to a work order","steps":["Go to <strong>Work Order &gt; Drawings</strong>.","Click <strong>Upload Drawing</strong>."],"note":"Once uploaded, the drawing appears on the same page. You can switch between table view and card view."},{"title":"Annotate or delete a work order drawing","steps":["On Work Order - Drawings, open the ellipsis (...) menu on the drawing.","Choose <strong>Edit</strong>, <strong>Annotate</strong>, or <strong>Delete</strong>."],"note":"Choosing Annotate lets you mark changes directly on the drawing file."}]},{"heading":"Documents","intro":"<p>Work Order - Documents is a read-through view into the procurement activity tied to a work order, rather than a separate document repository of its own. Because a work order often involves purchasing materials, equipment, or services, this tab automatically surfaces all Procurement documents generated across every stage of that procurement — organized into folders by stage — so you don't have to leave the work order and go hunting through the Procurement module to see what's been ordered, received, or invoiced against it.</p>","definitions":[{"term":"Work Order Documents","definition":"A tab showing all Procurement documents fetched from every Procurement stage related to the work order, organized into folders by stage."}],"procedures":[{"title":"View documents related to a work order's procurement","steps":["Go to <strong>Work Order &gt; Documents</strong>.","Click a folder to open the documents linked to that Procurement stage."]}]},{"heading":"Communication","intro":"<p>Work Order - Communication functions as a self-contained mail repository scoped to a single work order, giving it the same familiar structure as a standard email inbox — Sent, Starred, Drafts, and Trash — so correspondence about that specific contract stays attached to it rather than scattered across personal inboxes. This makes it easy for anyone reviewing the work order later, or picking it up from a colleague, to see the full communication history in context.</p>","definitions":[{"term":"Work Order Communication","definition":"A mail repository tab within a work order, with Sent, Starred, Drafts, and Trash sections, functioning like a standard inbox scoped to that work order."}],"procedures":[{"title":"Send an email from a work order","steps":["Go to <strong>Work Order &gt; Communication</strong>.","Click <strong>Compose Mail</strong> to send a new email."]}]},{"heading":"Global Setup","intro":"<p>Global Setup, under Global Data → Work Order, is where the underlying configuration that every work order in the company relies on gets defined: the Work Order Types that populate the dropdown at creation time, and the status vocabulary that work orders and their items move through as they progress. This is distinct from — and a prerequisite for — the operational Work Order module covered above: you configure types and statuses once here, and every individual work order created afterward draws from that shared configuration rather than each one inventing its own labels.</p><p>Keeping this configuration centralized matters for reporting and consistency. If every work order used ad hoc status labels, there would be no reliable way to answer a simple question like \"how many work orders are still in progress across the company\" — Work Order Status Configuration exists precisely so that status names and their associated colors are consistent everywhere they appear.</p>","definitions":[{"term":"Work Order Status Configuration","definition":"The Global Data screen where status types (e.g. \"Yet to begin\", \"Completed\") are defined for work orders and their items, each with a configurable color."},{"term":"Work Order Types (Global Data)","definition":"The list of Work Order Type definitions — name and description — created and edited in Global Data, which populate the Work Order Type dropdown used when creating a work order."}],"procedures":[{"title":"Configure statuses for work orders and items","steps":["Go to <strong>Global Data &gt; Work Order &gt; Work Order Status Configuration</strong>.","Select the appropriate section on the left.","Click <strong>Add status</strong> to create a status type (e.g. \"Yet to begin\", \"Completed\").","Use the pencil icon in the Actions column to set each status's color."]},{"title":"Create a new Work Order Type","steps":["Go to <strong>Global Data &gt; Work Order &gt; Work Order Types</strong>.","Click <strong>Create</strong>.","Enter the name and description for the Work Order type.","Press <strong>Submit</strong>."],"note":"Created types are listed on the Work Order page in Global Data and can be edited via the Edit option on each card."},{"title":"Edit an existing Work Order Type","steps":["Go to <strong>Global Data &gt; Work Order &gt; Work Order Types</strong>.","Click the name of the Work Order type to open its details, or click <strong>Edit</strong> on the Work Order card."]}]},{"heading":"Timesheet","intro":"<p>Work Order - Timesheet is where crew and vendor hours are tracked specifically against a given work order, rather than against a broader project. Because operational work orders often involve crews or vendors billing time for a defined scope of work, this tab keeps those entries scoped to the contract they belong to, which matters for cost tracking and for reconciling what was actually spent on labor against that specific work order.</p>","definitions":[{"term":"Work Order Timesheet","definition":"The tab within a work order used to manage crew and vendor timesheet entries specific to that work order."}],"procedures":[]},{"heading":"Inventory","intro":"<p>Work Order - Inventory Management gives a work order its own view into the materials and stock associated with it. Rather than tracking inventory usage separately from the contract it supports, this tab keeps that association visible directly within the work order, which is useful when a work order consumes materials from the broader Inventory Management module and you need to see that consumption in context.</p>","definitions":[{"term":"Work Order Inventory Management","definition":"The tab within a work order for tracking inventory associated with that specific work order."}],"procedures":[]},{"heading":"LORs","intro":"<p>Work Order - LORs surfaces the Load Out Requests — the equipment movement records defined in the Inventory Management module — that are tied to a particular work order. This gives anyone managing the work order visibility into what equipment has been requested, checked out, or returned in support of that contract's scope, without needing to cross-reference Inventory Management separately.</p>","definitions":[{"term":"Work Order LORs","definition":"The tab within a work order that shows Load Out Requests (equipment records) associated with that work order."}],"procedures":[{"title":"Access Load Out Requests from a work order","steps":["Open the work order.","Go to its <strong>LORs</strong> tab to view Load Out Requests / equipment associated with that work order."]}]}],
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
  },
  {
    id: "proposal-management",
    qaItems: QA_PROPOSALMANAGEMENT,
    narrative: [{"heading":"Proposals","intro":"<p>A <strong>Proposal</strong> is the central record for a piece of business development work — the formal document (and its supporting workflow) that a company assembles in response to, or in pursuit of, an <strong>Opportunity</strong>. Rather than tracking proposals as static files on someone's desktop, Arena models the entire proposal as a living record with its own profile, team, documents, communications, checklists, submittals, and eventual submission package — all in one place, so that anyone opening the proposal later can see exactly what was sent, to whom, by whom, and what happened to it.</p><p>Every proposal is created against an Opportunity (an existing one is selected, or a new one is created inline), which is what ties Proposal Management back into the earlier stages of the sales pipeline. From there, a proposal accumulates its own auto-generated ID (following whatever ID Settings the company has configured), moves through an configurable approval workflow, and — if using the built-in <strong>Follow Up</strong> feature — can automatically nudge the customer with reminder emails on a recurring schedule. Because a proposal is rarely worked by one person alone, the Teams, Comments, Documents, and Communication tabs exist to keep everyone collaborating on the same record instead of scattering the work across email and shared drives.</p>","definitions":[{"term":"Proposal","definition":"The core record tracking a piece of business development work from creation through approval, submission, and outcome."},{"term":"Opportunity","definition":"The upstream record (from Opportunity Management) that a proposal is created against — either an existing opportunity is selected, or a new one is created inline while creating the proposal."},{"term":"Proposal ID","definition":"An identifier auto-generated for every new proposal, following the format configured in Global Data's ID Settings."},{"term":"Business Development Code","definition":"A classification field captured on a proposal, used for business-development tracking/reporting."},{"term":"See History","definition":"A log of created, edited, updated, and approval-workflow status changes for a proposal, viewed from its Actions menu."},{"term":"Follow Up","definition":"A feature for sending reminder emails to a customer about a proposal, either once or on a recurring schedule (Daily, Weekly, Monthly, or None)."},{"term":"Teams tab","definition":"Where individual users (from the global roster) or entire crews (from Global Data) are added to work on a proposal."},{"term":"Documents tab (proposal)","definition":"An auto-organizing document space that files uploads from Comments, Communication, Checklists, Submittals, Submission Package, and Bids into folders, alongside manually created folders."},{"term":"Communication tab (proposal)","definition":"An email client scoped to the proposal, supporting Compose Mail (To/CC/BCC/Subject/Message/attachments) and organizing mail into Inbox, Sent, Drafts, Starred, and Trash."},{"term":"Calendar (Proposal Management)","definition":"A calendar for proposal-related events (e.g. deadlines), which can sync with Outlook once connected via Global Data → Marketplace."}],"procedures":[{"title":"Create a new proposal","steps":["Go to <strong>Proposal Management → Proposals</strong> and click <strong>Create</strong>.","In the pop-up, enter the Proposal Name, Description, Proposal Type, Proposal Value Estimated, and Business Development Code.","Select the required Opportunity, or create a new one inline if it doesn't already exist.","Click <strong>Submit for Approval</strong> to create the proposal."],"note":"The Proposal ID is auto-generated based on the company's ID Settings."},{"title":"Edit or delete a proposal","steps":["In <strong>Proposal Management → Proposals</strong>, open the row's Actions menu.","Select <strong>Edit</strong> to modify the Proposal Name, Description, Proposal Type, Opportunity, Estimated Project Value, or Business Development Code.","Select <strong>Delete</strong> to permanently remove the proposal."]},{"title":"View a proposal's change history","steps":["In <strong>Proposal Management → Proposals</strong>, open the Actions menu for the proposal.","Select <strong>See History</strong> to view its log of created, edited, updated, and approval-workflow status changes."]},{"title":"Bulk create or update proposals via Excel","steps":["In <strong>Proposal Management → Proposals</strong>, click <strong>Export</strong>.","Use <strong>Download Excel</strong> to export current proposal data (the sheet is named by Proposal Type).","Use <strong>Upload Excel</strong> with the provided sample template to create or update proposals in bulk."]},{"title":"Search or filter the proposals list","steps":["Use <strong>Search</strong> to find proposals by Proposal Name or Proposal ID.","Click <strong>Filters</strong> to open criteria for narrowing the list.","Use <strong>Manage Columns</strong> to choose and arrange visible columns."]},{"title":"Send follow-up reminder emails to a customer","steps":["Open the proposal and use the <strong>Follow Up</strong> feature.","Set a <strong>Recurrence Type</strong> — Daily, Weekly, Monthly, or None — to schedule repeated reminders, or send a one-time email."]},{"title":"Add a customer directly from a proposal","steps":["In the proposal's Profile, find the <strong>Project Location</strong> section.","Click <strong>Create a Customer</strong> to add a new customer inline, or <strong>Create a Customer POC</strong> to add a point of contact."],"note":"This also creates the corresponding record in the global Customer database."},{"title":"Add users or crews to a proposal team","steps":["In the proposal's <strong>Teams</strong> tab, click <strong>Add User</strong> to select individuals from the global roster, or <strong>Add Crew</strong> to add a crew from Global Data.","Use the kebab menu's <strong>Delete</strong> to remove a member."]},{"title":"Comment on a proposal and pin it to a report","steps":["In the proposal Profile, click <strong>Comments</strong> to add comments and attachments.","Use the comment menu to <strong>Edit</strong> or <strong>Delete</strong> your own comment.","Use <strong>Add to Report</strong> to pin a comment for inclusion in the weekly report."]},{"title":"Send an email to a client from a proposal","steps":["In the proposal's <strong>Communication</strong> tab, click <strong>Compose Mail</strong>.","Fill in To, CC, BCC, Subject, Message, and any attachments, then send."],"note":"Sent submission-package emails are also stored here, organized into Inbox, Sent, Drafts, Starred, and Trash."},{"title":"Create a calendar event for a proposal deadline","steps":["Open the <strong>Proposal Management Calendar</strong> and click <strong>Create Event</strong>.","Enter the Title, Date, Time, Category, and Description."],"note":"Events created here are automatically linked to the Proposal module and can sync with Outlook via Global Data → Marketplace → Microsoft Outlook."}]},{"heading":"Bids","intro":"<p>A <strong>Bid</strong> lives one level beneath a Proposal — it represents a specific costed offer or estimate submitted as part of that proposal. A single proposal can carry multiple bids (for example, alternate pricing options, or bids of different types), which is why Bids has its own tab, its own list views, and its own bulk import/export rather than being folded into the proposal's main profile. Before bids can be used at all, the Bid tab has to be switched on for the project via permissions in Bid Management — a one-time setup step that keeps the feature hidden for teams that don't use it.</p>","definitions":[{"term":"Bid","definition":"A specific costed offer created within a proposal's Bid tab, with its own name, description, and Bid Type."},{"term":"Bid Management permissions","definition":"The permission gate that must be enabled before the Bid tab becomes usable on a proposal."},{"term":"Table View / Grid View / Kanban View","definition":"The three layout options for browsing the Bids list; the chosen layout can be saved as the default via Save Layout."}],"procedures":[{"title":"Create a bid within a proposal","steps":["Open the proposal's <strong>Bid</strong> tab and click <strong>Create Bid</strong>.","Fill in the Bid Name, Description, Proposal, and Bid Type in the pop-up window, then submit."],"note":"The Bid tab must first be enabled via permissions in Bid Management."},{"title":"Export or import bids in bulk","steps":["In the Bids list, click <strong>Exports</strong>.","Use <strong>Download Excel</strong> to export existing bid data.","Use <strong>Upload Excel</strong> to bulk-create bids from a spreadsheet."]},{"title":"Switch the Bids list layout","steps":["Choose <strong>Table View</strong>, <strong>Grid View</strong>, or <strong>Kanban View</strong> for the Bids list.","Click <strong>Save Layout</strong> to keep the chosen view as the default."]}]},{"heading":"Submission Packages","intro":"<p>A <strong>Submission Package</strong> is the final, client-facing bundle that gets sent once a proposal is ready to go out the door. Rather than manually gathering documents, checklists, submittals, and attachments scattered across the various proposal tabs, the submission package flow pulls everything into one page and lets you choose exactly how it reaches the client — by email, physically mailed, or through a client portal. Because a submission package is often the single most important deliverable in the whole proposal process, it gets its own approval workflow, its own rejection-handling path, and its own status/history tracking, separate from the proposal's own approval chain.</p><p>When something goes wrong with a submission package — most commonly, it's rejected during its own approval workflow — Arena doesn't just mark it failed and stop. It creates a tracked entry in Workflow Issues, which can be assigned to a specific person with a due date, ensuring the block gets resolved rather than the package silently stalling.</p>","definitions":[{"term":"Submission Package","definition":"The consolidated, client-facing deliverable assembled from a proposal's Profile, Documents, Checklists, Submittals, and Attachments, sent via Email to Client, Physical mail, or Client Portal."},{"term":"Setup Approval Workflow (Submission Packages)","definition":"The Settings screen where approval levels for submission packages are configured, each assigned a workflow type (all must approve / any one can approve) and a level description."},{"term":"Workflow Issues (Submission Packages)","definition":"A tracked entry created automatically when a submission package is rejected in its approval workflow; the package cannot move forward until the linked issue is resolved."},{"term":"Submission Package Logs","definition":"The tab listing sent submission packages, where each row's menu offers Download, History, Status, and Delete."}],"procedures":[{"title":"Create a proposal submission package","steps":["On the proposal, click <strong>Create Submission Package</strong>.","On the page that opens, pull in data from the proposal's previous tabs: Profile, Documents, Checklists, Submittals, and Attachments.","Choose how to send it: <strong>Email to Client</strong>, <strong>Physical</strong> (mail), or <strong>Client Portal</strong>."]},{"title":"Set up an approval workflow for submission packages","steps":["Go to <strong>Proposal Management Settings → Submission Packages → Setup Approval Workflow</strong>.","Click <strong>Create Level</strong> to choose approvers and assign the workflow type (all must approve / any one can approve), plus a level description.","Use Edit or Delete in Actions to manage existing levels."]},{"title":"Resolve a rejected submission package","steps":["Open <strong>Workflow Issues</strong> to find the rejected submission package log.","Use <strong>Assign To</strong> to assign the issue to a user with a due date.","Click <strong>Resolve</strong> once the underlying problem is fixed."],"note":"A rejected submission package cannot move forward until its linked issue is resolved."},{"title":"Check the status and history of a sent submission package","steps":["Go to the <strong>Submission Packages Logs</strong> tab.","Use the row menu: <strong>Download</strong> to retrieve the package, <strong>History</strong> to see creation and approval status history, <strong>Status</strong> to view/set the configured status, and <strong>Delete</strong> to remove the package."]}]},{"heading":"Submittals","intro":"<p>Within Proposal Management, a Submittal is a formal letter attached to a proposal — for example, a budgetary letter — used to communicate specific information to the client as part of the proposal process. Rather than drafting each of these from a blank page, the feature is built around reuse: submittal letters can be authored fresh in Google Docs, or pulled in as a pre-built template from Proposal Settings and auto-filled with data straight from the proposal's own profile, cutting out repetitive manual entry.</p>","definitions":[{"term":"Submittal (proposal)","definition":"A formal letter (e.g. a budgetary letter) attached to a proposal, either drafted fresh or imported from a configured template."},{"term":"Auto Fill Fields","definition":"An option, available when importing a submittal template from Global Data, that automatically populates submittal keys using data from the proposal profile."}],"procedures":[{"title":"Add a submittal letter to a proposal","steps":["In the proposal's <strong>Submittals</strong> tab, click <strong>Create</strong>.","Choose <strong>Create New Letter</strong> to draft a new template in Google Docs, or <strong>Import From Global Data</strong> to reuse a configured template from Proposal Settings.","If importing, optionally enable <strong>Auto Fill Fields</strong> to populate submittal keys from the proposal profile."]}]},{"heading":"Settings","intro":"<p>Proposal Management Settings — reached either from within the module or via Global Data → Company → Proposal Management — is where the company defines the shared reference data and workflows that every proposal draws on: proposal and bid categorization, delivery methods, custom statuses, approval chains, ID formats, permissions, and project-type classification. This is deliberately centralized rather than left to each proposal to configure independently, so that reporting, filtering, and automation across proposals stay consistent — a &quot;Success&quot; status means the same thing on every proposal, and every proposal ID follows the same numbering scheme.</p><p>Two settings screens are worth understanding together: <strong>Status Configuration</strong> defines the custom status vocabulary (with color coding) used on both the Proposal and Submission Package tabs, while marking exactly two standard statuses as &quot;Success&quot; or &quot;Failure&quot; lets Arena calculate win/loss analytics elsewhere in the module. <strong>ID Settings</strong>, similarly, controls whether Proposal and Submission Package IDs are auto-generated in Arena's system default format or built from a custom combination of separator, serial number, date, month, and year — configured independently for each of the two record types.</p>","definitions":[{"term":"Proposal Type","definition":"A configurable category (e.g. by industry or work type) with its own custom form sections and fields, defined at Global Data → Company → Proposal Management → Proposal Types."},{"term":"Bid Type","definition":"A configurable category for bids, defined with a Name, Description, and Estimate Type."},{"term":"Delivery Method","definition":"A configurable list of ways a proposal can be submitted or sent to a recipient, managed under Proposal Management Settings → Delivery Method."},{"term":"Status Configuration","definition":"The screen for adding custom statuses (name + color) for either the Proposal or Submission Package tab; exactly two standard statuses can be marked \"Success\" or \"Failure\" via Edit, driving win/loss analytics."},{"term":"Approval Workflow (proposal, global)","definition":"The company-wide chain of approval levels (all must approve / any one can approve) that every proposal is routed through, viewable as a tree diagram via Open Workflow Graph View."},{"term":"ID Settings","definition":"Configuration for automatic ID generation on Proposals and Submission Packages, either System Default or a Custom format built from separator, serial number, date, month, and year — set independently per record type."},{"term":"Users and Permissions (Proposal Management)","definition":"The screen for creating user groups scoped to Proposal Management, assigning permissions to each group, and adding members."},{"term":"Project Type (Proposal Management)","definition":"A classification for proposals along three axes: Field/Shop, Material, and New/Repair."},{"term":"Checklist template (settings)","definition":"A reusable checklist form defined in Proposal Management Settings → Checklists, built with configurable fields and previewable before saving."},{"term":"Submittal template (settings)","definition":"A reusable submittal document defined in Proposal Management Settings → Submittals, either name-only or built from an uploaded Word document with merge keys."}],"procedures":[{"title":"Create a reusable submittal template","steps":["Go to <strong>Proposal Management Settings → Submittals</strong> and click <strong>Create Template</strong>.","Choose <strong>Create Submittal Template</strong> (name only) or <strong>Upload Submittal Template</strong> (upload a Word document).","Configure merge keys using double curly braces, e.g. <code>{{ }}</code> format.","Use <strong>Sync</strong> from the kebab menu to update keys after making edits."]},{"title":"Create a new checklist template for proposals","steps":["Go to <strong>Proposal Management Settings → Checklists</strong> and click <strong>Create Checklist</strong>.","Name it, then click into the checklist to configure its form fields.","Use <strong>Preview Form</strong> to review, then click <strong>Save Changes</strong>."]},{"title":"Set up a new proposal type","steps":["Go to <strong>Global Data → Company → Proposal Management → Proposal Types</strong>.","Click <strong>Proposal Type</strong> (or <strong>Create</strong>) and enter the Proposal Type Name and Description.","Click into the created type to add and configure its form sections and fields, then click <strong>Save Changes</strong>."]},{"title":"Create a bid type","steps":["Go to <strong>Proposal Management Settings</strong> (or <strong>Global Data → Company → Proposal Management</strong>) → <strong>Bid Types</strong>.","Click <strong>Bid Type</strong> and enter a Name, Description, and Estimate Type, then submit."]},{"title":"Configure delivery methods","steps":["Go to <strong>Proposal Management Settings → Delivery Method</strong>.","Click <strong>Add</strong> to create a new delivery-method row, or <strong>Delete</strong> to remove one."]},{"title":"Configure custom statuses for proposals and submission packages","steps":["Go to <strong>Proposal Management Settings</strong> (or <strong>Global Data</strong>) → <strong>Status Configuration</strong>.","Click <strong>Add Status</strong> to enter a status name and color, choosing whether it applies to the Proposal tab or Submission Package tab.","Use <strong>Edit</strong> to mark up to two standard statuses as \"Success\" or \"Failure\"."]},{"title":"Set up the company-wide approval workflow for proposals","steps":["Go to <strong>Global Data → Company → Proposal Management → Approval Workflow</strong>.","Click <strong>Create Level</strong> to select approvers and the workflow type (all must approve, or any one can approve).","Create multiple levels as needed, and use <strong>Open Workflow Graph View</strong> to see the workflow as a tree diagram."]},{"title":"Configure automatic ID generation for proposals","steps":["Go to <strong>Global Data → Company → Proposal Management → ID Settings</strong>.","Choose <strong>System Default</strong> for automatic IDs, or <strong>Custom</strong> to configure separator, serial number, date, month, and year fields.","Click <strong>Save Changes</strong>."],"note":"Separate ID settings exist for Proposal and Submission Package records."},{"title":"Manage user groups and permissions for Proposal Management","steps":["Go to <strong>Proposal Management Settings → Users and Permissions</strong>.","Click <strong>Add User Group</strong> to name the group and select its permissions.","Click <strong>Add Users</strong> to assign members to the group.","Use the kebab menu to Edit or Delete a group."]},{"title":"Categorize project types in Proposal Management settings","steps":["Open the Project Types settings screen and click <strong>Add</strong> to add a row.","Edit fields directly, using the dropdowns for Field/Shop and New/Repair, and entering the Material classification.","Use <strong>Upload Excel</strong> to bulk create or update project types."]}]},{"heading":"Checklists","intro":"<p>Checklists give a proposal a structured way to confirm that required steps or quality criteria have been met before moving forward — the same kind of gating mechanism used elsewhere in Arena for quality inspections, applied here to the business-development process. Rather than being freeform, every checklist a proposal can use is built from a template configured centrally in Settings, ensuring the same checklist means the same thing across every proposal in the company. Once filled in, a checklist doesn't just sit inside its own tab — it's automatically filed into the proposal's Documents tab as a folder, keeping everything discoverable from one place.</p>","definitions":[{"term":"Checklist (proposal)","definition":"A form, built from a template configured in Proposal Settings → Checklists, filled out and submitted against a specific proposal."}],"procedures":[{"title":"Add a checklist to a proposal","steps":["In the proposal's <strong>Checklists</strong> tab, click <strong>Create Form</strong>.","Choose from the forms configured in Proposal Settings → Checklists.","Fill in the fields and click <strong>Submit</strong>."],"note":"Created forms are stored automatically in the Documents tab as a folder."}]},{"heading":"Dashboard","intro":"<p>My Dashboard is the at-a-glance home screen for Proposal Management, built to answer the question &quot;where do things stand right now&quot; without navigating into individual proposals. It surfaces status counts, a success-rate visualization, upcoming calendar events, outstanding to-dos, and approaching deadlines in one view. By default, everything shown is scoped to the logged-in user's own work — only system admins see data across the whole module — which keeps the dashboard relevant to what a given person is actually responsible for rather than overwhelming them with company-wide noise.</p>","definitions":[{"term":"My Dashboard","definition":"The Proposal Management home screen showing Total Proposals by status, Estimate Success Rate, Calendar Events, Issues/Forms/Approvals/Proposals summaries, a To Do List, and Proposal Deadlines."},{"term":"Estimate Success Rate (dashboard)","definition":"A graph on the dashboard summarizing how successful proposals have been."}],"procedures":[{"title":"View the Proposal Management dashboard","steps":["Go to <strong>Proposal Management → My Dashboard</strong>.","Review Total Proposals by status (Created, In Progress, Approved/Rejected), the Estimate Success Rate graph, Calendar Events, summaries of Issues/Forms/Approvals/Proposals, the To Do List, and Proposal Deadlines based on due dates."],"note":"Data shown is scoped to the logged-in user unless they are a system admin, in which case it covers the whole module."}]},{"heading":"Analytics & Reports","intro":"<p>Beyond the dashboard's quick summary, Analytics & Reports gives a deeper, filterable view of proposal performance — how often proposals win versus lose, and how proposal volume and value break down by type. These reports exist to support business-development reporting to leadership: rather than exporting raw proposal data and building charts manually, the two built-in reports here answer the most common questions directly, with export options for sharing outside Arena.</p>","definitions":[{"term":"Proposal Success Rate report","definition":"Two pie charts — \"Success Rate (Qty of Proposals)\" by status count, and \"Success Rate (Currency Value)\" by submitted amount — filterable by Proposal Type, with legend items toggling status visibility."},{"term":"Types of Proposals report","definition":"Two bar graphs showing quantity of proposals and amount submitted, broken down by bid type within each proposal type, adjustable by date range and downloadable in Excel, PDF, PPT, or JPEG."}],"procedures":[{"title":"View the success rate of proposals","steps":["Open the <strong>Proposal Success Rate</strong> report.","Use the Proposal Type dropdown to filter.","Click legend items on either pie chart to toggle specific statuses on or off."]},{"title":"View proposal quantity and value by bid type","steps":["Open the <strong>Types of Proposals</strong> report.","Adjust the date range as needed.","Download the report in Excel, PDF, PPT, or JPEG."]}]},{"heading":"To Do","intro":"<p>To Do gives proposal teams a lightweight task-tracking layer scoped specifically to Proposal Management work, so action items related to a proposal don't have to be tracked in a separate tool. Tasks can be assigned to a specific person and carry a date and time, and completing one is as simple as a single click — keeping the mechanics minimal so the feature gets used rather than avoided.</p>","definitions":[{"term":"To Do List","definition":"A task list within Proposal Management, with items carrying a Title, Description, Date, Time, and an assignable owner."}],"procedures":[{"title":"Create a to-do task for a proposal","steps":["Go to <strong>Proposal Management → To Do</strong> and click <strong>Create To Do List</strong>.","Fill in Title, Description, Date, and Time, then submit.","Use <strong>Assign To</strong> to assign the task to a user.","Click the double-tick icon to mark a task complete."]}]},{"heading":"Issues","intro":"<p>The Issues tab exists specifically for the moment a proposal's approval gets rejected. Rather than the rejection simply reverting the proposal to an editable state with no further record, Arena logs it as a distinct, trackable issue — preserving why it was rejected and by whom, and blocking the proposal from proceeding until the issue is explicitly resolved. This mirrors the same rejection-to-issue pattern used for forms, quality, and safety elsewhere in Arena, applied here to the proposal approval chain itself.</p>","definitions":[{"term":"Proposal Issue","definition":"A record created automatically when a proposal is rejected by an approver; the proposal cannot proceed until the issue is resolved."}],"procedures":[{"title":"Track and resolve a proposal approval rejection","steps":["Open the proposal's <strong>Issues</strong> tab to see any rejection-generated issues.","Use <strong>Search</strong> (by Issue ID) or <strong>Filters</strong> (Log ID, Raised On, Raised By) to find a specific issue.","Use <strong>Assign To</strong> to route the issue to a user for resolution."]}]}],
    name: "Proposal Management",
    alias: "Bids & Submissions",
    icon: "description",
    tagline: "Track proposals from creation through approval, bids, and submission packages.",
    color: "#c46a2e",
    overview: `<p><strong>Proposal Management</strong> covers the full lifecycle of a bid/proposal opportunity: creating <strong>proposals</strong>, tracking <strong>submittals</strong> and <strong>submission packages</strong>, running <strong>approval workflows</strong>, managing <strong>bids</strong> linked to a proposal, and monitoring proposal performance through dashboards and analytics.</p>
    <p>It connects to <strong>Opportunity Management</strong> (source of opportunities), <strong>Global Data</strong> settings (ID formats, statuses, proposal/bid/project types), and produces a <strong>Project</strong> once a proposal is won.</p>`,
    navigation: [
      `From <strong>Home</strong>, click the <strong>Proposal Management</strong> tile.`,
      `Open a proposal to reach its Bid, Submission Package, Submittals, Checklists, Teams, Documents, Communication, and Calendar tabs.`
    ],
    sections: [{ id: "proposal-management-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "tender-management",
    qaItems: QA_TENDERMANAGEMENT,
    narrative: [{"heading":"Bids","intro":"<p>A bid is the object you create in Arena to price and structure a proposed piece of work under a proposal, and it's the core unit of tendering activity in the platform. Bids live inside the Bid tab of an existing Proposal — you don't tender in the abstract; every bid is anchored to a specific proposal from the outset, which keeps pricing and scope conversations tied to the opportunity they're actually for. Before your team can create bids at all, the Bid tab needs to be switched on for your account through permissions in Bid Management, so this is usually a one-time setup step handled by an admin rather than something each user configures individually.</p><p>Once bidding is enabled, the Bids screen functions like most list-based screens in Arena: you can search within a proposal's bids, bulk-create or export them via Excel, and choose between Table, Grid, or Kanban layouts depending on how your team likes to work — a Kanban view, for instance, is useful when you want to see bids moving through stages at a glance, while Table view is better for scanning many bids' details side by side. Whichever layout you pick can be saved as your default so you don't have to reselect it every time you open the screen.</p>","definitions":[{"term":"Bid","definition":"A priced, structured response to a piece of work, created inside a Proposal's Bid tab. Each bid carries a Bid Name, Description, its parent Proposal, and a Bid Type that governs how it is structured and evaluated."},{"term":"Bid tab","definition":"The tab within a Proposal where bids for that proposal are created, searched, and managed. It must be explicitly enabled via permissions in Bid Management before it appears."}],"procedures":[{"title":"Create a bid for a proposal","steps":["Confirm the <strong>Bid tab</strong> is enabled for your account via permissions in <strong>Bid Management</strong> — without this, the tab will not be available.","Open the relevant proposal and go to its <strong>Bid</strong> tab.","Click <strong>Create Bid</strong>.","Fill in <strong>Bid Name</strong>, <strong>Description</strong>, the parent <strong>Proposal</strong>, and <strong>Bid Type</strong>."]},{"title":"Find bids linked to a specific proposal","steps":["Open the proposal and go to its <strong>Bid</strong> tab.","Use the <strong>Search</strong> option to look up bids linked to that particular proposal."]},{"title":"Bulk create or export bids via Excel","steps":["Open the proposal's <strong>Bid</strong> tab.","Click <strong>Exports</strong>, then <strong>Upload excel</strong> to bulk-create bids from a spreadsheet.","Alternatively, click <strong>Download Excel</strong> to export existing bid data."]},{"title":"Choose a layout for viewing bids","steps":["From the Bids list, choose <strong>Table View</strong>, <strong>Grid View</strong>, or <strong>Kanban View</strong> depending on how you want to review bids.","Click <strong>Save layout</strong> to keep your chosen view as the default the next time you open the screen."]}]},{"heading":"Bid Types","intro":"<p>Before any bid can be created, someone needs to define what kinds of bids your organization actually runs — and that's what Bid Types are for. A Bid Type isn't just a label; it carries an Estimate Type that determines how a bid built under it will be structured and evaluated, which means this small piece of configuration has an outsized effect on how consistently bids can be compared to one another later. Setting up a clear, well-thought-out set of bid types up front is what makes bid comparison meaningful down the line, since bids of the same type are far easier to line up against each other than bids that were each structured ad hoc.</p><p>Bid Types are company-wide configuration, reachable either from Proposal Management's own settings or from the broader Global Data area, which reflects the fact that this is a categorization decision made once for the organization rather than something reconfigured per proposal.</p>","definitions":[{"term":"Bid Type","definition":"A company-wide category defining how a class of bids is structured, carrying a Name, Description, and an Estimate Type that governs how bids of that type are built and evaluated."},{"term":"Estimate Type","definition":"The specific structuring/evaluation logic attached to a Bid Type, determining how a bid created under it is priced and assessed."}],"procedures":[{"title":"Define a new bid type","steps":["Go to <strong>Proposal Management Settings → Bid Types</strong> (equivalently, <strong>Global Data → Company → Proposal Management → Bid Types</strong>).","Click <strong>Bid Type</strong> to open the creation form.","Enter a <strong>Name</strong> and <strong>Description</strong>, and choose the <strong>Estimate Type</strong> that defines how bids of this type will be structured and evaluated."]}]},{"heading":"RFQ","intro":"<p>Once you know what you're bidding on, the next step in a tender process is usually going out to the market — inviting vendors to quote on the work. In Arena this happens through the RFQ (Request for Quotation) screen inside Procurement. An RFQ is built directly from existing requisitions, which keeps vendor solicitation tied back to actual approved demand rather than starting from a blank slate: you link the RFQ to the relevant REQs, adjust quantities and specifications as needed for what you're putting out to bid, and then choose which vendors from your pre-configured list should receive it.</p><p>Two supporting pieces make this process more consistent and easier to monitor. Vendor Instructions let you define standard guidelines, terms, and conditions once and have them sent with every RFQ, so vendors always receive the same baseline expectations regardless of who on your team created the RFQ. And because an RFQ moves through several stages between creation and final purchase order approval, Arena tracks its progress visually through a card view — so instead of having to open each RFQ to check on it, you can scan the board and immediately see what's been sent, what's pending, and what's already resulted in an approved PO.</p>","definitions":[{"term":"RFQ (Request for Quotation)","definition":"A request sent to a shortlist of vendors, built from one or more existing requisitions (REQs), asking them to quote cost and lead time on specified quantities and specifications."},{"term":"Requisition (REQ)","definition":"The approved demand record that an RFQ is linked to and built from, ensuring vendor solicitation traces back to legitimate project need."},{"term":"Vendor Instructions","definition":"A configurable set of default guidelines, terms, and conditions attached to RFQs sent to vendors, ensuring consistent communication regardless of who creates the RFQ."},{"term":"Vendor rating","definition":"A score shown next to each vendor's name during vendor selection on an RFQ, intended to help you choose which vendors to invite based on past performance."},{"term":"RFQ status card view","definition":"A visual, stage-based tracking view in Procurement → RFQ showing each RFQ's progress through stages such as Created, Email Sent to Vendors, and PO Approved."}],"procedures":[{"title":"Invite vendors to quote (create an RFQ)","steps":["Go to <strong>Procurement → RFQ</strong> and click <strong>Create</strong>.","Link the new RFQ to the relevant <strong>requisitions (REQ)</strong>.","Update quantities and specifications as needed for the scope being quoted.","Select vendors from the pre-configured vendor list — vendor ratings shown next to each name can help guide your selection."]},{"title":"Set standard instructions for vendors on an RFQ","steps":["In <strong>Procurement → RFQ</strong>, click <strong>Vendor Instructions</strong>.","Configure the default guidelines, terms, and conditions that should be sent to vendors for consistent communication across all RFQs."]},{"title":"Track the status of an RFQ","steps":["Go to <strong>Procurement → RFQ</strong> and review the card view.","Each card shows the RFQ's current stage — such as <strong>Created</strong>, <strong>Email Sent to Vendors</strong>, or <strong>PO Approved</strong> — along with key information for assessing what action is pending."]}]},{"heading":"Bid Comparison","intro":"<p>After vendors respond to an RFQ, the tendering process shifts from solicitation to evaluation — and this is where Bid Comparison comes in. The first step is simply capturing what came back: for each RFQ, you record every vendor's quote, including their cost and lead time, in one place. This is deliberately kept separate from evaluation itself, so that data entry (getting every response recorded accurately) isn't conflated with judgment (deciding which response is actually best).</p><p>That judgment happens in Vendor Analysis and Selection, the second half of the same workflow, where the assembled vendor responses are laid side by side so you can weigh cost against lead time and any other relevant factors before settling on a winner. Keeping entry and analysis as two distinct tabs within the same Vendor Responses screen means you can come back and finish entering quotes as they trickle in from vendors, then move to analysis only once you're confident the data set is complete.</p>","definitions":[{"term":"Vendor Response","definition":"A vendor's quote against a specific RFQ, recorded manually in Procurement → Vendor Responses, including at minimum cost and lead time."},{"term":"Vendor Analysis and Selection","definition":"A tab within Vendor Responses used to evaluate and compare the recorded vendor responses for an RFQ based on cost, lead time, and other relevant factors, in order to select a winning vendor."}],"procedures":[{"title":"Enter vendor quotes for comparison","steps":["Go to <strong>Procurement → Vendor Responses</strong>.","Select the relevant <strong>RFQ</strong> from the list on the left.","Enter each vendor's response, including <strong>cost</strong> and <strong>lead time</strong>."]},{"title":"Compare vendor bids to select a winner","steps":["After entering vendor responses in <strong>Procurement → Vendor Responses</strong>, open the <strong>Vendor Analysis and Selection</strong> tab.","Evaluate and compare the vendor responses based on cost, lead time, and any other relevant factors to decide on a winning vendor."]}]},{"heading":"Proposals","intro":"<p>Bids and RFQs don't exist in a vacuum — they're time-bound activities with deadlines that need to be visible alongside everything else happening on a proposal. Rather than maintaining a separate calendar just for tendering dates, Arena lets the Proposal Management Calendar link events to multiple related modules, including Opportunity, Proposal, and Bid Management. This means a bid submission deadline can sit on the same calendar as proposal milestones and opportunity-stage dates, giving anyone tracking the proposal one place to see everything that's coming due rather than having to check a separate tendering-specific schedule.</p>","definitions":[{"term":"Proposal Management Calendar","definition":"A shared calendar within Proposal Management where events can be linked to related modules — Opportunity, Proposal, or Bid Management — so bid and tender deadlines appear alongside other proposal-related dates."}],"procedures":[{"title":"Track bid-related deadlines on a calendar","steps":["Create an event within the <strong>Proposal Management Calendar</strong>.","Link the event to the appropriate module — <strong>Opportunity</strong>, <strong>Proposal</strong>, or <strong>Bid Management</strong> — so the deadline is visible in the context of the related record."]}]}],
    name: "Tender Management",
    alias: "Bid Comparison",
    icon: "gavel",
    tagline: "Route tender and bid-comparison questions to the Bid and RFQ features that power them.",
    color: "#4b3f8a",
    overview: `<p>Inncircles Arena does not maintain a distinct <strong>Tender Management</strong> module page in the documentation; tendering-style workflows are split across two existing modules. Creating and comparing bids for a proposal is handled by the <strong>Bid</strong> feature inside <strong>Proposal Management</strong>, while vendor quote solicitation and comparison (<strong>RFQ</strong>, <strong>Vendor Responses</strong>) is handled inside the <strong>Procurement</strong> module.</p>
    <p>The items in this module map "tender" and "bid comparison" questions to those closest equivalents so users asking from the Home tile are routed correctly.</p>`,
    navigation: [
      `From <strong>Home</strong>, click the <strong>Tender Management</strong> tile — this routes to bid creation inside a <strong>Proposal</strong> and quote comparison inside <strong>Procurement</strong>.`,
      `For bid creation, open a proposal's <strong>Bid</strong> tab. For vendor quote comparison, go to <strong>Procurement → RFQ</strong> and <strong>Vendor Responses</strong>.`
    ],
    sections: [{ id: "tender-management-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "procurement",
    qaItems: QA_PROCUREMENT,
    narrative: [{"heading":"Requisitions","intro":"<p>A requisition, or REQ, is the starting point of nearly every purchase in Arena. It is the formal record of what a project needs — a piece of equipment, a quantity of material, a spare part, or a delivery service — before any vendor has been contacted or any money has been committed. Raising a REQ turns an informal need (\"the crew is out of rebar\") into a trackable request that can be routed to the right person, approved, and eventually converted into a Purchase Order.</p><p>Requisitions matter because they create an audit trail at the very beginning of the purchasing lifecycle. Rather than a supervisor calling a vendor directly, every material or equipment need passes through a REQ first, which means procurement staff, project managers, and approvers all have visibility into what is being requested, by whom, and why, before a dollar is spent. This is also the point at which requests originating from other parts of Arena — most notably rejected Load Out Requests from Inventory Management — feed back into procurement, so that equipment that couldn't be fulfilled from existing stock can be purchased instead.</p><p>Once a REQ exists, it doesn't have to sit with its creator. Requisitions can be assigned to a specific person to own — typically whoever is responsible for sourcing that item — and if a REQ is rejected somewhere downstream, that rejection is not a dead end; it is tracked as a workflow issue so the requester knows exactly why it failed and what to fix.</p>","definitions":[{"term":"Requisition (REQ)","definition":"A formal internal request for equipment, material, an equipment part, or a delivery service, raised before any vendor is contacted. It is the first document in the procurement lifecycle and the source record that RFQs and Purchase Orders are built from."},{"term":"Requisition type","definition":"The category selected when creating a REQ — Equipment, Material, Equipment Part, or Delivery Service — which determines what fields and specifications appear on the form."},{"term":"Workflow Issues (REQ)","definition":"A tab within the REQ module that tracks requisitions that were rejected somewhere in their approval or sourcing process, along with the reason for rejection, so the requester can correct and resubmit."},{"term":"LOR from REQ","definition":"A REQ creation path that lets you generate a new requisition directly from a rejected Load Out Request, so equipment that couldn't be fulfilled from existing inventory stock can instead be purchased through procurement."}],"procedures":[{"title":"Create a requisition","steps":["Go to <strong>Procurement &gt; REQ</strong>.","Click <strong>Create</strong>.","Choose the requisition type: <strong>Equipment</strong>, <strong>Material</strong>, <strong>Equipment Part</strong>, or <strong>Delivery Service</strong>.","Fill in the item details and specifications.","Click <strong>Submit</strong>."]},{"title":"Assign a requisition to an owner","steps":["Open the REQ you want to delegate in <strong>Procurement &gt; REQ</strong>.","Click <strong>Assign To</strong>.","Select the user who should own sourcing this requisition."],"note":"Assigning a REQ does not change who created it — it designates who is responsible for moving it forward, which is useful when a purchasing team splits work by category or vendor relationship."},{"title":"Create a requisition from a rejected Load Out Request","steps":["Go to <strong>Procurement &gt; REQ</strong>.","Click <strong>LOR from REQ</strong>.","Select the rejected Load Out Request you want to convert.","Complete and submit the resulting requisition."],"note":"This is the standard path when an equipment need can't be met from current inventory — instead of the LOR staying stuck, it becomes a purchasing request."},{"title":"Review rejected requisitions","steps":["Go to the REQ module's <strong>Workflow Issues</strong> tab.","Review the list of rejected requisitions and the reasons attached to each.","Correct and resubmit as needed."]}]},{"heading":"Settings","intro":"<p>Procurement Settings is the administrative control center for the entire module. Rather than hard-coding what a requisition, purchase order, invoice, or pickup request looks like, Arena exposes each of these as a configurable form, plus company-wide rules for how approvals, IDs, and issue priorities behave. This is where an administrator shapes procurement to match the company's actual paperwork and sign-off process, instead of forcing every project to use one rigid template.</p><p>Because procurement documents differ meaningfully by type — a Material purchase order looks different from a Delivery Service one — most of the form builders here are split by procurement type (Material, Equipment, Equipment Part, Delivery Service), letting you tailor fields precisely to what each category of purchase actually needs to capture. Settings also governs cross-cutting behavior that applies no matter which document type is in play: how approval chains are built, how document IDs are generated, and how urgently an issue needs to be resolved.</p><p>Getting these settings right up front avoids a lot of friction later. A well-configured REQ form, for instance, captures the specifications a vendor will need at RFQ time; a properly leveled approval workflow makes sure spend actually gets the right eyes before it becomes a commitment. Most of Procurement Settings should be revisited whenever the company's purchasing policy changes, not just at initial setup.</p>","definitions":[{"term":"Form builder","definition":"Arena's tool for constructing custom document forms out of configurable sections and field types (paragraph, single select, multi-select, tables, and more). Used throughout Procurement Settings to define the REQ, PO, Delivery Receipt, Invoice, and Pickup Request forms."},{"term":"Approval Workflow (Procurement)","definition":"A configurable, multi-level chain of approvers applied to Requisition forms, Purchase Orders, Invoices, and Pickup Requests. Each level can require that all assigned approvers sign off (\"All must approve\") or that just one does (\"Any one can approve\")."},{"term":"ID Settings","definition":"The configuration for how procurement document IDs are generated — either a System Default auto-generated format, or a Custom format built from selected fields in a chosen order."},{"term":"Issues Priority","definition":"A set of priority levels (each with a Due Hours value) that can be applied to procurement issues, giving them a service-level expectation for resolution."}],"procedures":[{"title":"Customize the requisition form","steps":["Go to <strong>Procurement Settings &gt; REQ Form</strong>.","Use the form builder to add sections and choose field types (paragraph, single select, multi-select, tables, etc.) for each.","Save your changes."]},{"title":"Configure the Purchase Order form","steps":["Go to <strong>Procurement Settings &gt; PO Configuration</strong>.","Select the tab for the procurement type you want to configure: <strong>Material</strong>, <strong>Equipment</strong>, <strong>Equipment Part</strong>, or <strong>Delivery Service</strong>.","Use the form builder to configure that type's fields separately from the others."]},{"title":"Configure the Delivery Receipt form","steps":["Go to <strong>Procurement Settings &gt; Delivery Request</strong>.","Use the form builder to configure the Delivery Receipt form for <strong>Material</strong>, <strong>Equipment</strong>, <strong>Equipment Part</strong>, and <strong>Delivery Service</strong>."]},{"title":"Configure the Invoice form","steps":["Go to <strong>Procurement Settings &gt; Invoice</strong>.","Use the form builder to configure the invoice form for <strong>Equipment</strong>, <strong>Material</strong>, <strong>Equipment Part</strong>, and <strong>Delivery Service</strong>, adding multiple sections and field types as needed."]},{"title":"Configure the Pickup Request form","steps":["Go to <strong>Procurement Settings &gt; Pickup Request</strong>.","Configure the form fields using the form builder.","Click <strong>Save changes</strong>."]},{"title":"Set up a procurement approval workflow","steps":["Go to <strong>Procurement Settings &gt; Approval Workflow</strong>.","Click <strong>Create Level</strong> to add a level to the workflow.","For each level, choose <strong>All must approve</strong> or <strong>Any one can approve</strong>.","Repeat to add as many levels as your sign-off process requires."],"note":"This single workflow configuration applies across Requisition forms, Purchase Orders, Invoices, and Pickup Requests — you are not configuring approvals separately for each document type."},{"title":"Configure ID formats for procurement documents","steps":["Go to <strong>Procurement &gt; ID Settings</strong>.","Choose <strong>System Default</strong> for auto-generated IDs, or <strong>Custom</strong> to pick the fields and their order.","Click <strong>Save Changes</strong>."]},{"title":"Set priority levels for procurement issues","steps":["Go to <strong>Procurement Settings &gt; Issues Priority</strong>.","Click <strong>Add Priority</strong>.","Name the priority level and set its Due Hours."]}]},{"heading":"RFQ","intro":"<p>An RFQ (Request for Quotation) is how Arena solicits competitive pricing from vendors before committing to a purchase. Where a requisition captures what the project needs internally, an RFQ takes that need external — packaging one or more requisitions together and sending them to a shortlist of vendors so they can respond with cost and lead time. This is the step that turns \"we need this\" into \"here's what it will cost and from whom.\"</p><p>RFQs exist specifically for purchases where getting a competitive quote matters — larger or non-routine buys where comparing vendors protects the project's budget. Not every purchase needs to go through an RFQ (see Direct Purchase Orders under Purchase Orders below for the fast path), but when it does, the RFQ is the vehicle that links requisitions to the vendors who will ultimately fulfill them, and its output feeds directly into Vendor Responses for comparison.</p>","definitions":[{"term":"RFQ (Request for Quotation)","definition":"A procurement document that links one or more requisitions to a set of pre-configured vendors and asks them to submit pricing and lead time for the requested items."},{"term":"Procurement package","definition":"A grouping of requisition line items linked together within an RFQ, used to bundle related needs (e.g. quantities and specifications for a single sourcing effort) before sending the RFQ to vendors."}],"procedures":[{"title":"Create an RFQ from a requisition","steps":["Go to <strong>Procurement &gt; RFQ</strong>.","Click <strong>Create</strong>.","Link the relevant procurement packages to their corresponding requisitions (REQs).","Update quantities and specifications as needed.","Select vendors from the pre-configured vendor list to request quotes from."]}]},{"heading":"Vendor Responses","intro":"<p>Once an RFQ has gone out, Vendor Responses is where the incoming quotes are captured, compared, and turned into a sourcing decision. This screen exists to make vendor comparison structured rather than something done over email or spreadsheets outside the system — every vendor's cost and lead time for a given RFQ lives in one place, side by side, so the person making the sourcing call has everything in front of them.</p><p>This step sits directly between RFQ and Purchase Orders in the procurement flow: it's the decision point. The outcome of Vendor Analysis and Selection determines which vendor's terms get carried forward into the Purchase Order that follows.</p>","definitions":[{"term":"Vendor Responses","definition":"The screen where quotes from vendors invited on an RFQ are recorded, listing each vendor's submitted cost and lead time against that RFQ."},{"term":"Vendor Analysis and Selection","definition":"The comparison step that follows response entry, where recorded vendor quotes are evaluated side by side so a winning vendor can be selected for the Purchase Order."}],"procedures":[{"title":"Record and compare vendor quotes","steps":["Go to <strong>Procurement &gt; Vendor Responses</strong>.","Select the relevant RFQ from the list on the left.","Enter each vendor's cost and lead time as their quotes come in.","Move to <strong>Vendor Analysis and Selection</strong> to compare all recorded responses and choose a vendor."]}]},{"heading":"Purchase Orders","intro":"<p>A Purchase Order (PO) is the binding commitment to buy — the document that formally authorizes a vendor to deliver goods or services at an agreed price. In Arena, a PO can be reached two ways: generated from an RFQ after a vendor has been selected through quote comparison, or created directly from a requisition when a competitive quote process isn't necessary. Both paths exist because not every purchase carries the same stakes; routine or low-value buys don't need the overhead of a full RFQ cycle, while larger or specialized purchases benefit from vendor comparison first.</p><p>Purchase Orders are organized by procurement type — Material, Equipment, Equipment Part, or Delivery Service — because pricing structures, tax treatment, and quantities are handled differently across these categories. Once POs exist, Purchase Order Master gives you the consolidated view across all of them: every PO's current status, its history, and the requisition it traces back to, which is essential for anyone tracking overall project spend commitments rather than one PO at a time.</p>","definitions":[{"term":"Purchase Order (PO)","definition":"The formal document authorizing a vendor to supply goods or services at agreed pricing, generated either from a selected RFQ vendor response or directly from a requisition."},{"term":"Direct Purchase Order","definition":"A Purchase Order created straight from a requisition, skipping the RFQ and vendor-comparison steps entirely — used when competitive quoting isn't required."},{"term":"Purchase Order Master","definition":"The consolidated view of all Purchase Orders across procurement types, showing each one's current status, history, and the requisition it originated from."},{"term":"Preview PO step","definition":"The stage in Direct Purchase Order creation where the tax code is selected before final submission."}],"procedures":[{"title":"Create a Purchase Order from an RFQ","steps":["Go to <strong>Procurement &gt; Purchase Order</strong>.","Select the procurement type tab: <strong>Material</strong>, <strong>Equipment</strong>, <strong>Equipment Part</strong>, or <strong>Delivery Service</strong>.","Click <strong>Create</strong>.","Select the relevant RFQ.","Enter quantities, pricing, and the tax code.","Click <strong>Submit</strong>."]},{"title":"Create a Purchase Order without an RFQ (Direct PO)","steps":["Go to <strong>Procurement &gt; Direct Purchase Order</strong>.","Select the procurement type tab.","Click <strong>Create</strong>.","Select the requisition (REQ) directly — no RFQ step is involved.","Enter pricing and lead time.","In the Preview PO step, select the tax code.","Click <strong>Submit</strong>."],"note":"Use this path when a competitive quote isn't necessary and you already know the vendor and price."},{"title":"View all Purchase Orders and their status","steps":["Go to <strong>Procurement &gt; Purchase Order Master</strong>.","Browse the full list of Purchase Orders, along with current status, history, and the linked REQ for each."]}]},{"heading":"Delivery Receipts","intro":"<p>A Delivery Receipt is the record that goods or services ordered on a Purchase Order have actually arrived. It closes the loop between what was ordered and what was received, capturing the receiving quantity against the original PO so any discrepancy — a short shipment, a damaged item — is visible immediately rather than surfacing later at invoicing time.</p><p>This document matters for accountability on-site: it ties a physical delivery event to a specific vendor and PO, which becomes the basis for downstream steps like invoicing and, for equipment, pickup coordination.</p>","definitions":[{"term":"Delivery Receipt","definition":"A record confirming that goods or services from a specific Purchase Order have been received, capturing the receiving quantity and any additional receiving information."}],"procedures":[{"title":"Create a Delivery Receipt for a Purchase Order","steps":["Go to <strong>Procurement &gt; Delivery Receipts</strong>.","Click <strong>Create</strong>.","Select the vendor and the associated Purchase Order.","Fill in the receiving quantity and any additional information.","Click <strong>Submit</strong>."]}]},{"heading":"Invoices","intro":"<p>Invoices in Procurement is where vendor billing is matched against what was actually ordered and received. Rather than treating an invoice as a standalone document, Arena ties it directly to the vendor's Purchase Orders, so the items being billed can be checked against what was authorized. This is the final financial checkpoint in the procurement lifecycle — it's where cost, tax, and payment terms are formally recorded against a purchase.</p>","definitions":[{"term":"Invoice (Procurement)","definition":"A billing document tied to one of a vendor's Purchase Orders, recording the invoice number, date, payment terms, billed items, subtotal, and tax amount."}],"procedures":[{"title":"Create an invoice for a procured item","steps":["Go to <strong>Procurement &gt; Invoices</strong>.","Click <strong>Create</strong>.","Choose the vendor, then expand to view their associated Purchase Orders and select the relevant one.","Enter the invoice number, date, and payment terms.","Select the items being billed.","Enter the subtotal and tax amount.","Submit the invoice."]}]},{"heading":"Pickup Requests","intro":"<p>A Pickup Request coordinates the logistics of collecting procured items — typically equipment — from a vendor. Where a Delivery Receipt confirms goods arrived to you, a Pickup Request handles the reverse or lateral logistics case: scheduling when and where an item tied to a Purchase Order will be picked up. This keeps the physical movement of procured goods trackable alongside the paperwork that authorized the purchase.</p>","definitions":[{"term":"Pickup Request","definition":"A scheduling document tied to a vendor and Purchase Order that records the pickup date, address, and status for collecting a procured item."}],"procedures":[{"title":"Create a Pickup Request for procured items","steps":["Go to <strong>Procurement &gt; Pickup Request</strong>.","Click <strong>Create</strong>.","Select the Vendor and the Purchase Order.","Fill in the Pickup Date and Address.","Set the Pickup Request status.","Click <strong>Submit</strong>."]}]},{"heading":"Communications","intro":"<p>Procurement Communications is a dedicated mail repository scoped to the module — every email tied to a procured item is tracked here rather than scattered across personal inboxes. This means anyone reviewing a purchase's history, or picking up a procurement thread from a colleague, has the relevant correspondence attached directly to the procurement record rather than needing to search email separately.</p>","definitions":[{"term":"Procurement Communications","definition":"A mail repository within the Procurement module that tracks all emails linked to procured items, keeping vendor correspondence attached to the relevant purchasing activity."}],"procedures":[{"title":"Find emails related to procured items","steps":["Go to <strong>Procurement &gt; Communications</strong>.","Browse the tracked emails linked to procured items."]}]}],
    name: "Procurement",
    alias: "Purchasing & Vendors",
    icon: "shopping_cart",
    tagline: "Manage the purchasing lifecycle from requisition to purchase order, delivery, and invoicing.",
    color: "#5c6b1f",
    overview: `<p><strong>Procurement</strong> manages the purchasing lifecycle from requisition to purchase order and delivery: raising <strong>requisitions (REQs)</strong>, soliciting quotes (<strong>RFQs</strong>) and comparing vendor responses, generating <strong>Purchase Orders</strong> (direct or via RFQ), and tracking <strong>Invoices</strong>, <strong>Delivery Receipts</strong>, and <strong>Pickup Requests</strong>.</p>
    <p>It integrates with <strong>Global Data</strong> for vendors, tax codes, and approval workflows.</p>`,
    navigation: [
      `From <strong>Home</strong>, click the <strong>Procurement</strong> tile.`,
      `Second-level tabs include REQ, RFQ, Vendor Responses, Purchase Order, Direct Purchase Order, Purchase Order Master, Delivery Receipts, Invoices, Pickup Request, and Communications.`
    ],
    sections: [{ id: "procurement-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "time-management",
    qaItems: QA_TIMEMANAGEMENT,
    narrative: [{"heading":"Timesheet Logs","intro":"<p>Timesheet Logs is where day-to-day work hours get captured, submitted, reviewed, and either approved or sent back for correction. It is the operational core of Time Management: every hour a person or crew works against a project, work order, or GL code eventually passes through here, whether it's an individual entering their own time in My Timesheet or a supervisor logging a whole crew's hours at once in My Crew Timesheet.</p><p>The reason Arena separates individual and crew logging is that construction labor is tracked both ways in practice — a salaried project engineer logs their own time, while a foreman is often the one accounting for an entire crew's hours across phase codes and earning codes for the day. Both paths funnel into the same underlying log structure and the same approval mechanics, so payroll and project-cost reporting can treat them uniformly once they're submitted.</p><p>Because timesheets feed payroll and job costing, Arena tracks a log's lifecycle explicitly rather than treating it as a simple yes/no submission. A log can sit as an incomplete draft, move to submitted, work through multiple approval levels, get rejected and bounced back, or finally lock as completed. This status model is what lets approvers, administrators, and the people who submitted the hours all know exactly where a given entry stands at any moment — and it's also what protects payroll from processing hours that haven't cleared review.</p><p>Once logs exist, filtering and exporting become just as important as entering the data in the first place. A payroll administrator rarely wants to look at one person's timesheet at a time; they need to slice logs by project, crew, status, or date range, and then get that data into whatever system actually runs payroll — which is why dedicated export formats exist for common downstream tools.</p>","definitions":[{"term":"My Timesheet","definition":"The screen where an individual logs their own work hours against a Company/Project/Work Order/GL Code combination, using a template and a selected date range."},{"term":"My Crew Timesheet","definition":"The screen a supervisor or foreman uses to log hours for an entire crew at once, entering hours per employee, phase code, and earning code for a selected date range. Requires timesheet settings and an approval workflow to already be configured for that crew."},{"term":"My Timesheet Logs / My Crew Timesheet Logs","definition":"The review screens where submitted individual or crew timesheets are approved or rejected by designated approvers."},{"term":"Draft","definition":"A timesheet log status for an entry saved without all mandatory fields filled in (aside from Employee, which is always required). Drafts are incomplete and not yet submitted for approval."},{"term":"Submitted for Approval","definition":"The status of a timesheet log that has been completed and sent into the approval workflow, but has not yet been acted on by an approver."},{"term":"Workflow in Progress","definition":"The status of a timesheet log that has been approved at one level of a multi-level approval workflow but is still pending approval at another level."},{"term":"Completed","definition":"The status of a timesheet log that has been approved at every level of its workflow. A completed log is locked and can no longer be edited."},{"term":"Rejected","definition":"The status of a timesheet log that an approver declined. Rejection automatically creates a corresponding entry in Timesheet Issues so the submitter can correct and resubmit."}],"procedures":[{"title":"Log your own work hours","steps":["Go to <strong>My Timesheet</strong>.","Select the Company, Project, Work Order, and GL Code, and confirm the Template (auto-populated from your default setting).","Pick a Date Range.","Click <strong>Add</strong> to insert a row.","Fill in the phase code, earning code, and hours.","Click <strong>Submit for Approval</strong>, or click <strong>Save as Draft</strong> if the entry is incomplete."]},{"title":"Log hours for an entire crew","steps":["Go to <strong>My Crew Timesheet</strong>.","Select the Company, Project, Work Order, GL Code, and Crew.","Choose a Template and Date Range.","Click <strong>Add</strong> to add rows for employees.","Fill in hours per phase code and earning code for each employee.","Click <strong>Submit for Approval</strong>."],"note":"Timesheet settings and an approval workflow must already be configured for the crew before crew timesheets can be submitted — see Settings."},{"title":"Approve or reject a submitted timesheet","steps":["Go to <strong>My Timesheet Logs</strong> (or <strong>My Crew Timesheet Logs</strong>).","Select the submitted log you want to review.","Click <strong>Approve</strong> or <strong>Reject</strong>, optionally adding comments."],"note":"The Approve and Reject buttons only appear for users designated as approvers in the Approval Workflow — they are not visible to everyone."},{"title":"Filter timesheet logs","steps":["In <strong>My Timesheet Logs</strong> or <strong>My Crew Timesheet Logs</strong>, click <strong>Filters</strong>.","Narrow results by Log Level Category, Log Level, Crew, Logged By, Mode (Daily/Weekly by Day/Weekly), Status, and Date Range.","Click <strong>Save filters</strong> to keep the current filter set for future use, <strong>Reset</strong> to revert your changes, or <strong>Clear All</strong> to return to defaults."]},{"title":"Export timesheet logs","steps":["From <strong>Timesheet Logs</strong>, open the <strong>Export</strong> menu.","Select date range, log level, crews/users, mode, and earning codes.","Choose a format: VP Excel (.xlsx), VP CSV, QuickBooks (.iif), or SAP (.csv)."],"note":"Only Admin users have access to Export."}]},{"heading":"Timesheet Issues","intro":"<p>Timesheet Issues exists to make timesheet rejection an actionable workflow rather than a dead end. When an approver rejects a submitted timesheet, that rejection doesn't just disappear back to the submitter as a status change — it automatically opens a tracked issue with the approver's comments and any supporting information attached, so the reason for rejection is explicit and preserved.</p><p>This matters because timesheet corrections often need to be delegated or prioritized like any other piece of unresolved work: the issue can be assigned to whoever needs to fix the entry, and a due date keeps the correction from stalling indefinitely. The issue stays open and active until the underlying timesheet is corrected and resubmitted, at which point it moves back into the approval flow described under Timesheet Logs.</p>","definitions":[{"term":"Timesheet Issue","definition":"An automatically created record tracking a rejected timesheet, including the approver's comments and supporting information. It remains active until the timesheet is corrected and resubmitted."}],"procedures":[{"title":"Resolve a rejected timesheet","steps":["Open the entry in <strong>Timesheet Issues</strong> to review the approver's comments and any supporting information.","Use <strong>Assign To</strong> to delegate the correction if needed.","Set a <strong>Due Date</strong> to keep the correction on schedule.","Correct the underlying timesheet and resubmit it for approval."]}]},{"heading":"Settings","intro":"<p>Time Management Settings is where administrators configure the rules that every timesheet in the company operates under: who needs to approve what, whether time is logged daily or weekly, how payroll categories map to hours, what a timesheet form actually looks like, and when a payroll period locks for good. None of the day-to-day logging and approval described above works correctly until these are configured — a crew can't submit a timesheet, for instance, until an approval workflow has been assigned to it.</p><p>These settings are organized as a set of distinct, composable building blocks rather than one monolithic configuration screen. Approval Workflows define who signs off and how. Timesheet Mode decides the cadence (Daily, Weekly, or Weekly by Day) and default template per user or crew. Earning Codes define the payroll categories that hours get logged against. Timesheet Templates control the actual fields on the form. And Payroll Locking enforces a hard cutoff so historical pay periods can't be edited after the fact. Each of these can be configured once and then copied to other users or crews, which keeps setup consistent as the roster of people and crews grows.</p>","definitions":[{"term":"Timesheet Workflow","definition":"The approval-workflow configuration area for Time Management, where multi-level workflows are created and then assigned to specific users or crews."},{"term":"Timesheet Mode","definition":"The configured cadence at which an individual or crew logs time — Daily, Weekly by Day, or Weekly — along with their default timesheet template."},{"term":"Earning Code","definition":"A payroll classification (with a Code, Description, Short Name, and Data Type of Hours or Amount) used to categorize logged time for payroll and/or project-hours reporting. Earning codes can be flagged for Payroll Hours, Project Hours, or both."},{"term":"Split Headers","definition":"An earning-code setting that places that code under Phase Codes within weekly timesheet templates, rather than as its own column."},{"term":"Timesheet Template","definition":"A configurable form definition for timesheets, built from Standard and Configurable fields, that determines what a user fills in when logging time. Earning codes can display within a template as a Column or as a Split Time Header."},{"term":"Payroll Locking","definition":"A setting that prevents further edits to timesheet data once a payroll period closes. It can be configured on a Daily, Weekly, or Monthly cadence, with specific lock days/dates and times."}],"procedures":[{"title":"Create an approval workflow for timesheets","steps":["Go to <strong>Settings &gt; Timesheet Workflow &gt; Create Workflow</strong>.","Click <strong>Create Approval Workflow</strong> and name it.","Click <strong>Create Level</strong> to add approvers by User or by Role.","For each level, choose <strong>All must approve</strong> or <strong>Anyone can approve</strong>."]},{"title":"Assign an approval workflow to a user or crew","steps":["Go to <strong>Settings &gt; Timesheet Workflow &gt; Assign Workflow</strong>.","Select a User or Crew.","Choose the Approval Workflow to apply.","Click <strong>Save Changes</strong>."],"note":"Use <strong>Copy Approval Workflow To</strong> to apply the same workflow to multiple users or crews at once instead of repeating this for each one."},{"title":"Set the timesheet logging mode","steps":["Go to <strong>Timesheet Settings &gt; Timesheet Mode</strong>.","Under <strong>My Timesheet</strong> (individual) or <strong>My Crew Timesheet</strong> (per crew), select <strong>Daily</strong>, <strong>Weekly by Day</strong>, or <strong>Weekly</strong>.","Choose a Default Template.","Click <strong>Save Changes</strong>."],"note":"Use <strong>Copy To</strong> to apply the same mode to other users or crews."},{"title":"Create earning codes for payroll","steps":["Go to <strong>Timesheet Settings &gt; Earning Codes</strong>.","Click <strong>Add</strong> to insert a row.","Enter the Code, Description, and Short Name.","Set the Data Type to Hours or Amount.","Choose whether the code counts toward Payroll Hours and/or Project Hours."],"note":"Enable <strong>Split Headers</strong> to have the code appear under Phase Codes in weekly templates instead of as its own column."},{"title":"Build a custom timesheet template","steps":["Go to <strong>Timesheet Settings &gt; Timesheet Templates</strong>.","Click <strong>Create</strong>.","Open the new template and use <strong>Add Field</strong> to configure Standard and Configurable fields.","Choose whether earning codes display as a Column or a Split Time Header.","Click <strong>Save Changes</strong>."]},{"title":"Lock payroll periods","steps":["Go to <strong>Timesheet Settings &gt; Payroll Locking</strong>.","Choose Daily, Weekly, or Monthly mode.","In Weekly mode, pick the lock day and time. In Monthly mode, choose Start of Month, End of Month, or a Custom date, then set the lock time."],"note":"Once a period locks, timesheet data within it can no longer be edited — make sure corrections are made before the lock takes effect."}]},{"heading":"Reconciliation","intro":"<p>Timesheet Reconciliation exists because logged time and actual verified time don't always match, and construction sites often have independent sources of truth for who was actually on-site and for how long. Reconciliation is the process of checking submitted timesheet entries against those independent records, either by having someone manually review and correct entries, or by importing external verification data — most commonly gate or access-control logs — and letting Arena validate against it automatically.</p><p>Manual reconciliation is a hands-on review: someone opens submitted logs for a date range and works through them phase code by phase code. Gate Log reconciliation, by contrast, is built for scale — it validates Employee IDs against uploaded access data and groups the results into batches so a reconciler isn't checking one entry at a time. Both approaches ultimately protect the integrity of what gets paid out and what gets billed to a project.</p>","definitions":[{"term":"Timesheet Reconciliation","definition":"The process of checking submitted timesheet entries against an independent source of truth, either manually or via uploaded verification data."},{"term":"Gate Logs","definition":"Uploaded employee or crew hour-verification data (e.g. from site access/gate systems) used to reconcile timesheet entries automatically. The system validates Employee IDs and groups the results into batches."}],"procedures":[{"title":"Manually reconcile timesheet data","steps":["Go to <strong>Timesheet Reconciliation &gt; Timesheet</strong>.","Choose Daily & Weekly by Day or Weekly mode.","Click <strong>Create Log</strong> and select a date range to view submitted logs.","Click the <strong>Phase code</strong> button for an employee to reconcile that entry manually."]},{"title":"Reconcile using uploaded gate/access logs","steps":["Go to <strong>Timesheet Reconciliation &gt; Gate Logs</strong>.","Select Daily & Weekly by Day or Weekly mode.","Use <strong>Upload Logs</strong> with the provided template to upload employee/crew hour verification data."],"note":"The system validates Employee IDs on upload and organizes the data into batches for structured reconciliation."}]},{"heading":"Analytics & Reports","intro":"<p>Timesheet Data Summary is the reporting layer over all the hours logged across the company. Rather than reviewing timesheets one log at a time, this view rolls logged hours up by the dimension that matters for the question being asked — by person, by crew, by phase code, or by project — which is what payroll, project managers, and cost accountants actually need when checking labor spend or utilization.</p><p>Because submitted and approved hours can tell different stories (a submitted total might still change before approval), the summary lets you toggle between the two so you're always clear on whether you're looking at a provisional or a finalized number.</p>","definitions":[{"term":"Timesheet Data Summary","definition":"A reporting view of total logged hours, broken down across People, Crew, Phase Codes, and Project tabs, filterable by date range and log level, with an Excel export option."}],"procedures":[{"title":"View logged hours by project, crew, or phase code","steps":["Go to <strong>Timesheet Data Summary</strong>.","Switch between the People, Crew, Phase Codes, and Project tabs.","Select a date range and log level.","Toggle <strong>Submitted</strong> or <strong>Approved</strong> at the top right to filter by log status.","Click <strong>Download Excel</strong> to export the results."]}]},{"heading":"Rosters & Crews","intro":"<p>Rosters and crews are the backbone that timesheets are logged against — you cannot log crew hours without a crew to log them for, and you cannot assign a system or non-system worker to a project without them existing on that project's roster. This section covers how the people and groups that Time Management (and other modules) depend on are actually set up, both at the company-wide (Global Data) level and at the individual project level.</p><p>Arena distinguishes between a crew defined once in Global Data — available for reuse across the company — and a crew or roster entry that's specific to one project. This two-tier model means an organization can standardize its crew definitions centrally while still letting individual projects assemble the specific mix of system users, non-system (temporary) workers, and crews that a given job actually needs. Non-system users deserve particular attention: not every worker on a job site is a licensed Arena user, and the roster needs a way to represent temporary or subcontracted labor without requiring a full account for each person.</p><p>Because roster data can be extensive — potentially hundreds of workers across a large project — Arena supports bulk operations (Excel upload/download) and configurable custom columns, so a roster can capture whatever fields a project actually needs to track (certifications, badge numbers, trade classifications) without being limited to a fixed schema.</p>","definitions":[{"term":"Crew (Global Data)","definition":"A company-wide crew definition created once in Global Data, consisting of a name, assigned Supervisors and Foremen, and a set of Rosters (system and non-system users), available for reuse across projects."},{"term":"Project Crew","definition":"A crew as it exists on a specific project — either built manually or copied in from Global Data — that can also be mapped to other projects."},{"term":"System User (Roster)","definition":"A licensed Arena user added to a project's roster, sourced from Global Data's Users & Permissions (Global Rosters)."},{"term":"Non-System User (Roster)","definition":"A temporary or subcontracted worker added to a project's roster who does not have (and does not need) an Arena login. Non-system users can be created manually or pulled in from existing non-system users in Global Data."},{"term":"Configurable Fields (Roster)","definition":"Custom columns added to roster tables to capture additional data, using field types such as Attachment, Check box, Date, Label, Multi select, Paragraph, Roster, Scribble, Single select, Table, Text box, Time, or Signature."}],"procedures":[{"title":"Create a new crew (Global Data)","steps":["Go to <strong>Global Data &gt; Crews</strong>.","Click <strong>Create</strong>.","Enter the Crew Name.","Choose Supervisors and Foremen from their dropdowns.","Select Rosters (system and non-system users) for the crew.","Click <strong>Submit</strong>."]},{"title":"Add a crew to a specific project","steps":["Go to <strong>Project Setup &gt; Roster &gt; Project Crews</strong>.","Click <strong>Create Crew</strong> to build one manually, or <strong>Copy Crews from Global Data</strong> to import existing crews."],"note":"Use <strong>Map Crews to Projects</strong> to copy a crew across to other projects instead of recreating it each time."},{"title":"Add a system user to a project roster","steps":["Go to <strong>Project Setup &gt; Roster &gt; System User</strong>.","Click <strong>Add</strong>.","Select users from Global Data (<strong>Global Data &gt; Users &amp; Permissions &gt; Global Rosters</strong>) — selected users appear on the right side of the dialog.","Click <strong>Submit</strong>."]},{"title":"Add a temporary (non-system) worker to a project","steps":["Go to <strong>Project Setup &gt; Roster &gt; Non System User</strong>.","Click <strong>Add</strong> to manually create one, or <strong>Get Users from Global Data</strong> to select existing non-system users.","Fill in the required fields and click <strong>Submit</strong>."]},{"title":"Bulk upload or export rosters","steps":["On the Roster (System Users or Non-System Users) page, use <strong>Upload Excel</strong> to bulk-add roster records, or <strong>Download Excel</strong> to export the current roster list."]},{"title":"Add custom fields to roster tables","steps":["Go to <strong>Global Settings &gt; Roster Settings</strong>.","Use <strong>Configurable Fields</strong> to add a custom column, choosing its field type (Attachment, Check box, Date, Label, Multi select, Paragraph, Roster, Scribble, Single select, Table, Text box, Time, Signature).","Click <strong>Save Changes</strong>."]}]}],
    name: "Time Management",
    alias: "Timesheets & Rosters",
    icon: "schedule",
    tagline: "Log, approve, and reconcile employee and crew hours through configurable timesheets.",
    color: "#1f7d8c",
    overview: `<p><strong>Time Management</strong> covers logging, reviewing, and approving employee and crew work hours through configurable <strong>timesheets</strong> (Daily, Weekly, or Weekly by Day), plus <strong>roster/crew administration</strong>, <strong>approval workflows</strong>, <strong>reconciliation</strong> against external data, and reporting/data-summary views for payroll and project cost tracking.</p>`,
    navigation: [
      `From <strong>Home</strong>, click the <strong>Time Management</strong> tile.`,
      `Use <strong>My Timesheet</strong> or <strong>My Crew Timesheet</strong> to log hours; approvers work from <strong>My Timesheet Logs</strong>. Rosters, crews, and workflow settings live under their own tabs and Global Data.`
    ],
    sections: [{ id: "time-management-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
  },
  {
    id: "inventory-management",
    qaItems: QA_INVENTORYMANAGEMENT,
    narrative: [{"heading":"Inventory Master","intro":"<p>Inventory Master is the single source of truth for every material an organization keeps in stock. Before any material can be shipped to a job site, picked up, or returned, it has to exist here first — as a record with a quantity, a unit of measurement, and a physical location. Think of it as the warehouse ledger: it answers, at any moment, what material exists, how much of it there is, and where it physically sits.</p><p>Because stock levels change constantly — deliveries come in, materials ship out, and returns come back — Inventory Master is built around keeping one record per material rather than creating duplicate entries every time stock changes. Adding quantity to an existing material tops up its available amount instead of fragmenting the same material across multiple rows, which keeps reporting and stock lookups accurate.</p><p>Inventory Master also owns the definition of where stock physically lives. Inventory Locations let an organization model multiple warehouses or storage points, which matters once you're tracking material across several job sites or yards rather than a single stockroom. And because every organization needs to report on and audit its inventory, Inventory Master supports bulk import and export via Excel, and lets you extend the base record with organization-specific custom fields.</p>","definitions":[{"term":"Inventory Master","definition":"The master list of all materials an organization holds in stock, including each material's quantity, unit of measurement (UOM), and inventory location. It is the source that Pick Up Tickets, Ship Tickets, and Return Tickets all draw from and update."},{"term":"UOM (Unit of Measurement)","definition":"The unit a material's quantity is tracked in (e.g. each, box, linear foot), set when the material record is created."},{"term":"Inventory Location","definition":"A named physical location (e.g. a specific warehouse or yard) associated with a material inventory record, allowing an organization to track stock across multiple storage points."},{"term":"Custom Column","definition":"An additional field added to inventory records beyond the standard set, using a chosen type — Text, Single Select, Multi-select, or Date."}],"procedures":[{"title":"Add a new material to inventory","steps":["Go to <strong>Inventory Master</strong>.","Click <strong>Add</strong>.","Fill in Material, Quantity, UOM (Unit of Measurement), and Inventory Location.","Click <strong>Submit</strong>."]},{"title":"Add stock to an existing material","steps":["In <strong>Inventory Master</strong>, click <strong>Add Quantity</strong>.","Select the material whose quantity you want to update.","Enter the additional amount being added."],"note":"The old quantity shows what's currently available; the new quantity you enter is added on top of it rather than replacing it — this avoids creating a duplicate record for the same material."},{"title":"Bulk import materials","steps":["In <strong>Inventory Master</strong>, click <strong>Upload Excel</strong>.","Use the provided sample template to format your data.","Upload the completed file to bulk-add materials."]},{"title":"Add custom fields to inventory records","steps":["In <strong>Inventory Master</strong>, click <strong>Add Custom Column</strong>.","Choose a field type: Text, Single Select, Multi-select, or Date."]},{"title":"Set up warehouse/inventory locations","steps":["In <strong>Inventory Master</strong>, open <strong>Inventory Locations</strong>.","Click <strong>Add Location</strong>.","Enter a name and the physical location for the material inventory."]},{"title":"Remove a material from Inventory Master","steps":["Click the red trash can icon next to the material entry in <strong>Inventory Master</strong>."],"note":"Deletion is only allowed if the material is not currently in use elsewhere — you cannot delete a material that's referenced by an active ticket or request."},{"title":"Export the full inventory list","steps":["In <strong>Inventory Master</strong>, click <strong>Download Excel</strong>."],"note":"Useful for keeping time-stamped inventory snapshots for records or audits."}]},{"heading":"Pickup Ticket","intro":"<p>A Pick Up Ticket is the first step in getting material out of the warehouse and on its way to where it's needed. It records what is being shipped, in what quantity, and initiates an approval step before anything physically leaves inventory — because material leaving the warehouse is a real reduction in stock that a warehouse manager needs to sign off on.</p><p>This approval gate exists to prevent stock from being pulled without oversight. Every ticket starts in a raised state and only becomes usable downstream — specifically, only an approved Pick Up Ticket can be referenced by a Ship Ticket or a Return Ticket — once someone with the right permission has reviewed and approved it. If it's rejected, it doesn't disappear; it sits in a rejected state until the requester revises and resubmits it.</p>","definitions":[{"term":"Pick Up Ticket","definition":"A request to ship material out of inventory, listing shipment details and the materials involved. It must be approved by a warehouse manager before it can be referenced by a Ship Ticket or Return Ticket."},{"term":"RAISED","definition":"The default status of a newly created Pick Up Ticket, indicating it is awaiting approval."},{"term":"APPROVED / REJECTED (Pick Up Ticket)","definition":"The two outcomes of warehouse manager review. Approved tickets become available for Ship and Return Tickets; rejected tickets stay in a rejected state until modified and resubmitted."}],"procedures":[{"title":"Create a Pick Up Ticket","steps":["Go to <strong>Pick Up Ticket</strong> and click <strong>Add</strong> (top left).","Fill in the shipment details and add the materials to be shipped.","Click <strong>Submit</strong>."],"note":"This generates a ticket ID with default status RAISED, which is then routed to the warehouse manager for approval."},{"title":"Approve or reject a Pick Up Ticket","steps":["As warehouse manager (or a user with the relevant permission), open the raised ticket.","Approve it to move its status to APPROVED, or reject it."],"note":"A rejected ticket's reject button turns red and the ticket remains REJECTED until it is modified and resubmitted."},{"title":"Export pickup tickets","steps":["On the <strong>Pick Up Ticket</strong> screen, use <strong>Filters</strong> and <strong>Search</strong> to narrow results by ID or status if needed.","Click <strong>Download Excel</strong> to export."]}]},{"heading":"Ship Ticket","intro":"<p>A Ship Ticket documents that material has actually left the warehouse, tying that shipment back to the Pick Up Ticket that authorized it. Rather than re-entering material details from scratch, a Ship Ticket pulls its material information directly from the linked Pick Up Ticket, keeping the two records consistent and reducing duplicate data entry.</p><p>Arena enforces a strict dependency chain here: a Ship Ticket can only reference a Pick Up Ticket that has already been approved, and it can only include material that is currently in stock. Both restrictions exist for the same underlying reason — you cannot physically ship what hasn't been cleared for release or what doesn't exist in the warehouse. If a needed material shows as unavailable, that's Arena telling you it isn't in stock, not a bug; the material has to be restocked in Inventory Master before it can move.</p>","definitions":[{"term":"Ship Ticket","definition":"A record confirming material has left the warehouse, generated by referencing an approved Pick Up Ticket, from which material details auto-populate."}],"procedures":[{"title":"Create a Ship Ticket","steps":["Go to <strong>Ship Ticket</strong> and click <strong>Add</strong>.","Select the corresponding Pick Up Ticket number — material details auto-populate from it.","Fill in the remaining details.","Click <strong>Submit</strong> to generate a Ship Ticket ID."]}]},{"heading":"Return Ticket","intro":"<p>A Return Ticket handles material coming back into the warehouse — whether it was unused, over-ordered, or found to be problematic after shipment. Like a Ship Ticket, it's built on top of a Pick Up Ticket reference rather than starting from a blank slate, because a return only makes sense in the context of a shipment that already happened.</p><p>Arena auto-populates the shipped and already-returned quantities when you select the originating Pick Up Ticket, which prevents over-returning more material than was actually shipped. Only pick up tickets that were both approved and have shipped material are eligible to appear as return candidates — a ticket that never shipped anything has nothing to return.</p>","definitions":[{"term":"Return Ticket","definition":"A record of material being returned to inventory, referencing the originating Pick Up Ticket. Shipped and already-returned quantities auto-populate from that reference."}],"procedures":[{"title":"Create a Return Ticket","steps":["Go to <strong>Return Ticket</strong> and click <strong>Add</strong>.","Select the Pick Up Ticket number the return corresponds to — shipped and already-returned quantities auto-populate.","Fill in the remaining fields.","Click <strong>Submit</strong> to generate a Return Ticket ID."]}]},{"heading":"Load Out Requests","intro":"<p>Load Out Requests (LORs) are how equipment and accessories — as opposed to consumable materials — move between the warehouse and a job site. Because equipment is typically borrowed and returned rather than consumed, an LOR tracks a much longer lifecycle than a materials ticket: from the initial request, through approval, physical checkout, shipping to site, use, check-in on return, and finally being shelved back into inventory. This full loop matters because equipment is a shared, reusable asset — the organization needs to know at all times who has what, where it is, and when it's expected back.</p><p>An LOR starts with a request specifying what's needed, by whom, and for how long, and it needs approval from the warehouse manager (or whoever holds equipment-management approval permission) before anything is checked out — the same oversight principle that governs Pick Up Tickets for materials. From there, the request moves through Check Out, where the equipment is physically verified against the Equipment Master and handed off, and eventually through Check In and Shop In, which represent the equipment coming back and being restocked to its inventory location.</p><p>Arena explicitly supports partial fulfillment at nearly every stage — partial checkout, partial ship-in, partial check-in, and partial closure — which reflects the reality that not every piece of equipment on a request moves in lockstep. It also supports the possibility that something goes wrong along the way: if equipment has a problem during checkout or check-in, that gets flagged as an issue rather than silently ignored, and every issue lands in the Equipment Issues tab for follow-up.</p><p>Beyond internal use, Arena distinguishes 3rd Party LORs — equipment going to an external party's site rather than an internal one — which follow the same core stages but insert a Lease Agreement step, since sending equipment outside the organization carries a different kind of risk that needs a signed agreement rather than just an internal handoff.</p>","definitions":[{"term":"Load Out Request (LOR)","definition":"A request to send equipment or accessories from inventory to a job site, tracked through a defined lifecycle of stages from request to closure."},{"term":"LOR statuses","definition":"The full set of states an LOR can move through: Requested, Approved, Rejected, Check Out, Partial Check Out, Check Out With Issue, Ship In, Partial Ship In, Check In, Partial Check-In, Check In With Issue, Shop In, Partial Closed, and Closed."},{"term":"Check Out","definition":"The LOR stage where requested equipment is verified against the Equipment Master and physically checked out, recording an Assign ID, Checkout Date, and Signature. Full completion sets status to CHECKED OUT; incomplete fulfillment sets it to PARTIAL CHECK OUT."},{"term":"Check In","definition":"The LOR stage where returning equipment details, a name, and a signature are recorded. Full completion sets status to CHECKED IN; incomplete returns set it to PARTIAL CHECK IN. If a Scheduled Equipment Maintenance form is configured, it must be completed at this stage, and any issues found are logged to Equipment Issues."},{"term":"Shop In","definition":"The final LOR stage, where equipment/accessories are moved back into their inventory location (typically the one they were originally checked out from). Confirming and signing closes the LOR (CLOSED), or marks it PARTIAL CLOSED if only some equipment has shopped in."},{"term":"3rd Party LOR","definition":"A Load Out Request variant for equipment going to an external party's job site. It follows the same Request, Check Out, Ship, Check In, and Shop In stages as an internal LOR, but adds a Lease Agreement stage after Check Out."},{"term":"Lease Agreement","definition":"A stage unique to 3rd Party LORs, where an agreement is emailed to the external party for approval. Status progresses from Waiting for Approval to Approved (Mail ID) once the recipient approves it in the emailed form, or requires revision if rejected."},{"term":"Equipment Issues","definition":"A tab that collects all issues raised during an LOR's checkout or check-in stages, such as Check Out Issue or Check In Issue statuses."}],"procedures":[{"title":"Request equipment for a job site","steps":["Go to <strong>Load Out Request</strong> and click <strong>Add</strong> to open the Request Form.","Enter Equipment/Accessory required, Quantity, UOM, Requested By, Required Date, Planned Return Date, Supervisor, and Job ID/Name.","Submit the request."],"note":"The LOR status becomes REQUESTED once submitted."},{"title":"Approve or reject a Load Out Request","steps":["As the warehouse manager (or a user with equipment-management approval permission), open the submitted LOR.","Click <strong>Approve</strong> to set status to APPROVED, or <strong>Reject</strong>."],"note":"Rejecting turns the button red and sets status to REJECTED, letting the requester modify and resubmit based on the comments provided."},{"title":"Check out equipment for an approved LOR","steps":["After the LOR is approved, click <strong>Check Out</strong>.","Verify the equipment against stock in the Equipment Master.","Fill in Assign ID, Checkout Date, and Signature.","Click <strong>Submit</strong>."],"note":"If not all equipment is checked out at once, status shows PARTIAL CHECK OUT; once everything is checked out, it shows CHECKED OUT."},{"title":"Check equipment back in after use","steps":["In the LOR's Check In stage, fill in the details for the returning equipment.","Add a name and signature.","Submit the check-in."],"note":"Partial returns show PARTIAL CHECK IN; full returns show CHECKED IN. If a Scheduled Equipment Maintenance form is configured, it must be completed here, and any issues found are logged to Equipment Issues."},{"title":"Shop equipment back into inventory (Shop In)","steps":["In the LOR's Shop In stage, check the confirmation box.","Add a signature.","Submit."],"note":"This closes the LOR (status CLOSED), or marks it PARTIAL CLOSED if only some of the equipment has shopped in."},{"title":"Handle an equipment issue during checkout or check-in","steps":["If an issue arises during checkout, respond to the popup by choosing <strong>Proceed With Issue</strong> (sets status to Check Out Issue) or <strong>Change Equipment</strong>.","If an issue arises during check-in, respond to the prompt asking whether to hold the equipment/accessory — choosing not to hold sets status to CHECK IN ISSUE.","Review all raised issues in the <strong>Equipment Issues</strong> tab."]},{"title":"Create and approve a 3rd Party Load Out Request","steps":["Create the LOR following the same Request, Check Out, Ship, Check In, and Shop In stages as an internal LOR.","After Check Out, complete the added <strong>Lease Agreement</strong> stage.","Click <strong>Email Agreement for Approval</strong> to send it to the 3rd party.","Wait for the recipient to click <strong>Approve</strong> in the emailed form (status moves from Waiting for Approval to Approved (Mail ID)), or revise the equipment if they click Reject."]},{"title":"View the full history of an LOR","steps":["Click the kebab menu on the LOR card.","Select <strong>See History</strong> to view Equipment Logs — requests, check-ins, check-outs, shipments, and Shop In actions — along with who performed each and when."]},{"title":"Filter or search Load Out Requests","steps":["Use the <strong>Filters</strong> button to filter LORs by status or user.","Use the <strong>Search</strong> box to narrow results by specific criteria.","Switch between Grid View and Kanban View as needed."]},{"title":"Delete a Load Out Request","steps":["Open the LOR you want to remove and delete it."],"note":"An LOR can only be deleted as long as none of its included equipment has been checked out yet."}]},{"heading":"Settings","intro":"<p>LOR Workflows is where the approval chain that governs every Load Out Request is defined. Just as materials tickets rely on warehouse manager sign-off, LORs rely on a configurable, potentially multi-level approval workflow before equipment can move — and this is the screen where that workflow is built. Configuring it well ensures equipment doesn't leave the warehouse without the right people signing off, while still allowing flexibility (a single approver versus a full committee) depending on how much oversight a given class of equipment needs.</p>","definitions":[{"term":"LOR Workflow","definition":"A configurable approval chain for Load Out Requests, built from one or more levels, each set to either \"All must approve\" or \"Anyone can approve\"."}],"procedures":[{"title":"Set up an approval workflow for LORs","steps":["Go to <strong>LOR Workflows</strong>.","Click <strong>Create Level</strong>.","Define the level type — <strong>All must approve</strong> or <strong>Anyone can approve</strong> — and select approvers."],"note":"A tree/graph view of the full workflow is available at the top right corner, useful for reviewing multi-level chains at a glance."}]}],
    name: "Inventory Management",
    alias: "Stock & Load Outs",
    icon: "inventory_2",
    tagline: "Track material and equipment stock and manage its movement in and out of the warehouse.",
    color: "#7a2f3f",
    overview: `<p><strong>Inventory Management</strong> tracks material and equipment stock through the <strong>Inventory Master</strong>, and governs the flow of goods in and out via <strong>Pick Up Tickets</strong>, <strong>Ship Tickets</strong>, and <strong>Return Tickets</strong> for materials, plus <strong>Load Out Requests (LORs)</strong> — including <strong>3rd Party LORs</strong> — for equipment/accessories moving through Request, Check Out, Ship, Check In, and Shop In stages.</p>`,
    navigation: [
      `From <strong>Home</strong>, click the <strong>Inventory Management</strong> tile.`,
      `Materials flow through Inventory Master, Pick Up Ticket, Ship Ticket, and Return Ticket. Equipment/accessories flow through Load Out Requests (LOR).`
    ],
    sections: [{ id: "inventory-management-qa", heading: "Common Questions", html: "<p>Answers sourced from Arena's documentation.</p>", qa: [] }]
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
