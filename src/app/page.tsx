"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Calendar, Zap, Lightbulb, Home, Sun, TrendingUp, HelpCircle, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumSizeLargeTitles"
      background="grid"
      cardStyle="outline"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Eletrosolartec"
          navItems={[
            { name: "Sobre", id: "about" },
            { name: "Serviços", id: "services" },
            { name: "Impacto", id: "metrics" },
            { name: "Clientes", id: "testimonials" },
            { name: "Contato", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Energia Solar Fotovoltaica para Sorocaba"
          description="Transforme sua conta de energia com soluções de energia solar fotovoltaica profissionais. Instalação, projeto, homologação e manutenção em todo território brasileiro."
          background={{ variant: "sparkles-gradient" }}
          tag="Energia Renovável Desde 2019"
          tagIcon={Zap}
          avatarText="Trusted by 1000+ clients"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AleAYJVuZaVjviN7tEK4F5SJ6k/professional-portrait-of-satisfied-custo-1773171516633-a9739c56.png", alt: "Cliente Eletrosolartec" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AleAYJVuZaVjviN7tEK4F5SJ6k/another-professional-portrait-of-satisfi-1773171517296-7bfddf1b.png", alt: "Cliente Eletrosolartec" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AleAYJVuZaVjviN7tEK4F5SJ6k/professional-headshot-of-another-satisfi-1773171517163-b04595bc.png", alt: "Cliente Eletrosolartec" }
          ]}
          buttons={[
            { text: "Gerar Orçamento Grátis", href: "contact" },
            { text: "Saiba Mais", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AleAYJVuZaVjviN7tEK4F5SJ6k/modern-solar-photovoltaic-panels-install-1773171517232-83f497e5.png"
          imageAlt="Painéis solares fotovoltaicos em telhado residencial"
          marqueeItems={[
            { type: "text", text: "Instalação Profissional" },
            { type: "text", text: "Homologação Completa" },
            { type: "text", text: "Manutenção Especializada" },
            { type: "text", text: "Suporte Nacional" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Sobre Eletrosolartec"
          description={[
            "Somos uma empresa especializada em energia solar fotovoltaica com atuação consolidada desde 2019. Oferecemos soluções completas em instalação, projeto, homologação e manutenção de sistemas de energia solar em todo o território brasileiro.",            "Localizada em Sorocaba, São Paulo, nossa equipe é comprometida com excelência, inovação e sustentabilidade. Ajudamos residências e negócios a reduzir custos com energia enquanto contribuem para um futuro mais limpo e renovável."
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Entre em Contato", href: "contact" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyFour
          title="Nossos Serviços"
          description="Oferecemos soluções completas em energia solar fotovoltaica adaptadas às suas necessidades."
          tag="Serviços Especializados"
          tagIcon={Sun}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "1",              title: "Instalação de Painéis Solares",              author: "Especialistas em Energia",              description: "Instalação profissional de sistemas fotovoltaicos com tecnologia de ponta. Nossas equipes especializadas garantem qualidade, segurança e desempenho máximo do seu sistema.",              tags: ["Profissional", "Seguro", "Garantido"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AleAYJVuZaVjviN7tEK4F5SJ6k/professional-solar-panel-installation-te-1773171518226-afe10183.png",              imageAlt: "Instalação profissional de painéis solares"
            },
            {
              id: "2",              title: "Projeto e Dimensionamento",              author: "Engenharia Solar",              description: "Elaboração de projetos técnicos personalizados com análise detalhada do seu imóvel e consumo de energia. Garantimos dimensionamento ideal para máxima eficiência.",              tags: ["Customizado", "Técnico", "Eficiente"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AleAYJVuZaVjviN7tEK4F5SJ6k/professional-engineer-or-technician-exam-1773171517359-9c597d41.png",              imageAlt: "Consultoria técnica em projetos solares"
            },
            {
              id: "3",              title: "Homologação com ANEEL",              author: "Conformidade Regulatória",              description: "Gestão completa do processo de homologação junto à ANEEL e distribuidoras de energia. Todos os documentos e procedimentos técnicos para integração à rede.",              tags: ["Regulatório", "Completo", "Credenciado"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AleAYJVuZaVjviN7tEK4F5SJ6k/project-manager-or-consultant-reviewing--1773171517273-a3accd50.png",              imageAlt: "Gestão de projetos e homologação"
            },
            {
              id: "4",              title: "Manutenção Especializada",              author: "Suporte Contínuo",              description: "Serviços de manutenção preventiva e corretiva para garantir operação otimizada do seu sistema. Monitoramento remoto e atendimento técnico especializado.",              tags: ["Preventiva", "Monitoramento", "Suporte"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AleAYJVuZaVjviN7tEK4F5SJ6k/technician-performing-maintenance-on-sol-1773171516792-2041f1d8.png",              imageAlt: "Manutenção e monitoramento de sistema solar"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Nosso Impacto"
          description="Números que mostram nosso compromisso com energia renovável e sustentabilidade."
          tag="Estatísticas"
          tagIcon={TrendingUp}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",              value: "6",              title: "Anos",              description: "De experiência em energia solar fotovoltaica",              icon: Calendar
            },
            {
              id: "2",              value: "1000",              title: "Instalações",              description: "Sistemas solares instalados com sucesso",              icon: Zap
            },
            {
              id: "3",              value: "100",              title: "MWh",              description: "Energia gerada mensalmente para nossos clientes",              icon: Lightbulb
            },
            {
              id: "4",              value: "270",              title: "Famílias",              description: "Famílias livres das altas tarifas de energia",              icon: Home
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="A Eletrosolartec transformou completamente minha conta de energia. O sistema foi instalado rapidamente, a equipe foi profissional e atenciosa, e agora tenho uma redução significativa nos meus custos mensais. Recomendo para todos que buscam energia solar de qualidade!"
          rating={5}
          author="Cliente Satisfeito, Sorocaba"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AleAYJVuZaVjviN7tEK4F5SJ6k/professional-portrait-of-satisfied-custo-1773171516633-a9739c56.png", alt: "Cliente Eletrosolartec" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AleAYJVuZaVjviN7tEK4F5SJ6k/another-professional-portrait-of-satisfi-1773171517296-7bfddf1b.png", alt: "Cliente Eletrosolartec" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AleAYJVuZaVjviN7tEK4F5SJ6k/professional-headshot-of-another-satisfi-1773171517163-b04595bc.png", alt: "Cliente Eletrosolartec" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AleAYJVuZaVjviN7tEK4F5SJ6k/professional-portrait-of-fourth-customer-1773171517142-bf5fa6b5.png", alt: "Cliente Eletrosolartec" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Perguntas Frequentes"
          description="Respostas para dúvidas comuns sobre energia solar fotovoltaica e nossos serviços."
          tag="Dúvidas?"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "Quanto tempo leva para instalar um sistema solar?",              content: "O tempo de instalação varia conforme o tamanho e complexidade do sistema. Em média, a instalação leva de 2 a 5 dias. O projeto e documentação técnica ocorrem previamente para garantir precisão."
            },
            {
              id: "2",              title: "Qual é a vida útil dos painéis solares?",              content: "Os painéis solares modernos têm vida útil de 25 a 30 anos, mantendo pelo menos 80% de sua eficiência. Nós fornecemos garantia de fabricante e suporte técnico contínuo."
            },
            {
              id: "3",              title: "O sistema funciona em dias nublados?",              content: "Sim, o sistema continua gerando energia em dias nublados, embora em menor quantidade. A tecnologia fotovoltaica aproveita a radiação solar mesmo com céu nublado."
            },
            {
              id: "4",              title: "Preciso fazer manutenção regular?",              content: "A manutenção é mínima. Recomendamos limpeza anual dos painéis e inspeção técnica periódica. Oferecemos pacotes de manutenção preventiva para máxima eficiência."
            },
            {
              id: "5",              title: "Como funciona a homologação com a ANEEL?",              content: "Gerenciamos todo o processo de homologação junto à ANEEL e sua distribuidora de energia. Preparamos documentação técnica, solicitamos aprovação e realizamos inspeção final."
            },
            {
              id: "6",              title: "Qual é o retorno do investimento?",              content: "O payback médio é de 5 a 8 anos, dependendo da irradiação solar local e consumo de energia. Após isso, você terá energia praticamente gratuita pelos próximos 20+ anos."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Vamos Conversar"
          title="Solicite seu Orçamento"
          description="Entre em contato conosco para avaliar sua propriedade e receber uma proposta personalizada de energia solar. Nossa equipe está pronta para responder suas dúvidas."
          tagIcon={Mail}
          background={{ variant: "rotated-rays-animated" }}
          useInvertedBackground={false}
          inputPlaceholder="seu@email.com"
          buttonText="Solicitar Orçamento"
          termsText="Respeitamos sua privacidade. Seus dados serão usados apenas para contato sobre sua proposta de energia solar."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Eletrosolartec"
          copyrightText="© 2025 Eletrosolartec | Energia Solar Fotovoltaica"
          columns={[
            {
              title: "Empresa",              items: [
                { label: "Sobre Nós", href: "about" },
                { label: "Serviços", href: "services" },
                { label: "Contato", href: "contact" },
                { label: "Localização", href: "#" }
              ]
            },
            {
              title: "Serviços",              items: [
                { label: "Instalação Solar", href: "services" },
                { label: "Projetos Técnicos", href: "services" },
                { label: "Homologação ANEEL", href: "services" },
                { label: "Manutenção", href: "services" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Política de Privacidade", href: "#" },
                { label: "Termos de Serviço", href: "#" },
                { label: "Telefone", href: "#" },
                { label: "Sorocaba, SP", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}