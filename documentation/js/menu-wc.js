'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">m04-p02 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-2b3240e4e2e17a1fc31c1a45333b1d4f382efb45415299d0a9d785730a7400505736189d67007c422d0d1fae64c7253b72049f8a974976e4d44997800fc5b6f1"' : 'data-target="#xs-controllers-links-module-AppModule-2b3240e4e2e17a1fc31c1a45333b1d4f382efb45415299d0a9d785730a7400505736189d67007c422d0d1fae64c7253b72049f8a974976e4d44997800fc5b6f1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2b3240e4e2e17a1fc31c1a45333b1d4f382efb45415299d0a9d785730a7400505736189d67007c422d0d1fae64c7253b72049f8a974976e4d44997800fc5b6f1"' :
                                            'id="xs-controllers-links-module-AppModule-2b3240e4e2e17a1fc31c1a45333b1d4f382efb45415299d0a9d785730a7400505736189d67007c422d0d1fae64c7253b72049f8a974976e4d44997800fc5b6f1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-2b3240e4e2e17a1fc31c1a45333b1d4f382efb45415299d0a9d785730a7400505736189d67007c422d0d1fae64c7253b72049f8a974976e4d44997800fc5b6f1"' : 'data-target="#xs-injectables-links-module-AppModule-2b3240e4e2e17a1fc31c1a45333b1d4f382efb45415299d0a9d785730a7400505736189d67007c422d0d1fae64c7253b72049f8a974976e4d44997800fc5b6f1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2b3240e4e2e17a1fc31c1a45333b1d4f382efb45415299d0a9d785730a7400505736189d67007c422d0d1fae64c7253b72049f8a974976e4d44997800fc5b6f1"' :
                                        'id="xs-injectables-links-module-AppModule-2b3240e4e2e17a1fc31c1a45333b1d4f382efb45415299d0a9d785730a7400505736189d67007c422d0d1fae64c7253b72049f8a974976e4d44997800fc5b6f1"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-a6addfebfebdad3d481f0232077399725984881a1e542bc9c626e06935083a2e96e225e035b5d31069198426db4885a15be3ad4ff75a514b77cc79050413645e"' : 'data-target="#xs-controllers-links-module-AuthModule-a6addfebfebdad3d481f0232077399725984881a1e542bc9c626e06935083a2e96e225e035b5d31069198426db4885a15be3ad4ff75a514b77cc79050413645e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-a6addfebfebdad3d481f0232077399725984881a1e542bc9c626e06935083a2e96e225e035b5d31069198426db4885a15be3ad4ff75a514b77cc79050413645e"' :
                                            'id="xs-controllers-links-module-AuthModule-a6addfebfebdad3d481f0232077399725984881a1e542bc9c626e06935083a2e96e225e035b5d31069198426db4885a15be3ad4ff75a514b77cc79050413645e"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-a6addfebfebdad3d481f0232077399725984881a1e542bc9c626e06935083a2e96e225e035b5d31069198426db4885a15be3ad4ff75a514b77cc79050413645e"' : 'data-target="#xs-injectables-links-module-AuthModule-a6addfebfebdad3d481f0232077399725984881a1e542bc9c626e06935083a2e96e225e035b5d31069198426db4885a15be3ad4ff75a514b77cc79050413645e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a6addfebfebdad3d481f0232077399725984881a1e542bc9c626e06935083a2e96e225e035b5d31069198426db4885a15be3ad4ff75a514b77cc79050413645e"' :
                                        'id="xs-injectables-links-module-AuthModule-a6addfebfebdad3d481f0232077399725984881a1e542bc9c626e06935083a2e96e225e035b5d31069198426db4885a15be3ad4ff75a514b77cc79050413645e"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsuariosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuariosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0eb728b5a566c4c2c6ee7b82fd50e533538f83dec90f98398adad65c0f46c9fc9abcce856d606d551da6916437d4810d11a8c6f49ec930ea5e087517c84687cd"' : 'data-target="#xs-injectables-links-module-PrismaModule-0eb728b5a566c4c2c6ee7b82fd50e533538f83dec90f98398adad65c0f46c9fc9abcce856d606d551da6916437d4810d11a8c6f49ec930ea5e087517c84687cd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0eb728b5a566c4c2c6ee7b82fd50e533538f83dec90f98398adad65c0f46c9fc9abcce856d606d551da6916437d4810d11a8c6f49ec930ea5e087517c84687cd"' :
                                        'id="xs-injectables-links-module-PrismaModule-0eb728b5a566c4c2c6ee7b82fd50e533538f83dec90f98398adad65c0f46c9fc9abcce856d606d551da6916437d4810d11a8c6f49ec930ea5e087517c84687cd"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeguidoresModule.html" data-type="entity-link" >SeguidoresModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SeguidoresModule-729da829db1e1fa69fa3744c6539b431acec5014b11b46742eb1d5597bb60e8453b34c206886342270d265f223022c0d28fdf8778fe7c7d91da7bddb743246ab"' : 'data-target="#xs-controllers-links-module-SeguidoresModule-729da829db1e1fa69fa3744c6539b431acec5014b11b46742eb1d5597bb60e8453b34c206886342270d265f223022c0d28fdf8778fe7c7d91da7bddb743246ab"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SeguidoresModule-729da829db1e1fa69fa3744c6539b431acec5014b11b46742eb1d5597bb60e8453b34c206886342270d265f223022c0d28fdf8778fe7c7d91da7bddb743246ab"' :
                                            'id="xs-controllers-links-module-SeguidoresModule-729da829db1e1fa69fa3744c6539b431acec5014b11b46742eb1d5597bb60e8453b34c206886342270d265f223022c0d28fdf8778fe7c7d91da7bddb743246ab"' }>
                                            <li class="link">
                                                <a href="controllers/SeguidoresController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeguidoresController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SeguidoresModule-729da829db1e1fa69fa3744c6539b431acec5014b11b46742eb1d5597bb60e8453b34c206886342270d265f223022c0d28fdf8778fe7c7d91da7bddb743246ab"' : 'data-target="#xs-injectables-links-module-SeguidoresModule-729da829db1e1fa69fa3744c6539b431acec5014b11b46742eb1d5597bb60e8453b34c206886342270d265f223022c0d28fdf8778fe7c7d91da7bddb743246ab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeguidoresModule-729da829db1e1fa69fa3744c6539b431acec5014b11b46742eb1d5597bb60e8453b34c206886342270d265f223022c0d28fdf8778fe7c7d91da7bddb743246ab"' :
                                        'id="xs-injectables-links-module-SeguidoresModule-729da829db1e1fa69fa3744c6539b431acec5014b11b46742eb1d5597bb60e8453b34c206886342270d265f223022c0d28fdf8778fe7c7d91da7bddb743246ab"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SeguidoresService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeguidoresService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeguindoModule.html" data-type="entity-link" >SeguindoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SeguindoModule-be85d8e0745a5d6929ea49165ea769960cb1fe4a2de0c52dee7030d4e6e9ff23cd874cbce19c9a4ee03d09264df0e3453d57f904cfb16a4eab10457321ca363f"' : 'data-target="#xs-controllers-links-module-SeguindoModule-be85d8e0745a5d6929ea49165ea769960cb1fe4a2de0c52dee7030d4e6e9ff23cd874cbce19c9a4ee03d09264df0e3453d57f904cfb16a4eab10457321ca363f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SeguindoModule-be85d8e0745a5d6929ea49165ea769960cb1fe4a2de0c52dee7030d4e6e9ff23cd874cbce19c9a4ee03d09264df0e3453d57f904cfb16a4eab10457321ca363f"' :
                                            'id="xs-controllers-links-module-SeguindoModule-be85d8e0745a5d6929ea49165ea769960cb1fe4a2de0c52dee7030d4e6e9ff23cd874cbce19c9a4ee03d09264df0e3453d57f904cfb16a4eab10457321ca363f"' }>
                                            <li class="link">
                                                <a href="controllers/SeguindoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeguindoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SeguindoModule-be85d8e0745a5d6929ea49165ea769960cb1fe4a2de0c52dee7030d4e6e9ff23cd874cbce19c9a4ee03d09264df0e3453d57f904cfb16a4eab10457321ca363f"' : 'data-target="#xs-injectables-links-module-SeguindoModule-be85d8e0745a5d6929ea49165ea769960cb1fe4a2de0c52dee7030d4e6e9ff23cd874cbce19c9a4ee03d09264df0e3453d57f904cfb16a4eab10457321ca363f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeguindoModule-be85d8e0745a5d6929ea49165ea769960cb1fe4a2de0c52dee7030d4e6e9ff23cd874cbce19c9a4ee03d09264df0e3453d57f904cfb16a4eab10457321ca363f"' :
                                        'id="xs-injectables-links-module-SeguindoModule-be85d8e0745a5d6929ea49165ea769960cb1fe4a2de0c52dee7030d4e6e9ff23cd874cbce19c9a4ee03d09264df0e3453d57f904cfb16a4eab10457321ca363f"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SeguindoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeguindoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TweetsModule.html" data-type="entity-link" >TweetsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TweetsModule-f5d17153f9e35b5351a95cf0c628dd4be93574ef697d93d2448e91f7cf447c19c8d04db4d5b0994c886e9ce3f4b1661d7a1644d89315da4c176dd75f1643a2dd"' : 'data-target="#xs-controllers-links-module-TweetsModule-f5d17153f9e35b5351a95cf0c628dd4be93574ef697d93d2448e91f7cf447c19c8d04db4d5b0994c886e9ce3f4b1661d7a1644d89315da4c176dd75f1643a2dd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TweetsModule-f5d17153f9e35b5351a95cf0c628dd4be93574ef697d93d2448e91f7cf447c19c8d04db4d5b0994c886e9ce3f4b1661d7a1644d89315da4c176dd75f1643a2dd"' :
                                            'id="xs-controllers-links-module-TweetsModule-f5d17153f9e35b5351a95cf0c628dd4be93574ef697d93d2448e91f7cf447c19c8d04db4d5b0994c886e9ce3f4b1661d7a1644d89315da4c176dd75f1643a2dd"' }>
                                            <li class="link">
                                                <a href="controllers/TweetsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TweetsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TweetsModule-f5d17153f9e35b5351a95cf0c628dd4be93574ef697d93d2448e91f7cf447c19c8d04db4d5b0994c886e9ce3f4b1661d7a1644d89315da4c176dd75f1643a2dd"' : 'data-target="#xs-injectables-links-module-TweetsModule-f5d17153f9e35b5351a95cf0c628dd4be93574ef697d93d2448e91f7cf447c19c8d04db4d5b0994c886e9ce3f4b1661d7a1644d89315da4c176dd75f1643a2dd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TweetsModule-f5d17153f9e35b5351a95cf0c628dd4be93574ef697d93d2448e91f7cf447c19c8d04db4d5b0994c886e9ce3f4b1661d7a1644d89315da4c176dd75f1643a2dd"' :
                                        'id="xs-injectables-links-module-TweetsModule-f5d17153f9e35b5351a95cf0c628dd4be93574ef697d93d2448e91f7cf447c19c8d04db4d5b0994c886e9ce3f4b1661d7a1644d89315da4c176dd75f1643a2dd"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TweetsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TweetsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuariosModule.html" data-type="entity-link" >UsuariosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsuariosModule-02695aa85c80fa3a756c70949662960c42b6a63012173aec9d007259e707ceede1b79cbd41f239cfc80b09883041553b2201ade8a5a73abbc6e73c4c2ce0aab3"' : 'data-target="#xs-controllers-links-module-UsuariosModule-02695aa85c80fa3a756c70949662960c42b6a63012173aec9d007259e707ceede1b79cbd41f239cfc80b09883041553b2201ade8a5a73abbc6e73c4c2ce0aab3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsuariosModule-02695aa85c80fa3a756c70949662960c42b6a63012173aec9d007259e707ceede1b79cbd41f239cfc80b09883041553b2201ade8a5a73abbc6e73c4c2ce0aab3"' :
                                            'id="xs-controllers-links-module-UsuariosModule-02695aa85c80fa3a756c70949662960c42b6a63012173aec9d007259e707ceede1b79cbd41f239cfc80b09883041553b2201ade8a5a73abbc6e73c4c2ce0aab3"' }>
                                            <li class="link">
                                                <a href="controllers/UsuariosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuariosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsuariosModule-02695aa85c80fa3a756c70949662960c42b6a63012173aec9d007259e707ceede1b79cbd41f239cfc80b09883041553b2201ade8a5a73abbc6e73c4c2ce0aab3"' : 'data-target="#xs-injectables-links-module-UsuariosModule-02695aa85c80fa3a756c70949662960c42b6a63012173aec9d007259e707ceede1b79cbd41f239cfc80b09883041553b2201ade8a5a73abbc6e73c4c2ce0aab3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsuariosModule-02695aa85c80fa3a756c70949662960c42b6a63012173aec9d007259e707ceede1b79cbd41f239cfc80b09883041553b2201ade8a5a73abbc6e73c4c2ce0aab3"' :
                                        'id="xs-injectables-links-module-UsuariosModule-02695aa85c80fa3a756c70949662960c42b6a63012173aec9d007259e707ceede1b79cbd41f239cfc80b09883041553b2201ade8a5a73abbc6e73c4c2ce0aab3"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsuariosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuariosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SeguidoresController.html" data-type="entity-link" >SeguidoresController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SeguindoController.html" data-type="entity-link" >SeguindoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TweetsController.html" data-type="entity-link" >TweetsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsuariosController.html" data-type="entity-link" >UsuariosController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateSeguidoreDto.html" data-type="entity-link" >CreateSeguidoreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSeguindoDto.html" data-type="entity-link" >CreateSeguindoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTweetDto.html" data-type="entity-link" >CreateTweetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsuarioDto.html" data-type="entity-link" >CreateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Seguidore.html" data-type="entity-link" >Seguidore</a>
                            </li>
                            <li class="link">
                                <a href="classes/Seguindo.html" data-type="entity-link" >Seguindo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tweet.html" data-type="entity-link" >Tweet</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSeguidoreDto.html" data-type="entity-link" >UpdateSeguidoreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSeguindoDto.html" data-type="entity-link" >UpdateSeguindoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTweetDto.html" data-type="entity-link" >UpdateTweetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUsuarioDto.html" data-type="entity-link" >UpdateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeguidoresService.html" data-type="entity-link" >SeguidoresService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeguindoService.html" data-type="entity-link" >SeguindoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TweetsService.html" data-type="entity-link" >TweetsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuariosService.html" data-type="entity-link" >UsuariosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});