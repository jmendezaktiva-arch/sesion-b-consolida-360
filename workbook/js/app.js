document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const navMenu = document.getElementById('nav-menu').querySelector('ul');

    // --- CONFIGURACIÓN DE SECCIONES ALINEADA AL FLUJO CONSULTIVO ---
    const sectionsData = [
        { id: 'diagnostico', title: '1. Diagnóstico 360°', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>` },
        { id: 'persona', title: '2. Ficha de Cliente Ideal', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>` },
        { id: 'auditoria', title: '3. Auditoría de Activos', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>` },
        { id: 'matriz', title: '4. Matriz de Priorización', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>` },
        { id: 'plan', title: '5. Plan Maestro de Canal', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>` },
        { id: 'flujo', title: '6. Diseñador de Flujos', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12s2.545-5 7-5c4.455 0 7 5 7 5s-2.545 5-7 5c-4.455 0-7-5-7-5z"></path><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path><path d="M20.599 16.5h-1.2a2 2 0 0 0-1.923 1.423l-.485 1.14a1 1 0 0 1-1.838-.78l.485-1.14a2 2 0 0 0-1.923-1.423h-1.2a2 2 0 0 0-1.923 1.423l-.485 1.14a1 1 0 0 1-1.838-.78l.485-1.14a2 2 0 0 0-1.923-1.423H4.4a1 1 0 0 1 0-2h1.199a2 2 0 0 0 1.923-1.423l.485-1.14a1 1 0 0 1 1.838.78l-.485 1.14a2 2 0 0 0 1.923 1.423h1.2a2 2 0 0 0 1.923-1.423l.485-1.14a1 1 0 0 1 1.838.78l-.485 1.14a2 2 0 0 0 1.923 1.423h1.2a1 1 0 0 1 0 2z"></path></svg>` },
        { id: 'sprint', title: '7. Sprint de Implementación', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>` },
    ];

    // --- GENERACIÓN DINÁMICA DE NAVEGACIÓN Y CONTENEDORES ---
    sectionsData.forEach(data => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="#${data.id}" class="nav-link flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-brand-blue transition-colors duration-300">
                <span class="completion-icon text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
                ${data.icon}
                <span class="flex-grow">${data.title}</span>
            </a>`;
        navMenu.appendChild(li);

        const section = document.createElement('section');
        section.id = data.id;
        section.className = 'section-content bg-white shadow-xl rounded-2xl p-8 mb-8';
        mainContent.appendChild(section);
    });
    
    // --- INYECCIÓN DE CONTENIDO HTML ---
    
