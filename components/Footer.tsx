"use client";

import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-12 md:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-border pb-12">
          <div>
            <span className="text-xl font-bold tracking-tighter text-foreground">NOUAIM<span className="text-accent">.</span></span>
            <p className="mt-4 text-sm text-muted max-w-xs">
              {t("footerDesc")}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 md:gap-12">
             <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted">{t("footerNavigation")}</p>
                <nav className="flex flex-col gap-2">
                  <a href="#projects" className="text-sm text-muted hover:text-accent transition-colors font-medium">{t("navProjects")}</a>
                  <a href="#about" className="text-sm text-muted hover:text-accent transition-colors font-medium">{t("navAbout")}</a>
                  <a href="#skills" className="text-sm text-muted hover:text-accent transition-colors font-medium">{t("skillsTitle")}</a>
                </nav>
             </div>
             <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted">{t("footerConnect")}</p>
                <nav className="flex flex-col gap-2">
                  <a href="https://github.com/NOUAIM98" target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-accent transition-colors font-medium">GitHub</a>
                  <a href="https://www.linkedin.com/in/mohamed-nouaim-el-aakil-492748227/" target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-accent transition-colors font-medium">LinkedIn</a>
                  <a href="mailto:mn.elaakil@gmail.com" className="text-sm text-muted hover:text-accent transition-colors font-medium">Email</a>
                </nav>
             </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted font-medium">
            © {new Date().getFullYear()} NOUAIM. {t("footerRights")}
          </p>
          <div className="flex items-center gap-2">
             <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
             <p className="text-[10px] font-bold uppercase tracking-widest text-muted/60">
                {t("footerAvailable")}
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
