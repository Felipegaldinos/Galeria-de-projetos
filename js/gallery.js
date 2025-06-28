window.Gallery = {
  elements: {
    grid: document.getElementById('projects-grid'),
    search: document.getElementById('project-search'),
    filterButtons: document.querySelectorAll('.filter-btn'),
  },
  state: {
    currentFilter: 'all',
    searchTerm: '',
  },
  init() {
    this.bindEvents();
    this.renderProjects();
  },
  bindEvents() {
    this.elements.search.addEventListener('input', (e) => {
      this.state.searchTerm = e.target.value;
      this.renderProjects();
    });

    this.elements.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.elements.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.state.currentFilter = btn.dataset.filter;
        this.renderProjects();
      });
    });
  },
  getFilteredProjects() {
    return window.projectsData.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(this.state.searchTerm.toLowerCase());
      const matchesFilter = this.state.currentFilter === 'all' || 
                           project.technologies.includes(this.state.currentFilter);
      return matchesSearch && matchesFilter;
    });
  },
  renderProjects() {
    const filteredProjects = this.getFilteredProjects();
    this.elements.grid.innerHTML = filteredProjects.length > 0 
      ? filteredProjects.map(project => this.createProjectCard(project)).join('')
      : '<div class="empty-state"><h3>🔍 Nenhum projeto encontrado</h3><p>Tente ajustar os filtros ou o termo de busca.</p></div>';
  },
  createProjectCard(project) {
    const isHtmlPreview = project.type === 'html-preview';
    
    return `
      <div class="project-card">
        <div class="project-preview">
          ${isHtmlPreview ? `
            <iframe 
              srcdoc="${project.htmlContent.replace(/"/g, '&quot;')}" 
              title="Preview do projeto ${project.name}"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin">
            </iframe>
            <button class="expand-btn" onclick="window.Gallery.expandProject('${project.name}')">
              <i class="fas fa-expand"></i>
            </button>
            <div class="live-preview-badge">
              <i class="fas fa-eye"></i>
              Preview Ao Vivo
            </div>
          ` : `
            <img src="${project.image}" alt="Screenshot do projeto ${project.name}" loading="lazy" />
          `}
        </div>
        <div class="project-info">
          <h3 class="project-title">${project.name}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-technologies">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-actions">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              <i class="fab fa-github"></i>
              GitHub
            </a>
            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <i class="fas fa-external-link-alt"></i>
              Demo
            </a>
          </div>
        </div>
      </div>
    `;
  },
  expandProject(projectName) {
    const project = window.projectsData.find(p => p.name === projectName);
    if (project && project.type === 'html-preview') {
      const expandedModal = document.createElement('div');
      expandedModal.className = 'expanded-modal';
      expandedModal.innerHTML = `
        <div class="expanded-modal-content">
          <div class="expanded-modal-header">
            <h2>${project.name}</h2>
            <button class="expanded-modal-close">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="expanded-modal-body">
            <iframe 
              srcdoc="${project.htmlContent.replace(/"/g, '&quot;')}" 
              title="Preview expandido do projeto ${project.name}"
              sandbox="allow-scripts allow-same-origin">
            </iframe>
          </div>
        </div>
      `;
      
      const closeButton = expandedModal.querySelector('.expanded-modal-close');
      closeButton.onclick = () => document.body.removeChild(expandedModal);
      
      document.body.appendChild(expandedModal);
    }
  }
};