document.getElementById('diagnostico').innerHTML = `
    <h2 class="text-3xl font-bold brand-orange mb-4">${sectionsData[0].title}</h2>
    <div class="instructions-box">
        <p><strong>Objetivo:</strong> Realizar un diagnóstico para medir el nivel de madurez de tu ecosistema digital e identificar los 2 problemas de mayor impacto.</p>
    </div>
    <div class="overflow-x-auto bg-white p-6 rounded-lg shadow-sm border">
        <h3 class="section-title">Mapa de Ecosistema Digital: Evalúa tu nivel actual</h3>
        <table class="w-full min-w-[600px] text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                    <th class="px-6 py-3">Categoría</th>
                    <th class="px-6 py-3 text-center">0 - Inexistente</th>
                    <th class="px-6 py-3 text-center">1 - Básico</th>
                    <th class="px-6 py-3 text-center">2 - Estructurado</th>
                    <th class="px-6 py-3 text-center">3 - Optimizado</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b"><td class="px-6 py-4 font-medium text-gray-900">Presencia Orgánica</td><td class="px-6 py-4 text-center"><input type="radio" name="cat1" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat1" value="0"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat1" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat1" value="1"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat1" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat1" value="2"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat1" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat1" value="3"></td></tr>
                <tr class="border-b"><td class="px-6 py-4 font-medium text-gray-900">SEO & Contenido</td><td class="px-6 py-4 text-center"><input type="radio" name="cat2" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat2" value="0"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat2" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat2" value="1"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat2" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat2" value="2"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat2" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat2" value="3"></td></tr>
                <tr class="border-b"><td class="px-6 py-4 font-medium text-gray-900">Captación Pagada (Ads)</td><td class="px-6 py-4 text-center"><input type="radio" name="cat3" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat3" value="0"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat3" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat3" value="1"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat3" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat3" value="2"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat3" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat3" value="3"></td></tr>
                <tr class="border-b"><td class="px-6 py-4 font-medium text-gray-900">Automatización</td><td class="px-6 py-4 text-center"><input type="radio" name="cat4" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat4" value="0"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat4" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat4" value="1"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat4" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat4" value="2"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat4" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat4" value="3"></td></tr>
                <tr class="border-b"><td class="px-6 py-4 font-medium text-gray-900">Comunidad</td><td class="px-6 py-4 text-center"><input type="radio" name="cat5" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat5" value="0"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat5" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat5" value="1"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat5" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat5" value="2"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat5" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat5" value="3"></td></tr>
                <tr class="border-b"><td class="px-6 py-4 font-medium text-gray-900">Prospección Manual</td><td class="px-6 py-4 text-center"><input type="radio" name="cat6" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat6" value="0"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat6" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat6" value="1"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat6" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat6" value="2"></td><td class="px-6 py-4 text-center"><input type="radio" name="cat6" class="autosave-input form-radio h-5 w-5 text-brand-blue" data-section="diagnostico" data-id="diag_cat6" value="3"></td></tr>
            </tbody>
        </table>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-sm border mt-8">
        <label for="diag_problemas" class="font-bold text-gray-700 mb-2 block">Basado en el diagnóstico, identifica tus 2 áreas de mayor oportunidad (las de menor puntuación):</label>
        <textarea id="diag_problemas" rows="4" class="autosave-input w-full p-3 border border-gray-300 rounded-lg" data-section="diagnostico" data-id="diag_oportunidades" placeholder="Ej: 1. SEO y Contenido, porque no generamos tráfico. 2. Automatización, porque el seguimiento de leads es manual y lento."></textarea>
    </div>
`;

    document.getElementById('persona').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4">${sectionsData[1].title}</h2>
        <div class="instructions-box">
            <p><strong>Objetivo:</strong> Crear un arquetipo detallado del cliente ideal que sirva como brújula para todas las decisiones de marketing.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 p-4 rounded-lg border"><h3 class="font-bold text-lg mb-2 text-gray-800">Sección 1: Datos Demográficos y Laborales</h3><textarea class="autosave-input w-full p-2 border border-gray-300 rounded-md h-24" placeholder="Nombre, Edad, Cargo, Sector..." data-section="persona" data-id="persona_retrato"></textarea></div>
            <div class="bg-gray-50 p-4 rounded-lg border"><h3 class="font-bold text-lg mb-2 text-gray-800">Sección 2: Metas y Desafíos</h3><textarea class="autosave-input w-full p-2 border border-gray-300 rounded-md h-24" placeholder="¿Qué busca lograr? ¿Qué le impide dormir por la noche?" data-section="persona" data-id="persona_mente"></textarea></div>
            <div class="bg-gray-50 p-4 rounded-lg border"><h3 class="font-bold text-lg mb-2 text-gray-800">Sección 3: Objeciones y Motivaciones</h3><textarea class="autosave-input w-full p-2 border border-gray-300 rounded-md h-24" placeholder="¿Qué le haría dudar? ¿Qué resultado sueña obtener?" data-section="persona" data-id="persona_corazon"></textarea></div>
            <div class="bg-gray-50 p-4 rounded-lg border"><h3 class="font-bold text-lg mb-2 text-gray-800">Sección 4: Plataformas y Contenidos</h3><textarea class="autosave-input w-full p-2 border border-gray-300 rounded-md h-24" placeholder="¿Qué 3 redes sociales usa? ¿Qué tipo de contenido consume?" data-section="persona" data-id="persona_habitat"></textarea></div>
        </div>`;
    
document.getElementById('auditoria').innerHTML = `
    <h2 class="text-3xl font-bold brand-orange mb-4">${sectionsData[2].title}</h2>
    <div class="instructions-box">
        <p><strong>Objetivo:</strong> Convertir conceptos de "presencia orgánica básica" en una lista de tareas concretas y priorizadas.</p>
    </div>
    <div class="overflow-x-auto">
        <table class="w-full min-w-[800px] text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                <tr><th class="px-4 py-3">Punto de Verificación</th><th class="px-4 py-3">Estado (R/A/V)</th><th class="px-4 py-3">Acción de Mejora Específica</th><th class="px-4 py-3">Responsable y Fecha Límite</th></tr>
            </thead>
            <tbody>
                <tr class="border-b">
                    <td class="px-4 py-2 font-medium">CTA claro y visible en Home</td>
                    <td class="px-4 py-2"><select class="autosave-input w-full p-2 border rounded-md" data-section="auditoria" data-id="auditoria_cta_status"><option value="Rojo">Rojo</option><option value="Amarillo">Amarillo</option><option value="Verde">Verde</option></select></td>
                    <td class="px-4 py-2"><input type="text" placeholder="Ej: Rediseñar banner con botón 'Cotizar Ahora'" class="autosave-input w-full p-2 border rounded-md" data-section="auditoria" data-id="auditoria_cta_accion"></td>
                    <td class="px-4 py-2"><input type="text" placeholder="Ej: Ana Pérez - 05/11/2025" class="autosave-input w-full p-2 border rounded-md" data-section="auditoria" data-id="auditoria_cta_responsable"></td>
                </tr>
                <tr class="border-b">
                    <td class="px-4 py-2 font-medium">Velocidad de carga en móvil (< 3s)</td>
                    <td class="px-4 py-2"><select class="autosave-input w-full p-2 border rounded-md" data-section="auditoria" data-id="auditoria_velocidad_status"><option value="Rojo">Rojo</option><option value="Amarillo">Amarillo</option><option value="Verde">Verde</option></select></td>
                    <td class="px-4 py-2"><input type="text" placeholder="Ej: Comprimir imágenes con TinyPNG" class="autosave-input w-full p-2 border rounded-md" data-section="auditoria" data-id="auditoria_velocidad_accion"></td>
                    <td class="px-4 py-2"><input type="text" placeholder="Ej: Luis García - 12/11/2025" class="autosave-input w-full p-2 border rounded-md" data-section="auditoria" data-id="auditoria_velocidad_responsable"></td>
                </tr>
                <tr class="border-b">
                    <td class="px-4 py-2 font-medium">Prueba social presente</td>
                    <td class="px-4 py-2"><select class="autosave-input w-full p-2 border rounded-md" data-section="auditoria" data-id="auditoria_prueba_status"><option value="Rojo">Rojo</option><option value="Amarillo">Amarillo</option><option value="Verde">Verde</option></select></td>
                    <td class="px-4 py-2"><input type="text" placeholder="Ej: Agregar sección de testimonios en Home" class="autosave-input w-full p-2 border rounded-md" data-section="auditoria" data-id="auditoria_prueba_accion"></td>
                    <td class="px-4 py-2"><input type="text" placeholder="Ej: Ana Pérez - 15/11/2025" class="autosave-input w-full p-2 border rounded-md" data-section="auditoria" data-id="auditoria_prueba_responsable"></td>
                </tr>
                <tr>
                    <td class="px-4 py-2 font-medium">Contacto fácil de encontrar</td>
                    <td class="px-4 py-2"><select class="autosave-input w-full p-2 border rounded-md" data-section="auditoria" data-id="auditoria_contacto_status"><option value="Rojo">Rojo</option><option value="Amarillo">Amarillo</option><option value="Verde">Verde</option></select></td>
                    <td class="px-4 py-2"><input type="text" placeholder="Ej: Poner un botón de WhatsApp flotante" class="autosave-input w-full p-2 border rounded-md" data-section="auditoria" data-id="auditoria_contacto_accion"></td>
                    <td class="px-4 py-2"><input type="text" placeholder="Ej: Luis García - 18/11/2025" class="autosave-input w-full p-2 border rounded-md" data-section="auditoria" data-id="auditoria_contacto_responsable"></td>
                </tr>
            </tbody>
        </table>
    </div>`;

    document.getElementById('matriz').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4">${sectionsData[3].title}</h2>
        <div class="instructions-box">
            <p><strong>Objetivo:</strong> Decidir estratégicamente dónde invertir recursos, clasificando tus ideas y canales en una matriz de Impacto vs. Facilidad para identificar tus <strong>2 canales prioritarios</strong>.</p>
        </div>
        <div class="flex items-center justify-center">
            <div class="grid grid-cols-2 grid-rows-2 w-full max-w-3xl aspect-square relative">
                <div class="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 font-bold text-gray-600">Impacto Potencial</div>
                <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 font-bold text-gray-600">Facilidad de Implementación</div>
                <div class="border-2 border-dashed border-gray-400 p-4 flex flex-col"><h4 class="font-bold text-lg text-red-600">Proyectos Estratégicos</h4><p class="text-sm text-gray-500 mb-2">(Alto Impacto, Baja Facilidad)</p><textarea placeholder="PLANIFICAR..." class="autosave-input w-full h-full bg-transparent border-0 p-1 focus:ring-0" data-section="matriz" data-id="matriz_q2"></textarea></div>
                <div class="border-2 border-dashed border-gray-400 p-4 flex flex-col bg-green-50"><h4 class="font-bold text-lg text-green-700">Joyas de la Corona</h4><p class="text-sm text-gray-500 mb-2">(Alto Impacto, Alta Facilidad)</p><textarea placeholder="ACCIÓN INMEDIATA..." class="autosave-input w-full h-full bg-transparent border-0 p-1 focus:ring-0" data-section="matriz" data-id="matriz_q1"></textarea></div>
                <div class="border-2 border-dashed border-gray-400 p-4 flex flex-col"><h4 class="font-bold text-lg text-gray-700">Zonas Peligrosas</h4><p class="text-sm text-gray-500 mb-2">(Bajo Impacto, Baja Facilidad)</p><textarea placeholder="EVITAR POR AHORA..." class="autosave-input w-full h-full bg-transparent border-0 p-1 focus:ring-0" data-section="matriz" data-id="matriz_q4"></textarea></div>
                <div class="border-2 border-dashed border-gray-400 p-4 flex flex-col bg-yellow-50"><h4 class="font-bold text-lg text-yellow-700">Victorias Fáciles</h4><p class="text-sm text-gray-500 mb-2">(Bajo Impacto, Alta Facilidad)</p><textarea placeholder="DELEGAR O AUTOMATIZAR..." class="autosave-input w-full h-full bg-transparent border-0 p-1 focus:ring-0" data-section="matriz" data-id="matriz_q3"></textarea></div>
            </div>
        </div>`;

