const heading = React.createElement('div',
{id : 'parent'},[React.createElement('div',
{id : 'children1'},
React.createElement('h1',{id:'heading'},'hello h1'),
React.createElement('h2',{id:'heading2'},'hello h2'),
)],
[React.createElement('div',
{id : 'children2'},
    React.createElement('h1',{id:'heading3'},'hello h3'),
React.createElement('h2',{id:'heading4'},'hello h4')
)]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
