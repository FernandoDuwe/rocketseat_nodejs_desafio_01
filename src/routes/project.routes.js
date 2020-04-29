module.exports = (app) => {
    const { uuid } = require('uuidv4');

    const projects = [];

    // list all projects
    app.get('/projects', (request, response) => {
        const { title } = request.query;

        const vrProjects = title ? projects.find(projectNode => projectNode.title.includes(title)) : projects;

        return response.status(200).json(projects);
    });

    // insert a new project
    app.post('/projects', (request, response) => {
        const { title, owner } = request.body;

        const projectNew = {
            id: uuid(),
            title: title,
            owner: owner
        };

        projects.push(projectNew);

        return response.status(200).json(projectNew);
    });

    // edit a project
    app.put('/projects/:id', (request, response) => {
        const { id } = request.params;
        const { title, owner } = request.body;

        const projectId = projects.findIndex(projectNode => projectNode.id == id);

        if(projectId < 0)
            return response.status(400).json({
                "msg": "Project not found"
            });

        const projectNew = {
            id: id,
            title: title,
            owner: owner
        };

        projects[projectId] = projectNew;

        return response.sendStatus(200);
    });

    // delete a project
    app.delete('/projects/:id', (request, response) => {
        const { id } = request.params;

        const projectId = projects.findIndex(projectNode => projectNode.id == id);

        if(projectId < 0)
            return response.status(400).json({
                "msg": "Project not found"
            });

        projects.splice(projectId, 1);

        return response.sendStatus(200);
    });
}