document.getElementById('plan').innerHTML = `
    <h2 class="text-3xl font-bold brand-orange mb-4">${sectionsData[4].title}</h2>
    <div class="instructions-box">
        <p><strong>Objetivo:</strong> Crear un plan estratégico de una página para cada uno de los 2 canales prioritarios seleccionados en la matriz.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-50 p-6 rounded-lg border space-y-4">
            <h3 class="font-bold text-lg text-gray-800">Plan para Canal Prioritario #1</h3>
            <div><label class="block text-md font-medium text-gray-700">Rol Estratégico del Canal:</label><div class="flex flex-wrap gap-4 mt-2"><label class="flex items-center"><input type="radio" name="rol1" class="autosave-input form-radio" value="leads" data-section="plan" data-id="plan1_rol"> Leads</label><label class="flex items-center"><input type="radio" name="rol1" class="autosave-input form-radio" value="comunidad" data-section="plan" data-id="plan1_rol"> Comunidad</label><label class="flex items-center"><input type="radio" name="rol1" class="autosave-input form-radio" value="ventas" data-section="plan" data-id="plan1_rol"> Ventas</label></div></div>
            <div><label class="block text-md font-medium text-gray-700">Métrica Clave de Éxito (KPI):</label><input type="text" placeholder="Ej: # de leads calificados por semana" class="autosave-input w-full p-2 border rounded-md" data-section="plan" data-id="plan1_kpi"></div>
            <div><label class="block text-md font-medium text-gray-700">Líneas de Contenido Fundacional:</label><textarea rows="3" placeholder="Ej: 1. Tutoriales en video. 2. Casos de éxito de clientes. 3. Guías descargables." class="autosave-input w-full p-2 border rounded-md" data-section="plan" data-id="plan1_contenido"></textarea></div>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg border space-y-4">
            <h3 class="font-bold text-lg text-gray-800">Plan para Canal Prioritario #2</h3>
            <div><label class="block text-md font-medium text-gray-700">Rol Estratégico del Canal:</label><div class="flex flex-wrap gap-4 mt-2"><label class="flex items-center"><input type="radio" name="rol2" class="autosave-input form-radio" value="leads" data-section="plan" data-id="plan2_rol"> Leads</label><label class="flex items-center"><input type="radio" name="rol2" class="autosave-input form-radio" value="comunidad" data-section="plan" data-id="plan2_rol"> Comunidad</label><label class="flex items-center"><input type="radio" name="rol2" class="autosave-input form-radio" value="ventas" data-section="plan" data-id="plan2_rol"> Ventas</label></div></div>
            <div><label class="block text-md font-medium text-gray-700">Métrica Clave de Éxito (KPI):</label><input type="text" placeholder="Ej: Tasa de interacción del 5%" class="autosave-input w-full p-2 border rounded-md" data-section="plan" data-id="plan2_kpi"></div>
            <div><label class="block text-md font-medium text-gray-700">Líneas de Contenido Fundacional:</label><textarea rows="3" placeholder="Ej: 1. Videos cortos 'detrás de cámaras'. 2. Encuestas interactivas. 3. Sesiones de Q&A en vivo." class="autosave-input w-full p-2 border rounded-md" data-section="plan" data-id="plan2_contenido"></textarea></div>
        </div>
    </div>`;

