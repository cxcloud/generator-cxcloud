export * from './helloworld-controller';
<% services.forEach(service => { %>export * from './<%= service %>';<% }) %>
