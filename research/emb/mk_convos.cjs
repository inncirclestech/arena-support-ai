// Multi-turn conversations. Expectations derived by reading data.js sections (not by running the bot).
// say: user types; clickSec: click the clarification option for that screen; clickElse: "Something else".
// ans: [[moduleId, section], ...] any accepted; clar: clarification must offer one of these; still: "Still on" hint expected (true) / absent (false).
const fs = require('fs');
const A = (m, s, ...alt) => [[m, s], ...alt];
const C = [
 { name: 'owner: project name -> ambiguity -> click Projects', turns: [
   { say: 'how do I change the project name?', clar: A('account-basics', 'Projects', ['project-setup', 'Project Details']) },
   { clickSec: ['account-basics', 'Projects'], ans: A('account-basics', 'Projects') } ] },
 { name: 'owner: project name in the project screen', turns: [
   { say: 'how do I change the project name in the project screen?', ans: A('account-basics', 'Projects') } ] },
 { name: 'clarify then typed screen name', turns: [
   { say: 'how do I change the project name?', clar: A('account-basics', 'Projects') },
   { say: 'in the projects screen', ans: A('account-basics', 'Projects') } ] },
 { name: 'clarify then typed bare name', turns: [
   { say: 'how do I change the project name?', clar: A('account-basics', 'Projects') },
   { say: 'projects', ans: A('account-basics', 'Projects') } ] },
 { name: 'clarify then ordinal', turns: [
   { say: 'what are earnings codes', clar: A('global-data', 'Earnings Codes', ['time-management', 'Earnings Codes']) },
   { say: 'the second option', ans: A('global-data', 'Earnings Codes', ['time-management', 'Earnings Codes']) } ] },
 { name: 'clarify then something else then typed', turns: [
   { say: 'what are earnings codes', clar: A('global-data', 'Earnings Codes', ['time-management', 'Earnings Codes']) },
   { clickElse: true, kind: 'ask' },
   { say: 'time management earnings codes', ans: A('time-management', 'Earnings Codes') } ] },
 { name: 'vendor then pronoun follow-up', turns: [
   { say: 'how do i add a vendor', ans: A('global-data', 'Vendors') },
   { say: 'and how do I bring it back after deleting?', ans: A('global-data', 'Vendors'), still: true } ] },
 { name: 'vendor statuses follow-up (its)', turns: [
   { say: 'how do i add a vendor', ans: A('global-data', 'Vendors') },
   { say: 'how do I search for them', ans: A('global-data', 'Vendors'), still: true } ] },
 { name: 'vendors then same for categories', turns: [
   { say: 'how do i add a vendor', ans: A('global-data', 'Vendors') },
   { say: 'same for vendor groups', ans: A('global-data', 'Vendors') } ] },
 { name: 'topic switch: vendor then work order', turns: [
   { say: 'how do i add a vendor', ans: A('global-data', 'Vendors') },
   { say: 'how do I raise a work order', ans: A('work-order', 'Work Orders', ['global-data', 'Work Orders']), still: false } ] },
 { name: 'switch via named module', turns: [
   { say: 'how do i add a vendor', ans: A('global-data', 'Vendors') },
   { say: 'how do i create a tender in tender management', ans: A('tender-management', 'Tenders') } ] },
 { name: 'work orders follow-up columns', turns: [
   { say: 'what is on the work orders screen', ans: A('work-order', 'Work Orders') },
   { say: 'and how do I find one?', ans: A('work-order', 'Work Orders'), still: true } ] },
 { name: 'projects then filters follow-up', turns: [
   { say: 'what can i do on the projects screen', ans: A('account-basics', 'Projects') },
   { say: 'what about filters?', ans: A('account-basics', 'Projects'), still: true } ] },
 { name: 'projects then its views', turns: [
   { say: 'how to create a project', ans: A('account-basics', 'Projects') },
   { say: 'how do I change how they are shown', ans: A('account-basics', 'Projects'), still: true } ] },
 { name: 'roster then excel follow-up', turns: [
   { say: 'how do I assign a user to a project', clar: A('project-setup', 'Roster') },
   { clickSec: ['project-setup', 'Roster'], ans: A('project-setup', 'Roster') },
   { say: 'can I upload them from excel too', ans: A('project-setup', 'Roster'), still: true } ] },
 { name: 'new question after answer is not carried', turns: [
   { say: 'how do i add a vendor', ans: A('global-data', 'Vendors') },
   { say: 'where do I set Geotab credentials', ans: A('global-data', 'Marketplace'), still: false } ] },
 { name: 'decline then normal', turns: [
   { say: 'tell me a joke', none: true },
   { say: 'how do i add a vendor', ans: A('global-data', 'Vendors') } ] },
 { name: 'decline does not break context', turns: [
   { say: 'how do i add a vendor', ans: A('global-data', 'Vendors') },
   { say: 'what is the weather today', none: true } ] },
 { name: 'explicit reset', turns: [
   { say: 'how do i add a vendor', ans: A('global-data', 'Vendors') },
   { say: 'new question', kind: 'reset' },
   { say: 'what can i do on the projects screen', ans: A('account-basics', 'Projects'), still: false } ] },
 { name: 'screen named in global data', turns: [
   { say: 'how do I create a user in global data', clar: A('global-data', 'User Accounts') } ] },
 { name: 'timesheet then follow', turns: [
   { say: 'how do i log my hours for a day', ans: A('time-management', 'My Timesheet') },
   { say: 'and copy an earlier log?', ans: A('time-management', 'My Timesheet'), still: true } ] },
 { name: 'top bar then icon follow', turns: [
   { say: 'what is on the top bar', ans: A('account-basics', 'Top Bar', ['global-data', 'Top Bar']) },
   { say: 'what about the headset icon', ans: A('account-basics', 'Top Bar', ['global-data', 'Top Bar']), still: true } ] },
 { name: 'marketplace then geotab', turns: [
   { say: 'what apps can I connect from the marketplace', ans: A('global-data', 'Marketplace') },
   { say: 'where do I put the credentials for geotab', ans: A('global-data', 'Marketplace') } ] },
 { name: 'clarify click second option', turns: [
   { say: 'how to create a timesheet', clar: A('time-management', 'Timesheet Mode', ['time-management', 'My Timesheet']) },
   { clickSec: ['time-management', 'My Timesheet'], ans: A('time-management', 'My Timesheet') } ] },
 { name: 'compliance hub follow-up', turns: [
   { say: 'what is the compliance directory', ans: A('global-data', 'Compliance Hub') },
   { say: 'and the expiry settings?', ans: A('global-data', 'Compliance Hub'), still: true } ] },
 { name: 'cost type then add', turns: [
   { say: 'what is the cost type screen', ans: A('global-data', 'Cost Type') },
   { say: 'how do I add one', ans: A('global-data', 'Cost Type'), still: true } ] },
 { name: 'submittals form then steps', turns: [
   { say: 'how do i open the submittal form builder', ans: A('global-data', 'Submittals Form') },
   { say: 'what is the Submitted To field there', ans: A('global-data', 'Submittals Form'), still: true } ] },
 { name: 'typed screen after vague question', turns: [
   { say: 'how do I find one', clar: null },
   { say: 'work orders', ans: A('work-order', 'Work Orders', ['global-data', 'Work Orders']) } ] }
];
fs.writeFileSync('convos.json', JSON.stringify(C, null, 1)); console.log(C.length, 'conversations');