document.getElementById('flujo').innerHTML = `
    <h2 class="text-3xl font-bold brand-orange mb-4">${sectionsData[5].title}</h2>
    <div class="instructions-box">
         <p><strong>Objetivo:</strong> Diseñar visualmente tu primer embudo de captación y automatización simple y efectivo.</p>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-8 text-center flex-wrap">
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-300 w-full sm:w-5/12 lg:w-1/5"><h4 class="font-bold">1. Fuente de Tráfico</h4><textarea placeholder="Ej: Campaña de Anuncios en Instagram" class="autosave-input w-full mt-2 p-2 border rounded-md h-24" data-section="flujo" data-id="flujo_fuente"></textarea></div>
        <div class="text-2xl font-bold text-blue-400 hidden lg:block">→</div>
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-300 w-full sm:w-5/12 lg:w-1/5"><h4 class="font-bold">2. La Oferta (Lead Magnet)</h4><textarea placeholder="Ej: Guía PDF 'Los 5 Errores al Elegir un CRM'" class="autosave-input w-full mt-2 p-2 border rounded-md h-24" data-section="flujo" data-id="flujo_oferta"></textarea></div>
        <div class="text-2xl font-bold text-blue-400 hidden lg:block">→</div>
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-300 w-full sm:w-5/12 lg:w-1/5"><h4 class="font-bold">3. La Captura</h4><textarea placeholder="Ej: Pediremos nombre y correo en una landing page" class="autosave-input w-full mt-2 p-2 border rounded-md h-24" data-section="flujo" data-id="flujo_captura"></textarea></div>
        <div class="text-2xl font-bold text-blue-400 hidden lg:block">→</div>
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-300 w-full sm:w-5/12 lg:w-1/5"><h4 class="font-bold">4. Mensaje de Bienvenida</h4><textarea placeholder="Ej: Asunto: 'Aquí tienes tu guía'. Cuerpo: 'Hola [Nombre], gracias por tu interés...'" class="autosave-input w-full mt-2 p-2 border rounded-md h-24" data-section="flujo" data-id="flujo_mensaje"></textarea></div>
    </div>`;

