#-*- coding:utf-8 -*-

{
    'name': 'Odoo Boolean Toggle',
    'version': '9.0.1',
    'category': 'Customize',
    'description': """

    The module belongs the following features : 
        - Add new boolean switch toggle (widget='toggle_slider').
        - Auto select content in field input (via class  'auto_select')

    """,
    'depends': [
        'base',
        'web'
    ],
    'data': [
        'views/templates.xml',

    ],
    'qweb': ['static/src/xml/widget.xml'],
}
