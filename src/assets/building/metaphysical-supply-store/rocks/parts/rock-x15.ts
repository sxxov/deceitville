import rock_x15_bin from './rock-x15.bin?url';

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
			"name": "rock.016",
			"rotation": [
				-0.3081011176109314,
				-0.37728530168533325,
				0.4107675552368164,
				0.7707136869430542
			],
			"translation": [
				-0.8571798801422119,
				0.8472476601600647,
				-2.4085264205932617
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
			"name": "rock.016",
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
			"count": 344,
			"max": [
				0.338858038187027,
				0.5895729660987854,
				0.4439578652381897
			],
			"min": [
				-0.33977019786834717,
				-0.5855246186256409,
				-0.3439227044582367
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 344,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 344,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 864,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3546,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 3548,
			"uri": rock_x15_bin
		}
	]
}