document.getElementById('sprint').innerHTML = `
    <h2 class="text-3xl font-bold brand-orange mb-4">${sectionsData[6].title}</h2>
    <div class="instructions-box">
        <p><strong>Objetivo:</strong> Transformar la estrategia en un calendario de ejecución concreto y medible para las próximas 4 semanas.</p>
    </div>
    <div class="overflow-x-auto">
        <table class="w-full min-w-[900px] text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                <tr><th class="px-4 py-3">Semana</th><th class="px-4 py-3">Foco de la Semana</th><th class="px-4 py-3">Tareas Clave (3-5)</th><th class="px-4 py-3">Métrica de Enfoque</th><th class="px-4 py-3">Reflexión</th></tr>
            </thead>
            <tbody>
                <tr class="border-b"><td class="px-4 py-2 font-bold">1</td><td class="px-4 py-2"><input type="text" placeholder="Ej: Lanzamiento Lead Magnet" class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w1_foco"></td><td class="px-4 py-2"><textarea rows="2" placeholder="Ej: 1. Configurar campaña. 2. Diseñar creativos. 3. Escribir copies." class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w1_tareas"></textarea></td><td class="px-4 py-2"><input type="text" placeholder="¿Qué número miraré?" class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w1_metrica"></td><td class="px-4 py-2"><textarea rows="2" placeholder="¿Qué funcionó?" class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w1_reflexion"></textarea></td></tr>
                <tr class="border-b"><td class="px-4 py-2 font-bold">2</td><td class="px-4 py-2"><input type="text" placeholder="Ej: Optimización de Anuncios" class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w2_foco"></td><td class="px-4 py-2"><textarea rows="2" placeholder="Ej: 1. Analizar CTR. 2. Probar 2 nuevos públicos. 3. Ajustar presupuesto." class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w2_tareas"></textarea></td><td class="px-4 py-2"><input type="text" placeholder="¿Qué número miraré?" class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w2_metrica"></td><td class="px-4 py-2"><textarea rows="2" placeholder="¿Qué aprendimos?" class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w2_reflexion"></textarea></td></tr>
                <tr class="border-b"><td class="px-4 py-2 font-bold">3</td><td class="px-4 py-2"><input type="text" placeholder="Ej: Crear contenido orgánico" class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w3_foco"></td><td class="px-4 py-2"><textarea rows="2" placeholder="Ej: 1. Grabar 3 videos cortos. 2. Escribir 1 artículo de blog. 3. Publicar en redes." class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w3_tareas"></textarea></td><td class="px-4 py-2"><input type="text" placeholder="¿Qué número miraré?" class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w3_metrica"></td><td class="px-4 py-2"><textarea rows="2" placeholder="¿Qué gustó más?" class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w3_reflexion"></textarea></td></tr>
                <tr><td class="px-4 py-2 font-bold">4</td><td class="px-4 py-2"><input type="text" placeholder="Ej: Revisión y Planificación" class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w4_foco"></td><td class="px-4 py-2"><textarea rows="2" placeholder="Ej: 1. Revisar KPIs del mes. 2. Analizar feedback. 3. Planificar sprint siguiente." class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w4_tareas"></textarea></td><td class="px-4 py-2"><input type="text" placeholder="¿Qué número miraré?" class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w4_metrica"></td><td class="px-4 py-2"><textarea rows="2" placeholder="¿Qué mejoraremos?" class="autosave-input w-full p-2 border rounded-md" data-section="sprint" data-id="sprint_w4_reflexion"></textarea></td></tr>
            </tbody>
        </table>
    </div>`;

    // --- LÓGICA DE NAVEGACIÓN, AUTOSAVE Y PROGRESO ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-content');

    function showSection(hash) {
        const targetHash = hash || `#${sectionsData[0].id}`;
        sections.forEach(section => section.classList.toggle('active', `#${section.id}` === targetHash));
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === targetHash));
    }

    navMenu.addEventListener('click', function(e) {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            history.pushState(null, null, targetId);
            showSection(targetId);
            window.scrollTo(0, 0);
        }
    });

    function checkCompletion() {
        let completedSections = 0;
        sectionsData.forEach(data => {
            const sectionInputs = document.querySelectorAll(`.autosave-input[data-section="${data.id}"]`);
            let isComplete = Array.from(sectionInputs).some(input => (input.type === 'checkbox' || input.type === 'radio') ? input.checked : input.value.trim() !== '');
            const navLink = document.querySelector(`.nav-link[href="#${data.id}"]`);
            const icon = navLink.querySelector('.completion-icon');
            if (isComplete) {
                completedSections++;
                icon.classList.remove('text-gray-400');
                icon.classList.add('text-green-500');
            } else {
                icon.classList.add('text-gray-400');
                icon.classList.remove('text-green-500');
            }
        });
        const progress = (completedSections / sectionsData.length) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
    }

    function loadSavedData() {
        document.querySelectorAll('.autosave-input').forEach(input => {
            const savedValue = localStorage.getItem('sesionb_' + input.dataset.id);
            if (savedValue) {
                if (input.type === 'radio' || input.type === 'checkbox') {
                    if (input.value === savedValue || (input.type === 'checkbox' && savedValue === 'true')) input.checked = true;
                } else {
                    input.value = savedValue;
                }
            }
        });
        checkCompletion();
    }

    mainContent.addEventListener('input', function(e) {
         if (e.target.classList.contains('autosave-input')) {
            const input = e.target;
            const valueToSave = (input.type === 'checkbox') ? input.checked : input.value;
            localStorage.setItem('sesionb_' + input.dataset.id, valueToSave);
            checkCompletion();
         }
    });
    mainContent.addEventListener('change', function(e) {
         if (e.target.classList.contains('autosave-input') && (e.target.type === 'radio' || e.target.tagName === 'SELECT')) {
            const input = e.target;
            localStorage.setItem('sesionb_' + input.dataset.id, input.value);
            checkCompletion();
         }
    });

