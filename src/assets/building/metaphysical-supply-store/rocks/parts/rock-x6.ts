import rock_x6_bin from './rock-x6.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_transmission",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "rock.007",
			"rotation": [
				-0.7946837544441223,
				0.00949181243777275,
				0.03148908540606499,
				0.6061320900917053
			],
			"translation": [
				-0.7307889461517334,
				1.0150625705718994,
				-0.7523794174194336
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_transmission": {
					"transmissionFactor": 1
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Material.001",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.8394935727119446,
					0.8394935727119446,
					0.8394935727119446,
					1
				],
				"metallicFactor": 0.921450138092041,
				"roughnessFactor": 0.17824772000312805
			}
		}
	],
	"meshes": [
		{
			"name": "rock.007",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 383,
			"max": [
				0.6169217228889465,
				0.4270475208759308,
				0.585730254650116
			],
			"min": [
				-0.5620318055152893,
				-0.8291159868240356,
				-0.4869112968444824
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 383,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 383,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 1152,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3884,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 3884,
			"uri": rock_x6_bin
		}
	]
}