// --- CÓDIGO A REEMPLAZAR EN app.js ---

// --- EXPORTAR A PDF ---
document.getElementById('export-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const mainContent = document.getElementById('main-content');
    const loadingIndicator = document.getElementById('loading');
    const sections = document.querySelectorAll('.section-content');
    loadingIndicator.style.display = 'block';

    const currentHash = window.location.hash || `#${sectionsData[0].id}`;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    // Show all sections for a complete capture
    sections.forEach(s => s.classList.add('active'));
    window.scrollTo(0, 0);

    html2canvas(mainContent, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        windowWidth: mainContent.scrollWidth,
        windowHeight: mainContent.scrollHeight,
    }).then(canvas => {
        // Restore the view immediately after capture
        showSection(currentHash);
        window.scrollTo(scrollX, scrollY);
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        
        // Calculate the ratio to maintain aspect ratio
        const ratio = canvasWidth / canvasHeight;
        const imgHeight = pdfWidth / ratio;

        let heightLeft = imgHeight;
        let position = 0;

        // Add the first page
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;

        // Add new pages as long as there's content left
        while (heightLeft > 0) {
            position = position - pdfHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
            heightLeft -= pdfHeight;
        }
        
        const participantName = localStorage.getItem('sesionb_nombre_participante') || 'participante';
        pdf.save(`Workbook_SesionB_${participantName}.pdf`);
        loadingIndicator.style.display = 'none';
    }).catch(err => {
        console.error("Error al generar el PDF:", err);
        loadingIndicator.style.display = 'none';
        showSection(currentHash);
        window.scrollTo(scrollX, scrollY);
    });
});

    // --- INICIALIZACIÓN FINAL ---
    showSection(window.location.hash);
    loadSavedData();
});